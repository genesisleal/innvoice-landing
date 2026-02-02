import { useEffect, useRef } from "react"
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

function useScrollReveal(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll(".timeline-item")
    const line = container.querySelector(".timeline-line-fill")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" }
    )

    items.forEach((item) => observer.observe(item))

    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            line?.classList.add("line-grow")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (line) lineObserver.observe(container)

    return () => {
      items.forEach((item) => observer.unobserve(item))
      if (container) lineObserver.unobserve(container)
    }
  }, [containerRef])
}

export default function HowItWorks() {
  const timelineRef = useRef(null)
  useScrollReveal(timelineRef)

  return (
    <section id="como-funciona" className="how-it-works section">
      <div className="container">
        <span className="how-it-works-label">Innvoice en 3 pasos</span>
        <h2 className="section-title">Como Funciona?</h2>
        <p className="section-subtitle">
          De contacto a factura, en un mismo flujo. Menos clics, mas control.
        </p>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-line-fill" />
          </div>

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="timeline-content">
                <h3 className="timeline-step-title">{step.title}</h3>
                <p className="timeline-step-description">{step.description}</p>
              </div>

              <div className="timeline-dot">
                <span className="timeline-dot-number">{step.number}</span>
              </div>

              <div className="timeline-spacer" />
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <a href="https://wa.me/51959561015?text=Hola%2C%20quiero%20información%20sobre%20Innvoice" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Solicitar Demo</a>
        </div>
      </div>
    </section>
  )
}
