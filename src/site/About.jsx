import { OFFICES, edges, services } from './content'
import JourneyCards from './Journey'
import { Grad, Grid, Stack } from './ui'

const PILLARS = [
  { label: 'Our vision', color: 'var(--c-green)', text: 'To transform the Pharmaceutical and Healthcare Industry with cutting-edge Generative AI solutions.' },
  { label: 'Our mission', color: 'var(--c-teal)', text: 'We fuse clinical rigor with digital creativity to build the future of healthcare communication — AI-driven automation and bespoke scientific solutions that help health leaders scale their impact.' },
  { label: 'Where we operate', color: 'var(--c-blue)', text: OFFICES },
]

const STATS = [
  { value: '15,000+', label: 'HCPs engaged' },
  { value: '17+', label: 'Countries' },
  { value: '150+', label: 'Oncologists on OncoNourish' },
]

const tint = (a, b) => ({ background: `linear-gradient(180deg,transparent,rgba(224,240,244,0.5) ${a}%,rgba(224,240,244,0.5) ${b}%,transparent)` })

export default function About() {
  return (
    <div>
      <section style={{ padding: '80px 24px 56px' }}>
        <Grid min={300} gap={48} className="oa-wrap" style={{ alignItems: 'start' }}>
          <Stack gap={20}>
            <span className="oa-label" style={{ color: 'var(--c-green)' }}>About OneAlphaMed AI</span>
            <h1 className="oa-h1">Built inside pharma. <Grad>Engineered for evidence.</Grad></h1>
            <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--ink-2)' }}>
              OneAlphaMed AI is the generative AI arm of the OneAlphaMed group — a pharma-focused marketing and medical
              communications partner working across India, Southeast Asia and global markets. The products on this site
              were born from real brand, medical affairs and patient-support programs, which is why they ship with the
              compliance architecture most AI vendors bolt on afterwards.
            </p>
          </Stack>
          <div style={{ display: 'grid', gap: 16 }}>
            {PILLARS.map((p) => (
              <div key={p.label} className="oa-card" style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span className="oa-label" style={{ color: p.color }}>{p.label}</span>
                <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </Grid>
      </section>

      <section style={{ padding: '56px 24px', ...tint(15, 85) }}>
        <Stack gap={36} className="oa-wrap">
          <Stack gap={14}>
            <span className="oa-label" style={{ color: 'var(--c-teal)' }}>Why we lead</span>
            <h2 className="oa-h2" style={{ maxWidth: 860 }}>Three capabilities most vendors keep separate, under one brief.</h2>
          </Stack>
          <Grid min={280}>
            {edges.map((e) => (
              <div key={e.title} className="oa-card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12, borderTop: `3px solid ${e.dot}` }}>
                <h3 className="oa-h3" style={{ fontSize: '1.2rem' }}>{e.title}</h3>
                <p className="oa-body">{e.desc}</p>
              </div>
            ))}
          </Grid>
        </Stack>
      </section>

      <section id="ecosystem" className="oa-sec" style={{ scrollMarginTop: 90 }}>
        <Stack gap={40} className="oa-wrap">
          <Stack gap={14}>
            <span className="oa-label" style={{ color: 'var(--c-blue)' }}>Ecosystem</span>
            <h2 className="oa-h2" style={{ maxWidth: 860 }}>One healthcare group, <Grad>six ways</Grad> to move pharma forward.</h2>
          </Stack>
          <Grid min={260}>
            {services.map((s) => (
              <div
                key={s.n}
                className="oa-card oa-corners oa-hover-lime"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '30px 28px', transition: 'border-color .2s' }}
              >
                <Stack gap={6}>
                  <span className="oa-mono" style={{ fontSize: 11.5, letterSpacing: '0.12em', color: s.color }}>{s.n}</span>
                  <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.2rem' }}>{s.name}</span>
                </Stack>
                <span style={{ fontSize: 18, color: 'rgba(15,36,48,0.4)' }} aria-hidden="true">↗</span>
              </div>
            ))}
          </Grid>
          <Grid min={200} gap={32} style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 40 }}>
            {STATS.map((s) => (
              <Stack key={s.label} gap={8} style={{ alignItems: 'center', textAlign: 'center' }}>
                <span className="oa-grad" style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '2.4rem' }}>{s.value}</span>
                <span className="oa-label" style={{ color: 'var(--c-teal)' }}>{s.label}</span>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </section>

      <section className="oa-sec" style={tint(25, 75)}>
        <Stack gap={36} className="oa-wrap">
          <Stack gap={14}>
            <span className="oa-label" style={{ color: 'var(--c-lime)' }}>The journey</span>
            <h2 className="oa-h2" style={{ maxWidth: 920 }}>From information query systems to patient interactions.</h2>
          </Stack>
          <JourneyCards />
        </Stack>
      </section>
    </div>
  )
}
