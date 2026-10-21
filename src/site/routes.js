// Shared by the app (client titles / meta) and scripts/prerender.mjs (static HTML, sitemap).
// Keep this file free of JSX and asset imports so Node can load it directly.

export const SITE_URL = 'https://onealphamed.ai'
export const SITE_NAME = 'OneAlphaMed AI'

const PRODUCT_META = {
  merlin: {
    name: 'Merlin AI',
    title: 'Merlin AI — cited medical information for pharma',
    description: "Answer doctors' questions instantly, using only your approved literature — every answer cited. Includes the MedLink (WhatsApp) and MedScan (prescription scanning) modules.",
    category: 'BusinessApplication',
  },
  onconourish: {
    name: 'OncoNourish',
    title: 'OncoNourish — clinician-approved nutrition for oncology',
    description: 'Clinician-prescribed, AI-guided nutrition plans that help oncology patients stay nourished enough to finish treatment.',
    category: 'HealthApplication',
  },
  voice: {
    name: 'AI Sales Voice Agent',
    title: 'AI Sales Voice Agent — approved messaging between rep visits',
    description: 'Multilingual voice calls to doctors between rep visits, using only messaging your medical-legal team has approved.',
    category: 'BusinessApplication',
  },
  arogya: {
    name: 'Arogya',
    title: 'Arogya — medication adherence for patients and caregivers',
    description: 'Medication reminders and family-caregiver alerts for elderly patients, with doctor-ready adherence reports.',
    category: 'HealthApplication',
  },
  skinscan: {
    name: 'SkinScan',
    title: 'SkinScan — a simple skin score from one photo',
    description: 'A simple skin score your customers can understand, from one guided face photo — with clear questions to take to a dermatologist.',
    category: 'HealthApplication',
  },
  rwe: {
    name: 'RWE Platform',
    title: 'RWE Platform — real-world evidence from prescription photos',
    description: 'Turn prescription photos into clean study data, and pay investigators on time.',
    category: 'BusinessApplication',
  },
  pathview: {
    name: 'PathView 3D',
    title: 'PathView 3D — 3D anatomy for the consultation room',
    description: 'Interactive 3D anatomy doctors use with patients: a layered chest model and treatment routes compared side by side.',
    category: 'HealthApplication',
  },
}

export const PRODUCT_IDS = Object.keys(PRODUCT_META)

const AN = new Set(['onconourish', 'voice', 'arogya', 'rwe'])
/** "a Merlin AI demo" / "an Arogya demo" */
export const demoOf = (id) => `${AN.has(id) ? 'an' : 'a'} ${PRODUCT_META[id].name} demo`
export const productMeta = (id) => PRODUCT_META[id]

const PAGE_META = {
  home: {
    path: '/',
    title: 'OneAlphaMed AI — Gen AI built for pharma & healthcare',
    description: "Generative AI built exclusively for pharmaceutical and healthcare companies: cited medical information, compliant HCP engagement and clinician-approved patient programs.",
  },
  products: {
    path: '/products',
    title: 'Products — OneAlphaMed AI',
    description: 'Seven products for pharma and healthcare teams — Merlin AI, OncoNourish, the AI Sales Voice Agent, Arogya, SkinScan, the RWE Platform and PathView 3D.',
  },
  about: {
    path: '/about',
    title: 'About — OneAlphaMed AI',
    description: 'OneAlphaMed AI is the generative AI arm of the OneAlphaMed group, a pharma marketing and medical communications partner.',
  },
  security: {
    path: '/security',
    title: 'Security & compliance — OneAlphaMed AI',
    description: 'How OneAlphaMed AI products keep data inside your systems, answer only from approved evidence and keep a full audit trail.',
  },
  contact: {
    path: '/contact',
    title: 'Book a demo — OneAlphaMed AI',
    description: 'Book a demo of Merlin AI, OncoNourish or any OneAlphaMed AI product. We reply within 1 business day.',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy policy — OneAlphaMed AI',
    description: 'How the OneAlphaMed AI website collects, uses and protects personal data.',
  },
  terms: {
    path: '/terms',
    title: 'Terms of use — OneAlphaMed AI',
    description: 'Terms that apply to your use of the onealphamed.ai website.',
  },
  disclaimer: {
    path: '/disclaimer',
    title: 'Medical disclaimer — OneAlphaMed AI',
    description: 'The information on this website is not medical advice.',
  },
  notfound: {
    path: null,
    title: 'Page not found — OneAlphaMed AI',
    description: 'This page does not exist.',
  },
}

export const PAGES = Object.keys(PAGE_META).filter((k) => k !== 'notfound')

/** "/products/merlin" → { page: 'products', sub: 'merlin' } */
export function parsePath(pathname = '/') {
  const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean)
  if (parts.length === 0) return { page: 'home', sub: '' }
  const [head, sub = ''] = parts
  if (!PAGE_META[head] || head === 'home' || head === 'notfound') return { page: 'notfound', sub: '' }
  if (parts.length > 2) return { page: 'notfound', sub: '' }
  if (sub && head === 'products' && !PRODUCT_META[sub]) return { page: 'notfound', sub: '' }
  if (sub && head === 'contact' && !PRODUCT_META[sub]) return { page: 'contact', sub: '' }
  if (sub && !['products', 'contact'].includes(head)) return { page: 'notfound', sub: '' }
  return { page: head, sub }
}

export function pathFor(page, sub = '') {
  const base = PAGE_META[page]?.path ?? '/'
  return sub ? `${base}/${sub}` : base
}

/** Title + description for a parsed route. */
export function metaFor({ page, sub }) {
  if (page === 'products' && sub) {
    const p = PRODUCT_META[sub]
    return { title: `${p.title} | ${SITE_NAME}`, description: p.description }
  }
  if (page === 'contact' && sub) {
    return { title: `Book ${demoOf(sub)} — ${SITE_NAME}`, description: PAGE_META.contact.description }
  }
  return { title: PAGE_META[page].title, description: PAGE_META[page].description }
}

// Hash links from the previous single-page and hash-routed versions of the site.
const LEGACY_SECTIONS = { ...Object.fromEntries(PRODUCT_IDS.map((id) => [id, ['products', id]])), ecosystem: ['about', 'ecosystem'] }

/** "#products/merlin" or "#merlin" → "/products/merlin"; null when the hash isn't a legacy route. */
export function legacyHashToPath(hash = '') {
  const [head = '', sub = ''] = hash.replace(/^#\/?/, '').split('/')
  if (!head) return null
  if (head === 'home') return '/'
  if (PAGE_META[head] && head !== 'notfound') return pathFor(head, sub && (head === 'products' || head === 'contact') ? sub : '')
  if (LEGACY_SECTIONS[head]) {
    const [page, section] = LEGACY_SECTIONS[head]
    return page === 'products' ? pathFor('products', section) : `${pathFor(page)}#${section}`
  }
  return null
}

/** Every URL that gets a pre-rendered HTML file and a sitemap entry. */
export function allRoutes() {
  return [
    '/', '/products', ...PRODUCT_IDS.map((id) => `/products/${id}`),
    '/about', '/security', '/contact', '/privacy', '/terms', '/disclaimer',
  ]
}
