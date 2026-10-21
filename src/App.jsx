import { useEffect, useLayoutEffect, useState } from 'react'
import './site/site.css'
import { Footer, Nav } from './site/Shell'
import Home from './site/Home'
import Products from './site/Products'
import About from './site/About'
import Contact from './site/Contact'

const PAGES = { home: Home, products: Products, about: About, contact: Contact }

const TITLES = {
  home: 'OneAlphaMed AI — Gen AI Partner for Pharma & Healthcare',
  products: 'Products — OneAlphaMed AI',
  about: 'About — OneAlphaMed AI',
  contact: 'Book a demo — OneAlphaMed AI',
}

// Section anchors from the previous single-page site, kept so shared links still resolve.
const LEGACY = {
  merlin: ['products', 'merlin'],
  onconourish: ['products', 'onconourish'],
  voice: ['products', 'voice'],
  arogya: ['products', 'arogya'],
  skinscan: ['products', 'skinscan'],
  rwe: ['products', 'rwe'],
  pathview: ['products', 'pathview'],
  ecosystem: ['about', 'ecosystem'],
}

function parseHash() {
  const [head = '', sub = ''] = window.location.hash.replace(/^#/, '').split('/')
  if (PAGES[head]) return { route: head, sub }
  if (LEGACY[head]) return { route: LEGACY[head][0], sub: LEGACY[head][1] }
  return { route: 'home', sub: '' }
}

function scrollToSection(id, behavior) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior })
}

export default function App() {
  const [loc, setLoc] = useState(parseHash)
  const Page = PAGES[loc.route]

  useEffect(() => {
    const onHash = () => setLoc((prev) => {
      const next = parseHash()
      next.changed = next.route !== prev.route
      return next
    })
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useLayoutEffect(() => {
    document.title = TITLES[loc.route]
    if (loc.sub) {
      // a fresh page needs a frame to lay out (and lazy images to reserve space) before measuring
      const t = setTimeout(() => scrollToSection(loc.sub, loc.changed === false ? 'smooth' : 'instant'), loc.changed === false ? 0 : 60)
      return () => clearTimeout(t)
    }
    if (loc.changed !== undefined) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [loc])

  return (
    <div className="oa">
      <div className="oa-glow" aria-hidden="true" />
      <Nav route={loc.route} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Page key={loc.route} />
      </main>
      <Footer />
    </div>
  )
}
