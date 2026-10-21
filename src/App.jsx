import { useLayoutEffect, useRef } from 'react'
import '@fontsource-variable/sora/wght.css'
import '@fontsource-variable/manrope/wght.css'
import './site/site.css'
import { Footer, Nav } from './site/Shell'
import Home from './site/Home'
import Products from './site/Products'
import About from './site/About'
import Contact from './site/Contact'
import Security from './site/Security'
import { Disclaimer, NotFound, Privacy, Terms } from './site/Legal'
import { RouterProvider, useRouter } from './site/router'
import { metaFor } from './site/routes'

const PAGES = { home: Home, products: Products, about: About, contact: Contact, security: Security, privacy: Privacy, terms: Terms, disclaimer: Disclaimer, notfound: NotFound }

function scrollToId(id, behavior) {
  const el = document.getElementById(id)
  if (!el) return false
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior })
  return true
}

function setMeta({ title, description }) {
  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
}

function Site() {
  const { page, sub, path, hash, via, nonce } = useRouter()
  const Page = PAGES[page]
  const first = useRef(true)
  const lastPage = useRef(page)

  useLayoutEffect(() => {
    setMeta(metaFor({ page, sub }))
    const target = page === 'products' ? sub : hash
    const isFirst = first.current
    const samePage = lastPage.current === page
    // refs only advance once the timer fires, so a re-run of this effect (StrictMode) is harmless
    const settle = () => { first.current = false; lastPage.current = page }
    let t
    if (via === 'pop' && !target) t = setTimeout(settle, 0) // the browser restores scroll on back/forward
    else if (target) {
      // animate only within a page; jumping into a new page lands directly on the section
      const smooth = !isFirst && samePage
      t = setTimeout(() => { settle(); scrollToId(target, smooth ? 'smooth' : 'instant') }, smooth ? 0 : 60)
    } else {
      t = setTimeout(() => {
        settle()
        if (isFirst) return
        window.scrollTo({ top: 0, behavior: 'instant' })
        document.getElementById('main')?.focus({ preventScroll: true })
      }, 0)
    }
    return () => clearTimeout(t)
  }, [page, sub, path, hash, via, nonce])

  return (
    <div className="oa">
      <div className="oa-glow" aria-hidden="true" />
      <Nav />
      <main id="main" tabIndex={-1} style={{ position: 'relative', zIndex: 1, outline: 'none' }}>
        <Page key={page} />
      </main>
      <Footer />
    </div>
  )
}

export default function App({ initialPath }) {
  return (
    <RouterProvider initialPath={initialPath}>
      <Site />
    </RouterProvider>
  )
}
