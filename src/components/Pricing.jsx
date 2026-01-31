import { useState } from "react"
import "./Pricing.css"

const ICONS = {
  gift: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"/>
      <rect x="2" y="7" width="20" height="5"/>
      <line x1="12" y1="22" x2="12" y2="7"/>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
    </svg>
  ),
  briefcase: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  crown: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/>
      <path d="M3 20h18"/>
    </svg>
  ),
  barChart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  ),
  trendingUp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  award: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
}

const PLANS_FACTURACION = [
  {
    name: "INNVO FREE",
    icon: ICONS.gift,
    tagline: "Para empezar sin costo",
    priceMonthly: "S/ 0",
    originalMonthly: null,
    priceYearly: "Gratis",
    originalYearly: null,
    yearlyNote: null,
    discount: null,
    features: [
      "Hasta 10 comprobantes electrónicos al mes",
      "3 usuarios",
      "Emisión de boletas y facturas electrónicas",
      "Clientes ilimitados",
      "Historial de documentos",
      "Acceso desde cualquier dispositivo",
      "Cumplimiento SUNAT",
    ],
    highlighted: false,
    cta: "Empezar Gratis",
  },
  {
    name: "INNVO",
    icon: ICONS.briefcase,
    tagline: "Para negocios que facturan",
    priceMonthly: "S/ 34",
    originalMonthly: "S/ 45",
    priceYearly: "S/ 347",
    originalYearly: "S/ 459",
    yearlyNote: "Ahorras S/ 61",
    discount: "24% OFF",
    features: [
      "Hasta 50 comprobantes electrónicos al mes",
      "5 usuarios",
      "Boletas y facturas electrónicas",
      "Clientes ilimitados",
      "Historial de ventas",
      "Reporte básico mensual",
      "Soporte online",
      "Cumplimiento SUNAT",
    ],
    highlighted: false,
    cta: "Elegir Plan",
  },
  {
    name: "INNVO PRO",
    icon: ICONS.rocket,
    tagline: "Para negocios en crecimiento",
    priceMonthly: "S/ 49",
    originalMonthly: "S/ 69",
    priceYearly: "S/ 500",
    originalYearly: "S/ 699",
    yearlyNote: "Ahorras S/ 88",
    discount: "29% OFF",
    badge: "Más Popular",
    features: [
      "Hasta 150 comprobantes electrónicos al mes",
      "8 usuarios",
      "Boletas y facturas electrónicas",
      "Clientes ilimitados",
      "Reportes mensuales de ventas",
      "Exportación a Excel / CSV",
      "Soporte prioritario",
      "Cumplimiento SUNAT",
    ],
    highlighted: true,
    cta: "Elegir Plan",
  },
  {
    name: "INNVO PREMIUM",
    icon: ICONS.crown,
    tagline: "Para operaciones completas",
    priceMonthly: "S/ 89",
    originalMonthly: "S/ 119",
    priceYearly: "S/ 908",
    originalYearly: "S/ 1,199",
    yearlyNote: "Ahorras S/ 160",
    discount: "25% OFF",
    features: [
      "Hasta 400 comprobantes electrónicos al mes",
      "15 usuarios",
      "Boletas y facturas electrónicas",
      "Clientes ilimitados",
      "Reportes avanzados",
      "Descarga masiva de documentos",
      "Exportación Excel / CSV",
      "Soporte prioritario",
      "Cumplimiento SUNAT",
    ],
    highlighted: false,
    cta: "Elegir Plan",
  },
]

