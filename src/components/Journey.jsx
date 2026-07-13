import Reveal from './Reveal'
import TiltCard from './TiltCard'

const PHASES = [
  {
    label: 'Phase One',
    dot: '#86d13f',
    textColor: 'text-lime',
    text: 'Building & optimising medical information query systems.',
    chip: 'MERLIN',
  },
  {
    label: 'Phase Two',
    dot: '#0aa88f',
    textColor: 'text-teal',
    text: 'Building HCP-focussed intelligent prescription digitisation with LLMs.',
    chip: 'MEDSCAN',
  },
  {
    label: 'Phase Three',
    dot: '#2d7fd4',
    textColor: 'text-blue',
    text: 'Improving sales–doctor interactions & building efficient Gen AI patient programs.',
    chip: null,
  },
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-28 md:py-[120px]"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(10,26,36,.3) 25%, rgba(10,26,36,.3) 75%, transparent)',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 md:px-10">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-lime">
            06 — The Journey
          </span>
          <h2 className="max-w-[920px] font-display text-3xl font-medium leading-[1.18] text-balance text-text md:text-[2.6rem]">
            Our product roadmap progressively{' '}
            <span className="text-gradient">deepens AI integration</span> — from information
            query systems to patient interactions.
          </h2>
        </Reveal>

        <div className="relative">
          {/* timeline rail */}
          <div
            className="absolute left-[10%] right-[10%] top-[7px] hidden h-[2px] lg:block"
            style={{
              background: 'linear-gradient(90deg,#86d13f,#0aa88f 50%,#2d7fd4 100%)',
              boxShadow: '0 0 14px rgba(30,194,122,.45)',
            }}
          />
          <div className="grid gap-6 lg:grid-cols-3" style={{ perspective: 1400 }}>
            {PHASES.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.12} className="flex flex-col items-center">
                <div
                  className="h-4 w-4 animate-blink rounded-full border-[3px] border-void"
                  style={{ background: p.dot, boxShadow: `0 0 16px ${p.dot}`, animationDelay: `${i * 0.5}s` }}
                />
                <div className="h-7 w-px border-l border-dashed" style={{ borderColor: `${p.dot}80` }} />
                <TiltCard max={7} className="hud-corners flex w-full flex-col gap-3.5 rounded-2xl border border-line bg-void-2/70 px-[26px] py-7 backdrop-blur-md">
                  <span className={`font-mono text-[12px] uppercase tracking-[0.25em] ${p.textColor}`}>
                    {p.label}
                  </span>
                  <p className="text-[1rem] leading-[1.65] text-text">{p.text}</p>
                  {p.chip && (
                    <span
                      className={`self-start rounded-full border px-3 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.2em] ${p.textColor}`}
                      style={{ borderColor: `${p.dot}66` }}
                    >
                      {p.chip}
                    </span>
                  )}
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="flex justify-center">
          <div className="flex max-w-[760px] flex-col items-baseline gap-3 rounded-2xl border border-line bg-void-2/70 px-8 py-[22px] backdrop-blur-md sm:flex-row sm:gap-4">
            <span className="whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.25em] text-green">
              Our vision
            </span>
            <p className="text-[1rem] leading-[1.65] text-text/75 text-balance">
              To transform the Pharmaceutical and Healthcare Industry with cutting-edge
              Generative AI solutions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
