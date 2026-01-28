import "./Hero.css"

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <span className="hero-badge">CRM + ERP + Facturacion SUNAT</span>

        <h1 className="hero-title">
          Gestiona Todo Tu Negocio
          <br />
          Desde Una Sola <span className="accent">Plataforma</span>
        </h1>

        <p className="hero-description">
          Innvoice centraliza ventas, operacion y facturacion electronica en un
          sistema moderno. Vende, organiza y factura sin complicarte.
        </p>

        <div className="hero-actions">
          <a href="#cta" className="btn btn-primary">
            Solicitar Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#features" className="btn btn-outline">
            Ver Funciones
          </a>
        </div>

        <div className="hero-dashboard">
          <div className="hero-dashboard-window">
            <div className="hero-dashboard-topbar">
              <div className="hero-dashboard-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-dashboard-url">app.innvoice.pe</div>
            </div>
            <div className="hero-dashboard-content">
              <div className="hero-dashboard-sidebar">
                <div className="hero-dash-logo">
                  <div className="hero-dash-icon" />
                  <span>Innvoice</span>
                </div>
                <div className="hero-dash-nav">
                  <div className="hero-dash-nav-item">Dashboard</div>
                  <div className="hero-dash-nav-item">Clientes</div>
                  <div className="hero-dash-nav-item hero-dash-nav-item--active">Pipeline</div>
                  <div className="hero-dash-nav-item">Productos</div>
                  <div className="hero-dash-nav-item">Facturas</div>
                  <div className="hero-dash-nav-item">Reportes</div>
                </div>
              </div>
              <div className="hero-dashboard-main">
                <div className="hero-dash-header">
                  <span className="hero-dash-title">Pipeline de Ventas</span>
                  <div className="hero-dash-actions">
                    <span className="hero-dash-btn-small">+ Nuevo</span>
                    <span className="hero-dash-btn-small hero-dash-btn-small--ghost">Filtrar</span>
                  </div>
                </div>
                <div className="hero-dash-cards">
                  <div className="hero-dash-column">
                    <div className="hero-dash-col-header">
                      <span className="hero-dash-col-dot hero-dash-col-dot--blue" />
                      Prospectos
                      <span className="hero-dash-count">4</span>
                    </div>
                    <div className="hero-dash-card">
                      <span className="hero-dash-card-name">Empresa ABC</span>
                      <span className="hero-dash-card-value">S/ 12,500</span>
                    </div>
                    <div className="hero-dash-card">
                      <span className="hero-dash-card-name">Tech Solutions</span>
                      <span className="hero-dash-card-value">S/ 8,200</span>
                    </div>
                  </div>
                  <div className="hero-dash-column">
                    <div className="hero-dash-col-header">
                      <span className="hero-dash-col-dot hero-dash-col-dot--yellow" />
                      Negociacion
                      <span className="hero-dash-count">3</span>
                    </div>
                    <div className="hero-dash-card">
                      <span className="hero-dash-card-name">Grupo Delta</span>
                      <span className="hero-dash-card-value">S/ 24,000</span>
                    </div>
                    <div className="hero-dash-card">
                      <span className="hero-dash-card-name">Constructora Lima</span>
                      <span className="hero-dash-card-value">S/ 45,800</span>
                    </div>
                  </div>
                  <div className="hero-dash-column">
                    <div className="hero-dash-col-header">
                      <span className="hero-dash-col-dot hero-dash-col-dot--green" />
                      Cerrados
                      <span className="hero-dash-count">6</span>
                    </div>
                    <div className="hero-dash-card">
                      <span className="hero-dash-card-name">Minera Sur</span>
                      <span className="hero-dash-card-value">S/ 67,300</span>
                    </div>
                    <div className="hero-dash-card">
                      <span className="hero-dash-card-name">Retail Express</span>
                      <span className="hero-dash-card-value">S/ 15,900</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
