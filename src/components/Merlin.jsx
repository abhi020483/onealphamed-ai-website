import Reveal from './Reveal'
import TiltCard from './TiltCard'

const POWER_OF_FOUR = [
  {
    n: '01',
    title: 'Generative AI',
    desc: 'Reasoning and summarisation tuned for medical language, not generic chat.',
  },
  {
    n: '02',
    title: 'RAG',
    desc: 'Retrieval-augmented generation pulling from credible journals and internal captive databases.',
  },
  {
    n: '03',
    title: 'Label Info',
    desc: 'Product-specific, regulator-approved label information available on demand.',
  },
  {
    n: '04',
    title: 'Air Gap',
    desc: 'Confidential by design — HIPAA and EU GDPR aligned, nothing feeds back into the general model.',
  },
]

const COMPARE = [
  {
    dim: 'Underlying tech',
    standard: 'Rule-based, decision trees, keyword matching',
    medlink: 'LLM-powered, deep learning & NLP',
  },
  {
    dim: 'Context',
    standard: 'Struggles across multi-turn conversation',
    medlink: 'Holds context through complex, multi-turn chats',
  },
  {
    dim: 'Adaptability',
    standard: 'Rigid — user must match bot logic',
    medlink: 'Adapts dynamically to varied, messy input',
  },
  {
    dim: 'Scope',
    standard: 'Built for one narrow task',
    medlink: 'Versatile across topics and complex problems',
  },
]

const CHAT = [
  { from: 'patient', text: 'Why am I feeling numbness at night?' },
  { from: 'bot', text: "That can be linked to your nerve medication. Let's check your current dosage and timing together — Dr Khadilkar's guidance is attached below." },
  { from: 'patient', text: 'What foods should I avoid with fatty liver?' },
]

export default function Merlin() {
  return (
    <section id="merlin" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-teal mb-6">
            01 — Flagship Product
          </p>
          <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] text-balance text-text">
            Merlin AI: one stop, customisable
            <span className="text-gradient"> medical intelligence.</span>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-text-dim text-balance">
            A cutting-edge AI platform that transforms how pharmaceutical companies and
            healthcare professionals access and leverage medical information — reliable,
            evidence-based insights sourced from trusted journals, Google Scholar, and
            internal captive databases.
          </p>
        </Reveal>

        {/* power of four */}
        <div className="mt-16 grid gap-5 md:grid-cols-4" style={{ perspective: 1000 }}>
          {POWER_OF_FOUR.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="hud-corners h-full rounded-2xl border border-line bg-void-2/80 p-7 backdrop-blur-sm md:p-8">
                <span className="font-mono text-xs text-green">{p.n}</span>
                <h3 className="mt-5 font-display text-lg text-text">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{p.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* MedLink AI */}
        <div className="mt-28 grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-green mb-5">
              MedLink AI · WhatsApp Channel
            </p>
            <h3 className="font-display text-2xl md:text-[1.9rem] leading-[1.2] text-balance text-text">
              Conversational.
              <br />
              Contextual.
              <br />
              <span className="text-gradient">Emotionally intelligent.</span>
            </h3>
            <p className="mt-6 text-text-dim leading-relaxed">
              An agentic AI deployed over WhatsApp — the bridge between a doctor and their
              own patients, using the interface patients already trust. MedLink AI maintains
              each doctor&rsquo;s unique communication style, handles typos and unclear
              questions with ease, and answers clearly, accurately, and always with empathy.
            </p>

            {/* phone mockup */}
            <TiltCard max={6} className="mt-10 max-w-sm rounded-[28px] border border-line bg-void-2/90 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
              <div className="mb-3 flex items-center gap-2 border-b border-line pb-3 px-1">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green to-blue flex items-center justify-center font-mono text-xs text-void">DK</div>
                <div>
                  <div className="text-sm font-medium text-text">Dr Khadilkar&rsquo;s Clinic</div>
                  <div className="text-[11px] text-teal">Online · via MedLink AI</div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 px-1">
                {CHAT.map((c, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                      c.from === 'patient'
                        ? 'self-start bg-white/[0.06] text-text/90 rounded-tl-sm'
                        : 'self-end bg-gradient-to-br from-teal/80 to-blue/80 text-white rounded-tr-sm'
                    }`}
                  >
                    {c.text}
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-void-2 font-mono text-[11px] uppercase tracking-wide text-text-dim">
                    <th className="px-5 py-4 text-left font-medium">Dimension</th>
                    <th className="px-5 py-4 text-left font-medium">Standard Chatbots</th>
                    <th className="px-5 py-4 text-left font-medium text-teal">MedLink AI</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row.dim} className="border-t border-line align-top">
                      <td className="px-5 py-5 font-display text-sm text-text">{row.dim}</td>
                      <td className="px-5 py-5 text-text-dim/70 leading-snug">{row.standard}</td>
                      <td className="px-5 py-5 text-text-dim leading-snug">{row.medlink}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MedScan AI callout */}
            <div className="mt-8 rounded-2xl border border-line bg-gradient-to-br from-void-2 to-void p-7">
              <p className="font-mono text-[11px] uppercase tracking-wide text-green mb-3">
                Also in the Merlin family — MedScan AI
              </p>
              <p className="text-text-dim leading-relaxed">
                Scans prescriptions, stores them in structured text, and layers LLM
                capabilities over molecules and patient information — turning paperwork
                into productivity for every HCP it touches.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
