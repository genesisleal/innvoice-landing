import "./Features.css"

const FEATURES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 12h16M8 16h10M8 20h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "CRM Moderno",
    description: "Pipeline de ventas, gestion de clientes y seguimiento comercial automatizado.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "ERP Integrado",
    description: "Productos, inventario, compras y reportes de negocio en un solo lugar.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 8h20v18a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="2" />
        <path d="M6 8l2-4h16l2 4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Facturacion SUNAT",
    description: "Emision de comprobantes electronicos alineados a SUNAT Peru.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M16 10v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automatizacion",
    description: "Flujos automaticos para seguimiento, cobros y procesos repetitivos.",
  },
]

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="section-title">
          Funciones <span className="accent">Poderosas</span> Que
          <br />
          Simplifican Tu Operacion
        </h2>
        <p className="section-subtitle">
          Todo lo que necesitas para vender, organizar y facturar desde un solo sistema.
        </p>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
