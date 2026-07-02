import { useCallback, useRef, useState } from 'react'
import icon from '../assets/alphamed-icon.png'

const LAYER_COUNT = 10

export default function Logo3D({ size = 280, className = '' }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -26, y: px * 26 })
  }, [])

  const handleLeave = () => {
    setHovering(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      className={`relative select-none ${className}`}
      style={{ width: size, height: size, perspective: 1400 }}
      onPointerMove={handleMove}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={handleLeave}
    >
      {/* orbit rings */}
      <svg
        className="absolute animate-orbit opacity-80"
        style={{ inset: '-14%' }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke="url(#ring-a)" strokeWidth="0.6" strokeDasharray="1 9" strokeLinecap="round" />
        <defs>
          <linearGradient id="ring-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-lime)" />
            <stop offset="55%" stopColor="var(--color-teal)" />
            <stop offset="100%" stopColor="var(--color-blue)" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute animate-orbit-rev opacity-40"
        style={{ inset: '-22%' }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="var(--color-teal)" strokeWidth="0.4" strokeDasharray="0.5 14" strokeLinecap="round" />
      </svg>

      {/* ambient glow */}
      <div
        className="absolute animate-pulse-glow rounded-full blur-3xl"
        style={{
          inset: '6%',
          background:
            'radial-gradient(circle, rgba(30,194,122,0.45), rgba(45,127,212,0.25) 55%, transparent 75%)',
        }}
      />

      {/* ground shadow */}
      <div
        className="absolute left-1/2 top-[92%] h-6 w-[62%] -translate-x-1/2 rounded-full blur-xl"
        style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.55), transparent 70%)' }}
      />

      <div
        className="relative h-full w-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: hovering
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : undefined,
          transition: hovering ? 'transform 120ms ease-out' : 'transform 600ms ease-out',
          animation: hovering ? 'none' : 'spin3d 16s ease-in-out infinite',
        }}
      >
        {Array.from({ length: LAYER_COUNT }).map((_, i) => {
          const isTop = i === LAYER_COUNT - 1
          return (
            <img
              key={i}
              src={icon}
              alt={isTop ? 'AlphaMed.Ai' : ''}
              aria-hidden={!isTop}
              draggable={false}
              className="absolute inset-0 h-full w-full"
              style={{
                transform: `translateZ(${-(LAYER_COUNT - 1 - i) * 2.4}px)`,
                filter: isTop
                  ? 'drop-shadow(0 24px 46px rgba(10,168,143,0.5)) drop-shadow(0 0 30px rgba(134,209,63,0.25))'
                  : `brightness(${0.3 + i * 0.055}) saturate(0.65)`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
