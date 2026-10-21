import { useEffect, useState } from 'react'
import lockup from '../assets/alphamed-lockup-dark.png'
import {
  ADDRESS, CONTACT_EMAIL, GROUP_URL, LEGAL_NAME, LINKEDIN_URL, OFFICES, PHONE, PHONE_DISPLAY, PRODUCT_LINKS,
} from './content'
import { Link, useRouter } from './router'

const NAV = [
  { page: 'home', to: '/', label: 'Home' },
  { page: 'products', to: '/products', label: 'Products' },
  { page: 'about', to: '/about', label: 'About' },
  { page: 'security', to: '/security', label: 'Security' },
  { page: 'contact', to: '/contact', label: 'Contact' },
]

const LOGO_ALT = 'OneAlphaMed AI home'

export function Nav() {
  const { page, path } = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`oa-nav${open ? ' is-open' : ''}`}>
      <a href="#main" className="oa-skip">Skip to content</a>
      <div className="oa-wrap oa-nav-inner">
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={lockup} alt={LOGO_ALT} className="oa-nav-logo" width="166" height="46" />
        </Link>
        <nav id="oa-menu" className="oa-nav-links" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.page}
              to={n.to}
              className={`oa-nav-link${page === n.page ? ' is-active' : ''}`}
              aria-current={page === n.page ? 'page' : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="oa-nav-actions">
          <Link to="/contact" className="oa-btn oa-nav-cta">Book a demo</Link>
          <button
            type="button"
            className="oa-burger"
            aria-expanded={open}
            aria-controls="oa-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}

const FooterHeading = ({ children }) => <h2 className="oa-footer-h">{children}</h2>

export function Footer() {
  return (
    <footer className="oa-footer">
      <div className="oa-wrap oa-footer-grid">
        <div className="oa-footer-brand">
          <img src={lockup} alt="OneAlphaMed AI" style={{ height: 40, width: 'auto' }} width="145" height="40" />
          <p>Generative AI built exclusively for pharmaceutical and healthcare companies.</p>
          <p className="oa-footer-small">
            The AI products division of the <a href={GROUP_URL} target="_blank" rel="noopener noreferrer">OneAlphaMed group<span className="oa-sr"> (opens in a new tab)</span></a>.
          </p>
        </div>
        <div>
          <FooterHeading>Products</FooterHeading>
          <ul className="oa-footer-list">
            {PRODUCT_LINKS.map((p) => (
              <li key={p.id}><Link to={`/products/${p.id}`}>{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <FooterHeading>Company</FooterHeading>
          <ul className="oa-footer-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/security">Security &amp; compliance</Link></li>
            <li><Link to="/contact">Book a demo</Link></li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn<span className="oa-sr"> (opens in a new tab)</span></a></li>
          </ul>
        </div>
        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="oa-footer-list">
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
            <li className="oa-footer-small">{ADDRESS}</li>
            <li className="oa-footer-small">Offices: {OFFICES}</li>
          </ul>
        </div>
      </div>
      <div className="oa-wrap oa-footer-base">
        <p>© {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.</p>
        <ul>
          <li><Link to="/privacy">Privacy policy</Link></li>
          <li><Link to="/terms">Terms of use</Link></li>
          <li><Link to="/disclaimer">Medical disclaimer</Link></li>
        </ul>
      </div>
    </footer>
  )
}
