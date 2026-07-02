import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setP(max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-lime via-teal to-blue"
        style={{ width: `${p * 100}%`, transition: 'width 100ms linear' }}
      />
    </div>
  )
}
