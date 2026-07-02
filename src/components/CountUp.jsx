import { useEffect, useRef, useState } from 'react'

/* parses strings like "15,000", "17+", "150+" and counts up to them on first view */
export default function CountUp({ value, duration = 1600, className = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState('0')
  const started = useRef(false)

  useEffect(() => {
    const match = String(value).match(/^([\d,]+)(.*)$/)
    if (!match) {
      setDisplay(value)
      return
    }
    const target = parseInt(match[1].replace(/,/g, ''), 10)
    const suffix = match[2] || ''
    const useCommas = match[1].includes(',')

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          const n = Math.round(target * eased)
          setDisplay((useCommas ? n.toLocaleString('en-IN') : String(n)) + suffix)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
