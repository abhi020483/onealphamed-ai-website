import { useEffect, useState } from 'react'
import {
  AUDIENCE_FILTERS, STATUS_LEGEND, arogyaFeatures, productById, productFor, products, chat, compare, flow, guardrails, merlinPoints, pipeline, powerOf4, profile,
  pathviewConditions, pathviewFeatures, pathviewMilestones, pathviewReadouts,
  rweChecks, rweCompliance, rweStats, rweSteps, rweWorkspaces, skinFeatures, tiers, voiceCards, voiceCompliance,
  waveBars,
} from './content'
import { Link, useRouter } from './router'
import { Check, Dot, FeatureCard, Grad, Grid, PhotoBanner, ProductCTA, Section, Stack, StatusPill, Tag, Visual } from './ui'
import { visuals } from './visuals'

const MERLIN_SIGNIN_URL = 'https://merlin-indol.vercel.app/login'

const Header = ({ pid, tag, tone, title, children, maxWidth = 880 }) => (
  <Stack gap={14}>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
      <Tag tone={tone}>{tag}</Tag>
      <StatusPill status={productById[pid].status} />
    </div>
    <h2 className="oa-h2" style={{ maxWidth }}>{title}</h2>
    <p className="oa-for"><strong>Who it's for:</strong> {productFor[pid]}</p>
    {children}
  </Stack>
)

const Lead = ({ maxWidth = 740, children }) => <p className="oa-lead" style={{ maxWidth }}>{children}</p>

const CardLabel = ({ children, color = 'var(--ink-3)', style }) => (
  <span className="oa-kicker" style={{ color, ...style }}>{children}</span>
)

const Avatar = ({ letter, size }) => (
  <div
    style={{
      width: size, height: size, borderRadius: '50%', background: 'linear-gradient(135deg,#1ec27a,#2d7fd4)', flex: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--display)', fontWeight: 800,
      fontSize: size === 32 ? 13 : 14, color: 'var(--on-grad)',
    }}
  >
    {letter}
  </div>
)

const CitePill = ({ color, rgb, children }) => (
  <span
    className="oa-mono"
    style={{
      borderRadius: 999, border: `1px solid rgba(${rgb},0.4)`, background: `rgba(${rgb},0.1)`, padding: '4px 10px',
      fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.06em', color,
    }}
  >
    {children}
  </span>
)

