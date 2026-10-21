// Post-build: writes a static HTML file for every route (real paths, per-page meta,
// Open Graph tags, JSON-LD), plus 404.html, robots.txt and sitemap.xml.
// Runs after `vite build` (client → dist/) and `vite build --ssr` (→ dist-ssr/).
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_NAME, SITE_URL, allRoutes, metaFor, parsePath, productMeta, PRODUCT_IDS } from '../src/site/routes.js'
import { CONTACT_EMAIL, GROUP_URL, LEGAL_NAME, LINKEDIN_URL, PHONE } from '../src/site/content.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')
const { render } = await import(join(ssrDir, 'entry-server.js'))

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Preload the two Latin font files the first paint needs.
const assets = readdirSync(join(dist, 'assets'))
const preloads = ['sora-latin-wght-normal', 'manrope-latin-wght-normal']
  .map((stem) => assets.find((f) => f.startsWith(stem) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/og/logo.png`,
  email: CONTACT_EMAIL,
  telephone: PHONE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2414, Ground Floor, Aravali Vihar, Sector 49',
    addressLocality: 'Faridabad',
    addressRegion: 'Haryana',
    postalCode: '121001',
    addressCountry: 'IN',
  },
  sameAs: [LINKEDIN_URL, GROUP_URL],
  parentOrganization: { '@type': 'Organization', name: 'OneAlphaMed', url: GROUP_URL },
}

const software = (id) => ({
  '@type': 'SoftwareApplication',
  name: productMeta(id).name,
  description: productMeta(id).description,
  applicationCategory: productMeta(id).category,
  operatingSystem: 'Web',
  url: `${SITE_URL}/products/${id}`,
  publisher: { '@id': `${SITE_URL}/#organization` },
})

function jsonLd({ page, sub }) {
  const graph = [organization]
  if (page === 'products' && sub) graph.push(software(sub))
  else if (page === 'products') {
    graph.push({ '@type': 'ItemList', itemListElement: PRODUCT_IDS.map((id, i) => ({ '@type': 'ListItem', position: i + 1, item: software(id) })) })
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
}

function head({ title, description, url, image, noindex, ld }) {
  return [
    `<link rel="canonical" href="${url}" />`,
    noindex ? '<meta name="robots" content="noindex" />' : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ld ? `<script type="application/ld+json">${ld.replace(/</g, '\\u003c')}</script>` : '',
    ...preloads,
  ].filter(Boolean).join('\n    ')
}

function page({ title, description, extraHead, body, route }) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(description)}" />`)
    .replace('</head>', `    ${extraHead}\n  </head>`)
    .replace('<div id="root"></div>', route ? `<div id="root" data-route="${route}">${body}</div>` : '<div id="root"></div>')
}

// "/products/merlin" → dist/products/merlin.html — GitHub Pages serves extensionless URLs from
// .html files directly, whereas a folder index would force a redirect to a trailing slash.
function write(path, html) {
  const file = path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
}

const routes = allRoutes()
for (const route of routes) {
  const parsed = parsePath(route)
  const meta = metaFor(parsed)
  const url = SITE_URL + (route === '/' ? '/' : route)
  const image = `${SITE_URL}/og/${parsed.page === 'products' && parsed.sub ? parsed.sub : 'default'}.png`
  write(route, page({ ...meta, route, extraHead: head({ ...meta, url, image, ld: jsonLd(parsed) }), body: render(route) }))
}

// Unknown paths: GitHub Pages serves 404.html; the client renders "not found" (or Practice Studio).
const nf = metaFor({ page: 'notfound', sub: '' })
writeFileSync(join(dist, '404.html'), page({ ...nf, extraHead: '<meta name="robots" content="noindex" />', body: '' }))

// Practice Studio lives at /practice-studio/ — give it a real 200 page with its own meta.
const ps = {
  title: 'Practice Studio — bespoke websites for doctors | OneAlphaMed',
  description: 'OneAlphaMed Practice Studio designs bespoke, best-in-class websites for doctors and clinics — in India and worldwide. Templates, appointment booking, WhatsApp concierge and more.',
}
const psHtml = page({ ...ps, extraHead: head({ ...ps, url: `${SITE_URL}/practice-studio`, image: `${SITE_URL}/og/default.png` }).replace(/\n\s*<link rel="preload"[^\n]*/g, ''), body: '' })
write('/practice-studio', psHtml)
mkdirSync(join(dist, 'practice-studio'), { recursive: true })
writeFileSync(join(dist, 'practice-studio', 'index.html'), psHtml) // older links use a trailing slash

const today = new Date().toISOString().slice(0, 10)
const urls = [...routes, '/practice-studio']
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((r) => `  <url><loc>${SITE_URL}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

rmSync(ssrDir, { recursive: true, force: true })
console.log(`prerendered ${routes.length} routes + 404, practice-studio, sitemap.xml, robots.txt`)
