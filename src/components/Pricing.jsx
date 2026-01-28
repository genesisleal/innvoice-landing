import "./Pricing.css"

const PLANS = [
  {
    name: "Starter",
    tagline: "Para equipos que inician",
    price: "S/ 99",
    period: "mes",
    features: [
      "CRM basico",
      "Reportes esenciales",
      "Acceso en la nube",
      "Soporte por email",
      "3 usuarios",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Para negocios en crecimiento",
    price: "S/ 249",
    period: "mes",
    badge: "Mas Popular",
    features: [
      "Todos los modulos",
      "Analiticas avanzadas",
      "API Access",
      "Soporte prioritario",
      "Usuarios ilimitados",
      "Integraciones custom",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "Para grandes operaciones",
    price: "Custom",
    period: null,
    features: [
      "Setup dedicado",
      "Integraciones a medida",
      "Soporte 24/7 prioritario",
      "Seguridad avanzada",
      "On-premise disponible",
      "Training y onboarding",
    ],
    highlighted: false,
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
          Sin sorpresas. Cancela cuando quieras.
        </p>

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
                Solicitar Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