function Intro({ filter, setFilter, visible }) {
  return (
    <section style={{ padding: '72px 24px 32px' }}>
      <Stack gap={22} className="oa-wrap">
        <span className="oa-kicker" style={{ color: 'var(--c-green)' }}>Products</span>
        <h1 className="oa-h1" style={{ maxWidth: 900 }}>Seven products, each grounded in <Grad>approved evidence.</Grad></h1>
        <p className="oa-legend">{STATUS_LEGEND}</p>
        <div role="group" aria-label="Filter products by audience" className="oa-filters">
          {AUDIENCE_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`oa-filter${filter === f.key ? ' is-on' : ''}`}
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <nav aria-label="Jump to a product" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {visible.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`} className="oa-jump">{p.name}</Link>
          ))}
        </nav>
      </Stack>
    </section>
  )
}

function Merlin({ tint }) {
  return (
    <Section id="merlin" tint={tint}>
      <Stack gap={48} className="oa-wrap">
        <Header pid="merlin" tag="Merlin AI · Medical information" tone="green" maxWidth={820} title={<>Merlin AI: one stop, customisable <Grad>medical intelligence.</Grad></>}>
          <Lead>
            A retrieval-augmented medical information engine that answers HCP and patient queries using only verified
            sources — PubMed, peer-reviewed journals and your authorised internal databases. Air-gapped so no query
            touches a public model; every response audit-trailed inside your compliance framework.
          </Lead>
          <span className="oa-kicker" style={{ color: 'var(--ink-3)' }}>The Power of 4</span>
        </Header>
        <PhotoBanner visual={visuals.merlin} alt="Knowledge graph of approved evidence with a highlighted citation path" badge="In use · medical information teams" badgeColor="#1ec27a" />
        <Grid min={230}>
          {powerOf4.map((p) => <FeatureCard key={p.n} {...p} titleSize="1.2rem" />)}
        </Grid>

        {/* live app */}
        <Grid
          min={300}
          gap={40}
          className="oa-card"
          style={{ borderRadius: 24, padding: 'clamp(24px,4vw,40px)', alignItems: 'center' }}
        >
          <Stack gap={18}>
            <span className="oa-kicker" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--c-green)' }}>
              <Dot color="#0b7a4b" />The Merlin app · live now
            </span>
            <h3 className="oa-h3" style={{ fontSize: '1.7rem', lineHeight: 1.25, textWrap: 'balance' }}>
              Answers you can cite, drawn only from <Grad>approved sources.</Grad>
            </h3>
            <p className="oa-lead" style={{ maxWidth: 560, lineHeight: 1.65 }}>
              The Power of 4, productised. Medical teams ask in plain language, and Merlin answers strictly from the
              evidence library their organisation has approved — never the open internet — with the source behind every claim.
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {merlinPoints.map((pt) => (
                <li key={pt} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', lineHeight: 1.55 }}>
                  <span className="oa-mono" style={{ color: 'var(--c-green)' }}>✓</span>{pt}
                </li>
              ))}
            </ul>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink-3)' }}>
              Already a client?{' '}
              <a href={MERLIN_SIGNIN_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700 }}>
                Sign in to Merlin ↗<span className="oa-sr"> (opens in a new tab)</span>
              </a>{' '}
              with the work email your organisation registered.
            </p>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-4)' }}>
              A proprietary product of OneAlphaMed Pvt Ltd. Not a substitute for professional medical judgement.
            </p>
          </Stack>
          <div className="oa-panel" style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--line-soft)', paddingBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Avatar letter="M" size={32} />
                <Stack gap={2}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Merlin-AI</span>
                  <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-3)' }}>Medical information assistant</span>
                </Stack>
              </div>
              <span className="oa-mono" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c-green)' }}>
                <Dot color="#0b7a4b" />online
              </span>
            </div>
            <Stack gap={14} style={{ marginTop: 20 }}>
              <div style={{ width: '72%', alignSelf: 'flex-end', borderRadius: '14px 14px 4px 14px', background: '#d9f4e6', padding: '12px 14px', fontSize: 14, lineHeight: 1.5 }}>
                What is the recommended dose adjustment in moderate renal impairment?
              </div>
              <div style={{ width: '92%', alignSelf: 'flex-start', borderRadius: '14px 14px 14px 4px', border: '1px solid var(--line-soft)', background: '#fff', padding: '14px 16px', fontSize: 14, lineHeight: 1.55 }}>
                Per the approved prescribing information, reduce the starting dose by 50% when CrCl is 30–59 mL/min and reassess at week 2.
                <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  <CitePill color="#0b7a4b" rgb="14,143,88">✓ Source: SmPC §4.2, page 6</CitePill>
                  <CitePill color="#077363" rgb="8,127,108">Approved library only</CitePill>
                </div>
              </div>
            </Stack>
          </div>
        </Grid>

        {/* MedLink */}
        <Grid min={300} gap={48} style={{ alignItems: 'center' }}>
          <Stack gap={22}>
            <span className="oa-kicker" style={{ color: 'var(--c-green)' }}>Merlin module · MedLink AI on WhatsApp</span>
            <h3 className="oa-h3" style={{ fontSize: '1.7rem', lineHeight: 1.25, textWrap: 'balance' }}>
              Conversational. Contextual. <Grad>Emotionally intelligent.</Grad>
            </h3>
            <p className="oa-lead" style={{ lineHeight: 1.65 }}>
              Merlin's engine delivered where patients already are. MedLink runs on a clinic's WhatsApp number, retains
              context across the conversation, and hands off to the clinic when it matters.
            </p>
            <div className="oa-card" style={{ overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 12, borderBottom: '1px solid var(--line-soft)', padding: '14px 20px' }}>
                <span />
                <span className="oa-mono" style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-3)' }}>Standard chatbots</span>
                <span className="oa-mono" style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--c-green)' }}>MedLink AI</span>
              </div>
              {compare.map((row, i) => (
                <div
                  key={row.dim}
                  style={{
                    display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 12, padding: '14px 20px', fontSize: '0.98rem', lineHeight: 1.5,
                    borderBottom: i < compare.length - 1 ? '1px solid rgba(20,70,90,0.1)' : 0,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{row.dim}</span>
                  <span style={{ color: 'var(--ink-4)' }}>{row.standard}</span>
                  <span>{row.medlink}</span>
                </div>
              ))}
            </div>
            <div className="oa-panel" style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '20px 24px' }}>
              <span className="oa-kicker" style={{ color: 'var(--c-teal)' }}>Merlin module · MedScan AI</span>
              <p className="oa-lead" style={{ lineHeight: 1.6 }}>
                Prescription scanning with an LLM layer — handwriting in, structured medical data out. Camera capture of
                handwritten prescriptions auto-fills medicine, dose and timing, with autocomplete from a 5,000+ Indian drug database.
              </p>
            </div>
          </Stack>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: 300, maxWidth: '100%', overflow: 'hidden', borderRadius: 42, border: '1px solid rgba(20,70,90,0.25)', background: '#fff',
                boxShadow: '0 30px 80px rgba(15,36,48,0.18),0 0 40px rgba(30,194,122,0.12)', transform: 'rotateY(-10deg) rotateX(4deg)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 6px' }}>
                <div style={{ width: 110, height: 22, borderRadius: 12, background: '#0f2430' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--line-soft)', background: 'var(--panel)', padding: '12px 16px' }}>
                <Avatar letter="K" size={36} />
                <Stack gap={2}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Dr Khadilkar's Clinic</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--c-green)' }}>
                    <Dot color="#0b7a4b" />MedLink AI · online
                  </span>
                </Stack>
              </div>
              <div
                style={{
                  display: 'flex', flexDirection: 'column', gap: 10, padding: '16px 14px 24px', minHeight: 340,
                  backgroundImage: 'radial-gradient(rgba(20,70,90,0.08) 1px,transparent 1px)', backgroundSize: '18px 18px',
                }}
              >
                {chat.map((c) => {
                  const mine = c.from === 'patient'
                  return (
                    <div
                      key={c.time + c.text.slice(0, 8)}
                      style={{
                        maxWidth: '86%', padding: '10px 13px', fontSize: 14, lineHeight: 1.5, border: '1px solid rgba(20,70,90,0.1)',
                        alignSelf: mine ? 'flex-end' : 'flex-start',
                        borderRadius: mine ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                        background: mine ? '#d9f4e6' : '#fff',
                      }}
                    >
                      {c.text}
                      <div style={{ marginTop: 4, fontSize: 12.5, color: 'var(--ink-4)', textAlign: mine ? 'right' : 'left' }}>{c.time}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Grid>
        <ProductCTA id="merlin" />
      </Stack>
    </Section>
  )
}

function OncoNourish({ tint }) {
  return (
    <Section id="onconourish" tint={tint}>
      <Stack gap={44} className="oa-wrap">
        <Header pid="onconourish" tag="OncoNourish · Oncology nutrition" tone="teal" maxWidth={900} title={<>OncoNourish keeps patients <Grad>nourished enough to finish treatment.</Grad></>}>
          <Lead>
            A rules-engine nutrition platform for oncology teams. Clinicians capture the patient profile, the engine
            drafts a personalised plan from evidence-locked rules, and nothing reaches the patient until the clinician signs off.
          </Lead>
          <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 10, borderRadius: 8, border: '1px solid rgba(10,168,143,0.5)', background: 'rgba(224,240,244,0.8)', padding: '8px 16px' }}>
            <span style={{ width: 7, height: 7, flex: 'none', background: '#0aa88f', boxShadow: '0 0 8px #0aa88f' }} />
            <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c-teal)' }}>
              Supportive care only — no treat / cure / arrest claims
            </span>
          </div>
        </Header>
        <PhotoBanner visual={visuals.onconourish} alt="Glass leaf, grain and droplet forms linked to a rules-engine lattice" badge="In use · oncology clinics" badgeColor="#0aa88f" focus="50% 40%" />
        <Grid min={230}>
          {flow.map((f) => (
            <div key={f.n} className="oa-card" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="oa-mono" style={{ fontSize: 22, color: 'var(--c-teal)' }}>{f.n}</span>
              <h3 className="oa-h3" style={{ fontSize: '1.15rem' }}>{f.step}</h3>
              <p className="oa-body">{f.desc}</p>
            </div>
          ))}
        </Grid>
        <Stack gap={14}>
          <span className="oa-kicker" style={{ color: 'var(--ink-3)' }}>Profile inputs</span>
          <Grid min={150} gap={12}>
            {profile.map((pi) => (
              <div key={pi} className="oa-profile" style={{ borderRadius: 12, border: '1px solid var(--line-soft)', background: 'rgba(255,255,255,0.7)', padding: '16px 14px', textAlign: 'center', fontSize: '0.95rem' }}>
                {pi}
              </div>
            ))}
          </Grid>
        </Stack>
        <Grid min={300}>
          <div style={{ overflow: 'hidden', borderRadius: 16, border: '1px solid var(--line-soft)', background: '#0a1018', color: '#eaf1f4' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, borderBottom: '1px solid rgba(180,214,224,0.14)', padding: '12px 18px' }}>
              <span className="oa-mono" style={{ fontSize: 12, letterSpacing: '0.06em', color: '#0aa88f' }}>protein_target.rule.yaml</span>
              <span className="oa-mono" style={{ fontSize: 12, letterSpacing: '0.06em', color: 'rgba(234,241,244,0.6)' }}>Rules engine</span>
            </div>
            <pre className="oa-mono" style={{ margin: 0, padding: '20px 22px', fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
              <span style={{ color: 'rgba(234,241,244,0.5)' }}># evidence-locked nutrition rule</span>{'\n'}
              <span style={{ color: '#86d13f' }}>rule:</span> protein_target{'\n'}
              <span style={{ color: '#86d13f' }}>source:</span> ESPEN 2021 §4.2{'\n'}
              <span style={{ color: '#86d13f' }}>when:</span>{'\n'}
              {'  '}<span style={{ color: '#0aa88f' }}>phase:</span> active_treatment{'\n'}
              <span style={{ color: '#86d13f' }}>then:</span>{'\n'}
              {'  '}<span style={{ color: '#0aa88f' }}>protein_g_per_kg:</span> 1.2–1.5{'\n'}
              {'  '}<span style={{ color: '#0aa88f' }}>energy_check:</span> required{'\n'}
              {'  '}<span style={{ color: '#0aa88f' }}>review:</span> clinician_approval
            </pre>
          </div>
          <Stack gap={20}>
            <div className="oa-card" style={{ padding: '22px 24px' }}>
              <div style={{ marginBottom: 18, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <CardLabel>Sample patient — Anita K.</CardLabel>
                <span className="oa-pill" style={{ borderColor: 'rgba(86,143,30,0.5)', padding: '4px 10px', color: 'var(--c-lime)' }}>Clinician approved</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
                {[['1.4 g/kg', 'Protein target'], ['1650 kcal', 'Daily energy'], ['2.2 L', 'Fluids']].map(([v, l]) => (
                  <Stack key={l} gap={4}>
                    <span className="oa-grad" style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.3rem' }}>{v}</span>
                    <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--c-teal)' }}>{l}</span>
                  </Stack>
                ))}
              </div>
            </div>
            <div className="oa-card" style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '22px 24px' }}>
              <CardLabel>Safety guardrails</CardLabel>
              {guardrails.map((g) => <Check key={g}>{g}</Check>)}
            </div>
          </Stack>
        </Grid>
        <ProductCTA id="onconourish" />
      </Stack>
    </Section>
  )
}

function VoiceAgent({ tint }) {
  return (
    <Section id="voice" tint={tint}>
      <Stack gap={44} className="oa-wrap">
        <Header pid="voice" tag="AI Sales Voice Agent · Field force" tone="green" title={<>An always-on, compliant <Grad>voice layer</Grad> that extends the field force.</>}>
          <Lead maxWidth={720}>
            Natural-sounding, multilingual voice agents that speak with doctors over the phone — reinforcing approved
            medical messaging between MR visits. An additional layer of support for the sales team, never a replacement.
          </Lead>
        </Header>
        <PhotoBanner visual={visuals.voice} alt="Sound-wave ribbon flowing through a glass molecule" badge="Pilot · field force teams" badgeColor="#86d13f" />
        <Grid min={230}>
          {voiceCards.map((c) => <FeatureCard key={c.n} {...c} />)}
        </Grid>
        <Grid min={300} gap={24}>
          <div className="oa-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20, padding: '24px 28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <span className="oa-mono" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c-green)' }}>
                <Dot size={7} color="#1ec27a" glow />Outbound call · in progress
              </span>
              <span className="oa-mono" style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-4)' }}>Hindi · 02:47</span>
            </div>
            <div style={{ display: 'flex', minHeight: 64, flex: 1, alignItems: 'center', justifyContent: 'center', gap: 5 }} aria-hidden="true">
              {waveBars.map((c, i) => (
                <span
                  key={i}
                  className="oa-wave-bar"
                  style={{ display: 'block', height: 54, width: 5, borderRadius: 3, background: c, animation: 'oa-wave 1.1s ease-in-out infinite', animationDelay: `${i * 0.12}s` }}
                />
              ))}
            </div>
            <div className="oa-panel" style={{ borderRadius: 12, padding: '14px 16px', fontSize: '1rem', lineHeight: 1.6, color: 'rgba(15,36,48,0.85)' }}>
              “Doctor, following up on last week's detailing visit — a new study on the extended indication was published.
              Would two minutes on the key findings help?”
            </div>
            <span className="oa-mono" style={{ textAlign: 'center', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-4)' }}>
              Sub-second turn-taking · Natural interruption handling
            </span>
          </div>
          <Stack gap={20}>
            <div className="oa-card" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '22px 24px' }}>
              <CardLabel>Real-time pipeline</CardLabel>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
                {pipeline.map((p, i) => (
                  <span key={p.label} style={{ display: 'contents' }}>
                    {i > 0 && <span style={{ color: 'var(--c-teal)' }}>→</span>}
                    <span className="oa-mono" style={{ borderRadius: 8, border: `1px solid ${p.border}`, padding: '8px 14px', fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.06em', color: p.color }}>
                      {p.label}
                    </span>
                  </span>
                ))}
              </div>
              <p className="oa-body">
                Speech recognition tuned for Indian languages and medical vocabulary; a reasoning engine grounded in the
                approved knowledge base — so it cannot go off-message; natural multilingual voice synthesis over a standard
                outbound line. Every call logs to CRM/SFE and feeds next-best-action back to reps.
              </p>
            </div>
            <div className="oa-note" style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '20px 24px' }}>
              <CardLabel color="var(--c-teal)">Compliant from day one</CardLabel>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {voiceCompliance.map((c) => <span key={c} className="oa-pill oa-pill--note">{c}</span>)}
              </div>
              <p className="oa-body" style={{ lineHeight: 1.55 }}>
                Explicit opt-in and DND honoured · every message passes medical-legal-regulatory review · all calls recorded and auditable.
              </p>
            </div>
          </Stack>
        </Grid>
        <ProductCTA id="voice" />
      </Stack>
    </Section>
  )
}

function Arogya({ tint }) {
  return (
    <Section id="arogya" tint={tint}>
      <Stack gap={44} className="oa-wrap">
        <Header pid="arogya" tag="Arogya · Medication adherence" tone="lime" title={<>Arogya makes sure <Grad>no dose goes untracked.</Grad></>}>
          <Lead>
            A medication adherence platform built for the Indian market — elderly patients and their family caregivers.
            AI-assisted medicine entry, multi-tier escalation reminders, family care coordination, pharmacy refills and
            doctor-ready adherence reports — all operable in low-connectivity conditions.
          </Lead>
        </Header>
        <PhotoBanner visual={visuals.arogya} alt="Glowing capsule forms on schedule rings with a reminder pulse" badge="Pilot · patients & caregivers" badgeColor="#86d13f" />
        <Grid min={260}>
          {arogyaFeatures.map((f) => <FeatureCard key={f.n} {...f} />)}
        </Grid>
        <div className="oa-card" style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '24px 28px' }}>
          <CardLabel>Missed-dose escalation — tuned to each medicine's criticality</CardLabel>
          <Grid min={200}>
            {tiers.map((t) => (
              <div key={t.t} style={{ display: 'flex', flexDirection: 'column', gap: 6, borderLeft: `2px solid ${t.dot}`, paddingLeft: 14 }}>
                <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: t.color }}>{t.t}</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>{t.title}</span>
                <span style={{ fontSize: '0.95rem', lineHeight: 1.5, color: 'rgba(15,36,48,0.75)' }}>{t.desc}</span>
              </div>
            ))}
          </Grid>
          <span className="oa-mono" style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-4)' }}>
            Gentle → Tier 1 only · Standard → Tier 2 · Critical → all 4 tiers · Enforced server-side
          </span>
        </div>
        <ProductCTA id="arogya" />
      </Stack>
    </Section>
  )
}

function SkinScan({ tint }) {
  return (
    <Section id="skinscan" tint={tint}>
      <Stack gap={44} className="oa-wrap">
        <Header pid="skinscan" tag="SkinScan · Consumer skin awareness" tone="teal" title={<>SkinScan: know your Skin Score, get clarity on <Grad>dark patches.</Grad></>}>
          <Lead>
            A consumer app for pigmentation awareness. One guided face photo returns a Skin Score and a Melasma-pattern
            Score — a MASI-style estimate of melasma severity — explained in plain words, so people stop guessing about
            dark patches and know exactly what to ask a dermatologist. Not a beauty score. Not a fairness score.
          </Lead>
        </Header>
        <Grid min={300} style={{ alignItems: 'stretch' }}>
          <div style={{ position: 'relative', minHeight: 360, overflow: 'hidden', borderRadius: 24, border: '1px solid var(--line-soft)' }}>
            <Visual visual={visuals.skinscan} alt="Wireframe face mesh with a scanning plane of light" sizes="(max-width: 760px) 100vw, 600px" />
            <div
              style={{
                position: 'absolute', bottom: 20, left: 20, display: 'flex', flexDirection: 'column', gap: 4, borderRadius: 16,
                border: '1px solid var(--line-soft)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', padding: '16px 20px',
              }}
            >
              <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c-teal)' }}>Melasma-pattern Score</span>
              <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.6rem', lineHeight: 1 }}>0–48</span>
              <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>MASI-style estimate · awareness, not diagnosis</span>
            </div>
          </div>
          <Grid min={220} gap={16}>
            {skinFeatures.map((f) => (
              <div key={f.n} className="oa-card" style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span aria-hidden="true" style={{ width: 28, height: 3, borderRadius: 2, background: f.color }} />
                <h3 className="oa-h3" style={{ fontSize: '1.15rem' }}>{f.title}</h3>
                <p className="oa-body" style={{ fontSize: '0.95rem' }}>{f.desc}</p>
              </div>
            ))}
          </Grid>
        </Grid>
        <Stack gap={14}>
          <ProductCTA id="skinscan">
            <span className="oa-note-inline"><Dot color="#077363" />Your photo stays on your device</span>
          </ProductCTA>
          <p style={{ margin: 0, maxWidth: 740, fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-4)' }}>
            For pigmentation awareness, not diagnosis. SkinScan does not check moles or spots for skin cancer — see a
            dermatologist for any spot that is new, changing, bleeding or itchy.
          </p>
        </Stack>
      </Stack>
    </Section>
  )
}

function RWE({ tint }) {
  return (
    <Section id="rwe" tint={tint}>
      <Stack gap={44} className="oa-wrap">
        <Header pid="rwe" tag="RWE Platform · Real-world evidence" tone="blue" maxWidth={900} title={<>Real-world evidence studies, run from a <Grad>photo of the prescription.</Grad></>}>
          <Lead maxWidth={760}>
            Prescription capture, AI extraction into the case report form, QC review, investigator payments and sponsor
            analytics — one platform, four workspaces. The first study configured is TOLERATE-HF, a heart-failure study
            with a baseline visit and a follow-up at 90 ± 10 days.
          </Lead>
        </Header>
        <PhotoBanner visual={visuals.rwe} alt="A paper sheet transforming into structured data cells" badge="Pilot · TOLERATE-HF investigators" badgeColor="#2d7fd4" />
        <Grid min={230}>
          {rweSteps.map((s) => <FeatureCard key={s.n} {...s} />)}
        </Grid>
        <Grid min={300} gap={24} style={{ alignItems: 'stretch' }}>
          <div className="oa-card" style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '24px 28px' }}>
            <CardLabel>Four workspaces, one metrics layer</CardLabel>
            <Grid min={200}>
              {rweWorkspaces.map((w) => (
                <div key={w.title} style={{ display: 'flex', flexDirection: 'column', gap: 6, borderLeft: `2px solid ${w.dot}`, paddingLeft: 14 }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>{w.title}</span>
                  <span style={{ fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--ink-3)' }}>{w.desc}</span>
                </div>
              ))}
            </Grid>
            <span className="oa-mono" style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-4)' }}>
              Every KPI on every screen comes from the same metrics layer — numbers never disagree between doctor, ops and sponsor
            </span>
          </div>
          <div className="oa-card" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap', borderBottom: '1px solid var(--line-soft)', padding: '14px 20px', background: 'var(--panel)' }}>
              <span style={{ fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', color: 'var(--c-blue)' }}>TOLERATE-HF · V2 follow-up · edit checks</span>
              <span className="oa-pill" style={{ fontWeight: 700, fontSize: 12.5, padding: '3px 9px', letterSpacing: '0.1em', borderColor: 'rgba(8,127,108,0.4)' }}>In QC review</span>
            </div>
            <Stack gap={12} style={{ padding: 20 }}>
              {rweChecks.map((c) => (
                <div key={c.text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.5 }}>
                  <span style={{ flex: 'none', borderRadius: 4, background: c.bg, color: '#fff', padding: '2px 7px', fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {c.level}
                  </span>
                  <span>{c.text}</span>
                </div>
              ))}
              <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, borderTop: '1px solid var(--line-soft)', paddingTop: 16 }}>
                {rweStats.map((s) => (
                  <Stack key={s.label} gap={2}>
                    <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: '1.3rem' }}>{s.value}</span>
                    <span className="oa-mono" style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--c-teal)' }}>{s.label}</span>
                  </Stack>
                ))}
              </div>
            </Stack>
          </div>
        </Grid>
        <div className="oa-note" style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '20px 24px' }}>
          <CardLabel color="var(--c-teal)">Built for regulated data</CardLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {rweCompliance.map((c) => <span key={c} className="oa-pill oa-pill--note" style={{ letterSpacing: '0.1em' }}>{c}</span>)}
          </div>
          <p className="oa-body" style={{ lineHeight: 1.55 }}>
            Study setup is versioned: publishing a new visit window re-computes every follow-up date across the cohort.
            Prescription images move to private object storage with signed URLs; investigators appear to sponsors only as codes.
          </p>
        </div>
        <ProductCTA id="rwe" />
      </Stack>
    </Section>
  )
}

function PathView({ tint }) {
  const month = 7
  return (
    <Section id="pathview" tint={tint}>
      <Stack gap={44} className="oa-wrap">
        <Header pid="pathview" tag="PathView 3D · Consultation anatomy" tone="blue" title={<>PathView 3D: see the condition, <Grad>choose the path.</Grad></>}>
          <Lead>
            An interactive 3D anatomy tool doctors use during the consultation. Peel back skin, muscle, bone,
            vessels and airways; tap any structure to name and explain it; then play two treatment routes on a
            timeline so the patient sees how the lung and the tumour change, month by month. Runs in the browser
            on a tablet or clinic desktop — nothing to install.
          </Lead>
        </Header>
        <PhotoBanner visual={visuals.pathview} alt="Translucent glass lung model with layer planes and a treatment timeline" badge="Pilot · oncology & pulmonology" badgeColor="#2d7fd4" />
        <Grid min={230}>
          {pathviewFeatures.map((f) => <FeatureCard key={f.n} {...f} />)}
        </Grid>
        <Grid min={300} gap={24} style={{ alignItems: 'stretch' }}>
          <div className="oa-card" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap', borderBottom: '1px solid var(--line-soft)', padding: '14px 20px', background: 'var(--panel)' }}>
              <span style={{ fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', color: 'var(--c-blue)' }}>NSCLC · 3.0 cm · right upper lobe</span>
              <span className="oa-pill" style={{ fontWeight: 700, fontSize: 12.5, padding: '3px 9px', letterSpacing: '0.1em' }}>A | B compare</span>
            </div>
            <Stack gap={14} style={{ padding: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 12 }}>
                <span />
                <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--c-blue)' }}>A · Chemotherapy</span>
                <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a34d1c' }}>B · Lobectomy</span>
              </div>
              {pathviewReadouts.map((r) => (
                <div key={r.label} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', gap: 12, fontSize: 14, lineHeight: 1.5, borderTop: '1px solid rgba(20,70,90,0.08)', paddingTop: 10 }}>
                  <span style={{ color: 'var(--ink-3)' }}>{r.label}</span>
                  <span style={{ fontWeight: 600 }}>{r.a}</span>
                  <span style={{ fontWeight: 600 }}>{r.b}</span>
                </div>
              ))}
              <Stack gap={10} style={{ marginTop: 6, borderTop: '1px solid var(--line-soft)', paddingTop: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-4)' }}>Timeline</span>
                  <span style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: '1.2rem' }}>{month}<span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-4)' }}> / 12 mo</span></span>
                </div>
                <div style={{ position: 'relative', height: 6, borderRadius: 3, background: 'rgba(20,70,90,0.12)' }}>
                  <div style={{ position: 'absolute', inset: 0, width: `${(month / 12) * 100}%`, borderRadius: 3, background: 'var(--grad)' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 6, flexWrap: 'wrap' }}>
                  {pathviewMilestones.map((m) => (
                    <span key={m} className="oa-mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-4)' }}>{m}</span>
                  ))}
                </div>
              </Stack>
            </Stack>
          </div>
          <Stack gap={20}>
            <div className="oa-panel" style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '20px 24px' }}>
              <CardLabel color="var(--c-teal)">Explain to patient</CardLabel>
              <p className="oa-body" style={{ fontSize: '0.98rem' }}>
                <strong style={{ color: 'var(--c-blue)' }}>A:</strong> The tumour shrinks and its core becomes inactive. Lymph nodes reduce in size.
              </p>
              <p className="oa-body" style={{ fontSize: '0.98rem' }}>
                <strong style={{ color: '#a34d1c' }}>B:</strong> The remaining lobes gradually expand to fill the space, recovering much of your breathing capacity.
              </p>
            </div>
            <div className="oa-card" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '22px 24px' }}>
              <CardLabel>Pilot conditions</CardLabel>
              {pathviewConditions.map((c) => (
                <div key={c.name} style={{ display: 'flex', flexDirection: 'column', gap: 4, borderLeft: '2px solid #0aa88f', paddingLeft: 14 }}>
                  <span className="oa-mono" style={{ fontSize: 12.5, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c-teal)' }}>{c.area}</span>
                  <span style={{ fontWeight: 700 }}>{c.name}</span>
                  <span style={{ fontSize: '0.92rem', lineHeight: 1.5, color: 'var(--ink-3)' }}>{c.routes}</span>
                </div>
              ))}
            </div>
          </Stack>
        </Grid>
        <Stack gap={14}>
          <ProductCTA id="pathview">
            <span className="oa-note-inline"><Dot color="#1f66b0" />Demo mode: no sign-in, nothing recorded</span>
          </ProductCTA>
          <p style={{ margin: 0, maxWidth: 740, fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--ink-4)' }}>
            Illustrative educational model. Not a patient-specific prediction or a substitute for clinical judgement.
            Doctors in the pilot sign in with an access code issued by their Head Office; no patient data is stored.
          </p>
        </Stack>
      </Stack>
    </Section>
  )
}

const SECTIONS = { merlin: Merlin, onconourish: OncoNourish, voice: VoiceAgent, arogya: Arogya, skinscan: SkinScan, rwe: RWE, pathview: PathView }

export default function Products() {
  const { sub } = useRouter()
  const [filter, setFilter] = useState('all')
  // Arriving at /products/<id> always shows everything, so the target section exists.
  useEffect(() => setFilter('all'), [sub])

  const visible = products.filter((p) => filter === 'all' || p.audience.includes(filter))
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Intro filter={filter} setFilter={setFilter} visible={visible} />
      {visible.map((p, i) => {
        const Body = SECTIONS[p.id]
        return <Body key={p.id} tint={i % 2 === 1} />
      })}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <Stack gap={24} style={{ maxWidth: 720, margin: '0 auto', alignItems: 'center' }}>
          <h2 className="oa-h3" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', lineHeight: 1.2, textWrap: 'balance' }}>
            See any of these running on your own cases.
          </h2>
          <Link to="/contact" className="oa-btn oa-btn--lg">Book a demo →</Link>
        </Stack>
      </section>
    </div>
  )
}
