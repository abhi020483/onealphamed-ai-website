import Reveal from './Reveal'
import TiltCard from './TiltCard'

const FLOW = [
  { step: 'Create & intake', desc: 'Clinician creates the patient and captures the intake profile.' },
  { step: 'Generate', desc: 'The rules engine drafts a personalised nutrition plan.' },
  { step: 'Review & approve', desc: 'Nothing reaches the patient until the clinician signs off.' },
  { step: 'Follow & print', desc: 'Patient follows the plan — printable, trackable.' },
]

const PROFILE = [
  'Cancer type & stage',
  'Treatment phase',
  'Diet pattern',
  'Allergies & intolerances',
  'Anthropometrics',
  'Symptom burden',
]

const GUARDRAILS = [
  'Supportive-care framing enforced in every output',
  'Allergen exclusions are hard blocks, not suggestions',
  'Clinician approval gates every plan release',
  'No treat / cure / arrest language — ever',
]

const STATS = [
  ['1.4 g/kg', 'Protein target'],
  ['1650 kcal', 'Daily energy'],
  ['2.2 L', 'Fluids'],
]

export default function OncoNourish() {
  return (
    <section
      id="onconourish"
      className="relative py-28 md:py-[120px]"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(var(--color-tint-rgb),.35) 20%, rgba(var(--color-tint-rgb),.35) 80%, transparent)',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 md:px-10">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
            02 — Clinician-Prescribed · AI-Guided
          </span>
          <h2 className="max-w-[900px] font-display text-3xl font-medium leading-[1.18] text-balance text-text md:text-[2.6rem]">
            OncoNourish keeps patients{' '}
            <span className="text-gradient">nourished enough to finish treatment.</span>
          </h2>
          <div className="inline-flex items-center gap-2.5 self-start rounded-lg border border-brand-teal/50 px-4 py-2" style={{ backgroundColor: 'rgba(var(--color-tint-rgb), 0.7)' }}>
            <span className="h-[7px] w-[7px] bg-brand-teal shadow-[0_0_8px_#0aa88f]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
              Supportive care only — no treat / cure / arrest claims
            </span>
          </div>
        </Reveal>

        {/* 4-step flow */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1400 }}>
          {FLOW.map((f, i) => (
            <Reveal key={f.step} delay={i * 0.08} className="relative">
              <TiltCard max={7} className="h-full rounded-2xl border border-line bg-void-2/70 p-6 backdrop-blur-md transition-colors duration-200 hover:border-teal/50">
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[22px] text-teal">0{i + 1}</span>
                  <h3 className="font-display text-base font-medium text-text">{f.step}</h3>
                  <p className="text-[0.9rem] leading-[1.6] text-text-dim">{f.desc}</p>
                </div>
              </TiltCard>
              {i < FLOW.length - 1 && (
                <span className="absolute -right-[17px] top-1/2 z-10 hidden -translate-y-1/2 text-lg text-teal lg:block">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </div>

        {/* profile inputs */}
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-dim">
            Profile inputs
          </span>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
            {PROFILE.map((p) => (
              <div
                key={p}
                className="rounded-xl border border-line bg-void-2/60 px-3.5 py-4 text-center text-[0.85rem] text-text transition-all duration-200 hover:-translate-y-[3px] hover:border-teal"
              >
                {p}
              </div>
            ))}
          </div>
        </Reveal>

        {/* rules engine + patient chart + guardrails */}
        <div className="grid gap-5 lg:grid-cols-2" style={{ perspective: 1400 }}>
          <Reveal className="overflow-hidden rounded-2xl border border-line bg-void-3">
            <div className="flex items-center justify-between border-b border-line px-[18px] py-3">
              <span className="font-mono text-[11px] tracking-[0.15em] text-teal">
                protein_target.rule.yaml
              </span>
              <span className="font-mono text-[10px] tracking-[0.15em] text-text-dim/60">
                Rules engine
              </span>
            </div>
            <div className="flex flex-col px-[22px] py-5 font-mono text-[13px] leading-[1.8] text-text">
              <span className="text-text-dim/60"># evidence-locked nutrition rule</span>
              <span><span className="text-lime">rule:</span> protein_target</span>
              <span><span className="text-lime">source:</span> ESPEN 2021 §4.2</span>
              <span><span className="text-lime">when:</span></span>
              <span className="pl-[18px]"><span className="text-teal">phase:</span> active_treatment</span>
              <span><span className="text-lime">then:</span></span>
              <span className="pl-[18px]"><span className="text-teal">protein_g_per_kg:</span> 1.2–1.5</span>
              <span className="pl-[18px]"><span className="text-teal">energy_check:</span> required</span>
              <span className="pl-[18px]"><span className="text-teal">review:</span> clinician_approval</span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <TiltCard max={7} className="hud-corners rounded-2xl border border-line bg-void-2/70 px-6 py-[22px] backdrop-blur-md">
                <div className="mb-[18px] flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">
                    Sample patient — Anita K.
                  </span>
                  <span className="rounded-full border border-brand-lime/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-lime">
                    Clinician approved
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3.5">
                  {STATS.map(([v, l]) => (
                    <div key={l} className="flex flex-col gap-1">
                      <span className="text-gradient font-display text-[1.3rem]">{v}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal">
                        {l}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.16} className="flex flex-col gap-3 rounded-2xl border border-line bg-void-2/70 px-6 py-[22px] backdrop-blur-md">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">
                Safety guardrails
              </span>
              {GUARDRAILS.map((g) => (
                <div key={g} className="flex items-baseline gap-2.5 text-[0.92rem] leading-[1.55] text-text/75">
                  <span className="font-mono text-green">✓</span>
                  {g}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
