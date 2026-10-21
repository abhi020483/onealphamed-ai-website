import { useEffect, useState } from 'react'
import icon from '../assets/alphamed-icon.webp'
import {
  CONTACT_EMAIL, OFFICES, STATUS_LEGEND, audiences, engagement, faqs, partnerNames, partnerSizes, partners, productById, products, rules,
} from './content'
import { Link } from './router'
import { Dot, Grad, Grid, Section, Stack, StatusPill, Tag, Visual } from './ui'
import { visuals } from './visuals'

const partnerLogos = import.meta.glob('../assets/partners/*.webp', { eager: true, import: 'default' })
const logoFor = (key) => partnerLogos[`../assets/partners/${key}.webp`]

const STATS = [
  { value: '15,000+', label: 'HCPs engaged across programs' },
  { value: '17+', label: 'Countries' },
  { value: '7', label: 'Products live or in pilot' },
]

// step 0: question · 1: typing · 2: answer · 3: answer + citations
const STEP_MS = [1000, 1300, 1000, 4500]

function MerlinDemo() {
  const [step, setStep] = useState(3)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    let current = 3
    let timer = setTimeout(function tick() {
      current = (current + 1) % 4
      setStep(current)
      timer = setTimeout(tick, STEP_MS[current])
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <figure className="oa-demo" aria-label="Sample: Merlin AI answering a medical-information question with a citation">
      <div className="oa-demo-head">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="oa-demo-avatar" aria-hidden="true">M</span>
          <Stack gap={2}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>Merlin AI</span>
            <span className="oa-demo-sub">Medical information assistant</span>
          </Stack>
        </div>
        <span className="oa-demo-sub" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--c-green)' }}>
          <Dot color="#0b7a4b" />Online
        </span>
      </div>
      <div className="oa-demo-body" aria-live="off">
        <div className="oa-bubble oa-bubble--q">
          What is the recommended dose adjustment in moderate renal impairment?
        </div>
        {step === 1 && (
          <div className="oa-bubble oa-bubble--a oa-typing" aria-hidden="true"><span /><span /><span /></div>
        )}
        {step >= 2 && (
          <div className="oa-bubble oa-bubble--a">
            Per the approved prescribing information, reduce the starting dose by 50% when CrCl is 30–59 mL/min and
            reassess at week 2.
            <div className={`oa-demo-cites${step === 3 ? ' is-in' : ''}`}>
              <span className="oa-cite">✓ Source: SmPC §4.2, page 6</span>
              <span className="oa-cite oa-cite--teal">Approved library only</span>
            </div>
          </div>
        )}
      </div>
      <figcaption className="oa-demo-caption">Sample question with an illustrative answer.</figcaption>
    </figure>
  )
}

function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 24px 64px' }}>
      <div className="oa-sweep" />
      <Grid min={320} gap={56} className="oa-wrap" style={{ alignItems: 'center' }}>
        <Stack gap={26}>
          <p className="oa-chip">
            <Dot size={7} color="#1ec27a" glow />
            <span>Built exclusively for pharma &amp; healthcare</span>
          </p>
          <h1
            style={{
              margin: 0, fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(2.5rem,5.2vw,4.2rem)',
              lineHeight: 1.05, letterSpacing: '-0.02em', textWrap: 'balance',
            }}
          >
            Building <Grad>AI Solutions</Grad> for the Global Pharma Industry
          </h1>
          <p style={{ margin: 0, maxWidth: 560, fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--ink-2)', textWrap: 'pretty' }}>
            Answer doctors' questions from your approved literature, keep doctors engaged between rep visits, and
            support patients between appointments — with AI that stays inside your compliance rules.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
            <Link to="/contact" className="oa-btn">Book a demo →</Link>
            <Link to="/products" className="oa-btn-ghost">Explore the products</Link>
          </div>
        </Stack>
        <MerlinDemo />
      </Grid>

      <Grid min={220} gap={0} className="oa-wrap oa-stats">
        {STATS.map((s) => (
          <div key={s.label} className="oa-stat">
            <span className="oa-grad oa-stat-value">{s.value}</span>
            <span className="oa-stat-label">{s.label}</span>
          </div>
        ))}
        <div className="oa-stat" style={{ justifyContent: 'center' }}>
          <span className="oa-stat-kicker">Where we operate</span>
          <span className="oa-stat-label" style={{ lineHeight: 1.5 }}>{OFFICES}</span>
        </div>
      </Grid>
    </section>
  )
}

