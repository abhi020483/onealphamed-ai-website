import { useRef, useState } from 'react'
import {
  ADDRESS, CONTACT_EMAIL, DEMO_FORM_TO, GROUP_URL, LINKEDIN_URL, OFFICES, PHONE, PHONE_DISPLAY, interestFor, interests, productById,
} from './content'
import { Link, useRouter } from './router'
import { demoOf } from './routes'
import { Grid, Stack } from './ui'

const ENDPOINT = `https://formsubmit.co/ajax/${DEMO_FORM_TO}`

const FieldLabel = ({ children, required }) => (
  <span className="oa-field-label">
    {children}
    {required && <span aria-hidden="true"> *</span>}
  </span>
)

function Field({ label, required, ...input }) {
  return (
    <label className="oa-field">
      <FieldLabel required={required}>{label}</FieldLabel>
      <input className="oa-input" required={required} {...input} />
    </label>
  )
}

const subjectFor = (f) => `Demo request — ${f.company || f.name}${f.interest ? ` (${f.interest})` : ''}`

export default function Contact() {
  const { sub } = useRouter()
  const [status, setStatus] = useState('idle')
  const [firstName, setFirstName] = useState('')
  const lastForm = useRef({})
  const preset = sub && interestFor[sub]

  async function submit(e) {
    e.preventDefault()
    if (status === 'sending') return
    const f = Object.fromEntries(new FormData(e.currentTarget).entries())
    lastForm.current = f
    setFirstName((f.name || '').trim().replace(/^(dr\.?|mr\.?|ms\.?|mrs\.?|prof\.?)\s+/i, '').split(/\s+/)[0] || 'there')
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          company: f.company,
          phone: f.phone || '—',
          interest: f.interest,
          message: f.message || '—',
          consent: 'Yes — agreed to the privacy policy',
          _subject: subjectFor(f),
          _replyto: f.email,
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
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectFor(f))}&body=${encodeURIComponent(body)}`
  }

  return (
    <section style={{ padding: '72px 24px 100px' }}>
      <Grid min={320} gap={56} className="oa-wrap" style={{ alignItems: 'start' }}>
        <Stack gap={22}>
          <span className="oa-kicker" style={{ color: 'var(--c-teal)' }}>Gen AI for pharma &amp; healthcare</span>
          <h1 className="oa-h1">{preset ? `Book ${demoOf(sub)}.` : 'Book a demo.'}</h1>
          <p style={{ margin: 0, maxWidth: 520, fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--ink-2)' }}>
            Tell us a little about you, and we'll show {preset ? productById[sub].name : 'Merlin AI, OncoNourish or any of our products'} running
            on real cases from your therapy area.
          </p>
          <div className="oa-note" style={{ padding: '18px 22px' }}>
            <h2 className="oa-kicker" style={{ color: 'var(--c-teal)', margin: '0 0 8px' }}>What happens next</h2>
            <ol className="oa-next">
              <li>We reply within 1 business day to agree a time.</li>
              <li>A demo takes about 30 minutes, on your cases and your therapy area.</li>
              <li>If it's a fit, we send a written proposal — usually starting with a pilot.</li>
            </ol>
          </div>
          <dl className="oa-card oa-contact-list">
            <div><dt>Email</dt><dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></dd></div>
            <div><dt>Registered office</dt><dd>{ADDRESS}</dd></div>
            <div><dt>Offices</dt><dd>{OFFICES}</dd></div>
            <div>
              <dt>Elsewhere</dt>
              <dd>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn ↗<span className="oa-sr"> (opens in a new tab)</span></a>
                {' · '}
                <a href={GROUP_URL} target="_blank" rel="noopener noreferrer">onealphamed.com ↗<span className="oa-sr"> (opens in a new tab)</span></a>
              </dd>
            </div>
          </dl>
        </Stack>

        {status === 'sent' ? (
          <div
            role="status"
            className="oa-card"
            style={{ padding: '56px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, textAlign: 'center' }}
          >
            <div aria-hidden="true" style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,#86d13f,#0aa88f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: 'var(--on-grad)' }}>✓</div>
            <h2 className="oa-h3" style={{ fontSize: '1.4rem' }}>Thanks, {firstName} — we'll reply within 1 business day.</h2>
            <p className="oa-lead" style={{ maxWidth: 380, lineHeight: 1.6 }}>
              We've received your request. If it's urgent, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or
              call <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="oa-corners oa-card"
            aria-label="Demo request"
            style={{ padding: 'clamp(24px,4vw,36px)', display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 20px 60px rgba(15,36,48,0.08)' }}
          >
            <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-3)' }}>Fields marked * are required.</p>
            <Grid min={200} gap={16}>
              <Field label="Full name" required name="name" type="text" autoComplete="name" />
              <Field label="Work email" required name="email" type="email" autoComplete="email" />
              <Field label="Company" required name="company" type="text" autoComplete="organization" />
              <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
            </Grid>
            <label className="oa-field">
              <FieldLabel>Interested in</FieldLabel>
              <select key={preset || 'none'} name="interest" defaultValue={preset || interests[0]} className="oa-input">
                {interests.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </label>
            <label className="oa-field">
              <FieldLabel>Anything specific you want to see? (optional)</FieldLabel>
              <textarea name="message" rows={3} className="oa-input" style={{ resize: 'vertical' }} />
            </label>
            <label className="oa-consent">
              <input type="checkbox" name="consent" required />
              <span>
                I agree that OneAlphaMed may use these details to respond to my request, as described in the{' '}
                <Link to="/privacy">privacy policy</Link>. <span aria-hidden="true">*</span>
              </span>
            </label>
            {status === 'error' && (
              <p role="alert" className="oa-alert">
                We couldn't send your request.{' '}
                <button type="button" onClick={mailto} className="oa-textbtn">Send it from your email app instead →</button>
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} className="oa-btn" style={{ marginTop: 4, padding: '14px 32px' }}>
              {status === 'sending' ? 'Sending…' : 'Request my demo →'}
            </button>
            <p style={{ margin: 0, textAlign: 'center', fontSize: 14, color: 'var(--ink-3)' }}>
              We reply within 1 business day. Demos take about 30 minutes.
            </p>
          </form>
        )}
      </Grid>
    </section>
  )
}
