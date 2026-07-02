import Reveal from './Reveal'
import TiltCard from './TiltCard'

const POWER_OF_FOUR = [
  {
    n: 'P4 / 01',
    color: 'text-lime',
    title: 'Generative AI',
    desc: 'Drafts evidence-grounded medical content on demand.',
  },
  {
    n: 'P4 / 02',
    color: 'text-green',
    title: 'RAG',
    desc: 'Retrieval-augmented answers, cited from your approved evidence library.',
  },
  {
    n: 'P4 / 03',
    color: 'text-teal',
    title: 'Label Info',
    desc: 'Responses bounded by approved label information.',
  },
  {
    n: 'P4 / 04',
    color: 'text-blue',
    title: 'Air Gap',
    desc: 'Deploys inside your perimeter. HIPAA / EU GDPR.',
  },
]

const COMPARE = [
  { dim: 'Flow', standard: 'Scripted decision trees', medlink: 'Free conversation, context retained' },
  { dim: 'Grounding', standard: 'Generic answers', medlink: 'Approved medical evidence only' },
  { dim: 'Tone', standard: 'Robotic templates', medlink: 'Emotionally intelligent, patient-aware' },
  { dim: 'Escalation', standard: 'Dead ends', medlink: 'Hands off to the clinic when it matters' },
]

const CHAT = [
  {
    from: 'patient',
    time: '09:41',
    text: "I've been feeling nauseous since yesterday's dose. Should I stop taking it?",
  },
  {
    from: 'bot',
    time: '09:41 · MedLink AI',
    text: "Please don't stop on your own. Mild nausea is common in the first week — take the dose with food and plenty of water. I've noted this for Dr Khadilkar; if it continues past 48 hours, the clinic will call you.",
  },
  { from: 'patient', time: '09:42', text: 'Thank you, that helps.' },
]

export default function Merlin() {
  return (
    <section id="merlin" className="relative py-28 md:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-6 md:px-10">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-green">
            01 — Flagship Product
          </span>
          <h2 className="max-w-[820px] font-display text-3xl font-medium leading-[1.18] text-balance text-text md:text-[2.6rem]">
            Merlin AI: one stop, customisable{' '}
            <span className="text-gradient">medical intelligence.</span>
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-dim">
            The Power of 4
          </span>
        </Reveal>

        {/* power of four */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1400 }}>
          {POWER_OF_FOUR.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard max={7} className="hud-corners h-full rounded-2xl border border-line bg-void-2/70 p-6 backdrop-blur-md transition-colors duration-200 hover:border-green/45">
                <div className="flex flex-col gap-3.5">
                  <span className={`font-mono text-[11px] tracking-[0.2em] ${p.color}`}>{p.n}</span>
                  <h3 className="font-display text-[1.05rem] font-medium text-text">{p.title}</h3>
                  <p className="text-[0.95rem] leading-[1.6] text-text-dim">{p.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* MedLink AI */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="flex flex-col gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-green">
              MedLink AI · WhatsApp Channel
            </span>
            <h3 className="font-display text-2xl font-medium leading-[1.25] text-balance text-text md:text-[1.7rem]">
              Conversational. Contextual.{' '}
              <span className="text-gradient">Emotionally intelligent.</span>
            </h3>

            {/* comparison table */}
            <div className="overflow-hidden rounded-2xl border border-line bg-void-2/70 backdrop-blur-md">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-3 border-b border-line px-5 py-3.5">
                <span />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-text-dim">
                  Standard Chatbots
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-green">
                  MedLink AI
                </span>
              </div>
              {COMPARE.map((row, i) => (
                <div
                  key={row.dim}
                  className={`grid grid-cols-[1.1fr_1fr_1fr] gap-3 px-5 py-3.5 text-[0.9rem] leading-[1.5] ${
                    i < COMPARE.length - 1 ? 'border-b border-line' : ''
                  }`}
                >
                  <span className="font-semibold text-text">{row.dim}</span>
                  <span className="text-text-dim/70">{row.standard}</span>
                  <span className="text-text">{row.medlink}</span>
                </div>
              ))}
            </div>

            {/* MedScan callout */}
            <div className="hud-corners relative flex flex-col gap-2 rounded-2xl border border-line bg-void-3/70 px-6 py-5 backdrop-blur-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal">
                MedScan AI
              </span>
              <p className="text-[0.95rem] leading-[1.6] text-text-dim">
                Prescription scanning with an LLM layer — handwriting in, structured medical
                data out.
              </p>
            </div>
          </Reveal>

          {/* WhatsApp phone mockup */}
          <Reveal delay={0.15} className="flex justify-center" >
            <div style={{ perspective: 1400 }}>
              <div style={{ transform: 'rotateY(-10deg) rotateX(4deg)', transformStyle: 'preserve-3d' }}>
                <TiltCard
                  max={7}
                  className="w-[300px] overflow-hidden rounded-[42px] border border-[rgba(180,214,224,0.25)] bg-[#0a1014] shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(30,194,122,0.12)]"
                >
                  {/* notch */}
                  <div className="flex justify-center pt-2.5 pb-1.5">
                    <div className="h-[22px] w-[110px] rounded-xl bg-void" />
                  </div>
                  {/* header */}
                  <div className="flex items-center gap-3 border-b border-white/10 bg-void-3/90 px-4 py-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green to-blue font-display text-[13px] font-semibold text-void">
                      K
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-text">Dr Khadilkar&rsquo;s Clinic</span>
                      <span className="flex items-center gap-1.5 text-[11px] text-green">
                        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-green" />
                        MedLink AI · online
                      </span>
                    </div>
                  </div>
                  {/* chat */}
                  <div
                    className="flex min-h-[340px] flex-col gap-2.5 px-3.5 pt-4 pb-6"
                    style={{
                      backgroundImage: 'radial-gradient(rgba(180,214,224,.05) 1px, transparent 1px)',
                      backgroundSize: '18px 18px',
                    }}
                  >
                    {CHAT.map((c, i) => (
                      <div
                        key={i}
                        className={`max-w-[86%] px-[13px] py-2.5 text-[13px] leading-[1.5] text-text ${
                          c.from === 'patient'
                            ? 'self-end rounded-[14px_14px_4px_14px] bg-[#0b4a3c]'
                            : 'self-start rounded-[14px_14px_14px_4px] border border-white/10 bg-void-3/95'
                        }`}
                      >
                        {c.text}
                        <div
                          className={`mt-1 text-[9.5px] text-text-dim/70 ${
                            c.from === 'patient' ? 'text-right' : ''
                          }`}
                        >
                          {c.time}
                        </div>
                      </div>
                    ))}
                    {/* typing indicator */}
                    <div className="flex gap-1 self-start rounded-[14px] border border-white/10 bg-void-3/95 px-3.5 py-[11px]">
                      {[0, 0.2, 0.4].map((d) => (
                        <span
                          key={d}
                          className="animate-dots h-1.5 w-1.5 rounded-full bg-text/60"
                          style={{ animationDelay: `${d}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
