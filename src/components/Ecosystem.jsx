import Reveal from './Reveal'
import TiltCard from './TiltCard'
import CountUp from './CountUp'

const COLORS = ['text-lime', 'text-green', 'text-teal', 'text-blue']

const SERVICES = ['STRATEDIA', 'EDUVENT', 'CLINOPS', 'MEDEXPO', 'CONNECT', 'INNOVATION LABS']

const STATS = [
  ['15,000+', 'HCPs engaged'],
  ['17+', 'Countries'],
  ['150+', 'Oncologists'],
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-28 md:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-6 md:px-10">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue">
            03 — Ecosystem
          </span>
          <h2 className="max-w-[860px] font-display text-3xl font-medium leading-[1.18] text-balance text-text md:text-[2.6rem]">
            One healthcare group, <span className="text-gradient">six ways</span> to move
            pharma forward.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1400 }}>
          {SERVICES.map((name, i) => (
            <Reveal key={name} delay={i * 0.06}>
              <TiltCard
                max={7}
                className="hud-corners flex h-full items-center justify-between gap-3 rounded-2xl border border-line bg-void-2/70 px-7 py-8 backdrop-blur-md transition-colors duration-200 hover:border-lime/50"
              >
                <div className="flex flex-col gap-2">
                  <span className={`font-mono text-[10.5px] tracking-[0.2em] ${COLORS[i % 4]}`}>
                    ECO / 0{i + 1}
                  </span>
                  <span className="font-display text-[1.1rem] font-medium text-text">{name}</span>
                </div>
                <span className="text-lg text-text-dim/50">↗</span>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="grid gap-8 border-t border-line pt-12 sm:grid-cols-3">
          {STATS.map(([v, l]) => (
            <div key={l} className="flex flex-col items-center gap-2">
              <span className="text-gradient font-display text-[2.4rem] font-medium">
                <CountUp value={v} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal">
                {l}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
