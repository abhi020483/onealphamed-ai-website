import Reveal from './Reveal'
import TiltCard from './TiltCard'

const CARDS = [
  {
    n: 'VA / 01',
    color: 'text-lime',
    title: 'Augments the field force',
    desc: 'Reinforcement and follow-up calls between visits — so reps spend in-person time on the highest-value interactions.',
  },
  {
    n: 'VA / 02',
    color: 'text-green',
    title: 'Covers vacant territories',
    desc: 'When an MR seat is open, the agent keeps those doctors engaged — no customer goes dark while the role is filled.',
  },
  {
    n: 'VA / 03',
    color: 'text-teal',
    title: 'Consistent messaging',
    desc: 'Approved, medico-legally reviewed content — delivered identically across every doctor, specialty and language.',
  },
  {
    n: 'VA / 04',
    color: 'text-blue',
    title: 'Dynamic knowledge system',
    desc: 'No fixed scripts — live retrieval over products, clinical data, formulary and FAQs. It genuinely converses and handles objections.',
  },
]

const WAVE_BARS = [
  'from-lime to-teal',
  'from-lime to-teal',
  'from-green to-teal',
  'from-green to-blue',
  'from-teal to-blue',
  'from-teal to-blue',
  'from-green to-blue',
  'from-green to-teal',
  'from-lime to-teal',
]

const COMPLIANCE = ['TRAI Consent', 'UCPMP', 'DPDP Act 2023', 'MLR Reviewed']

export default function VoiceAgent() {
  return (
    <section id="voice" className="relative py-28 md:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 md:px-10">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-green">
            03 — AI Sales Voice Agent
          </span>
          <h2 className="max-w-[880px] font-display text-3xl font-medium leading-[1.18] text-balance text-text md:text-[2.6rem]">
            An always-on, compliant <span className="text-gradient">voice layer</span> that
            extends the field force.
          </h2>
          <p className="max-w-[720px] text-[1.05rem] leading-[1.7] text-text-dim text-balance">
            Natural-sounding, multilingual voice agents that speak with doctors over the
            phone — reinforcing approved medical messaging between MR visits. An additional
            layer of support for the sales team, never a replacement.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1400 }}>
          {CARDS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <TiltCard max={7} className="hud-corners flex h-full flex-col gap-3.5 rounded-2xl border border-line bg-void-2/70 p-6 backdrop-blur-md transition-colors duration-200 hover:border-green/45">
                <span className={`font-mono text-[11px] tracking-[0.2em] ${c.color}`}>{c.n}</span>
                <h3 className="font-display text-[1.02rem] font-medium text-text">{c.title}</h3>
                <p className="text-[0.92rem] leading-[1.6] text-text-dim">{c.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" style={{ perspective: 1400 }}>
          {/* live call visual */}
          <Reveal>
            <TiltCard max={6} className="hud-corners flex h-full flex-col justify-between gap-5 rounded-2xl border border-line bg-void-2/70 px-7 py-6 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-green">
                  <span className="h-[7px] w-[7px] animate-blink rounded-full bg-green shadow-[0_0_10px_#1ec27a]" />
                  Outbound call · Live
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-dim/70">
                  Hindi · 02:47
                </span>
              </div>

              {/* waveform */}
              <div className="flex min-h-[64px] flex-1 items-center justify-center gap-[5px]">
                {WAVE_BARS.map((g, i) => (
                  <span
                    key={i}
                    className={`animate-wave h-[54px] w-[5px] rounded-[3px] bg-gradient-to-b ${g}`}
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-void-3/70 px-4 py-3.5 text-[0.9rem] leading-[1.6] text-text/80">
                &ldquo;Doctor, following up on last week&rsquo;s detailing visit — a new study
                on the extended indication was published. Would two minutes on the key
                findings help?&rdquo;
              </div>
              <span className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim/60">
                Sub-second turn-taking · Natural interruption handling
              </span>
            </TiltCard>
          </Reveal>

          {/* pipeline + analytics + compliance */}
          <Reveal delay={0.12} className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-void-2/70 px-6 py-[22px] backdrop-blur-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">
                Real-time pipeline
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-lg border border-lime/40 px-3.5 py-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-lime">
                  Speech-to-text
                </span>
                <span className="text-teal">→</span>
                <span className="rounded-lg border border-green/40 px-3.5 py-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-green">
                  LLM + Retrieval
                </span>
                <span className="text-teal">→</span>
                <span className="rounded-lg border border-blue/40 px-3.5 py-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-blue">
                  Text-to-speech
                </span>
              </div>
              <p className="text-[0.92rem] leading-[1.6] text-text-dim">
                Speech recognition tuned for Indian languages and medical vocabulary; a
                reasoning engine grounded in the approved knowledge base — so it cannot go
                off-message; natural multilingual voice synthesis over a standard outbound
                line. Every call logs to CRM/SFE and feeds next-best-action back to reps.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 rounded-2xl border border-line bg-void-2/70 px-6 py-[22px] backdrop-blur-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">
                Analytics &amp; insight
              </span>
              <p className="text-[0.92rem] leading-[1.6] text-text-dim">
                Reach and frequency, message consistency, doctor sentiment, the most common
                questions and objections by specialty and geography — a near-real-time view
                of how messaging lands across the entire doctor base.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-teal/40 bg-[rgba(10,26,36,0.7)] px-6 py-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                Compliant from day one
              </span>
              <div className="flex flex-wrap gap-2.5">
                {COMPLIANCE.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-teal/40 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.15em] text-teal"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-[0.9rem] leading-[1.55] text-text-dim">
                Explicit opt-in and DND honoured · every message passes
                medical-legal-regulatory review · all calls recorded and auditable.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
