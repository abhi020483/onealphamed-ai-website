import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import lockup from '../assets/alphamed-lockup-light.png'

const LINKS = [
  { href: '#merlin', label: 'Merlin AI' },
  { href: '#onconourish', label: 'OncoNourish' },
  { href: '#ecosystem', label: 'Ecosystem' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
            className="h-10 w-auto drop-shadow-[0_0_12px_rgba(30,194,122,0.35)] transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-9 font-mono text-[13px] tracking-wide uppercase text-text-dim">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="relative group py-2">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gradient-to-r from-lime via-teal to-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wide border border-line rounded-full px-5 py-2.5 text-text-dim transition-colors duration-300 hover:border-teal hover:text-teal"
        >
          Request a demo
        </a>

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
          <a href="#contact" onClick={() => setOpen(false)} className="text-teal">
            Request a demo →
          </a>
        </div>
      )}
    </motion.header>
  )
}
