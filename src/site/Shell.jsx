import lockup from '../assets/alphamed-lockup-dark.png'
import { OFFICES, PRODUCT_LINKS } from './content'

const NAV = [
  { route: 'home', label: 'Home' },
  { route: 'products', label: 'Products' },
  { route: 'about', label: 'About' },
  { route: 'contact', label: 'Contact' },
]

export function Nav({ route }) {
  return (
    <header className="oa-nav">
      <div className="oa-wrap oa-nav-inner">
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={lockup} alt="AlphaMed.Ai — Innovations in Healthcare" className="oa-nav-logo" />
        </a>
        <nav className="oa-nav-links">
          {NAV.map((n) => (
            <a
              key={n.route}
              href={`#${n.route}`}
              className={`oa-nav-link${route === n.route ? ' is-active' : ''}`}
              aria-current={route === n.route ? 'page' : undefined}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="oa-btn oa-nav-cta">Book a demo</a>
      </div>
    </header>
  )
}

export function Footer() {
  const meta = { margin: 0, fontFamily: 'var(--mono)', fontWeight: 600, fontSize: 13 }
  return (
    <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid var(--line-soft)', padding: '48px 24px' }}>
      <div
        className="oa-wrap"
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}
      >
        <img src={lockup} alt="AlphaMed.Ai — Innovations in Healthcare" style={{ height: 40, width: 'auto' }} />
        <nav
          className="oa-label"
          style={{ display: 'flex', flexWrap: 'wrap', gap: 20, letterSpacing: '0.15em' }}
        >
          {PRODUCT_LINKS.map((p) => (
            <a key={p.id} href={`#products/${p.id}`} style={{ color: 'var(--ink-3)' }}>{p.label}</a>
          ))}
        </nav>
        <p style={{ ...meta, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-4)' }}>{OFFICES}</p>
        <p style={{ ...meta, color: 'rgba(15,36,48,0.5)' }}>© {new Date().getFullYear()} OneAlphaMed AI. Evidence, encoded.</p>
      </div>
    </footer>
  )
}
