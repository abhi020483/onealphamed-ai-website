import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'
import lockupLight from '../assets/alphamed-lockup-light.png'
import lockupDark from '../assets/alphamed-lockup-dark.png'

const LINKS = [
  { href: '#merlin', label: 'Merlin AI' },
  { href: '#onconourish', label: 'OncoNourish' },
  { href: '#voice', label: 'Voice Agent' },
  { href: '#arogya', label: 'Arogya' },
  { href: '#ecosystem', label: 'Ecosystem' },
]

export default function Nav({ onRequestDemo }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // dark theme needs the light-colored wordmark (readable on dark bg), and vice versa
  const lockup = theme === 'dark' ? lockupLight : lockupDark

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0.5 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-void/80 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-18 py-3">
        <a href="#top" className="flex items-center shrink-0 group">
          <img
            src={lockup}
            alt="AlphaMed.Ai — Innovations in Healthcare"
            className="h-11 lg:h-14 w-auto drop-shadow-[0_0_12px_rgba(30,194,122,0.35)] transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-[12.5px] lg:text-[14.5px] font-semibold uppercase tracking-[0.04em] text-text/90">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="relative group whitespace-nowrap py-2 transition-colors duration-200 hover:text-green">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gradient-to-r from-brand-lime via-brand-teal to-brand-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line-strong px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim transition-colors duration-200 hover:border-green hover:text-green"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? '☀ Light' : '◐ Dark'}
          </button>

          <button
            type="button"
            onClick={onRequestDemo}
            className="hidden lg:inline-flex items-center whitespace-nowrap rounded-full bg-gradient-to-r from-brand-lime via-brand-teal to-brand-blue px-6 py-2.5 text-[13.5px] font-semibold text-ink shadow-[0_0_18px_rgba(30,194,122,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(30,194,122,0.55)]"
          >
            Request a demo
          </button>
          <button
            type="button"
            onClick={onRequestDemo}
            className="inline-flex lg:hidden items-center whitespace-nowrap rounded-full bg-gradient-to-r from-brand-lime via-brand-teal to-brand-blue px-4 py-2 text-[12px] font-semibold text-ink shadow-[0_0_18px_rgba(30,194,122,0.35)]"
          >
            Demo
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-text transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-text transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-text transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-void border-t border-line px-6 py-6 flex flex-col gap-5 font-mono text-sm uppercase tracking-wide">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              toggleTheme()
            }}
            className="text-left text-text-dim"
          >
            {theme === 'dark' ? '☀ Switch to light' : '◐ Switch to dark'}
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              onRequestDemo()
            }}
            className="text-left uppercase text-teal"
          >
            Request a demo →
          </button>
        </div>
      )}
    </motion.header>
  )
}
