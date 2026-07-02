import { useCallback, useRef, useState } from 'react'
import icon from '../assets/alphamed-icon.png'

const LAYERS = [
  { z: -49, filter: 'brightness(.35) saturate(.7)', opacity: 0.5 },
  { z: -42, filter: 'brightness(.42) saturate(.75)', opacity: 0.6 },
  { z: -35, filter: 'brightness(.5) saturate(.8)', opacity: 0.7 },
  { z: -28, filter: 'brightness(.58) saturate(.85)', opacity: 0.8 },
  { z: -21, filter: 'brightness(.68) saturate(.9)', opacity: 0.85 },
  { z: -14, filter: 'brightness(.78)', opacity: 0.9 },
  { z: -7, filter: 'brightness(.9)', opacity: 0.95 },
  { z: 0, filter: 'drop-shadow(0 0 18px rgba(30,194,122,.45))', opacity: 1 },
]

export default function Logo3D({ size = 330, className = '' }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  const handleMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -24, y: px * 24 })
  }, [])

  const handleLeave = () => {
    setHovering(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div className={`flex flex-col items-center ${className}`} style={{ perspective: 1100 }}>
      <div
        ref={ref}
        className="animate-float-slow relative select-none"
        style={{ width: size, height: size, transformStyle: 'preserve-3d' }}
        onPointerMove={handleMove}
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={handleLeave}
      >
        {/* pulsing glow */}
        <div
          className="animate-pulse-glow absolute rounded-full"
          style={{
            inset: '-46px',
            background:
              'radial-gradient(circle, rgba(30,194,122,.24), rgba(45,127,212,.1) 55%, transparent 72%)',
            filter: 'blur(22px)',
          }}
        />
        {/* elliptical 3D orbit rings */}
        <div
          className="animate-orbit absolute rounded-full border-[1.5px] border-dashed"
          style={{ inset: '-28px', borderColor: 'rgba(10,168,143,.55)' }}
        />
        <div
          className="animate-orbit-rev absolute rounded-full border border-dashed"
          style={{ inset: '-58px', borderColor: 'rgba(45,127,212,.4)' }}
        />
        {/* stacked-copy fake extrusion */}
        <div
          className="absolute"
          style={{
            inset: '30px',
            transformStyle: 'preserve-3d',
            transform: hovering ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : undefined,
            transition: hovering ? 'transform 120ms ease-out' : 'transform 600ms ease-out',
            animation: hovering ? 'none' : 'spin3d 16s linear infinite',
          }}
        >
          {LAYERS.map((l, i) => (
            <img
              key={i}
              src={icon}
              alt={l.z === 0 ? 'AlphaMed.Ai mark' : ''}
              aria-hidden={l.z !== 0}
              draggable={false}
              className="absolute inset-0 h-full w-full"
              style={{ transform: `translateZ(${l.z}px)`, filter: l.filter, opacity: l.opacity }}
            />
          ))}
        </div>
      </div>
      {/* ground shadow */}
      <div
        className="mt-6 rounded-full"
        style={{
          width: size * 0.73,
          height: 36,
          background: 'radial-gradient(ellipse, rgba(0,0,0,.6), transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  )
}
