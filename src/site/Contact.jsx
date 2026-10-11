import { useRef, useState } from 'react'
import { DEMO_EMAIL, OFFICES, interests } from './content'
import { Grid, Stack } from './ui'

const ENDPOINT = `https://formsubmit.co/ajax/${DEMO_EMAIL}`

const FieldLabel = ({ children }) => (
  <span className="oa-mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-3)' }}>{children}</span>
)

function Field({ label, ...input }) {
  return (
    <label className="oa-field">
      <FieldLabel>{label}</FieldLabel>
      <input className="oa-input" {...input} />
    </label>
  )
}

const subjectFor = (f) => `Demo request — ${f.company || f.name}`

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [firstName, setFirstName] = useState('')
  const lastForm = useRef({})

  async function submit(e) {
    e.preventDefault()
    if (status === 'sending') return
    const f = Object.fromEntries(new FormData(e.currentTarget).entries())
    lastForm.current = f
    setFirstName((f.name || '').trim().split(/\s+/)[0] || 'there')
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...f,
          phone: f.phone || '—',
          message: f.message || '—',
          _subject: subjectFor(f),
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      setStatus(res.ok && String(data.success) === 'true' ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  function mailto() {
    const f = lastForm.current
    const body = [
      `Name: ${f.name}`, `Work email: ${f.email}`, `Company: ${f.company}`, f.phone && `Phone: ${f.phone}`,
      `Interested in: ${f.interest}`, f.message && `\n${f.message}`,
    ].filter(Boolean).join('\n')
    window.location.href = `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subjectFor(f))}&body=${encodeURIComponent(body)}`
  }

  const infoLabel = { fontFamily: 'var(--mono)', fontWeight: 600, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-4)' }

  return (
    <section style={{ padding: '80px 24px 100px' }}>
      <Grid min={320} gap={56} className="oa-wrap" style={{ alignItems: 'start' }}>
        <Stack gap={22}>
          <span className="oa-label" style={{ color: 'var(--c-teal)' }}>Gen AI for Pharma &amp; Healthcare</span>
          <h1 className="oa-h1">Book a demo.</h1>
          <p style={{ margin: 0, maxWidth: 520, fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--ink-2)' }}>
            Tell us a little about you — we'll show Merlin AI, OncoNourish or any of our products running on real cases
            from your therapy area.
          </p>
          <div className="oa-card" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 26px' }}>
            <Stack gap={4}><span style={infoLabel}>Email</span><a href={`mailto:${DEMO_EMAIL}`} style={{ fontWeight: 600, overflowWrap: 'anywhere' }}>{DEMO_EMAIL}</a></Stack>
            <Stack gap={4}><span style={infoLabel}>Offices</span><span>{OFFICES}</span></Stack>
            <Stack gap={4}><span style={infoLabel}>Group</span><a href="https://onealphamed.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>onealphamed.com ↗</a></Stack>
          </div>
        </Stack>

        {status === 'sent' ? (
          <div
            role="status"
            style={{ position: 'relative', borderRadius: 16, border: '1px solid var(--line-soft)', background: '#fff', padding: '56px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, textAlign: 'center' }}
          >
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#86d13f,#0aa88f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: 'var(--on-grad)' }}>✓</div>
            <span className="oa-label" style={{ color: 'var(--c-green)' }}>Transmission received</span>
            <h3 className="oa-h3" style={{ fontSize: '1.4rem' }}>Thanks, {firstName} — request logged.</h3>
            <p className="oa-lead" style={{ maxWidth: 360, lineHeight: 1.6 }}>Our team will reach out to schedule your demo shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="oa-corners"
            style={{ position: 'relative', borderRadius: 16, border: '1px solid var(--line-soft)', background: '#fff', padding: 'clamp(24px,4vw,36px)', display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 20px 60px rgba(15,36,48,0.08)' }}
          >
            <Grid min={200} gap={16}>
              <Field label="Full name *" name="name" required type="text" placeholder="Dr Priya Sharma" autoComplete="name" />
              <Field label="Work email *" name="email" required type="email" placeholder="priya@company.com" autoComplete="email" />
              <Field label="Company *" name="company" required type="text" placeholder="Acme Pharma" autoComplete="organization" />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 …" autoComplete="tel" />
            </Grid>
            <label className="oa-field">
              <FieldLabel>Interested in</FieldLabel>
              <select name="interest" defaultValue="Merlin AI" className="oa-input">
                {interests.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </label>
            <label className="oa-field">
              <FieldLabel>Anything specific you want to see?</FieldLabel>
              <textarea name="message" rows={3} placeholder="Optional" className="oa-input" style={{ resize: 'none' }} />
            </label>
            {status === 'error' && (
              <p role="alert" style={{ margin: 0, borderRadius: 8, border: '1px solid rgba(31,102,176,0.3)', background: 'rgba(31,102,176,0.08)', padding: '12px 16px', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                Couldn't reach the form service.{' '}
                <button type="button" onClick={mailto} style={{ background: 'none', border: 0, padding: 0, font: 'inherit', fontWeight: 600, color: 'var(--c-teal)', textDecoration: 'underline', cursor: 'pointer' }}>
                  Send via your email app instead →
                </button>
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} className="oa-btn" style={{ marginTop: 4, padding: '14px 32px' }}>
              {status === 'sending' ? 'Transmitting…' : 'Request my demo →'}
            </button>
            <p className="oa-mono" style={{ margin: 0, textAlign: 'center', fontSize: 11, letterSpacing: '0.15em', color: 'var(--ink-4)', overflowWrap: 'anywhere' }}>
              Goes straight to {DEMO_EMAIL}
            </p>
          </form>
        )}
      </Grid>
    </section>
  )
}
