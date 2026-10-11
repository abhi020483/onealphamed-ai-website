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
    style={{ width: size, height: size, background: color, boxShadow: glow ? `0 0 10px ${color}` : undefined }}
  />
)

/* numbered card with HUD corners — CAP / P4 / VA / AR / RWE cards */
export function FeatureCard({ n, color, title, desc, titleSize = '1.15rem', padding = 24, hover, children }) {
  return (
    <div
      className={`oa-card oa-corners${hover ? ` oa-hover-${hover}` : ''}`}
      style={{ padding, display: 'flex', flexDirection: 'column', gap: 12, transition: 'border-color .2s' }}
    >
      <span className="oa-mono" style={{ fontSize: 12, letterSpacing: '0.12em', color }}>{n}</span>
      <h3 className="oa-h3" style={{ fontSize: titleSize }}>{title}</h3>
      <p className="oa-body">{desc}</p>
      {children}
    </div>
  )
}

export function PhotoBanner({ src, alt, badge, badgeColor }) {
  return (
    <div className="oa-photo">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <div className="oa-photo-badge" style={{ color: badgeColor }}>{badge}</div>
    </div>
  )
}

export const Check = ({ children, style }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: '1rem', lineHeight: 1.55, ...style }}>
    <span className="oa-mono" style={{ color: '#0e8f58' }}>✓</span>
    {children}
  </div>
)
