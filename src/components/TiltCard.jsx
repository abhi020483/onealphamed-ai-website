import { useRef, useState } from 'react'

export default function TiltCard({ children, className = '', max = 8, glare = true }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg)' })
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setStyle({
      transform: `rotateX(${(py - 0.5) * -max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(4px)`,
    })
    if (glare) {
      setGlareStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.12), transparent 55%)`,
      })
    }
  }

  const onLeave = () => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg) translateZ(0)' })
    setGlareStyle({ opacity: 0 })
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`relative ${className}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1)',
        willChange: 'transform',
      }}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={glareStyle}
        />
      )}
    </div>
  )
}
