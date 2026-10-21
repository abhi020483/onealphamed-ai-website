import { interestFor, productById } from './content'
import { Link } from './router'

export const Grad = ({ children }) => <span className="oa-grad">{children}</span>

export const Tag = ({ tone = 'green', children }) => (
  <span className={`oa-tag oa-tag--${tone}`}>{children}</span>
)

export function Grid({ min, gap = 20, style, className = '', children }) {
  return (
    <div
      className={`oa-grid ${className}`}
      style={{ gridTemplateColumns: `repeat(auto-fit,minmax(min(${min}px,100%),1fr))`, gap, ...style }}
    >
      {children}
    </div>
  )
}

export function Stack({ gap, style, className = '', children }) {
  return (
    <div className={`oa-stack ${className}`} style={{ gap, ...style }}>
      {children}
    </div>
  )
}

export function Section({ id, tint, style, children }) {
  return (
    <section id={id} className={`oa-sec${tint ? ' oa-sec--tint' : ''}`} style={{ scrollMarginTop: 90, ...style }}>
      {children}
    </section>
  )
}

export const Dot = ({ size = 6, color, glow }) => (
  <span
    className="oa-dot"
    aria-hidden="true"
    style={{ width: size, height: size, background: color, boxShadow: glow ? `0 0 10px ${color}` : undefined }}
  />
)

/** Responsive visual: `visual` comes from visuals.js ({ src, srcSet }). */
export function Visual({ visual, alt, sizes = '(max-width: 760px) 100vw, 720px', style, eager }) {
  return (
    <img
      src={visual.src}
      srcSet={visual.srcSet}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...style }}
    />
  )
}

/** Card with HUD corners and a short colour accent. */
export function FeatureCard({ color, title, desc, titleSize = '1.15rem', padding = 24, hover, children }) {
  return (
    <div
      className={`oa-card oa-corners${hover ? ` oa-hover-${hover}` : ''}`}
      style={{ padding, display: 'flex', flexDirection: 'column', gap: 12, transition: 'border-color .2s' }}
    >
      <span aria-hidden="true" style={{ width: 28, height: 3, borderRadius: 2, background: color }} />
      <h3 className="oa-h3" style={{ fontSize: titleSize }}>{title}</h3>
      <p className="oa-body">{desc}</p>
      {children}
    </div>
  )
}

export function PhotoBanner({ visual, alt, badge, badgeColor, focus }) {
  return (
    <div className="oa-photo">
      <Visual visual={visual} alt={alt} style={focus ? { objectPosition: focus } : undefined} />
      <div className="oa-photo-badge" style={{ color: badgeColor }}>{badge}</div>
    </div>
  )
}

export const Check = ({ children, style }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: '1rem', lineHeight: 1.55, ...style }}>
    <span className="oa-mono" aria-hidden="true" style={{ color: 'var(--c-green)' }}>✓</span>
    {children}
  </div>
)

export const StatusPill = ({ status }) => (
  <span className={`oa-pill oa-status oa-status--${status.toLowerCase()}`}>{status}</span>
)

/** "Book a demo of X" (+ optional public demo link) at the foot of each product section. */
export function ProductCTA({ id, children }) {
  const p = productById[id]
  return (
    <div className="oa-product-cta">
      <Link to={`/contact/${id}`} className="oa-btn oa-btn--sm" data-interest={interestFor[id]}>
        Book a demo of {p.name} →
      </Link>
      {p.demoUrl && (
        <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="oa-btn-ghost oa-btn-ghost--sm">
          {p.demoLabel} <span aria-hidden="true">↗</span>
          <span className="oa-sr">(opens in a new tab)</span>
        </a>
      )}
      {children}
    </div>
  )
}
