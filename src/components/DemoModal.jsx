import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const RECIPIENT = 'blessy.babychan@onealphamed.com'
const ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT}`

const INTERESTS = ['Merlin AI', 'MedLink AI', 'MedScan AI', 'OncoNourish', 'Multiple / not sure']

const field =
  'w-full rounded-lg border border-line bg-void-3/80 px-4 py-3 text-[0.95rem] text-text placeholder:text-text-dim/50 outline-none transition-colors duration-200 focus:border-teal'

export default function DemoModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: INTERESTS[0],
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const firstFieldRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => firstFieldRef.current?.focus(), 250)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [open, onClose])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const mailtoFallback = () => {
    const body = [
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      `Interested in: ${form.interest}`,
      form.message && `\n${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      `Demo request — ${form.company || form.name}`
    )}&body=${encodeURIComponent(body)}`
  }

  const submit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone || '—',
          interest: form.interest,
          message: form.message || '—',
          _subject: `Demo request — ${form.company || form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && String(data.success) === 'true') {
        setStatus('sent')
      } else if (/activat/i.test(String(data.message))) {
        // relay not activated yet — deliver via the visitor's email app instead
        setStatus('pending-activation')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const close = () => {
    onClose()
    if (status === 'sent') {
      setTimeout(() => {
        setStatus('idle')
        setForm({ name: '', email: '', company: '', phone: '', interest: INTERESTS[0], message: '' })
      }, 300)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-void/80 p-4 backdrop-blur-md"
          onMouseDown={(e) => e.target === e.currentTarget && close()}
          role="dialog"
          aria-modal="true"
          aria-label="Request a demo"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hud-corners relative my-8 w-full max-w-lg rounded-2xl border border-line bg-void-2 p-7 shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_60px_rgba(30,194,122,0.08)] md:p-9"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-line text-text-dim transition-colors hover:border-teal hover:text-teal"
            >
              ✕
            </button>

            {status === 'sent' ? (
              <div className="flex flex-col items-center gap-5 py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-lime to-teal text-2xl text-void">
                  ✓
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-green">
                  Transmission received
                </p>
                <h3 className="font-display text-xl font-medium text-text">
                  Thanks, {form.name.split(' ')[0] || 'there'} — request logged.
                </h3>
                <p className="max-w-sm text-[0.95rem] leading-relaxed text-text-dim">
                  Our team will reach out to schedule your demo shortly.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-2 rounded-full border border-line px-7 py-2.5 text-sm font-semibold text-text transition-colors hover:border-teal hover:text-teal"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal">
                  Gen AI for Pharma &amp; Healthcare
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-text">
                  Request a demo
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dim">
                  Tell us a little about you — we&rsquo;ll show Merlin AI or OncoNourish
                  running on real cases.
                </p>

                <form onSubmit={submit} className="mt-6 flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                        Full name *
                      </span>
                      <input
                        ref={firstFieldRef}
                        required
                        type="text"
                        autoComplete="name"
                        placeholder="Dr Priya Sharma"
                        className={field}
                        value={form.name}
                        onChange={set('name')}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                        Work email *
                      </span>
                      <input
                        required
                        type="email"
                        autoComplete="email"
                        placeholder="priya@company.com"
                        className={field}
                        value={form.email}
                        onChange={set('email')}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                        Company *
                      </span>
                      <input
                        required
                        type="text"
                        autoComplete="organization"
                        placeholder="Acme Pharma"
                        className={field}
                        value={form.company}
                        onChange={set('company')}
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                        Phone
                      </span>
                      <input
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 …"
                        className={field}
                        value={form.phone}
                        onChange={set('phone')}
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                      Interested in
                    </span>
                    <select className={field} value={form.interest} onChange={set('interest')}>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i} className="bg-void-3 text-text">
                          {i}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                      Anything specific you want to see?
                    </span>
                    <textarea
                      rows={3}
                      placeholder="Optional"
                      className={`${field} resize-none`}
                      value={form.message}
                      onChange={set('message')}
                    />
                  </label>

                  {status === 'error' && (
                    <p className="rounded-lg border border-blue/30 bg-blue/10 px-4 py-3 text-[13px] leading-relaxed text-text-dim">
                      Couldn&rsquo;t reach the form service.{' '}
                      <button type="button" onClick={mailtoFallback} className="font-semibold text-teal underline">
                        Send via your email app instead →
                      </button>
                    </p>
                  )}
                  {status === 'pending-activation' && (
                    <p className="rounded-lg border border-teal/30 bg-teal/10 px-4 py-3 text-[13px] leading-relaxed text-text-dim">
                      Our inbox connection is being finalised — send your request in one
                      click via email instead:{' '}
                      <button type="button" onClick={mailtoFallback} className="font-semibold text-teal underline">
                        Open pre-filled email →
                      </button>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-1 rounded-full bg-gradient-to-r from-lime via-teal to-blue px-8 py-3.5 text-[15px] font-semibold text-void shadow-[0_0_24px_rgba(30,194,122,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(30,194,122,0.55)] disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Transmitting…' : 'Request my demo →'}
                  </button>
                  <p className="text-center font-mono text-[10px] tracking-[0.15em] text-text-dim/60">
                    Goes straight to {RECIPIENT}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
