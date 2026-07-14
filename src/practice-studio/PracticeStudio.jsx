import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal'
import './practice-studio.css'
import logoAlphaMed from '../assets/onealphamed-logo.png'
import imgHero from '../assets/practice-studio/doctor-elderly-patient-smile.jpg'
import imgCareTeam from '../assets/practice-studio/care-team-wheelchair-patient.jpg'
import imgTablet from '../assets/practice-studio/doctor-tablet-consult.jpg'
import imgHeartHands from '../assets/practice-studio/patient-heart-hands.jpg'
import imgNurse from '../assets/practice-studio/nurse-comfort-senior-woman.jpg'
import imgDrMale from '../assets/practice-studio/doctor-headshot-male.jpg'
import imgDrFemale from '../assets/practice-studio/doctor-headshot-female.jpg'

// ---- page config (edit here) ----
const BRAND_NAME = 'Practice Studio'
const GOLD = '#a9861d'
const INK64 = 'rgba(16,26,36,.64)'

function GradText({ children }) {
  return <em className="ps-grad-text italic font-medium">{children}</em>
}

/* Pointer-tilt card with a gold glare (parent TiltCard's glare is white —
   invisible on these ivory cards). */
function PsTilt({ children, className = '', style }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({})
  const [glare, setGlare] = useState({ opacity: 0 })
  const reduced = useReducedMotion()

  const onMove = (e) => {
    if (reduced) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    setTilt({
      transform: `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`,
      transition: 'transform .08s linear',
    })
    setGlare({
      opacity: 1,
      background: `radial-gradient(420px circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(201,162,39,0.16), transparent 62%)`,
    })
  }
  const onLeave = () => {
    setTilt({ transform: 'none', transition: 'transform .5s cubic-bezier(.16,1,.3,1)' })
    setGlare({ opacity: 0 })
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`relative overflow-hidden ${className}`}
      style={{ ...style, ...tilt }}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={glare}
      />
    </div>
  )
}

