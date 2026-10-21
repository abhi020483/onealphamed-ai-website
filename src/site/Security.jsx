import { rules } from './content'
import { Engagement } from './Home'
import { Link } from './router'
import { Check, Grad, Grid, Section, Stack, Tag } from './ui'

const PRODUCT_CONTROLS = [
  {
    name: 'Merlin AI',
    points: [
      'Answers only from the evidence library your medical team approves; if the answer is not there, it says so.',
      'Every answer cites its source document and page.',
      'Deployed inside your perimeter, with every response kept in an audit trail.',
    ],
  },
  {
    name: 'AI Sales Voice Agent',
    points: [
      'Explicit opt-in, and Do-Not-Disturb preferences are honoured (TRAI consent).',
      'Every message comes from content that has passed medical-legal-regulatory review.',
      'All calls are recorded and auditable; designed around UCPMP and the DPDP Act 2023.',
    ],
  },
  {
    name: 'OncoNourish & Arogya',
    points: [
      'A clinician approves every nutrition plan before the patient sees it.',
      'Allergen exclusions and dose rules are hard blocks, not suggestions.',
      'Supportive-care framing only — never treat, cure or arrest claims.',
    ],
  },
  {
    name: 'RWE Platform',
    points: [
      'Full audit log, maker-checker payments and e-consent.',
      'Prescription images in private storage with signed URLs; personal data masked.',
      'Investigators appear to sponsors only as pseudonymous codes.',
    ],
  },
  {
    name: 'SkinScan & PathView 3D',
    points: [
      'SkinScan analyses the photo on the device; only scores and measurements reach the server, and stored photos are deleted after 90 days.',
      'PathView 3D records usage only — no patient data — and its public demo records nothing.',
    ],
  },
]

export default function Security() {
  return (
    <div>
      <section style={{ padding: '72px 24px 24px' }}>
        <Stack gap={20} className="oa-wrap" style={{ maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="oa-kicker" style={{ color: 'var(--c-green)' }}>Security &amp; compliance</span>
          <h1 className="oa-h1">Built for pharma's <Grad>IT, security and compliance</Grad> reviews.</h1>
          <p className="oa-lead">
            Generative AI in pharma fails on trust, not capability. These are the rules every OneAlphaMed AI product is
            built under, and the specific controls in each product.
          </p>
        </Stack>
      </section>

      <Section>
        <Stack gap={28} className="oa-wrap">
          <Tag tone="teal">The four rules</Tag>
          <Grid min={260}>
            {rules.map((r) => (
              <div key={r.n} className="oa-card" style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 10, borderTop: `3px solid ${r.color}` }}>
                <h2 className="oa-h3" style={{ fontSize: '1.15rem' }}>{r.title}</h2>
                <p className="oa-body">{r.desc}</p>
              </div>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section tint>
        <Stack gap={28} className="oa-wrap">
          <Tag tone="blue">Controls by product</Tag>
          <Grid min={320}>
            {PRODUCT_CONTROLS.map((p) => (
              <div key={p.name} className="oa-card" style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h2 className="oa-h3" style={{ fontSize: '1.15rem' }}>{p.name}</h2>
                {p.points.map((pt) => <Check key={pt}>{pt}</Check>)}
              </div>
            ))}
          </Grid>
        </Stack>
      </Section>

      <Engagement />

      <section style={{ padding: '72px 24px 96px' }}>
        <Stack gap={18} className="oa-wrap oa-card" style={{ maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', padding: 'clamp(24px,4vw,40px)' }}>
          <h2 className="oa-h3" style={{ fontSize: '1.5rem' }}>Running a vendor security review?</h2>
          <p className="oa-lead">
            Tell us what your IT, security or procurement team needs — hosting options, data residency, your
            security questionnaire or a data-processing agreement — and we'll respond within 1 business day.
          </p>
          <div>
            <Link to="/contact" className="oa-btn oa-btn--sm">Contact us about a security review →</Link>
          </div>
        </Stack>
      </section>
    </div>
  )
}
