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

const MERLIN_APP_URL = 'https://merlin-indol.vercel.app/login'

const MERLIN_APP_POINTS = [
  'Grounded only in the documents your medical team has approved.',
  'Every claim cites its source document and page.',
  "If it isn't in the corpus, Merlin says so — it never guesses.",
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
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-text-dim">
            The Power of 4
          </span>
        </Reveal>

        {/* power of four */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1400 }}>
          {POWER_OF_FOUR.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard max={7} className="hud-corners h-full rounded-2xl border border-line bg-void-2/70 p-6 backdrop-blur-md transition-colors duration-200 hover:border-green/45">
                <div className="flex flex-col gap-3.5">
                  <span className={`font-mono text-[12px] tracking-[0.2em] ${p.color}`}>{p.n}</span>
                  <h3 className="font-display text-[1.05rem] font-medium text-text">{p.title}</h3>
                  <p className="text-[1.05rem] leading-[1.6] text-text-dim">{p.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Merlin app — live product writeup */}
        <Reveal>
          <div className="hud-corners relative rounded-3xl border border-line bg-void-2/70 backdrop-blur-md">
            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="flex flex-col gap-5">
                <span className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.25em] text-green">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-green" />
                  The Merlin app · live now
                </span>
                <h3 className="font-display text-2xl font-medium leading-[1.25] text-balance text-text md:text-[1.7rem]">
                  Answers you can cite, drawn only from{' '}
                  <span className="text-gradient">approved sources.</span>
                </h3>
                <p className="max-w-[560px] text-[1.05rem] leading-[1.65] text-text-dim">
                  The Power of 4, productised. Merlin&rsquo;s medical information assistant is
                  live today: medical teams ask in plain language, and Merlin answers strictly
                  from the evidence library their organisation has approved — never the open
                  internet — with the source behind every claim.
                </p>
                <ul className="flex flex-col gap-2.5">
                  {MERLIN_APP_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[1.02rem] leading-[1.55] text-text"
                    >
                      <span className="mt-[2px] font-mono text-[13px] text-green">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href={MERLIN_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-brand-lime via-brand-teal to-brand-blue px-7 py-3 text-[15px] font-semibold text-ink shadow-[0_0_24px_rgba(30,194,122,0.35)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_36px_rgba(30,194,122,0.55)]"
                  >
                    Open the Merlin app →
                  </a>
                  <span className="max-w-[320px] font-mono text-[11px] uppercase leading-[1.8] tracking-[0.14em] text-text-dim">
                    Access granted by your organisation — sign in with your registered work
                    email
                  </span>
                </div>
                <p className="text-[0.85rem] leading-[1.6] text-text-dim/70">
                  A proprietary product of OneAlphaMed Pvt Ltd. Not a substitute for
                  professional medical judgement.
                </p>
              </div>

              {/* cited-answer mock */}
              <Reveal delay={0.12}>
                <TiltCard
                  max={6}
                  className="rounded-2xl border border-line bg-void-3/80 p-6 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between border-b border-line pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-blue font-display text-[13px] font-semibold text-ink">
                        M
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-text">Merlin-AI</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                          Medical information assistant
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-green">
                      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-green" />
                      online
                    </span>
                  </div>
                  <div className="mt-5 flex flex-col gap-4">
                    <div className="w-[68%] self-end rounded-[14px_14px_4px_14px] bg-bubble-out px-4 py-3.5">
                      <div className="h-2 w-full rounded-full bg-text/20" />
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-text/20" />
                    </div>
                    <div className="w-[88%] self-start rounded-[14px_14px_14px_4px] border border-line bg-void-2/90 px-4 py-4">
                      <div className="h-2 w-full rounded-full bg-text/15" />
                      <div className="mt-2 h-2 w-full rounded-full bg-text/15" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-text/15" />
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-green/40 bg-green/10 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green">
                          ✓ Cited — source doc · page
                        </span>
                        <span className="rounded-full border border-teal/40 bg-teal/10 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-teal">
                          Approved corpus only
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* MedLink AI */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="flex flex-col gap-6">
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-green">
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
                <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-text-dim">
                  Standard Chatbots
                </span>
                <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-green">
                  MedLink AI
                </span>
              </div>
              {COMPARE.map((row, i) => (
                <div
                  key={row.dim}
                  className={`grid grid-cols-[1.1fr_1fr_1fr] gap-3 px-5 py-3.5 text-[1rem] leading-[1.5] ${
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
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-teal">
                MedScan AI
              </span>
              <p className="text-[1.05rem] leading-[1.6] text-text-dim">
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
                  className="w-[300px] overflow-hidden rounded-[42px] border border-line-strong bg-frame shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(30,194,122,0.12)]"
                >
                  {/* notch */}
                  <div className="flex justify-center pt-2.5 pb-1.5">
                    <div className="h-[22px] w-[110px] rounded-xl bg-void" />
                  </div>
                  {/* header */}
                  <div className="flex items-center gap-3 border-b border-line bg-void-3/90 px-4 py-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-blue font-display text-[14px] font-semibold text-ink">
                      K
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-text">Dr Khadilkar&rsquo;s Clinic</span>
                      <span className="flex items-center gap-1.5 text-[12px] text-green">
                        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-green" />
                        MedLink AI · online
                      </span>
                    </div>
                  </div>
                  {/* chat */}
                  <div
                    className="flex min-h-[340px] flex-col gap-2.5 px-3.5 pt-4 pb-6"
                    style={{
                      backgroundImage: 'radial-gradient(var(--color-dot-pattern) 1px, transparent 1px)',
                      backgroundSize: '18px 18px',
                    }}
                  >
                    {CHAT.map((c, i) => (
                      <div
                        key={i}
                        className={`max-w-[86%] px-[13px] py-2.5 text-[14px] leading-[1.5] text-text ${
                          c.from === 'patient'
                            ? 'self-end rounded-[14px_14px_4px_14px] bg-bubble-out'
                            : 'self-start rounded-[14px_14px_14px_4px] border border-line bg-void-3/95'
                        }`}
                      >
                        {c.text}
                        <div
                          className={`mt-1 text-[10.5px] text-text-dim/70 ${
                            c.from === 'patient' ? 'text-right' : ''
                          }`}
                        >
                          {c.time}
                        </div>
                      </div>
                    ))}
                    {/* typing indicator */}
                    <div className="flex gap-1 self-start rounded-[14px] border border-line bg-void-3/95 px-3.5 py-[11px]">
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
