import { phases } from './content'
import { Grid } from './ui'

export default function JourneyCards() {
  return (
    <Grid min={260}>
      {phases.map((ph) => (
        <div
          key={ph.label}
          className="oa-card"
          style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 26, borderTop: `3px solid ${ph.dot}` }}
        >
          <span className="oa-label" style={{ color: ph.color }}>{ph.label}</span>
          <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.65 }}>{ph.text}</p>
          <span className="oa-mono" style={{ fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.12em', color: ph.color }}>
            {ph.chip}
          </span>
        </div>
      ))}
    </Grid>
  )
}
