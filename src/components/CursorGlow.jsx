import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return

    let raf = null
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const apply = () => {
      el.style.transform = `translate3d(${x - 260}px, ${y - 260}px, 0)`
      raf = null
    }
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(apply)
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[520px] w-[520px] rounded-full opacity-[0.12] blur-[110px] md:block"
      style={{
        background:
          'radial-gradient(circle, var(--color-green) 0%, var(--color-blue) 55%, transparent 75%)',
        willChange: 'transform',
      }}
    />
  )
}
