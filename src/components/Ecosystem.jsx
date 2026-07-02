import Reveal from './Reveal'
import TiltCard from './TiltCard'
import CountUp from './CountUp'

const SERVICES = [
  { tag: 'STRATEDIA', title: 'Strategic Projects & Digital Content', desc: 'Brand strategy, market positioning, and patient-awareness campaigns.' },
  { tag: 'EDUVENT', title: 'CME Events & Endorsement', desc: 'Global expert liaison, certification and academic programs at scale.' },
  { tag: 'CLINOPS', title: 'Clinical & Medical Affairs', desc: 'Round tables, RWE studies, consensus guidelines, publication support.' },
  { tag: 'MEDEXPO', title: 'Stalls, Booths & Congress', desc: 'Booth design, symposia, experiential tech, congress integration.' },
  { tag: 'CONNECT', title: 'KOL & KBL Management', desc: 'UCPMP-compliant engagement via Innomed Portal and MedInsights.' },
  { tag: 'INNOVATION LABS', title: 'AI & Robotics Solutions', desc: 'Humanoid robots for medical education — a first in Indian pharma.' },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-green mb-6">
            03 — The Ecosystem
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.15] text-balance text-text">
            One healthcare group, six ways to move pharma forward.
          </h2>
          <p className="mt-6 text-text-dim leading-relaxed">
            AlphaMed AI sits inside a wider OneAlphaMed ecosystem — evidence generation,
            HCP engagement, and logistics — all built for pharmaceutical and diagnostic
            companies.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.tag} delay={i * 0.06}>
              <TiltCard className="hud-corners group h-full rounded-2xl border border-line bg-void-2/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-teal/40">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-gradient">{s.tag}</p>
                <h3 className="mt-4 font-display text-base leading-snug text-text">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-dim">{s.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
          {[
            ['15,000', 'HCPs enrolled, UCLH & P&G Health e-learning'],
            ['17+', 'Countries engaged across Hetero global programs'],
            ['150+', 'Oncologists at the IOC forum, 16+ expert speakers'],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-3xl text-gradient">
                <CountUp value={v} />
              </div>
              <div className="mt-2 text-sm text-text-dim leading-relaxed">{l}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
