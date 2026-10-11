import icon from '../assets/alphamed-icon.png'
import imgEngine from '../assets/visuals/home-engine.jpg'
import { DEMO_EMAIL, OFFICES, pillars, products, rules } from './content'
import JourneyCards from './Journey'
import { Dot, FeatureCard, Grad, Grid, Section, Stack, Tag } from './ui'

const STATS = [
  { value: '15,000+', label: 'HCPs engaged across programs' },
  { value: '17+', label: 'Countries' },
  { value: '6', label: 'AI products in market' },
]

function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px 72px' }}>
      <div className="oa-sweep" />
      <Grid min={320} gap={56} className="oa-wrap" style={{ alignItems: 'center' }}>
        <Stack gap={28}>
          <p
            style={{
              margin: 0, display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 10,
              borderRadius: 999, border: '1px solid rgba(14,143,88,0.4)', background: 'rgba(255,255,255,0.6)', padding: '8px 16px',
            }}
          >
            <Dot size={7} color="#1ec27a" glow />
            <span className="oa-label" style={{ color: 'var(--c-teal)' }}>Gen AI systems online — Pharma &amp; Healthcare</span>
          </p>
          <h1
            style={{
              margin: 0, fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(2.6rem,5.5vw,4.4rem)',
              lineHeight: 1.05, letterSpacing: '-0.02em', textWrap: 'balance',
            }}
          >
            Building <Grad>AI Solutions</Grad> for the Global Pharma Industry
          </h1>
          <p style={{ margin: 0, maxWidth: 560, fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--ink-2)', textWrap: 'pretty' }}>
            OneAlphaMed AI is India's first generative AI partner built exclusively for pharmaceutical and healthcare
            companies — turning trusted medical evidence into products doctors, marketers, and patients actually rely on.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
            <a href="#contact" className="oa-btn">Book a demo →</a>
            <a href="#products" className="oa-btn-ghost">Explore the products</a>
          </div>
        </Stack>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: 320 }}>
          <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,194,122,0.25),transparent 65%)' }} />
          <div style={{ position: 'absolute', width: 420, height: 420, maxWidth: '100%', aspectRatio: '1', borderRadius: '50%', border: '1px dashed rgba(10,168,143,0.4)' }} />
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', border: '1px dashed rgba(45,127,212,0.4)' }} />
          <img src={icon} alt="" style={{ position: 'relative', width: 240, height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(30,194,122,0.35))' }} />
        </div>
      </Grid>

      <Grid
        min={220}
        gap={0}
        className="oa-wrap"
        style={{ marginTop: 64, borderRadius: 20, background: '#0f2430', color: '#eaf1f4', overflow: 'hidden', boxShadow: '0 30px 80px rgba(15,36,48,0.25)' }}
      >
        {STATS.map((s) => (
          <div key={s.label} style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: 8, borderRight: '1px solid rgba(180,214,224,0.14)' }}>
            <span className="oa-grad" style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: '3rem', lineHeight: 1 }}>{s.value}</span>
            <span style={{ fontWeight: 700, fontSize: 15, color: '#eaf1f4' }}>{s.label}</span>
          </div>
        ))}
        <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
          <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#1ec27a' }}>Where we operate</span>
          <span style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.5 }}>{OFFICES}</span>
        </div>
      </Grid>
    </section>
  )
}

function Capabilities() {
  return (
    <Section>
      <Stack gap={40} className="oa-wrap">
        <Stack gap={14}>
          <Tag tone="green">01 — What we build</Tag>
          <h2 className="oa-h2" style={{ maxWidth: 860 }}>
            Production AI across the whole pharma value chain — from <Grad>medical information to the patient's kitchen.</Grad>
          </h2>
          <p className="oa-lead" style={{ maxWidth: 720 }}>
            Not pilots and slideware. Six products are live or in deployment with pharmaceutical and clinical teams today,
            each built on the same evidence-locked, compliance-first foundation.
          </p>
        </Stack>
        <Grid min={280}>
          {pillars.map((p) => (
            <FeatureCard key={p.n} {...p} titleSize="1.25rem" padding={28} hover="green">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                {p.tags.map((t) => <span key={t} className="oa-pill">{t}</span>)}
              </div>
            </FeatureCard>
          ))}
        </Grid>
      </Stack>
    </Section>
  )
}

