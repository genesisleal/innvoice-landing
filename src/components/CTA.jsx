import "./CTA.css"

export default function CTA() {
  return (
    <section id="cta" className="cta section">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">
            Empieza a Gestionar Tu Negocio con Innvoice
          </h2>
          <p className="cta-description">
            Unite a las empresas peruanas que ya transformaron su operacion con Innvoice.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary cta-btn-primary">
              Solicitar Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="btn cta-btn-secondary">
              Hablar con un Asesor
            </a>
          </div>
          <p className="cta-note">Sin tarjeta de credito · Cancela cuando quieras</p>
        </div>
      </div>
    </section>
  )
}