/* Warm-toned photo in the signature arched frame with a gold outline. */
function ArchPhoto({ src, alt, maxWidth, ratio, radius }) {
  return (
    <div className="relative w-full" style={{ maxWidth }}>
      <div
        className="pointer-events-none absolute"
        style={{
          inset: -13,
          border: '1px solid rgba(201,162,39,.4)',
          borderRadius: `${radius + 10}px ${radius + 10}px 30px 30px`,
        }}
      />
      <div
        className="w-full overflow-hidden"
        style={{
          aspectRatio: ratio,
          borderRadius: `${radius}px ${radius}px 24px 24px`,
          boxShadow: '0 34px 70px -36px rgba(16,26,36,.35)',
        }}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

function StudioNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link =
    'hidden sm:inline uppercase text-[13.5px] font-medium tracking-[0.11em] text-[rgba(16,26,36,.72)] hover:text-[#101a24] transition-colors'

  return (
    <nav
      className="fixed inset-x-0 top-0 z-[900] transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(16,26,36,0.08)' : 'transparent'}`,
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-[clamp(12px,2.5vw,32px)] gap-y-2 px-[clamp(20px,4vw,48px)] py-3.5">
        <a href="#top" className="flex items-center gap-3.5 text-[#101a24]">
          <img
            src={logoAlphaMed}
            alt="AlphaMed"
            className="h-11 w-auto mix-blend-multiply lg:h-[52px]"
          />
          <span className="hidden h-8 w-px bg-[rgba(16,26,36,.15)] md:block" />
          <span className="ps-serif hidden text-[22px] tracking-[0.01em] md:inline">{BRAND_NAME}</span>
        </a>
        <div className="flex flex-1 flex-wrap items-center justify-end gap-[clamp(12px,1.6vw,22px)]">
          <a href="#collection" className={link}>Templates</a>
          <a href="#capabilities" className={link}>Capabilities</a>
          <a href="#pricing" className={link}>Packages</a>
          <a href="#two-homes" className={link}>India / Global</a>
          <a href="#contact" className="ps-btn-grad px-6 py-3 text-[15px]">
            Book a design consult
          </a>
        </div>
      </div>
    </nav>
  )
}

/* The four mini-site panels: scattered at the top of the page, assembling
   into place as the user scrolls the hero away. */
const SCATTER = [
  { dx: -72, dy: -88, r: -11 },
  { dx: 88, dy: -44, r: 9 },
  { dx: 96, dy: 66, r: 13 },
  { dx: -64, dy: 102, r: -8 },
]

function useScatterAssembly(reduced) {
  const els = useRef([])
  useEffect(() => {
    if (reduced) {
      els.current.forEach((el) => el && (el.style.transform = 'none'))
      return
    }
    let raf
    const tick = (t) => {
      const p = Math.min(1, (window.scrollY || 0) / (window.innerHeight * 0.6))
      const k = Math.pow(1 - p, 3)
      els.current.forEach((el, i) => {
        if (!el) return
        const { dx, dy, r } = SCATTER[i]
        const bob = Math.sin(t / 850 + i * 1.9) * (2 + 5 * k)
        el.style.transform = `translate(${dx * k}px, ${dy * k + bob}px) rotate(${r * k}deg)`
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduced])
  return (i) => (el) => {
    els.current[i] = el
  }
}

function skeletonBar(w, opacity = 0.2, h = 4) {
  return (
    <span
      className="block rounded-sm"
      style={{ width: w, height: h, background: `rgba(16,26,36,${opacity})` }}
    />
  )
}

function HeroBrowserMock({ registerPanel }) {
  const panel = (i, style, children) => (
    <div
      ref={registerPanel(i)}
      className="absolute"
      style={{
        ...style,
        transform: `translate(${SCATTER[i].dx}px, ${SCATTER[i].dy}px) rotate(${SCATTER[i].r}deg)`,
      }}
    >
      {children}
    </div>
  )

  return (
    <div
      className="absolute"
      style={{
        left: 'min(-56px,-6vw)',
        bottom: -24,
        width: 'min(280px,62vw)',
        transform: 'perspective(1200px) rotateY(-8deg) rotateX(2deg)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="rounded-2xl border border-[rgba(16,26,36,.08)] bg-white" style={{ boxShadow: '0 30px 70px -30px rgba(16,26,36,.4)' }}>
        <div className="flex items-center gap-1.5 border-b border-[rgba(16,26,36,.07)] px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#e8e2d6]" />
          <span className="h-2 w-2 rounded-full bg-[#e8e2d6]" />
          <span className="h-2 w-2 rounded-full bg-[#e8e2d6]" />
          <span className="ml-1.5 flex h-3.5 flex-1 items-center rounded-[7px] bg-[#f1ece3] px-2">
            <span className="ps-mono text-[8px] tracking-[0.08em] text-[rgba(16,26,36,.45)]">drpriya.clinic</span>
          </span>
        </div>
        <div className="relative h-[236px]">
          {panel(0, { left: 10, right: 10, top: 10, height: 32, boxShadow: '0 10px 24px -12px rgba(16,26,36,.3)' }, (
            <div className="flex h-full items-center gap-1.5 rounded-lg border border-[rgba(16,26,36,.08)] bg-[#faf7f2] px-2">
              <span className="h-3 w-3 rounded" style={{ background: 'linear-gradient(120deg,#8ee000,#00c2a0)' }} />
              {skeletonBar(26)}{skeletonBar(20)}{skeletonBar(24)}
              <span className="ps-grad ml-auto h-3.5 w-11 rounded-[7px]" />
            </div>
          ))}
          {panel(1, { left: 10, top: 52, width: '47%', height: 108, boxShadow: '0 10px 24px -12px rgba(16,26,36,.3)' }, (
            <div className="h-full rounded-[10px] border border-[rgba(16,26,36,.08)] bg-[#faf7f2] p-2.5">
              <span className="block h-[34px] w-[34px] rounded-full border border-[rgba(201,162,39,.4)]" style={{ background: 'linear-gradient(140deg,#f1ece3,#e0d8c8)' }} />
              <span className="mt-2 block h-1.5 w-[70%] rounded-sm bg-[rgba(16,26,36,.6)]" />
              <span className="mt-1.5 block h-1 w-1/2 rounded-sm bg-[rgba(16,26,36,.25)]" />
              <span className="ps-mono mt-2 inline-block rounded-md border border-[rgba(201,162,39,.5)] px-[7px] py-[3px] text-[6.5px] tracking-[0.12em] text-[#a9861d]">CARDIOLOGY</span>
            </div>
          ))}
          {panel(2, { right: 10, top: 52, width: '44%', height: 108, boxShadow: '0 14px 28px -12px rgba(16,26,36,.45)' }, (
            <div className="h-full rounded-[10px] bg-[#101a24] p-2.5">
              <span className="ps-mono block text-[6.5px] tracking-[0.16em] text-[#1ec27a]">BOOK A VISIT</span>
              <span className="mt-2 block h-[5px] w-full rounded-sm bg-[rgba(250,247,242,.2)]" />
              <span className="mt-[5px] block h-[5px] w-4/5 rounded-sm bg-[rgba(250,247,242,.2)]" />
              <span className="mt-2.5 flex gap-1">
                <span className="h-4 flex-1 rounded-[5px] border border-[rgba(250,247,242,.25)]" />
                <span className="ps-grad h-4 flex-1 rounded-[5px]" />
              </span>
              <span className="mt-2.5 block h-[18px] w-full rounded-md border border-[rgba(30,194,122,.4)] bg-[rgba(30,194,122,.18)]" />
            </div>
          ))}
          {panel(3, { left: 10, right: 10, bottom: 10, height: 58, boxShadow: '0 10px 24px -12px rgba(16,26,36,.3)' }, (
            <div className="h-full rounded-[10px] border border-[rgba(16,26,36,.08)] bg-[#faf7f2] px-[11px] py-[9px]">
              <span className="text-[9px] tracking-[2px] text-[#c9a227]">★★★★★</span>
              <span className="mt-[7px] block h-1 w-[92%] rounded-sm bg-[rgba(16,26,36,.22)]" />
              <span className="mt-[5px] block h-1 w-[64%] rounded-sm bg-[rgba(16,26,36,.22)]" />
            </div>
          ))}
        </div>
      </div>
      <p className="ps-mono mx-0.5 mt-2.5 text-[9.5px] tracking-[0.18em] text-[rgba(16,26,36,.45)]">
        SCROLL — WATCH IT ASSEMBLE
      </p>
    </div>
  )
}

function Hero() {
  const reduced = useReducedMotion()
  const registerPanel = useScatterAssembly(reduced)

  return (
    <header
      id="top"
      className="relative px-[clamp(20px,4vw,48px)] pb-[clamp(72px,10vw,120px)] pt-[clamp(128px,17vh,180px)]"
      style={{
        background:
          'radial-gradient(900px 480px at 85% -10%,rgba(0,194,160,.08),transparent 60%),radial-gradient(700px 420px at -6% 40%,rgba(142,224,0,.06),transparent 55%)',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-[clamp(32px,5vw,64px)]">
        <div className="min-w-[min(100%,320px)] flex-[1_1_460px]">
          <p className="ps-label mb-[22px]">00 — THE IMPRESSION</p>
          <h1 className="ps-serif m-0 text-[clamp(2.6rem,5.8vw,4.2rem)] font-semibold leading-[1.06] tracking-[-0.01em]">
            Websites your patients <GradText>remember.</GradText>
          </h1>
          <p className="mt-6 max-w-[52ch] text-[clamp(15.5px,1.4vw,17.5px)] font-light leading-[1.65]" style={{ color: INK64 }}>
            OneAlphaMed designs bespoke, best-in-class websites for doctors and clinics — in India
            and worldwide. Chic, credible, and built to bring patients to you.
          </p>
          <div className="mt-[34px] flex flex-wrap items-center gap-3.5">
            <a href="#contact" className="ps-btn-grad px-[30px] py-[15px] text-[15px]">
              Book a design consult
            </a>
            <a
              href="#collection"
              className="rounded-full border border-[rgba(16,26,36,.25)] px-7 py-3.5 text-[15px] font-medium text-[#101a24] transition-colors hover:border-[#101a24]"
            >
              See the templates
            </a>
          </div>
          <p className="ps-mono mt-[52px] border-t border-[rgba(201,162,39,.35)] pt-5 text-[11px] leading-loose tracking-[0.16em] text-[rgba(16,26,36,.5)]">
            BUILT BY THE TEAM BEHIND ALPHAMED.AI &nbsp;·&nbsp; 15,000+ HCPS ENGAGED &nbsp;·&nbsp;
            INDIA · SEA · MIDDLE EAST · EU
          </p>
        </div>
        <div className="relative flex min-w-[min(100%,320px)] flex-[1_1_420px] justify-center pb-10 pt-5">
          <div className="relative w-[min(400px,86vw)]">
            <div
              className="pointer-events-none absolute"
              style={{ inset: -14, border: '1px solid rgba(201,162,39,.4)', borderRadius: '220px 220px 34px 34px' }}
            />
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '38/47', borderRadius: '200px 200px 26px 26px', boxShadow: '0 40px 80px -40px rgba(16,26,36,.35)' }}
            >
              <img
                src={imgHero}
                alt="Doctor with her arm around a laughing elderly patient"
                className="h-full w-full object-cover"
              />
            </div>
            <HeroBrowserMock registerPanel={registerPanel} />
          </div>
        </div>
      </div>
    </header>
  )
}

function StatCard({ delay, stat, statSuffix, children }) {
  return (
    <Reveal delay={delay}>
      <div className="ps-card flex flex-wrap items-baseline gap-[22px] px-7 py-[26px]">
        <span className="ps-serif text-[clamp(2.4rem,4vw,3.2rem)] font-light leading-none">
          <span className="ps-grad-text" style={{ backgroundImage: 'linear-gradient(100deg,#00b48f,#3a86ff)' }}>
            {stat}
          </span>
          {statSuffix}
          <sup className="text-[.35em]" style={{ color: '#c9a227' }}>†</sup>
        </span>
        <span className="min-w-[200px] flex-1 text-[14.5px] leading-[1.6]" style={{ color: INK64 }}>
          {children}
        </span>
      </div>
    </Reveal>
  )
}

function TheCase() {
  return (
    <section id="case" className="ps-section-pad bg-[#faf7f2]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-[720px]">
          <p className="ps-label mb-[18px]">01 — THE CASE</p>
          <h2 className="ps-h2">
            Your patients Google you <em className="italic text-[#0aa88f]">before</em> they trust
            you.
          </h2>
        </Reveal>
        <div className="mt-[clamp(36px,5vw,56px)] flex flex-wrap items-stretch gap-[clamp(28px,4vw,56px)]">
          <Reveal className="flex min-w-[min(100%,300px)] flex-[1_1_320px] items-center justify-center">
            <ArchPhoto
              src={imgCareTeam}
              alt="Two doctors clasping hands with a patient in a wheelchair"
              maxWidth={360}
              ratio="36/40"
              radius={180}
            />
          </Reveal>
          <div className="flex min-w-[min(100%,300px)] flex-[1.3_1_420px] flex-col justify-center gap-4">
            <StatCard delay={0} stat="7" statSuffix={<span><span className="text-[#0aa88f]">/</span>10</span>}>
              patients research a doctor online before their first visit — your website is the
              first consultation.
            </StatCard>
            <StatCard delay={0.08} stat="0.05" statSuffix={<span className="text-[.4em] text-[#0aa88f]">s</span>}>
              is all it takes to form a first impression of a website — before a single word is
              read.
            </StatCard>
            <Reveal delay={0.16}>
              <div className="ps-card px-7 py-[26px]">
                <p className="ps-mono mb-3.5 text-[10.5px] tracking-[0.18em] text-[#c9a227]">
                  LISTING VS. OWNED
                </p>
                <div className="flex flex-col gap-2.5">
                  <p className="text-[14.5px] leading-[1.55] text-[rgba(16,26,36,.5)]">
                    <span className="line-through decoration-[rgba(16,26,36,.35)]">A directory listing</span> — rented, ranked, one of forty on the page.
                  </p>
                  <p className="text-[14.5px] leading-[1.55] text-[#101a24]">
                    <strong className="font-semibold">Your own website</strong> — owned, remembered,
                    referred onward.
                  </p>
                </div>
              </div>
            </Reveal>
            <p className="ps-mono mx-1.5 mt-1 text-[10px] tracking-[0.12em] text-[rgba(16,26,36,.4)]">
              † PLACEHOLDER FIGURES — SOURCE &amp; VERIFY BEFORE PRODUCTION
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* CSS-3D laptop + tablet + phone showing the three tiers. */
function DeviceTrio() {
  const reduced = useReducedMotion()
  const zoneRef = useRef(null)
  const fitRef = useRef(null)
  const trioRef = useRef(null)
  const pointer = useRef({ tx: 0, ty: 0, x: 0, y: 0 })

  useEffect(() => {
    const fit = () => {
      if (!zoneRef.current || !fitRef.current) return
      const s = Math.min(1, (zoneRef.current.clientWidth || 560) / 570)
      fitRef.current.style.transform = `scale(${s})`
      fitRef.current.style.marginBottom = `${-310 * (1 - s)}px`
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  useEffect(() => {
    if (reduced) return
    let raf
    const tick = (t) => {
      const p = pointer.current
      p.x += (p.tx - p.x) * 0.06
      p.y += (p.ty - p.y) * 0.06
      if (trioRef.current) {
        const yaw = Math.sin(t / 3600) * 6 - 6 + p.x
        trioRef.current.style.transform = `perspective(1400px) rotateY(${yaw}deg) rotateX(${2 + p.y}deg)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduced])

  const onMove = (e) => {
    const r = zoneRef.current.getBoundingClientRect()
    pointer.current.tx = ((e.clientX - r.left) / r.width - 0.5) * 12
    pointer.current.ty = -((e.clientY - r.top) / r.height - 0.5) * 7
  }
  const onLeave = () => {
    pointer.current.tx = 0
    pointer.current.ty = 0
  }

  return (
    <Reveal
      delay={0.1}
      className="flex min-w-[min(100%,320px)] flex-[1_1_460px] flex-col items-center gap-[18px] overflow-visible"
    >
      <div ref={zoneRef} onPointerMove={onMove} onPointerLeave={onLeave} className="w-full flex flex-col items-center gap-[18px]">
        <div ref={fitRef} className="relative h-[310px] w-[560px] origin-top">
          <div
            ref={trioRef}
            className="absolute inset-0"
            style={{ transform: 'perspective(1400px) rotateY(-6deg) rotateX(2deg)', transformStyle: 'preserve-3d' }}
          >
            <div
              className="absolute bottom-1.5 left-1/2 h-11 w-[480px] -translate-x-1/2"
              style={{ background: 'radial-gradient(closest-side,rgba(16,26,36,.22),transparent)', filter: 'blur(6px)' }}
            />
            {/* laptop — Signature */}
            <div
              className="absolute left-[130px] top-[26px] h-[188px] w-[300px] rounded-t-xl bg-[#101a24] px-2 pt-2"
              style={{ boxShadow: '0 30px 60px -28px rgba(16,26,36,.5)' }}
            >
              <div className="h-full w-full overflow-hidden rounded-t-md bg-[#faf7f2] px-3 py-2.5">
                <p className="ps-mono m-0 text-[7px] tracking-[0.18em] text-[#a9861d]">SIGNATURE</p>
                <p className="ps-serif mt-1.5 text-[13px] text-[#101a24]">
                  Dr. ______ <em className="italic text-[#a9861d]">— bespoke</em>
                </p>
                <div className="mt-2 flex gap-2">
                  <span className="h-16 w-14 border border-[rgba(201,162,39,.45)]" style={{ borderRadius: '28px 28px 6px 6px', background: 'linear-gradient(140deg,#f1ece3,#e0d8c8)' }} />
                  <span className="flex flex-1 flex-col gap-[5px] pt-1">
                    {skeletonBar('90%', 0.3)}
                    {skeletonBar('70%', 0.2)}
                    {skeletonBar('80%', 0.2)}
                    <span className="mt-1 h-3 w-[52px] rounded-md bg-[#101a24]" />
                  </span>
                </div>
                <div className="mt-2.5 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,162,39,.6),transparent)' }} />
              </div>
            </div>
            <div className="absolute left-[110px] top-[214px] h-3 w-[340px]" style={{ background: 'linear-gradient(#efe9dd,#ddd5c4)', borderRadius: '2px 2px 10px 10px' }} />
            {/* tablet — Consultant */}
            <div
              className="absolute left-[22px] top-[52px] h-[206px] w-[158px] rounded-[14px] bg-[#101a24] p-[7px]"
              style={{ transform: 'translateZ(46px) rotateY(13deg)', boxShadow: '0 26px 50px -24px rgba(16,26,36,.5)' }}
            >
              <div className="h-full w-full overflow-hidden rounded-lg bg-[#faf7f2] px-2.5 py-[9px]">
                <p className="ps-mono m-0 text-[7px] tracking-[0.18em] text-[#0aa88f]">CONSULTANT</p>
                <div className="mt-[7px] flex gap-1">
                  <span className="ps-mono rounded bg-[#101a24] px-[5px] py-[2px] text-[6px] text-[#faf7f2]">HOME</span>
                  <span className="ps-mono rounded border border-[rgba(16,26,36,.2)] px-[5px] py-[2px] text-[6px] text-[rgba(16,26,36,.5)]">BLOG</span>
                  <span className="ps-mono rounded border border-[rgba(16,26,36,.2)] px-[5px] py-[2px] text-[6px] text-[rgba(16,26,36,.5)]">CARE</span>
                </div>
                <span className="mt-2 block h-[52px] w-full rounded-lg" style={{ background: 'linear-gradient(140deg,#f1ece3,#e6decf)' }} />
                <span className="mt-2 block">{skeletonBar('85%', 0.3)}</span>
                <span className="mt-[5px] block">{skeletonBar('65%', 0.2)}</span>
                <span className="mt-[9px] flex gap-[5px]">
                  <span className="h-[30px] flex-1 rounded-md bg-[#f1ece3]" />
                  <span className="h-[30px] flex-1 rounded-md bg-[#f1ece3]" />
                </span>
                <span className="ps-grad mt-[9px] block h-[13px] w-[60px] rounded-[7px]" />
              </div>
            </div>
            {/* phone — Resident */}
            <div
              className="absolute right-[26px] top-16 h-[196px] w-[102px] rounded-[18px] bg-[#101a24] p-1.5"
              style={{ transform: 'translateZ(70px) rotateY(-14deg)', boxShadow: '0 26px 50px -24px rgba(16,26,36,.5)' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[13px] bg-[#faf7f2] px-2 py-[9px]">
                <span className="absolute left-1/2 top-1 h-[5px] w-[30px] -translate-x-1/2 rounded-[3px] bg-[#101a24]" />
                <p className="ps-mono mt-2 text-[6.5px] tracking-[0.16em] text-[#0aa88f]">RESIDENT</p>
                <span className="mt-[7px] block h-[34px] w-[34px] rounded-full" style={{ background: 'linear-gradient(140deg,#f1ece3,#e0d8c8)' }} />
                <span className="mt-[7px] block">{skeletonBar('80%', 0.3)}</span>
                <span className="mt-[5px] block">{skeletonBar('60%', 0.2)}</span>
                <span className="ps-grad mt-2.5 block h-4 w-full rounded-lg" />
                <span className="mt-1.5 block h-4 w-full rounded-lg border border-[rgba(16,26,36,.2)]" />
              </div>
            </div>
          </div>
        </div>
        <p className="ps-mono m-0 text-center text-[10px] tracking-[0.18em] text-[rgba(16,26,36,.45)]">
          EVERY SCREEN, CONSIDERED — PHONE · TABLET · LAPTOP
        </p>
      </div>
    </Reveal>
  )
}

function TierCard({ delay, tierLabel, name, nameSuffix, gold = false, features, cta, preview }) {
  const border = gold ? 'rgba(201,162,39,.18)' : 'rgba(16,26,36,.06)'
  return (
    <Reveal delay={delay} className="min-w-0">
      <PsTilt
        className="h-full rounded-3xl px-7 py-[30px]"
        style={
          gold
            ? { background: 'linear-gradient(180deg,#fffdf8,#fdf9ef)', border: '1px solid rgba(201,162,39,.45)', boxShadow: '0 24px 56px -34px rgba(140,110,20,.35)' }
            : { background: '#fff', border: '1px solid rgba(16,26,36,.08)', boxShadow: '0 20px 50px -36px rgba(16,26,36,.3)' }
        }
      >
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <p className="ps-mono m-0 text-[10.5px] tracking-[0.2em]" style={{ color: gold ? GOLD : '#0aa88f' }}>
            {tierLabel}
          </p>
          {gold && (
            <span className="ps-mono rounded-full border border-[rgba(201,162,39,.55)] px-2.5 py-1 text-[9.5px] tracking-[0.18em] text-[#a9861d]">
              FLAGSHIP
            </span>
          )}
        </div>
        <h3 className="ps-serif mt-2.5 text-[2rem] font-semibold">
          {name}
          {nameSuffix}
        </h3>
        <div
          className="mt-[18px] flex h-[110px] items-center justify-center gap-2.5 rounded-[14px] bg-[#faf7f2]"
          style={{ border: `1px solid ${gold ? 'rgba(201,162,39,.3)' : 'rgba(16,26,36,.07)'}` }}
        >
          {preview}
        </div>
        <ul className="m-0 mt-5 flex list-none flex-col p-0">
          {features.map((f, i) => (
            <li
              key={f}
              className="py-[9px] text-[14px] text-[rgba(16,26,36,.72)]"
              style={i < features.length - 1 ? { borderBottom: `1px solid ${border}` } : undefined}
            >
              {f}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-[22px] inline-block text-[14px] font-semibold"
          style={{ color: gold ? GOLD : '#0aa88f' }}
        >
          {cta} →
        </a>
      </PsTilt>
    </Reveal>
  )
}

const GALLERY = [
  { spec: 'derma', label: 'DERMA — 01' },
  { spec: 'dental', label: 'DENTAL — 01' },
  { spec: 'onco', label: 'ONCO — 01' },
  { spec: 'ortho', label: 'ORTHO — 01' },
  { spec: 'paeds', label: 'PAEDS — 01' },
  { spec: 'multi', label: 'MULTI-SPECIALITY — 01' },
]
const FILTERS = ['all', 'derma', 'dental', 'onco', 'ortho', 'paeds', 'multi']

function Gallery() {
  const [filter, setFilter] = useState('all')
  return (
    <div id="templates" className="mt-[clamp(48px,7vw,84px)]">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
        <h3 className="ps-serif m-0 text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold">
          The gallery{' '}
          <em className="text-[.75em] italic text-[rgba(16,26,36,.45)]">— growing by speciality</em>
        </h3>
        <p className="ps-mono m-0 text-[10px] tracking-[0.16em] text-[rgba(16,26,36,.4)]">
          TEMPLATE STOCK IMPORTS PER TIER — ONGOING
        </p>
      </Reveal>
      <Reveal delay={0.06} className="mt-5 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const on = filter === f
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="ps-mono cursor-pointer rounded-full px-4 py-2 text-[10.5px] tracking-[0.14em] transition-colors"
              style={
                on
                  ? { background: 'linear-gradient(100deg,#00b48f,#3a86ff)', color: '#fff', border: '1px solid transparent' }
                  : { background: 'transparent', color: 'rgba(16,26,36,.64)', border: '1px solid rgba(16,26,36,.18)' }
              }
            >
              {f === 'multi' ? 'MULTI-SPECIALITY' : f.toUpperCase()}
            </button>
          )
        })}
      </Reveal>
      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-[18px]">
        {GALLERY.filter((g) => filter === 'all' || g.spec === filter).map((g) => (
          <div key={g.spec} className="rounded-[18px] border border-dashed border-[rgba(16,26,36,.22)] bg-[rgba(255,255,255,.5)] p-3.5">
            <div className="flex items-center gap-2">
              <span className="ps-mono text-[9.5px] tracking-[0.16em] text-[#0aa88f]">{g.label}</span>
            </div>
            <div className="mt-3 flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-[10px] bg-[#f1ece3]">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-dashed border-[rgba(16,26,36,.3)] text-[16px] font-light text-[rgba(16,26,36,.35)]">
                +
              </span>
              <span className="ps-mono text-[9px] tracking-[0.16em] text-[rgba(16,26,36,.4)]">
                TEMPLATE SLOT — AWAITING IMPORT
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Collection() {
  return (
    <section id="collection" className="ps-section-pad">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-center gap-[clamp(28px,4vw,48px)]">
          <Reveal className="min-w-[min(100%,300px)] flex-[1_1_380px]">
            <p className="ps-label mb-[18px]">02 — THE COLLECTION</p>
            <h2 className="ps-h2">
              Tiered like a collection, <em className="italic text-[#0aa88f]">built</em> like a
              service.
            </h2>
            <p className="mt-5 max-w-[48ch] text-[15.5px] font-light leading-[1.65]" style={{ color: INK64 }}>
              Three starting points, one standard of craft. Every tier is customised — templates
              are starting points, never the ceiling.
            </p>
          </Reveal>
          <DeviceTrio />
        </div>

        <div id="pricing" className="mt-[clamp(44px,6vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[22px]">
          <TierCard
            delay={0}
            tierLabel="TIER 01 — BASE"
            name="Resident"
            cta="Start with Resident"
            features={[
              'Single-page bespoke design, mobile-first',
              'Profile · services · contact · map',
              'SEO basics',
              '2 revision rounds',
            ]}
            preview={
              <>
                <span className="h-[82px] w-11 rounded-[10px] bg-[#101a24] p-[3px]">
                  <span className="block h-full w-full rounded-[7px]" style={{ background: 'linear-gradient(180deg,#faf7f2 60%,#f1ece3)' }} />
                </span>
                <span className="flex flex-col gap-[5px]">
                  {skeletonBar(74, 0.35, 5)}
                  {skeletonBar(56, 0.18, 5)}
                  <span className="ps-grad mt-[3px] h-3 w-10 rounded-md" />
                </span>
              </>
            }
          />
          <TierCard
            delay={0.09}
            tierLabel="TIER 02 — MID"
            name="Consultant"
            cta="Start with Consultant"
            features={[
              'Multi-page (5–7), custom photography direction',
              'Patient-education blog',
              'Google Business + SEO setup',
              'Testimonials module',
            ]}
            preview={
              <>
                <span className="h-[86px] w-[74px] rounded-lg bg-[#101a24] p-[3px]">
                  <span className="block h-full w-full rounded-[5px]" style={{ background: 'linear-gradient(180deg,#faf7f2 55%,#f1ece3)' }} />
                </span>
                <span className="flex flex-col gap-[5px]">
                  <span className="flex gap-[3px]">
                    <span className="h-2 w-[18px] rounded bg-[#101a24]" />
                    <span className="h-2 w-[18px] rounded bg-[rgba(16,26,36,.15)]" />
                    <span className="h-2 w-[18px] rounded bg-[rgba(16,26,36,.15)]" />
                  </span>
                  <span className="mt-0.5">{skeletonBar(74, 0.35, 5)}</span>
                  {skeletonBar(56, 0.18, 5)}
                  <span className="ps-grad mt-[3px] h-3 w-10 rounded-md" />
                </span>
              </>
            }
          />
          <TierCard
            delay={0.18}
            gold
            tierLabel="TIER 03 — TOP"
            name="Signature"
            nameSuffix={<em className="text-[.62em] italic text-[#a9861d]"> — the gold tier</em>}
            cta="Commission Signature"
            features={[
              'Fully bespoke art direction',
              '3D & motion touches · multilingual',
              'Priority support',
              'Quarterly design refresh',
            ]}
            preview={
              <span className="relative">
                <span className="block h-[70px] w-[110px] rounded-t-md bg-[#101a24] p-[3px]">
                  <span className="relative block h-full w-full rounded-[3px]" style={{ background: 'linear-gradient(140deg,#faf7f2,#f1ece3)' }}>
                    <span className="absolute left-2 top-2 h-[3px] w-2/5 bg-[rgba(201,162,39,.7)]" />
                    <span className="absolute left-2 top-4 h-1 w-3/5 bg-[rgba(16,26,36,.3)]" />
                    <span className="absolute bottom-2 left-2 h-[9px] w-[26px] rounded-[5px] bg-[#101a24]" />
                  </span>
                </span>
                <span className="absolute -bottom-[7px] left-1/2 h-[7px] w-[126px] -translate-x-1/2 rounded-b-md bg-[#e8e2d6]" />
              </span>
            }
          />
        </div>
        <p className="ps-serif mx-1 mt-[18px] text-[13.5px] italic text-[rgba(16,26,36,.5)]">
          Every tier is customised — templates are starting points, never the ceiling.
        </p>

        <Gallery />
      </div>
    </section>
  )
}

const CAPABILITIES = [
  {
    title: 'Appointment booking',
    chip: 'FLAGSHIP',
    chipGrad: true,
    desc: 'Patients pick a slot on your site — no phone tag, no third-party branding.',
    highlight: true,
  },
  {
    title: 'WhatsApp patient concierge',
    chip: 'POWERED BY MEDLINK AI',
    desc: 'Answers, reminders and follow-ups where Indian patients already are.',
  },
  { title: 'Teleconsultation', desc: 'Video visits and second opinions, embedded in your own domain.' },
  { title: 'Patient education library', desc: 'Your explanations, beautifully published — the visit that continues at home.' },
  { title: 'Reviews & reputation', desc: 'Gather, curate and present real patient words — on a page you own.' },
  { title: 'Multilingual', desc: "Indian languages and global ones — care in the patient's own words." },
  { title: 'Practice analytics', desc: 'Who found you, from where, for what — in plain language.' },
  { title: 'Payments & UPI', titleSuffix: ' (India)', desc: 'Consult fees collected the way India pays.' },
]

function BookingDemoCard() {
  const day = (n, cls = '', dim = false) => (
    <span
      className={`rounded-lg py-[7px] text-[11px] ${cls}`}
      style={{ background: '#faf7f2', color: dim ? 'rgba(16,26,36,.35)' : 'rgba(16,26,36,.55)' }}
    >
      {n}
    </span>
  )
  return (
    <Reveal className="w-[min(330px,100%)]">
      <div className="rounded-[22px] border border-[rgba(16,26,36,.08)] bg-white p-5" style={{ boxShadow: '0 26px 60px -34px rgba(16,26,36,.35)' }}>
        <div className="flex items-center justify-between">
          <span className="ps-mono text-[10px] tracking-[0.18em] text-[rgba(16,26,36,.5)]">APPOINTMENT BOOKING</span>
          <span className="ps-demo-dot h-2 w-2 rounded-full bg-[#1ec27a]" />
        </div>
        <div className="mt-4 flex items-center gap-[11px]">
          <span className="h-[38px] w-[38px] rounded-full border border-[rgba(16,26,36,.1)]" style={{ background: 'linear-gradient(140deg,#f1ece3,#e0d8c8)' }} />
          <span className="flex flex-col gap-[3px]">
            <span className="text-[14px] font-semibold text-[#101a24]">Dr. ______</span>
            <span className="text-[11.5px] text-[rgba(16,26,36,.5)]">General practice · In-clinic visit</span>
          </span>
        </div>
        <div className="mt-4 border-t border-[rgba(16,26,36,.07)] pt-3.5">
          <div className="ps-mono grid grid-cols-7 gap-1 text-center text-[9px] text-[rgba(16,26,36,.4)]">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
          <div className="mt-1.5 grid grid-cols-7 gap-1 text-center">
            {day(8)}{day(9)}{day(10)}{day(11)}{day(12)}{day(13, '', true)}{day(14, '', true)}
            {day(15)}{day(16)}{day(17)}
            <span className="ps-demo-pick rounded-lg py-[7px] text-[11px] font-semibold" style={{ background: '#faf7f2' }}>18</span>
            {day(19)}{day(20, '', true)}{day(21, '', true)}
          </div>
          <div className="mt-3 flex gap-1.5">
            {['9:40', '10:30', '11:15'].map((t) => (
              <span
                key={t}
                className={`ps-mono flex-1 rounded-full border border-[rgba(16,26,36,.14)] py-[7px] text-center text-[10px] text-[rgba(16,26,36,.64)] ${t === '10:30' ? 'ps-demo-time' : ''}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mt-3.5 h-11 overflow-hidden">
          <div
            className="ps-demo-chip absolute inset-0 flex items-center gap-2.5 rounded-xl px-3.5"
            style={{ background: 'linear-gradient(100deg,#009b7d,#2f6fd6)', transform: 'translateY(130%)', opacity: 0 }}
          >
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#1ec27a] text-[11px] font-bold text-[#04130b]">✓</span>
            <span className="text-[12.5px] text-[#faf7f2]">Confirmed · Thu 18, 10:30 AM</span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Capabilities() {
  return (
    <section id="capabilities" className="ps-section-pad bg-[#faf7f2]">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-[720px]">
          <p className="ps-label mb-[18px]">03 — GROW WITH US</p>
          <h2 className="ps-h2">
            Start with a beautiful website. Add capabilities{' '}
            <em className="italic text-[#0aa88f]">as you grow.</em>
          </h2>
          <p className="mt-5 max-w-[56ch] text-[15.5px] font-light leading-[1.65]" style={{ color: INK64 }}>
            We build them with you — one practice, one roadmap, no re-platforming.
          </p>
        </Reveal>
        <div className="mt-[clamp(36px,5vw,56px)] flex flex-wrap gap-[clamp(32px,5vw,60px)]">
          <div className="min-w-[min(100%,300px)] flex-[1.25_1_440px]">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <div
                  className="flex items-baseline gap-[18px] border-b border-[rgba(16,26,36,.08)] px-1 py-5"
                  style={{
                    ...(i === 0 ? { borderTop: '1px solid rgba(16,26,36,.12)' } : {}),
                    ...(c.highlight ? { background: 'linear-gradient(90deg,rgba(30,194,122,.07),transparent 70%)' } : {}),
                  }}
                >
                  <span className="ps-mono text-[11px] tracking-[0.1em] text-[#0aa88f]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <p className="ps-serif m-0 flex flex-wrap items-center gap-2.5 text-[1.35rem]">
                      {c.title}
                      {c.titleSuffix && <em className="text-[.7em] italic text-[rgba(16,26,36,.45)]">{c.titleSuffix}</em>}
                      {c.chip && (
                        <span
                          className="ps-mono rounded-full px-[9px] py-[3px] text-[8.5px] tracking-[0.16em]"
                          style={
                            c.chipGrad
                              ? { background: 'linear-gradient(100deg,#8ee000,#00c2a0 60%,#3a86ff)', color: '#fff' }
                              : { border: '1px solid rgba(10,168,143,.5)', color: '#0aa88f' }
                          }
                        >
                          {c.chip}
                        </span>
                      )}
                    </p>
                    <p className="mb-0 mt-1.5 text-[14px] leading-[1.55] text-[rgba(16,26,36,.6)]">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex min-w-[min(100%,300px)] flex-[1_1_320px] flex-col items-center gap-6">
            <BookingDemoCard />
            <Reveal delay={0.08} className="w-[min(330px,100%)]">
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: '33/38', borderRadius: '165px 165px 20px 20px', boxShadow: '0 30px 60px -32px rgba(16,26,36,.35)' }}
              >
                <img src={imgTablet} alt="Doctor showing a tablet to a smiling senior patient" className="h-full w-full object-cover" />
              </div>
              <p className="ps-mono mx-1 mt-3 text-center text-[9.5px] tracking-[0.16em] text-[rgba(16,26,36,.4)]">
                DIGITAL TOOLS, HUMAN CARE
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeList({ items, check }) {
  return (
    <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-[14.5px] leading-[1.55] text-[rgba(16,26,36,.7)]">
          <span className="flex-none" style={{ color: check }}>✓</span>
          {it}
        </li>
      ))}
    </ul>
  )
}

function TwoHomes() {
  return (
    <section id="two-homes" className="ps-section-pad">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-[720px]">
          <p className="ps-label mb-[18px]">04 — TWO HOMES</p>
          <h2 className="ps-h2">
            For India, <em className="italic text-[#0aa88f]">and the world.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-[clamp(32px,5vw,52px)] flex flex-wrap overflow-hidden rounded-[26px] border border-[rgba(16,26,36,.09)] bg-white">
            <div className="min-w-[min(100%,300px)] flex-[1_1_340px] border-r border-[rgba(201,162,39,.3)] p-[clamp(28px,4vw,44px)]">
              <p className="ps-mono m-0 text-[11px] tracking-[0.2em] text-[#0aa88f]">INDIA</p>
              <h3 className="ps-serif mb-0 mt-3 text-[1.6rem] font-semibold">Built for how India books care.</h3>
              <HomeList
                check="#1ec27a"
                items={[
                  'UPI payments, built in',
                  'WhatsApp-first patient journeys',
                  'Indian-language sites — Hindi, Tamil, Bengali & more',
                  'ABDM-readiness considered in every build',
                ]}
              />
            </div>
            <div className="min-w-[min(100%,300px)] flex-[1_1_340px] p-[clamp(28px,4vw,44px)]">
              <p className="ps-mono m-0 text-[11px] tracking-[0.2em] text-[#2d7fd4]">GLOBAL</p>
              <h3 className="ps-serif mb-0 mt-3 text-[1.6rem] font-semibold">Credible across borders.</h3>
              <HomeList
                check="#2d7fd4"
                items={[
                  'HIPAA / GDPR-aware builds',
                  'Support that spans your timezone, not ours',
                  'Diaspora reach — NRI and second-opinion practices',
                  'Dental · derma · ortho · onco specialist experience',
                ]}
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-1.5 mt-[18px] text-center text-[12.5px] text-[rgba(16,26,36,.5)]">
            Built with an understanding of DPDP (India), HIPAA (US) and GDPR (EU) obligations.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

const STEPS = [
  { title: 'Consult & moodboard', desc: "We sit with you — and your front desk — to define the practice's voice and patients." },
  { title: 'Design & iterate', desc: 'Editorial design, photography direction, copy — refined together, round by round.' },
  { title: 'Build & launch', desc: 'SEO-ready, mobile-first, fast. Your domain, your content, your ownership.' },
  { title: 'Grow', desc: 'Booking, concierge, teleconsult, refreshes — capabilities added as the practice grows.' },
]

function Process() {
  return (
    <section id="process" className="px-[clamp(20px,4vw,48px)] pb-[clamp(88px,11vw,140px)]">
      <div className="mx-auto max-w-[1200px]">
        <div
          className="mb-[clamp(56px,8vw,96px)] h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(201,162,39,.5),transparent)' }}
        />
        <Reveal className="max-w-[720px]">
          <p className="ps-label mb-[18px]">05 — HOW WE BUILD</p>
          <h2 className="ps-h2">
            Four steps, then a <em className="italic text-[#0aa88f]">long partnership.</em>
          </h2>
        </Reveal>
        <div className="mt-[clamp(36px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-[22px]">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="border-t border-[rgba(201,162,39,.5)] pt-5">
                <p className="ps-mono m-0 text-[11px] tracking-[0.16em] text-[#a9861d]">
                  STEP {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="ps-serif mb-0 mt-2.5 text-[1.35rem] font-semibold">{s.title}</h3>
                <p className="mb-0 mt-2.5 text-[14px] leading-[1.6] text-[rgba(16,26,36,.6)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonial({ delay, img, alt, focus = '50% 30%', meta, children }) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-[22px] border border-[rgba(16,26,36,.08)] bg-white px-[26px] py-6">
        <span className="ps-serif text-[2.2rem] italic leading-[.6] text-[#c9a227]">“</span>
        <p className="mb-0 mt-2 text-[14.5px] italic leading-[1.65] text-[rgba(16,26,36,.75)]">{children}</p>
        <div className="mt-4 flex items-center gap-3 border-t border-dashed border-[rgba(16,26,36,.18)] pt-3.5">
          <img
            src={img}
            alt={alt}
            className="h-11 w-11 flex-none rounded-full border border-[rgba(201,162,39,.45)] object-cover"
            style={{ objectPosition: focus }}
          />
          <p className="ps-mono m-0 text-[11px] tracking-[0.12em] text-[rgba(16,26,36,.55)]">{meta}</p>
        </div>
      </div>
    </Reveal>
  )
}

function Proof() {
  return (
    <section id="proof" className="ps-section-pad bg-[#faf7f2]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-center gap-[clamp(32px,5vw,60px)]">
          <div className="min-w-[min(100%,300px)] flex-[1.4_1_440px]">
            <Reveal>
              <p className="ps-label mb-[18px]">06 — IN THEIR WORDS</p>
              <h2 className="ps-h2">
                Websites that put doctors <em className="italic text-[#0aa88f]">on the map.</em>
              </h2>
            </Reveal>
            <div className="mt-[clamp(28px,4vw,40px)] flex flex-col gap-4">
              <Testimonial
                delay={0}
                img={imgDrMale}
                alt="Portrait of Dr. Arun Mattoo"
                focus="50% 25%"
                meta="DR. ARUN MATTOO  ·  MD PHYSICIAN  ·  JAMMU"
              >
                Patients used to reach me through three layers of hospital directories. Now they
                find my own website first — they arrive already knowing my approach, my OPD hours
                and what to expect. New-patient visits are up, and my front desk spends half as
                much time on the phone.
              </Testimonial>
              <Testimonial
                delay={0.08}
                img={imgDrFemale}
                alt="Portrait of Dr. Sreelekha"
                focus="50% 18%"
                meta="DR. SREELEKHA  ·  GYNECOLOGIST  ·  BANGALORE"
              >
                I thought a website was a vanity project. It became my best referrer — patients
                across the city book consultations before we have ever met, and NRI families
                find me for their parents' care. It genuinely put my practice on the map.
              </Testimonial>
            </div>
          </div>
          <Reveal delay={0.1} className="flex min-w-[min(100%,300px)] flex-[1_1_320px] justify-center">
            <ArchPhoto
              src={imgHeartHands}
              alt="Doctor and patient forming a heart with their hands"
              maxWidth={380}
              ratio="38/44"
              radius={190}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-[clamp(20px,4vw,48px)] py-[clamp(88px,12vw,150px)]"
      style={{
        background:
          'radial-gradient(760px 460px at 10% -6%,rgba(142,224,0,.14),transparent 58%),radial-gradient(900px 520px at 108% 112%,rgba(58,134,255,.18),transparent 60%),#101a24',
      }}
    >
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[min(46%,560px)] opacity-30">
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(90deg,#101a24 2%,rgba(16,26,36,.25) 55%,rgba(16,26,36,.45))' }}
        />
        <img
          src={imgNurse}
          alt=""
          className="h-full w-full object-cover"
          style={{ filter: 'grayscale(1) sepia(.22) hue-rotate(120deg) saturate(1.1)' }}
        />
      </div>
      <div className="relative z-[2] mx-auto max-w-[1200px]">
        <div className="mb-7 h-px w-16 bg-[#c9a227]" />
        <p className="ps-mono mb-[18px] text-[12px] tracking-[0.2em] text-[#1ec27a]">07 — BEGIN</p>
        <Reveal>
          <h2 className="ps-serif m-0 max-w-[16ch] text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.1] text-[#faf7f2]">
            Let's design the practice your patients <GradText>deserve.</GradText>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="mailto:blessy.babychan@onealphamed.com" className="ps-btn-grad px-8 py-4 text-[15px]">
              Book a design consult
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mb-0 mt-7 text-[14px] text-[rgba(250,247,242,.55)]">
            Or write to{' '}
            <a
              href="mailto:blessy.babychan@onealphamed.com"
              className="border-b border-[rgba(30,194,122,.4)] text-[#1ec27a] hover:text-[#86d13f]"
            >
              blessy.babychan@onealphamed.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function StudioFooter() {
  return (
    <footer className="border-t border-[rgba(250,247,242,.08)] bg-[#101a24] px-[clamp(20px,4vw,48px)] pb-12 pt-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="ps-grad ps-serif flex h-6 w-6 items-center justify-center rounded-[7px] text-[14px] italic leading-none text-[#faf7f2]">
            α
          </span>
          <span className="ps-serif text-[17px] text-[#faf7f2]">{BRAND_NAME}</span>
          <span className="ml-1.5 text-[12.5px] text-[rgba(250,247,242,.45)]">
            — a OneAlphaMed service ·{' '}
            <a href="https://onealphamed.ai" className="text-[rgba(250,247,242,.6)] hover:text-[#1ec27a]">
              onealphamed.ai
            </a>
          </span>
        </div>
        <p className="ps-mono m-0 text-[10.5px] tracking-[0.16em] text-[rgba(250,247,242,.4)]">
          MUMBAI · GURGAON · JAKARTA · DUBAI · AMSTERDAM
        </p>
      </div>
      <p className="ps-mono mx-auto mb-0 mt-[26px] max-w-[1200px] text-[9.5px] tracking-[0.12em] text-[rgba(250,247,242,.28)]">
        © 2026 ONEALPHAMED &nbsp;·&nbsp; PHOTOGRAPHY SLOTS USE COMP IMAGES — LICENSE BEFORE
        PRODUCTION
      </p>
    </footer>
  )
}

export default function PracticeStudio() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = `${BRAND_NAME} — bespoke websites for doctors | OneAlphaMed`
    // the shell (html/body) is styled for the dark parent site
    const prevBg = document.documentElement.style.background
    document.documentElement.style.background = '#ffffff'
    return () => {
      document.title = prevTitle
      document.documentElement.style.background = prevBg
    }
  }, [])

  return (
    <div className="ps">
      <div className="ps-grain" aria-hidden="true" />
      <StudioNav />
      <main>
        <Hero />
        <TheCase />
        <Collection />
        <Capabilities />
        <TwoHomes />
        <Process />
        <Proof />
        <ContactCta />
      </main>
      <StudioFooter />
    </div>
  )
}