function HowWeBuild() {
  return (
    <section className="oa-sec" style={{ background: 'linear-gradient(180deg,transparent,rgba(224,240,244,0.5) 20%,rgba(224,240,244,0.5) 80%,transparent)' }}>
      <Grid min={300} gap={48} className="oa-wrap" style={{ alignItems: 'start' }}>
        <Stack gap={14}>
          <Tag tone="teal">02 — How we build</Tag>
          <h2 className="oa-h2">Four rules every OneAlphaMed product is built under.</h2>
          <p className="oa-lead">
            Generative AI in pharma fails on trust, not capability. These constraints are architecture, not policy — they
            are enforced in code before a single answer reaches a doctor or a patient.
          </p>
          <a href="#products" style={{ alignSelf: 'flex-start', marginTop: 8, fontWeight: 600 }}>See how each product applies them →</a>
          <div style={{ position: 'relative', height: 300, borderRadius: 20, overflow: 'hidden', border: '1px solid var(--line)', marginTop: 16 }}>
            <img
              src={imgEngine}
              alt="Evidence documents streaming into a protected neural network"
              loading="lazy"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </Stack>
        <div style={{ display: 'grid', gap: 14 }}>
          {rules.map((r) => (
            <div key={r.n} className="oa-card" style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 16, borderRadius: 14, padding: '20px 22px' }}>
              <span className="oa-mono" style={{ fontSize: 20, color: r.color }}>{r.n}</span>
              <Stack gap={6}>
                <strong style={{ fontSize: '1.05rem' }}>{r.title}</strong>
                <span style={{ fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>{r.desc}</span>
              </Stack>
            </div>
          ))}
        </div>
      </Grid>
    </section>
  )
}

function ProductLine() {
  return (
    <Section>
      <Stack gap={36} className="oa-wrap">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16 }}>
          <Stack gap={14}>
            <Tag tone="blue">03 — The product line</Tag>
            <h2 className="oa-h2">Six products. One evidence engine.</h2>
          </Stack>
          <a href="#products" style={{ fontWeight: 600 }}>Full product detail →</a>
        </div>
        <Grid min={260}>
          {products.map((pr) => (
            <a
              key={pr.id}
              href={`#products/${pr.id}`}
              className="oa-card oa-lift"
              style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 26, color: 'var(--ink)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <span className="oa-mono" style={{ fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: pr.color }}>{pr.kind}</span>
                <span className="oa-pill" style={{ fontSize: 10.5, padding: '3px 9px', whiteSpace: 'nowrap' }}>{pr.status}</span>
              </div>
              <h3 className="oa-h3" style={{ fontSize: '1.3rem' }}>{pr.name}</h3>
              <p className="oa-body">{pr.tagline}</p>
              <span style={{ marginTop: 'auto', fontSize: 14, fontWeight: 600, color: 'var(--c-teal)' }}>Learn more ↗</span>
            </a>
          ))}
        </Grid>
      </Stack>
    </Section>
  )
}

function Journey() {
  return (
    <section className="oa-sec" style={{ background: 'linear-gradient(180deg,transparent,rgba(224,240,244,0.5) 25%,rgba(224,240,244,0.5) 75%,transparent)' }}>
      <Stack gap={40} className="oa-wrap">
        <Stack gap={14}>
          <Tag tone="lime">04 — The journey</Tag>
          <h2 className="oa-h2" style={{ maxWidth: 920 }}>
            Our product roadmap progressively <Grad>deepens AI integration</Grad> — from information query systems to patient interactions.
          </h2>
        </Stack>
        <JourneyCards />
      </Stack>
    </section>
  )
}

function CTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 24px', textAlign: 'center' }}>
      <img
        src={icon}
        alt=""
        style={{ position: 'absolute', left: '50%', top: '50%', width: 520, maxWidth: 'none', transform: 'translate(-50%,-50%)', opacity: 0.07, pointerEvents: 'none' }}
      />
      <Stack gap={28} style={{ position: 'relative', maxWidth: 800, margin: '0 auto', alignItems: 'center' }}>
        <span className="oa-label" style={{ color: 'var(--c-green)' }}>Ready when you are</span>
        <h2 className="oa-h2" style={{ lineHeight: 1.2 }}>Let's put <Grad>evidence-grade AI</Grad> to work for your brand.</h2>
        <a href="#contact" className="oa-btn oa-btn--lg">Book a demo →</a>
        <span className="oa-mono" style={{ fontSize: 12.5, letterSpacing: '0.15em', color: 'var(--ink-3)' }}>{DEMO_EMAIL}</span>
      </Stack>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Capabilities />
      <HowWeBuild />
      <ProductLine />
      <Journey />
      <CTA />
    </div>
  )
}
