import './BrandHero.css'

function BrandHero() {
  return (
    <section className="brand-hero">
      <div className="brand-hero-bg">
        <div className="brand-hero-gradient" />
        <div className="brand-hero-grid" />
      </div>
      <div className="brand-hero-content">
        <div className="brand-hero-badge">Brand Guidelines v1.0</div>
        <h1 className="brand-hero-title">
          <span className="brand-hero-logo-text">Innvoice</span>
          <span className="brand-hero-title-sub">Brand Identity</span>
        </h1>
        <p className="brand-hero-description">
          Guía completa de identidad visual para mantener consistencia en todas las aplicaciones de la marca Innvoice.
        </p>
        <div className="brand-hero-stats">
          <div className="brand-hero-stat">
            <span className="brand-hero-stat-value">12</span>
            <span className="brand-hero-stat-label">Colores</span>
          </div>
          <div className="brand-hero-stat">
            <span className="brand-hero-stat-value">3</span>
            <span className="brand-hero-stat-label">Tipografías</span>
          </div>
          <div className="brand-hero-stat">
            <span className="brand-hero-stat-value">9</span>
            <span className="brand-hero-stat-label">Espaciados</span>
          </div>
          <div className="brand-hero-stat">
            <span className="brand-hero-stat-value">5</span>
            <span className="brand-hero-stat-label">Radios</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandHero
