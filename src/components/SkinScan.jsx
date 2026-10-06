import Reveal from './Reveal'
import TiltCard from './TiltCard'
import imgDermExam from '../assets/skinscan/skinscan-derm-exam.jpg'
import imgSelfieScan from '../assets/skinscan/skinscan-selfie-scan.jpg'
import imgConsult from '../assets/skinscan/skinscan-consult.jpg'

const SKINSCAN_URL = 'https://skinscan-jade.vercel.app'

const FEATURES = [
  {
    n: 'SS / 01',
    color: 'text-lime',
    title: 'Guided face scan',
    desc: 'Fit your face in the oval in soft daylight — the photo is taken for you. No dermatoscope, no appointment, any modern phone.',
  },
  {
    n: 'SS / 02',
    color: 'text-green',
    title: 'Two scores, plain words',
    desc: 'A Skin Score plus a Melasma-pattern Score (MASI-style estimate, 0 to 48) — with markings on the photo showing the areas behind each score.',
  },
  {
    n: 'SS / 03',
    color: 'text-teal',
    title: 'Private by design',
    desc: 'Analysis runs on the device; only scores and measurements reach the server. Stored photos are optional, encrypted, and auto-deleted after 90 days.',
  },
  {
    n: 'SS / 04',
    color: 'text-blue',
    title: 'Built for the consult',
    desc: 'Not a diagnosis — a conversation starter. Every result ends with what to ask a dermatologist next.',
  },
]

export default function SkinScan() {
  return (
    <section id="skinscan" className="relative py-28 md:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 md:px-10">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
            05 — SkinScan · Consumer Skin Awareness
          </span>
          <h2 className="max-w-[880px] font-display text-3xl font-medium leading-[1.18] text-balance text-text md:text-[2.6rem]">
            SkinScan: know your Skin Score, get clarity on{' '}
            <span className="text-gradient">dark patches.</span>
          </h2>
          <p className="max-w-[740px] text-[1.05rem] leading-[1.7] text-text-dim text-balance">
            A consumer app for pigmentation awareness. One guided face photo returns a Skin
            Score and a Melasma-pattern Score — a MASI-style estimate of melasma severity —
            explained in plain words, so people stop guessing about dark patches and know
            exactly what to ask a dermatologist. Not a beauty score. Not a fairness score.
          </p>
        </Reveal>

        {/* photo collage */}
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <TiltCard
              max={4}
              className="hud-corners group relative h-[320px] overflow-hidden rounded-3xl border border-line md:h-[460px] lg:h-full lg:min-h-[520px]"
            >
              <img
                src={imgDermExam}
                alt="Dermatologist visually examining a patient's cheek in a bright clinic"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* floating score card — echoes the app's own result card */}
              <div className="absolute bottom-5 left-5 flex flex-col gap-1 rounded-2xl border border-line bg-void/85 px-5 py-4 backdrop-blur-md">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                  Melasma-pattern Score
                </span>
                <span className="font-display text-[1.6rem] font-medium leading-none text-text">
                  0–48
                </span>
                <span className="text-[12px] text-text-dim">
                  MASI-style estimate · awareness, not diagnosis
                </span>
              </div>
            </TiltCard>
          </Reveal>
          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <div className="group relative h-[300px] overflow-hidden rounded-3xl border border-line">
                <img
                  src={imgSelfieScan}
                  alt="Woman taking a guided face-scan photo with her phone in soft window light"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full border border-line bg-void/80 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.15em] text-text backdrop-blur-md">
                  Step 1 · the scan
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="group relative h-[200px] overflow-hidden rounded-3xl border border-line">
                <img
                  src={imgConsult}
                  alt="Dermatologist and patient reviewing results together on a tablet"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full border border-line bg-void/80 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.15em] text-text backdrop-blur-md">
                  Step 3 · the consult
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* features */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1400 }}>
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <TiltCard
                max={7}
                className="hud-corners h-full rounded-2xl border border-line bg-void-2/70 p-6 backdrop-blur-md transition-colors duration-200 hover:border-teal/45"
              >
                <div className="flex flex-col gap-3.5">
                  <span className={`font-mono text-[12px] tracking-[0.2em] ${f.color}`}>{f.n}</span>
                  <h3 className="font-display text-[1.05rem] font-medium text-text">{f.title}</h3>
                  <p className="text-[1.05rem] leading-[1.6] text-text-dim">{f.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={SKINSCAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-brand-lime via-brand-teal to-brand-blue px-7 py-3 text-[15px] font-semibold text-ink shadow-[0_0_24px_rgba(30,194,122,0.35)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(30,194,122,0.55)]"
            >
              Try SkinScan →
            </a>
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-teal" />
              Live — your photo stays on your device
            </span>
          </div>
          <p className="max-w-[740px] text-[0.85rem] leading-[1.6] text-text-dim/70">
            For pigmentation awareness, not diagnosis. SkinScan does not check moles or spots
            for skin cancer — see a dermatologist for any spot that is new, changing, bleeding
            or itchy.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
