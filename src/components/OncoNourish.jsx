import Reveal from './Reveal'
import TiltCard from './TiltCard'

const FLOW = [
  { role: 'Clinician', step: 'Create & intake', desc: 'Structured intake — cancer type & stage, regimen, comorbidities, diet pattern, intolerances.' },
  { role: 'Engine', step: 'Generate', desc: 'Rules engine sets targets & favour/avoid lists; the LLM turns them into regional meal plans.' },
  { role: 'Clinician', step: 'Review & approve', desc: 'Inspect every recommendation with its source rule, edit if needed, then approve.' },
  { role: 'Patient', step: 'Follow & print', desc: 'The patient opens their approved chart — or takes home a clean, printable PDF.' },
]

const PROFILE = [
  ['Disease & stage', 'Cancer type, stage and disease condition set the clinical baseline.'],
  ['Treatment & meds', 'Regimen, line of therapy and concomitant medications drive drug-nutrient cautions.'],
  ['Comorbidities', 'Diabetes, renal, cardiac or hepatic conditions adjust targets and constrain food lists.'],
  ['Anthropometrics', 'Age, sex, height and weight compute BMI and personalise protein & calorie targets.'],
  ['Diet pattern', 'Veg / non-veg and regional cuisine keep meals familiar and affordable.'],
  ['Intolerances', 'Lactose, gluten and a standard checklist filter the food library automatically.'],
]

const SAFETY = [
  'Clinician approval gate — no plan reaches a patient unreviewed.',
  'Supportive-care framing on every screen and export.',
  'Minimal, consented data with clinician/patient access separation.',
  'Drug-nutrient cautions traced to their source rule.',
]

export default function OncoNourish() {
  return (
    <section id="onconourish" className="relative border-t border-line py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-deep/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.25em] text-blue mb-6">
              02 — Clinician-Prescribed · AI-Guided
            </p>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] text-balance text-text">
              OncoNourish keeps patients
              <span className="text-gradient"> nourished enough to finish treatment.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-text-dim text-balance">
              OncoNourish turns an oncology patient&rsquo;s clinical profile into a personalised
              nutrition chart and day-by-day Indian meal plans — built on auditable clinical
              rules, reviewed and approved by their care team.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-blue">
              Supportive care only — no treat / cure / arrest claims
            </div>
          </Reveal>
        </div>

        {/* the flow */}
        <div className="mt-24">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-text-dim/60 mb-8">
              The flow — from profile to an approved plan
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {FLOW.map((f, i) => (
              <Reveal key={f.step} delay={i * 0.08} className="relative border-t-2 border-blue/25 pt-6">
                <span className="font-mono text-xs text-blue">0{i + 1} · {f.role}</span>
                <h3 className="mt-3 font-display text-base text-text">{f.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* profile inputs */}
        <div className="mt-24 grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-text-dim/60 mb-6">
              Personalisation profile
            </p>
            <h3 className="font-display text-2xl leading-[1.2] text-balance text-text">
              Six inputs drive every recommendation.
            </h3>
            <p className="mt-5 text-text-dim leading-relaxed">
              The intake form is the single source of truth. Each field maps to specific
              rules — change a field, and the plan changes with it.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2" style={{ perspective: 1000 }}>
            {PROFILE.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 0.05}>
                <TiltCard max={6} className="h-full rounded-xl border border-line bg-void-2/70 p-6 backdrop-blur-sm">
                  <h4 className="font-display text-sm text-text">{title}</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-dim">{desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* engine architecture */}
        <div className="mt-24 grid gap-14 md:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-text-dim/60 mb-6">
              Engine architecture
            </p>
            <h3 className="font-display text-2xl leading-[1.2] text-balance text-text">
              Auditable rules first.
              <br />
              The LLM only <span className="text-gradient">localises.</span>
            </h3>
            <p className="mt-5 text-text-dim leading-relaxed">
              Clinical decisions live in editable, evidence-based rules. The language model
              presents and translates them into plain, regional meal plans — it never
              invents clinical claims or overrides a rule.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-text-dim">
              <li className="flex gap-2.5"><span className="text-green">＋</span> Localises to region, cuisine and budget</li>
              <li className="flex gap-2.5"><span className="text-green">＋</span> Respects every intolerance &amp; avoid rule</li>
              <li className="flex gap-2.5"><span className="text-blue">－</span> Never adds a clinical claim of its own</li>
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="rounded-2xl border border-line bg-void-3 p-6 md:p-7 text-text font-mono text-[13px] leading-relaxed shadow-2xl">
            <div className="mb-4 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-blue/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
            </div>
            <p className="text-text-dim/50"># protein_target.rule.yaml</p>
            <p className="mt-2"><span className="text-teal">when</span>: cancer_stage in [<span className="text-green">"II"</span>, <span className="text-green">"III"</span>]</p>
            <p><span className="text-teal">and</span>: comorbidity != <span className="text-green">"renal"</span></p>
            <p className="mt-2"><span className="text-teal">set</span>:</p>
            <p className="pl-4">protein_g_per_kg: <span className="text-green">1.4</span></p>
            <p className="pl-4">source: <span className="text-green">"ESPEN 2021 §4.2"</span></p>
            <p className="pl-4">why: <span className="text-green">"preserve lean mass in therapy"</span></p>
          </Reveal>
        </div>

        {/* sample chart + safety */}
        <div className="mt-24 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-2xl border border-line bg-void-2/60 p-7 backdrop-blur-sm md:p-9">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-text-dim/60">Sample patient</p>
                <p className="mt-1 font-display text-base text-text">Anita K. — Breast · Stage II · AC-T</p>
              </div>
              <span className="rounded-full bg-gradient-to-r from-teal to-blue px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-white">Approved</span>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {[['1.4', 'g/kg protein'], ['1650', 'kcal energy'], ['2.2', 'L fluids']].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-white/[0.03] p-4 text-center border border-line">
                  <div className="font-display text-xl text-gradient">{v}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-text-dim/60">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-7 grid gap-6 sm:grid-cols-2 text-sm">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-green mb-2">Favour</p>
                <p className="text-text-dim leading-relaxed">Moong dal, paneer, curd (lactose-low), ragi, banana</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-blue mb-2">Limit</p>
                <p className="text-text-dim leading-relaxed">Raw salads, street food, grapefruit</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-line bg-void-3 p-7 md:p-9">
            <p className="font-mono text-[11px] uppercase tracking-wide text-text-dim/60 mb-5">
              Safety & compliance — guardrails that don&rsquo;t bend
            </p>
            <ul className="space-y-4">
              {SAFETY.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-text-dim">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-line pt-5 text-[12px] leading-relaxed text-text-dim/50">
              OncoNourish provides supportive nutritional guidance only. It is not a
              substitute for professional medical advice, diagnosis, or treatment. It does
              not treat, cure, or arrest cancer.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