const PLANS_GESTION = [
  {
    name: "INNVO FREE",
    icon: ICONS.gift,
    tagline: "Gestión básica sin costo",
    priceMonthly: "S/ 0",
    originalMonthly: null,
    priceYearly: "Gratis",
    originalYearly: null,
    yearlyNote: null,
    discount: null,
    features: [
      "Hasta 10 comprobantes electrónicos al mes",
      "4 usuarios",
      "Facturación electrónica SUNAT",
      "Gestión básica de clientes",
      "Dashboard básico de ventas",
      "Historial de documentos",
    ],
    highlighted: false,
    cta: "Empezar Gratis",
  },
  {
    name: "INNVO GESTIÓN",
    icon: ICONS.barChart,
    tagline: "Controla tu negocio",
    priceMonthly: "S/ 69",
    originalMonthly: "S/ 89",
    priceYearly: "S/ 704",
    originalYearly: "S/ 899",
    yearlyNote: "Ahorras S/ 124",
    discount: "22% OFF",
    features: [
      "Hasta 250 comprobantes electrónicos al mes",
      "6 usuarios",
      "Facturación electrónica SUNAT",
      "Gestión de clientes",
      "Dashboard de ventas",
      "Reportes automáticos",
      "Exportación Excel / CSV",
      "Soporte online",
    ],
    highlighted: false,
    cta: "Elegir Plan",
  },
  {
    name: "INNVO PRO",
    icon: ICONS.trendingUp,
    tagline: "Para equipos que escalan",
    priceMonthly: "S/ 99",
    originalMonthly: "S/ 129",
    priceYearly: "S/ 1,010",
    originalYearly: "S/ 1,299",
    yearlyNote: "Ahorras S/ 178",
    discount: "23% OFF",
    badge: "Más Popular",
    features: [
      "Hasta 600 comprobantes electrónicos al mes",
      "10 usuarios",
      "Facturación electrónica SUNAT",
      "Gestión de clientes",
      "Métricas de ingresos y gastos",
      "Reportes comparativos",
      "Exportación avanzada",
      "Soporte prioritario",
    ],
    highlighted: true,
    cta: "Elegir Plan",
  },
  {
    name: "INNVO PREMIUM",
    icon: ICONS.award,
    tagline: "Control total del negocio",
    priceMonthly: "S/ 139",
    originalMonthly: "S/ 179",
    priceYearly: "S/ 1,418",
    originalYearly: "S/ 1,799",
    yearlyNote: "Ahorras S/ 250",
    discount: "22% OFF",
    features: [
      "Hasta 1,200 comprobantes electrónicos al mes",
      "20 usuarios",
      "Facturación electrónica SUNAT",
      "Gestión avanzada del negocio",
      "Panel de control completo",
      "API e integraciones",
      "Exportación avanzada",
      "Soporte premium",
    ],
    highlighted: false,
    cta: "Elegir Plan",
  },
]

const CATEGORIES = [
  {
    id: "facturacion",
    label: "Solo Facturación",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    subtitle: "Facturación electrónica válida ante SUNAT",
    plans: PLANS_FACTURACION,
  },
  {
    id: "gestion",
    label: "Facturación + Gestión",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
    subtitle: "Controla tu negocio además de facturar",
    plans: PLANS_GESTION,
  },
]

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("facturacion")
  const [isYearly, setIsYearly] = useState(false)

  const category = CATEGORIES.find((c) => c.id === activeCategory)

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <h2 className="section-title">
          Elige el <span className="accent">Plan</span> Perfecto
          <br />
          Para Tu Negocio
        </h2>
        <p className="section-subtitle">
          Sin sorpresas. Cancela cuando quieras. Todos los planes incluyen facturación electrónica SUNAT.
        </p>

        <div className="pricing-category-switcher">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`pricing-category-btn ${activeCategory === cat.id ? "pricing-category-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="pricing-category-icon">{cat.icon}</span>
              <span className="pricing-category-label">{cat.label}</span>
            </button>
          ))}
        </div>

        <p className="pricing-category-subtitle">{category.subtitle}</p>

        <div className="pricing-billing-toggle">
          <span className={`pricing-billing-label ${!isYearly ? "pricing-billing-label--active" : ""}`}>Mensual</span>
          <button
            className={`pricing-toggle-switch ${isYearly ? "pricing-toggle-switch--yearly" : ""}`}
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Cambiar entre facturación mensual y anual"
          >
            <span className="pricing-toggle-knob" />
          </button>
          <span className={`pricing-billing-label ${isYearly ? "pricing-billing-label--active" : ""}`}>
            Anual
            <span className="pricing-discount-badge">15% OFF</span>
          </span>
        </div>

        <div className="pricing-grid" key={activeCategory}>
          {category.plans.map((plan, index) => (
            <div
              key={`${activeCategory}-${plan.name}`}
              className={`pricing-card pricing-card--tier-${index} ${plan.highlighted ? "pricing-card--highlighted" : ""}`}
            >
              {plan.badge && (
                <span className="pricing-badge">{plan.badge}</span>
              )}

              <div className="pricing-card-header">
                <span className="pricing-plan-icon">{plan.icon}</span>
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-tagline">{plan.tagline}</p>
              </div>

              <div className="pricing-price">
                {(isYearly ? plan.originalYearly : plan.originalMonthly) && (
                  <span className="pricing-original">
                    {isYearly ? plan.originalYearly : plan.originalMonthly}
                  </span>
                )}
                <div className="pricing-price-row">
                  <span className="pricing-amount">
                    {isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  {!(isYearly && plan.priceYearly === "Gratis") && (
                    <span className="pricing-period">/ {isYearly ? "año" : "mes"}</span>
                  )}
                  {plan.discount && (
                    <span className="pricing-discount-tag">{plan.discount}</span>
                  )}
                </div>
              </div>

              {isYearly && plan.yearlyNote && (
                <span className="pricing-savings">{plan.yearlyNote}</span>
              )}

              <div className="pricing-divider" />

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
                href="https://wa.me/51959561015?text=Hola%2C%20quiero%20información%20sobre%20el%20plan%20"
                target="_blank"
                rel="noopener noreferrer"
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
