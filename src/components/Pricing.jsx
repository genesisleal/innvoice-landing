import { useState } from "react"
import "./Pricing.css"

const PRICING_FAQ = [
  {
    question: "¿Puedo cambiar de plan despues?",
    answer: "Si. Puedes subir o bajar de plan en cualquier momento. El cambio se aplica de inmediato y solo pagas la diferencia proporcional.",
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Si. No hay contratos de permanencia. Puedes cancelar tu plan cuando quieras y seguir usando el servicio hasta que termine tu periodo de facturacion.",
  },
  {
    question: "¿Los precios incluyen IGV?",
    answer: "Los precios mostrados no incluyen IGV. El impuesto se calcula y muestra al momento del pago.",
  },
  {
    question: "¿Que metodos de pago aceptan?",
    answer: "Aceptamos tarjetas de credito/debito, transferencias bancarias y Yape/Plin para mayor comodidad.",
  },
  {
    question: "¿Que pasa si necesito mas comprobantes de los que incluye mi plan?",
    answer: "Puedes subir al siguiente plan o contactarnos para un plan personalizado. Nunca se bloquea tu facturacion sin aviso previo.",
  },
]

const PLANS = [
  {
    tier: "starter",
    name: "EMPRENDEDOR",
    tagline: "Ideal para independientes que recien empiezan",
    monthly: { original: "S/ 79", price: "S/ 60", discount: "24% OFF" },
    yearly: { original: "S/ 720", price: "S/ 660", discount: "Paga 11 meses", savings: "Ahorras S/ 60 al año" },
    features: [
      { text: "Boletas y facturas electronicas (SUNAT)", included: true },
      { text: "Comprobantes ilimitados", included: true },
      { text: "Usuarios ilimitados", included: true },
      { text: "Multi-sucursal", included: true },
      { text: "Gestion basica de clientes", included: true },
      { text: "Reporte de ventas mensual", included: true },
      { text: "Soporte por email", included: true },
      { text: "API / Integraciones", included: false },
      { text: "Modulo ERP completo", included: false },
      { text: "Gestion avanzada de inventario", included: false },
      { text: "Soporte dedicado", included: false },
      { text: "Implementacion personalizada", included: false },
    ],
    cta: "Elegir Plan",
    ctaLink: "https://wa.me/51959561015?text=Hola%2C%20quiero%20información%20sobre%20el%20plan%20Emprendedor",
    nudge: null,
  },
  {
    tier: "pro",
    name: "PRO",
    badge: "Mas Popular",
    tagline: "Ideal para negocios en crecimiento",
    monthly: { original: "S/ 189", price: "S/ 120", discount: "37% OFF" },
    yearly: { original: "S/ 1,440", price: "S/ 1,320", discount: "Paga 11 meses", savings: "Ahorras S/ 120 al año" },
    socialProof: "El 80% de nuestros clientes elige este plan",
    features: [
      { text: "Todo lo del plan Emprendedor", included: true },
      { text: "Control de inventario en tiempo real", included: true },
      { text: "Reportes avanzados de ventas", included: true },
      { text: "CRM integrado", included: true },
      { text: "Dashboard inteligente", included: true },
      { text: "Soporte prioritario WhatsApp", included: true },
      { text: "Backup automatico en la nube", included: true },
    ],
    cta: "Elegir Plan",
    ctaLink: "https://wa.me/51959561015?text=Hola%2C%20quiero%20información%20sobre%20el%20plan%20Pro",
    nudge: "Perfecto para negocios que quieren crecer sin limites.",
    highlight: "Ahorra tiempo y evita errores con control de stock automatico",
  },
  {
    tier: "enterprise",
    name: "EMPRESA",
    tagline: "Para empresas con multiples sucursales",
    monthly: { original: "S/ 449", price: "S/ 300", discount: "33% OFF" },
    yearly: { original: "S/ 3,600", price: "S/ 3,300", discount: "Paga 11 meses", savings: "Ahorras S/ 300 al año" },
    features: [
      { text: "Todo lo del plan Pro", included: true },
      { text: "API / Integraciones", included: true },
      { text: "Modulo ERP completo", included: true },
      { text: "Gestion avanzada de inventario", included: true },
      { text: "Soporte dedicado", included: true },
      { text: "Implementacion personalizada", included: true },
    ],
    cta: "Elegir Plan",
    ctaLink: "https://wa.me/51959561015?text=Hola%2C%20quiero%20información%20sobre%20el%20plan%20Empresa",
    nudge: null,
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section id="planes" className="pricing section">
      <div className="container">
        <h2 className="section-title">
          Elige el <span className="accent">Plan</span> Perfecto
          <br />
          Para Tu Negocio
        </h2>
        <p className="section-subtitle">
          Sin sorpresas. Cancela cuando quieras. Todos los planes incluyen facturacion electronica SUNAT.
        </p>

        <div className="pricing-trial-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          7 dias gratis en todos los planes — sin tarjeta de credito
        </div>

        <div className="pricing-billing-toggle">
          <span className={`pricing-billing-label ${!isYearly ? "pricing-billing-label--active" : ""}`}>Mensual</span>
          <button
            className={`pricing-toggle-switch ${isYearly ? "pricing-toggle-switch--yearly" : ""}`}
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Cambiar entre facturacion mensual y anual"
          >
            <span className="pricing-toggle-knob" />
          </button>
          <span className={`pricing-billing-label ${isYearly ? "pricing-billing-label--active" : ""}`}>
            Anual
            <span className="pricing-billing-save">Ahorra mas</span>
          </span>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card pricing-card--${plan.tier}`}
            >
              {plan.badge && (
                <span className="pricing-badge">{plan.badge}</span>
              )}

              <div className="pricing-card-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-tagline">{plan.tagline}</p>
              </div>

              <div className="pricing-price">
                {(isYearly ? plan.yearly.original : plan.monthly.original) && (
                  <span className="pricing-original">
                    {isYearly ? plan.yearly.original : plan.monthly.original}
                  </span>
                )}
                <div className="pricing-price-row">
                  <span className="pricing-amount">
                    {isYearly ? plan.yearly.price : plan.monthly.price}
                  </span>
                  <span className="pricing-period">/ {isYearly ? "año" : "mes"}</span>
                  {(isYearly ? plan.yearly.discount : plan.monthly.discount) && (
                    <span className="pricing-discount-tag">
                      {isYearly ? plan.yearly.discount : plan.monthly.discount}
                    </span>
                  )}
                </div>
              </div>

              {isYearly && plan.yearly.savings && (
                <span className="pricing-savings">{plan.yearly.savings}</span>
              )}

              {plan.socialProof && (
                <span className="pricing-social-proof">{plan.socialProof}</span>
              )}

              <div className="pricing-divider" />

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`pricing-feature ${!feature.included ? "pricing-feature--excluded" : ""}`}
                  >
                    {feature.included ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              {plan.highlight && (
                <p className="pricing-highlight">{plan.highlight}</p>
              )}

              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.tier === "pro" ? "btn-primary" : "btn-outline"} pricing-btn`}
              >
                {plan.cta}
              </a>

              {plan.nudge && (
                <p className="pricing-nudge">{plan.nudge}</p>
              )}
            </div>
          ))}
        </div>

        <div className="pricing-faq">
          <h3 className="pricing-faq-title">Preguntas sobre precios</h3>
          <div className="pricing-faq-list">
            {PRICING_FAQ.map((item, index) => (
              <div
                key={index}
                className={`pricing-faq-item ${openFaq === index ? "pricing-faq-item--open" : ""}`}
              >
                <button
                  className="pricing-faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{item.question}</span>
                  <svg
                    className="pricing-faq-chevron"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8l4 4 4-4" />
                  </svg>
                </button>
                <div className="pricing-faq-answer-wrapper">
                  <p className="pricing-faq-answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
