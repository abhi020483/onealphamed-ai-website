import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { legacyHashToPath, parsePath } from './routes'

const RouterContext = createContext({ path: '/', hash: '', navigate: () => {} })

export function RouterProvider({ initialPath, children }) {
  const [loc, setLoc] = useState(() => ({
    path: initialPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname),
    hash: '',
    // 'initial' | 'push' | 'pop' — tells the scroll logic how we got here
    via: 'initial',
  }))

  const navigate = useCallback((to, { replace = false } = {}) => {
    const url = new URL(to, window.location.href)
    if (url.pathname === window.location.pathname && url.hash === window.location.hash && !replace) {
      setLoc((l) => ({ ...l, via: 'push', nonce: Math.random() }))
      return
    }
    window.history[replace ? 'replaceState' : 'pushState'](null, '', url.pathname + url.search + url.hash)
    setLoc({ path: url.pathname, hash: url.hash.replace(/^#/, ''), via: 'push' })
  }, [])

  useEffect(() => {
    // Links shared from the old hash-routed site (#products/merlin, #merlin…) still land on the right page.
    const legacy = window.location.pathname === '/' && legacyHashToPath(window.location.hash)
    if (legacy) navigate(legacy, { replace: true })
    else if (window.location.hash) setLoc((l) => ({ ...l, hash: window.location.hash.replace(/^#/, '') }))

    const onPop = () => setLoc({ path: window.location.pathname, hash: window.location.hash.replace(/^#/, ''), via: 'pop' })
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [navigate])

  return <RouterContext.Provider value={{ ...loc, navigate }}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  return { ...ctx, ...parsePath(ctx.path) }
}

/** <a> for in-site paths: client-side navigation, real href for crawlers and new tabs. */
export function Link({ to, onClick, ...props }) {
  const { navigate } = useContext(RouterContext)
  return (
    <a
      href={to}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        navigate(to)
      }}
      {...props}
    />
  )
}
