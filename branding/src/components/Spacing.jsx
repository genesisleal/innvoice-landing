import './Spacing.css'

const SPACING = [
  { name: 'xs', value: '0.25rem', px: '4px' },
  { name: 'sm', value: '0.5rem', px: '8px' },
  { name: 'md', value: '1rem', px: '16px' },
  { name: 'lg', value: '1.5rem', px: '24px' },
  { name: 'xl', value: '2rem', px: '32px' },
  { name: '2xl', value: '3rem', px: '48px' },
  { name: '3xl', value: '4rem', px: '64px' },
  { name: '4xl', value: '6rem', px: '96px' },
  { name: '5xl', value: '8rem', px: '128px' },
]

const RADIUS = [
  { name: 'sm', value: '6px', var: '--radius-sm' },
  { name: 'md', value: '10px', var: '--radius-md' },
  { name: 'lg', value: '16px', var: '--radius-lg' },
  { name: 'xl', value: '24px', var: '--radius-xl' },
  { name: 'full', value: '9999px', var: '--radius-full' },
]

const SHADOWS = [
  { name: 'sm', value: '0 1px 3px rgba(0, 0, 0, 0.06)', var: '--shadow-sm' },
  { name: 'md', value: '0 4px 16px rgba(0, 0, 0, 0.08)', var: '--shadow-md' },
  { name: 'lg', value: '0 8px 32px rgba(0, 0, 0, 0.1)', var: '--shadow-lg' },
  { name: 'card', value: '0 2px 12px rgba(0, 68, 215, 0.06)', var: '--shadow-card' },
  { name: 'card-hover', value: '0 8px 30px rgba(0, 68, 215, 0.12)', var: '--shadow-card-hover' },
]

function Spacing() {
  return (
    <section id="espaciado" className="brand-section">
      <div className="brand-section-header">
        <h2 className="brand-section-title">Espaciado, Radios y Sombras</h2>
        <p className="brand-section-subtitle">
          Sistema de espaciado consistente basado en múltiplos de 4px para mantener ritmo visual
          y armonía en todos los componentes.
        </p>
      </div>

      <div className="spacing-grid">
        <div className="spacing-block">
          <h3 className="spacing-block-title">Espaciado</h3>
          <div className="spacing-list">
            {SPACING.map(space => (
              <div key={space.name} className="spacing-item">
                <div className="spacing-visual">
                  <div
                    className="spacing-bar"
                    style={{ width: `calc(${space.value} * 2)` }}
                  />
                </div>
                <div className="spacing-info">
                  <code className="spacing-var">--space-{space.name}</code>
                  <span className="spacing-value">{space.value}</span>
                  <span className="spacing-px">{space.px}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="spacing-block">
          <h3 className="spacing-block-title">Border Radius</h3>
          <div className="radius-grid">
            {RADIUS.map(r => (
              <div key={r.name} className="radius-item">
                <div
                  className="radius-visual"
                  style={{ borderRadius: r.value }}
                />
                <div className="radius-info">
                  <code className="radius-var">{r.var}</code>
                  <span className="radius-value">{r.value}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="spacing-block-title" style={{ marginTop: 'var(--space-2xl)' }}>Sombras</h3>
          <div className="shadow-list">
            {SHADOWS.map(s => (
              <div key={s.name} className="shadow-item">
                <div
                  className="shadow-visual"
                  style={{ boxShadow: s.value }}
                />
                <div className="shadow-info">
                  <code className="shadow-var">{s.var}</code>
                  <span className="shadow-value">{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Spacing
