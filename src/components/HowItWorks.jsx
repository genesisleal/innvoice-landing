import "./HowItWorks.css"

const STEPS = [
  {
    number: "1",
    title: "Registrate",
    description: "Crea tu cuenta empresarial, es rapido y sin complicaciones.",
  },
  {
    number: "2",
    title: "Configura Tu Equipo",
    description: "Invita a tu equipo y selecciona los modulos que necesitas: CRM, ERP, Facturacion.",
  },
  {
    number: "3",
    title: "Vende y Crece",
    description: "Accede a tu dashboard, monitorea el progreso y crece con datos reales.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <span className="how-it-works-label">Innvoice en 3 pasos</span>
        <h2 className="section-title">Como Funciona?</h2>
        <p className="section-subtitle">
          De contacto a factura, en un mismo flujo. Menos clics, mas control.
        </p>

        <div className="steps">
          <div className="steps-line" />
          {STEPS.map((step, i) => (
            <div key={step.number} className="step">
              <div className="step-marker">
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-bg-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <a href="#cta" className="btn btn-outline">Solicitar Demo</a>
        </div>
      </div>
    </section>
  )
}
