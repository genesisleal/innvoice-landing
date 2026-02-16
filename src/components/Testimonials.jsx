import "./Testimonials.css"

const TESTIMONIALS = [
  {
    name: "Carlos Mendoza",
    role: "Gerente Comercial",
    company: "Distribuidora Lima",
    text: "Antes usabamos Excel para todo. Con Innvoice nuestro pipeline de ventas esta ordenado y facturamos directo desde el sistema.",
    rating: 4.8,
  },
  {
    name: "Ana Quispe",
    role: "Fundadora",
    company: "AQ Consultores",
    text: "La facturacion electronica integrada con el CRM nos ahorro horas de trabajo manual cada semana. Un sistema que realmente entiende al negocio peruano.",
    rating: 4.9,
  },
  {
    name: "Roberto Diaz",
    role: "Director de Operaciones",
    company: "Constructora Sur",
    text: "Implementamos Innvoice y en pocos dias ya teniamos control de ventas, inventario y facturacion. El soporte es excelente.",
    rating: 4.7,
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title">
          Lo Que Dicen Nuestros <span className="accent">Clientes</span>
        </h2>
        <p className="section-subtitle">
          Empresas peruanas que ya operan con Innvoice.
        </p>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-rating">
                <span className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < Math.floor(t.rating) ? "currentColor" : "none"}>
                      <path d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.27l-3.52 1.58.67-3.93L1.3 5.14l3.94-.57L7 1z" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  ))}
                </span>
                <span className="testimonial-score">{t.rating}/5</span>
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role} — {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
