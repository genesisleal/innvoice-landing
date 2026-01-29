import "./Pricing.css"

const PLANS = [
  {
    name: "Free",
    tagline: "Para micronegocios",
    price: "S/ 0",
    period: "mes",
    originalPrice: null,
    features: [
      "Hasta 10 facturas/mes",
      "CRM basico de clientes",
      "Catalogo de productos",
      "Soporte por chat",
    ],
    highlighted: false,
    cta: "Empezar Gratis",
  },
  {
    name: "Starter",
    tagline: "Para equipos que inician",
    price: "S/ 29",
    period: "mes",
    originalPrice: "S/ 39",
    features: [
      "Facturacion ilimitada SUNAT",
      "CRM completo",
      "Reportes basicos",
      "Hasta 3 usuarios",
      "15 dias de prueba gratis",
    ],
    highlighted: false,
    cta: "Iniciar Prueba",
  },
  {
    name: "Growth",
    tagline: "Para negocios en crecimiento",
    price: "S/ 79",
    period: "mes",
    originalPrice: "S/ 99",
    badge: "Mas Popular",
    features: [
      "CRM + pipeline avanzado",
      "ERP: inventario y compras",
      "Reportes detallados",
      "Hasta 10 usuarios",
      "15 dias de prueba gratis",
    ],
    highlighted: true,
    cta: "Iniciar Prueba",
  },
  {
    name: "Pro",
    tagline: "Para operaciones completas",
    price: "S/ 179",
    period: "mes",
    originalPrice: "S/ 219",
    features: [
      "ERP completo multi-sucursal",
      "CRM con automatizaciones",
      "API completa + webhooks",
      "Dashboards ejecutivos",
      "Usuarios ilimitados",
      "15 dias de prueba gratis",
    ],
    highlighted: false,
    cta: "Iniciar Prueba",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <h2 className="section-title">
          Elige el <span className="accent">Plan</span> Perfecto
          <br />
          Para Tu Negocio
        </h2>
        <p className="section-subtitle">
          Sin sorpresas. Cancela cuando quieras. 15 dias de prueba en planes pagos.
        </p>

        <div className="pricing-toggle">
          <span className="pricing-launch-tag">Precios de lanzamiento</span>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlighted ? "pricing-card--highlighted" : ""}`}
            >
              {plan.badge && (
                <span className="pricing-badge">{plan.badge}</span>
              )}
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-tagline">{plan.tagline}</p>
              <div className="pricing-price">
                {plan.originalPrice && (
                  <span className="pricing-original">{plan.originalPrice}</span>
                )}
                <span className="pricing-amount">{plan.price}</span>
                {plan.period && (
                  <span className="pricing-period">/ {plan.period}</span>
                )}
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`btn ${plan.highlighted ? "btn-primary" : "btn-outline"} pricing-btn`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
