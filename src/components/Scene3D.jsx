import { useMemo, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '../ThemeContext'

const LIME = new THREE.Color('#86d13f')
const GREEN = new THREE.Color('#1ec27a')
const TEAL = new THREE.Color('#0aa88f')
const BLUE = new THREE.Color('#2d7fd4')

function gradientColor(t) {
  // lime -> green -> teal -> blue
  const c = new THREE.Color()
  if (t < 0.33) c.lerpColors(LIME, GREEN, t / 0.33)
  else if (t < 0.66) c.lerpColors(GREEN, TEAL, (t - 0.33) / 0.33)
  else c.lerpColors(TEAL, BLUE, (t - 0.66) / 0.34)
  return c
}

/* ---------- DNA double helix ---------- */
function DNAHelix({ position = [0, 0, 0], scale = 1 }) {
  const group = useRef()
  const N = 44
  const TURNS = 2.4
  const HEIGHT = 13
  const RADIUS = 1.55

  const { sphereData, rungPositions, rungColors } = useMemo(() => {
    const sphereData = []
    const rungPts = []
    const rungCols = []
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1)
      const ang = t * Math.PI * 2 * TURNS
      const y = (t - 0.5) * HEIGHT
      const p1 = new THREE.Vector3(Math.cos(ang) * RADIUS, y, Math.sin(ang) * RADIUS)
      const p2 = new THREE.Vector3(-Math.cos(ang) * RADIUS, y, -Math.sin(ang) * RADIUS)
      const col = gradientColor(t)
      sphereData.push({ p: p1, c: col }, { p: p2, c: col.clone().offsetHSL(0, 0, -0.08) })
      if (i % 3 === 0) {
        rungPts.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
        rungCols.push(col.r, col.g, col.b, col.r, col.g, col.b)
      }
    }
    return {
      sphereData,
      rungPositions: new Float32Array(rungPts),
      rungColors: new Float32Array(rungCols),
    }
  }, [])

  const meshRef = useRef()
  useEffect(() => {
    const dummy = new THREE.Object3D()
    sphereData.forEach(({ p, c }, i) => {
      dummy.position.copy(p)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
      meshRef.current.setColorAt(i, c)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true
  }, [sphereData])

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.18
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.35
  })

  return (
    <group ref={group} position={position} scale={scale} rotation={[0.12, 0, 0.22]}>
      <instancedMesh ref={meshRef} args={[null, null, sphereData.length]}>
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshStandardMaterial toneMapped={false} emissiveIntensity={0.6} emissive="#0aa88f" roughness={0.3} metalness={0.4} />
      </instancedMesh>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[rungPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[rungColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.55} toneMapped={false} />
      </lineSegments>
    </group>
  )
}

/* ---------- floating molecule (center + satellites) ---------- */
function Molecule({ position = [0, 0, 0], scale = 1, speed = 1, seed = 0 }) {
  const group = useRef()
  const satellites = useMemo(() => {
    const rand = (i) => {
      const x = Math.sin(seed * 91.7 + i * 47.3) * 43758.5453
      return x - Math.floor(x)
    }
    return Array.from({ length: 5 }, (_, i) => {
      const theta = rand(i) * Math.PI * 2
      const phi = Math.acos(2 * rand(i + 9) - 1)
      const r = 0.9 + rand(i + 20) * 0.5
      return {
        pos: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ),
        size: 0.1 + rand(i + 33) * 0.12,
        color: gradientColor(rand(i + 41)),
      }
    })
  }, [seed])

  const linePositions = useMemo(() => {
    const pts = []
    satellites.forEach((s) => pts.push(0, 0, 0, s.pos.x, s.pos.y, s.pos.z))
    return new Float32Array(pts)
  }, [satellites])

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.3 * speed
    group.current.rotation.x += delta * 0.12 * speed
    group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed + seed) * 0.5
  })

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh>
        <icosahedronGeometry args={[0.32, 1]} />
        <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={0.5} roughness={0.25} metalness={0.5} toneMapped={false} />
      </mesh>
      {satellites.map((s, i) => (
        <mesh key={i} position={s.pos}>
          <sphereGeometry args={[s.size, 10, 10]} />
          <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.45} roughness={0.3} toneMapped={false} />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#2d7fd4" transparent opacity={0.4} toneMapped={false} />
      </lineSegments>
    </group>
  )
}