function TrustStrip() {
  return (
    <section style={{ padding: '40px 24px 24px' }} aria-labelledby="trust-h">
      <Stack gap={22} className="oa-wrap" style={{ alignItems: 'center' }}>
        <h2 id="trust-h" className="oa-kicker" style={{ textAlign: 'center' }}>
          The OneAlphaMed group works with pharma leaders including
        </h2>
        <ul className="oa-logos">
          {partners.map((key) => (
            <li key={key}>
              <img src={logoFor(key)} alt={partnerNames[key]} width={partnerSizes[key][0] / 2} height={partnerSizes[key][1] / 2} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </Stack>
    </section>
  )
}

function WhoWeHelp() {
  return (
    <Section>
      <Stack gap={36} className="oa-wrap">
        <Stack gap={14}>
          <Tag tone="green">Who we help</Tag>
          <h2 className="oa-h2" style={{ maxWidth: 820 }}>
            AI for the teams that carry <Grad>medical evidence</Grad> to doctors and patients.
          </h2>
        </Stack>
        <Grid min={280}>
          {audiences.map((a) => (
            <div key={a.key} className="oa-card oa-corners" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span aria-hidden="true" style={{ width: 28, height: 3, borderRadius: 2, background: a.color }} />
              <h3 className="oa-h3" style={{ fontSize: '1.3rem' }}>{a.title}</h3>
              <p className="oa-body">{a.desc}</p>
              <ul className="oa-chiplinks">
                {a.products.map((id) => (
                  <li key={id}><Link to={`/products/${id}`} className="oa-chiplink">{productById[id].name} →</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>
      </Stack>
    </Section>
  )
}

function ProductGrid() {
  return (
    <Section tint>
      <Stack gap={32} className="oa-wrap">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16 }}>
          <Stack gap={14}>
            <Tag tone="blue">The products</Tag>
            <h2 className="oa-h2">Seven products. One evidence engine.</h2>
            <p className="oa-legend">{STATUS_LEGEND}</p>
          </Stack>
          <Link to="/products" style={{ fontWeight: 700 }}>Full product detail →</Link>
        </div>
        <Grid min={260}>
          {products.map((pr) => (
            <article key={pr.id} className="oa-card oa-product-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <span className="oa-kind" style={{ color: pr.color }}>{pr.kind}</span>
                <StatusPill status={pr.status} />
              </div>
              <h3 className="oa-h3" style={{ fontSize: '1.3rem' }}>
                <Link to={`/products/${pr.id}`} className="oa-card-link">{pr.name}</Link>
              </h3>
              <p className="oa-body">{pr.tagline}</p>
              <div className="oa-card-actions">
                <span className="oa-learn" aria-hidden="true">Learn more →</span>
                {pr.demoUrl && (
                  <a href={pr.demoUrl} target="_blank" rel="noopener noreferrer" className="oa-try">
                    {pr.demoLabel} ↗<span className="oa-sr"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </Grid>
      </Stack>
    </Section>
  )
}

function HowWeBuild() {
  return (
    <Section>
      <Grid min={300} gap={48} className="oa-wrap" style={{ alignItems: 'start' }}>
        <Stack gap={14}>
          <Tag tone="teal">How we build</Tag>
          <h2 className="oa-h2">Four rules every OneAlphaMed product is built under.</h2>
          <p className="oa-lead">
            Generative AI in pharma fails on trust, not capability. These rules are built into the software, so they
            hold before a single answer reaches a doctor or a patient.
          </p>
          <Link to="/security" style={{ alignSelf: 'flex-start', marginTop: 8, fontWeight: 700 }}>Security &amp; compliance in detail →</Link>
          <div style={{ position: 'relative', height: 300, borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)', marginTop: 16 }}>
            <Visual visual={visuals.engine} alt="" sizes="(max-width: 760px) 100vw, 560px" />
          </div>
        </Stack>
        <ol className="oa-rules">
          {rules.map((r) => (
            <li key={r.n} className="oa-card" style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 14, borderRadius: 14, padding: '20px 22px' }}>
              <span className="oa-mono" aria-hidden="true" style={{ fontSize: 20, color: r.color }}>{r.n}</span>
              <Stack gap={6}>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800 }}>{r.title}</h3>
                <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>{r.desc}</p>
              </Stack>
            </li>
          ))}
        </ol>
      </Grid>
    </Section>
  )
}

export function Engagement() {
  return (
    <Section tint>
      <Stack gap={32} className="oa-wrap">
        <Stack gap={14}>
          <Tag tone="lime">How we work with you</Tag>
          <h2 className="oa-h2" style={{ maxWidth: 820 }}>Start small, prove it, then scale.</h2>
        </Stack>
        <ol className="oa-steps">
          {engagement.map((e, i) => (
            <li key={e.step} className="oa-card" style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 10, borderTop: `3px solid ${e.color}` }}>
              <span className="oa-kind" style={{ color: e.color }}>Step {i + 1}</span>
              <h3 className="oa-h3" style={{ fontSize: '1.25rem' }}>{e.step}</h3>
              <p className="oa-body">{e.desc}</p>
            </li>
          ))}
        </ol>
      </Stack>
    </Section>
  )
}

export function FAQ() {
  return (
    <Section>
      <Grid min={300} gap={48} className="oa-wrap" style={{ alignItems: 'start' }}>
        <Stack gap={14}>
          <Tag tone="blue">FAQ</Tag>
          <h2 className="oa-h2">Questions pharma teams ask us first.</h2>
          <p className="oa-lead">
            Something else? <Link to="/contact">Ask us directly</Link> — we reply within 1 business day.
          </p>
        </Stack>
        <div className="oa-faq">
          {faqs.map((f) => (
            <details key={f.q} className="oa-card">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </Grid>
    </Section>
  )
}

function CTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '110px 24px', textAlign: 'center' }}>
      <img
        src={icon}
        alt=""
        width="520"
        height="520"
        loading="lazy"
        style={{ position: 'absolute', left: '50%', top: '50%', width: 520, maxWidth: 'none', transform: 'translate(-50%,-50%)', opacity: 0.07, pointerEvents: 'none' }}
      />
      <Stack gap={24} style={{ position: 'relative', maxWidth: 800, margin: '0 auto', alignItems: 'center' }}>
        <span className="oa-kicker" style={{ color: 'var(--c-green)' }}>Ready when you are</span>
        <h2 className="oa-h2" style={{ lineHeight: 1.2 }}>Let's put <Grad>evidence-grade AI</Grad> to work for your brand.</h2>
        <Link to="/contact" className="oa-btn oa-btn--lg">Book a demo →</Link>
        <p style={{ margin: 0, color: 'var(--ink-3)' }}>
          Or email <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontWeight: 700 }}>{CONTACT_EMAIL}</a>
        </p>
      </Stack>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <WhoWeHelp />
      <ProductGrid />
      <HowWeBuild />
      <Engagement />
      <FAQ />
      <CTA />
    </div>
  )
}
