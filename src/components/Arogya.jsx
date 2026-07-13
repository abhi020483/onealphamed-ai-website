import Reveal from './Reveal'
import TiltCard from './TiltCard'

const FEATURES = [
  {
    n: 'AR / 01',
    color: 'text-lime',
    title: 'AI prescription scan',
    desc: 'Camera capture of handwritten prescriptions — AI auto-fills medicine, dose and timing for the patient to confirm. Autocomplete from a 5,000+ Indian drug database.',
  },
  {
    n: 'AR / 02',
    color: 'text-green',
    title: 'Family care network',
    desc: "Caregivers monitor adherence from a shared view, mark doses on the patient's behalf, and get WhatsApp alerts when a critical dose is missed.",
  },
  {
    n: 'AR / 03',
    color: 'text-teal',
    title: 'AI insights & doctor reports',
    desc: 'Patterns detected from adherence data — best-performing times, missed-dose triggers, schedule suggestions — plus an auto-generated, doctor-ready adherence report.',
  },
  {
    n: 'AR / 04',
    color: 'text-blue',
    title: 'Refills, interactions & offline',
    desc: 'Pharmacy refill ordering from the medicine list, severity-coded drug-interaction alerts, and full offline operation — reminders fire and sync on reconnect.',
  },
]

const TIERS = [
  { t: 'T+0 · Tier 1', color: 'text-lime', title: 'Push notification', desc: 'Works on silent mode' },
  { t: 'T+10 · Tier 2', color: 'text-green', title: 'Full-screen alarm', desc: 'Overrides silent mode' },
  { t: 'T+20 · Tier 3', color: 'text-teal', title: 'AI voice call', desc: "In the patient's language — confirms dose or logs miss" },
  { t: 'T+25 · Tier 4', color: 'text-blue', title: 'WhatsApp family alert', desc: 'Caregiver can call or mark the dose remotely' },
]

export default function Arogya() {
  return (
    <section
      id="arogya"
      className="relative py-28 md:py-[120px]"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(var(--color-tint-rgb),.3) 25%, rgba(var(--color-tint-rgb),.3) 75%, transparent)',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 md:px-10">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-lime">
            04 — Arogya App · AI Patient Compliance
          </span>
          <h2 className="max-w-[880px] font-display text-3xl font-medium leading-[1.18] text-balance text-text md:text-[2.6rem]">
            Arogya makes sure <span className="text-gradient">no dose goes untracked.</span>
          </h2>
          <p className="max-w-[740px] text-[1.05rem] leading-[1.7] text-text-dim text-balance">
            A medication adherence platform built for the Indian market — elderly patients
            and their family caregivers. AI-assisted medicine entry, multi-tier escalation
            reminders, family care coordination, pharmacy refills and doctor-ready adherence
            reports — all operable in low-connectivity conditions.
          </p>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* app mockup */}
          <Reveal className="flex justify-center">
            <div style={{ perspective: 1400 }}>
              <div style={{ transform: 'rotateY(9deg) rotateX(4deg)', transformStyle: 'preserve-3d' }}>
                <TiltCard
                  max={7}
                  className="w-[300px] overflow-hidden rounded-[42px] border border-line-strong bg-frame shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(134,209,63,0.12)]"
                >
                  <div className="flex justify-center pt-2.5 pb-1.5">
                    <div className="h-[22px] w-[110px] rounded-xl bg-void" />
                  </div>
                  <div className="flex items-center justify-between px-5 pt-3.5 pb-1.5">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-lime">Arogya</span>
                      <span className="text-[16px] font-semibold text-text">Today&rsquo;s schedule</span>
                    </div>
                    {/* adherence ring */}
                    <div className="relative h-[52px] w-[52px]">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'conic-gradient(#1ec27a 0 270deg, var(--color-ring-track) 270deg 360deg)',
                          WebkitMask: 'radial-gradient(closest-side, transparent 66%, #000 68%)',
                          mask: 'radial-gradient(closest-side, transparent 66%, #000 68%)',
                        }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-[12px] text-green">
                        3/4
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 px-4 pt-3.5 pb-6">
                    <div className="flex items-center gap-3 rounded-[14px] border border-brand-green/35 bg-brand-green/[0.08] px-3.5 py-3">
                      <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-brand-green/20 text-[14px] text-green">✓</span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14.5px] font-semibold text-text">Metformin 500 mg</span>
                        <span className="text-[12px] text-text-dim/80">8:00 AM · After meal · Taken</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-[14px] border border-line bg-void-3/90 px-3.5 py-3">
                      <span className="flex h-[26px] w-[26px] animate-blink items-center justify-center rounded-full bg-brand-lime/15 text-[13px] text-lime">●</span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14.5px] font-semibold text-text">Amlodipine 5 mg</span>
                        <span className="text-[12px] text-text-dim/80">1:00 PM · Before meal · Due next</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-[14px] border border-brand-blue/30 bg-brand-blue/[0.07] px-3.5 py-[11px]">
                      <span className="text-xs text-text/70">Ramipril — 2 days of stock left</span>
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-blue">Refill</span>
                    </div>
                    <div className="flex items-center justify-center pt-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim/60">
                        हिंदी · English · Voice read-aloud
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </Reveal>

          {/* feature cards */}
          <div className="grid gap-5 sm:grid-cols-2" style={{ perspective: 1400 }}>
            {FEATURES.map((f, i) => (
              <Reveal key={f.n} delay={i * 0.06}>
                <TiltCard max={7} className="hud-corners flex h-full flex-col gap-3 rounded-2xl border border-line bg-void-2/70 px-[22px] py-6 backdrop-blur-md transition-colors duration-200 hover:border-lime/50">
                  <span className={`font-mono text-[12px] tracking-[0.2em] ${f.color}`}>{f.n}</span>
                  <h3 className="font-display text-base font-medium text-text">{f.title}</h3>
                  <p className="text-[1rem] leading-[1.6] text-text-dim">{f.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* escalation ladder */}
        <Reveal className="flex flex-col gap-5 rounded-2xl border border-line bg-void-2/70 px-7 py-6 backdrop-blur-md">
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text-dim">
            Missed-dose escalation — tuned to each medicine&rsquo;s criticality
          </span>
          <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            {TIERS.map((tier, i) => (
              <div key={tier.t} className="contents">
                <div className="flex flex-col gap-1.5">
                  <span className={`font-mono text-[12px] uppercase tracking-[0.15em] ${tier.color}`}>{tier.t}</span>
                  <span className="text-[1.05rem] font-semibold text-text">{tier.title}</span>
                  <span className="text-[0.95rem] leading-[1.5] text-text-dim/80">{tier.desc}</span>
                </div>
                {i < TIERS.length - 1 && (
                  <span className="hidden self-center text-teal lg:block">→</span>
                )}
              </div>
            ))}
          </div>
          <span className="font-mono text-[11.5px] uppercase tracking-[0.15em] text-text-dim/60">
            Gentle → Tier 1 only · Standard → Tier 2 · Critical → all 4 tiers · Enforced server-side
          </span>
        </Reveal>
      </div>
    </section>
  )
}