/* ---------- pill capsule ---------- */
function Capsule({ position = [0, 0, 0], rotation = [0.4, 0.2, 0.7], scale = 1, speed = 1, color = '#1ec27a' }) {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.25 * speed
    ref.current.rotation.z += delta * 0.18 * speed
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.45 * speed + position[0]) * 0.45
  })
  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <mesh>
        <capsuleGeometry args={[0.32, 0.85, 6, 14]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} roughness={0.25} metalness={0.35} toneMapped={false} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.36, 0.015, 8, 28]} />
        <meshBasicMaterial color="#eaf1f4" transparent opacity={0.35} toneMapped={false} />
      </mesh>
    </group>
  )
}

/* ---------- medical cross ---------- */
function MedCross({ position = [0, 0, 0], scale = 1, speed = 1 }) {
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.4 * speed
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[2]) * 0.35
  })
  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <boxGeometry args={[1.0, 0.34, 0.16]} />
        <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.5} roughness={0.3} toneMapped={false} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.34, 1.0, 0.16]} />
        <meshStandardMaterial color={TEAL} emissive={TEAL} emissiveIntensity={0.5} roughness={0.3} toneMapped={false} />
      </mesh>
    </group>
  )
}

/* ---------- ambient data particles ---------- */
function Particles({ count = 320, light = false }) {
  const ref = useRef()
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 34
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18 - 4
      const c = gradientColor(Math.random())
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [count])

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.012
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={light ? 0.85 : 0.7}
        sizeAttenuation
        depthWrite={false}
        blending={light ? THREE.NormalBlending : THREE.AdditiveBlending}
      />
    </points>
  )
}

/* ---------- camera rig: mouse parallax + scroll ----------
   canvas wrapper is pointer-events-none, so track the pointer
   on window instead of relying on R3F's canvas events */
function CameraRig() {
  const { camera } = useThree()
  const scroll = useRef(0)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      scroll.current = max > 0 ? h.scrollTop / max : 0
    }
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  useFrame(() => {
    const targetX = pointer.current.x * 1.4
    const targetY = pointer.current.y * -0.8 - scroll.current * 2.2
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.045)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.045)
    camera.lookAt(0, -scroll.current * 2.2, 0)
  })
  return null
}

function SceneContents({ light }) {
  const world = useRef()
  const scroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      scroll.current = max > 0 ? h.scrollTop / max : 0
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFrame(() => {
    // whole world slowly revolves as you scroll — scroll-driven 3D
    world.current.rotation.y = THREE.MathUtils.lerp(
      world.current.rotation.y,
      scroll.current * Math.PI * 0.9,
      0.06
    )
  })

  return (
    <group ref={world}>
      <DNAHelix position={[10.2, 0, -5]} scale={0.92} />
      <DNAHelix position={[-9.5, 1, -8]} scale={0.55} />
      <Molecule position={[-5.4, 1.6, -2]} scale={1.05} speed={1} seed={3} />
      <Molecule position={[-2.4, -2.6, -4.5]} scale={0.8} speed={1.4} seed={7} />
      <Molecule position={[3.2, 3.4, -6]} scale={0.7} speed={0.8} seed={11} />
      <Capsule position={[-7.8, -1.8, -5]} scale={0.9} speed={1.1} color="#1ec27a" />
      <Capsule position={[2.2, -3.6, -3]} rotation={[1.1, 0.4, 0.2]} scale={0.7} speed={0.8} color="#2d7fd4" />
      <MedCross position={[8.6, 3.2, -7]} scale={0.8} speed={0.7} />
      <MedCross position={[-3.5, 4.2, -9]} scale={0.55} speed={1.2} />
      <Particles light={light} />
    </group>
  )
}

export default function Scene3D() {
  const [enabled, setEnabled] = useState(true)
  const { theme } = useTheme()
  const isLight = theme !== 'dark'

  useEffect(() => {
    // respect reduced motion & skip tiny screens for perf
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) setEnabled(false)
  }, [])

  if (!enabled) return null

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-0 ${isLight ? 'opacity-25' : 'opacity-55'}`}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 13.5], fov: 46 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <fog attach="fog" args={[isLight ? '#f6f9fa' : '#05080c', 12, 30]} />
        <ambientLight intensity={isLight ? 0.9 : 0.55} />
        <pointLight position={[8, 6, 8]} intensity={90} color="#1ec27a" />
        <pointLight position={[-8, -4, 6]} intensity={70} color="#2d7fd4" />
        <SceneContents light={isLight} />
        <CameraRig />
      </Canvas>
    </div>
  )
}
