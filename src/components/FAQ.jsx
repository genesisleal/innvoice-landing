import { useState } from "react"
import "./FAQ.css"

const FAQ_ITEMS = [
  {
    question: "¿La facturacion electronica de Innvoice es valida ante SUNAT?",
    answer: "Si. Innvoice cumple con todos los requisitos de la SUNAT para la emision de comprobantes de pago electronicos (CPE). Tus boletas, facturas, notas de credito y notas de debito tienen plena validez tributaria.",
  },
  {
    question: "¿Es dificil de usar si no se mucho de tecnologia?",
    answer: "Innvoice esta diseñado para que cualquier persona pueda usarlo. No necesitas conocimientos tecnicos. En menos de 10 minutos puedes estar emitiendo tu primer comprobante. Ademas, te acompañamos paso a paso.",
  },
  {
    question: "¿Que necesito para empezar a facturar electronicamente?",
    answer: "Solo necesitas tu RUC con condicion de habido, tu Clave SOL de SUNAT y estar registrado como emisor electronico. Si aun no lo estas, te ayudamos con el proceso.",
  },
  {
    question: "¿Puedo probar Innvoice antes de pagar?",
    answer: "Si. Todos los planes incluyen 7 dias gratis para que pruebes la plataforma sin compromiso. No necesitas tarjeta de credito para empezar.",
  },
  {
    question: "¿Que tipos de comprobantes puedo emitir?",
    answer: "Puedes emitir facturas, boletas de venta, notas de credito y notas de debito electronicas. Todos validados ante SUNAT.",
  },
  {
    question: "¿Puedo usar Innvoice desde mi celular?",
    answer: "Si. Innvoice funciona desde cualquier navegador web, ya sea en computadora, tablet o celular. No necesitas instalar nada.",
  },
  {
    question: "¿Que pasa si tengo un problema o duda?",
    answer: "Contamos con soporte por WhatsApp y correo electronico. Dependiendo de tu plan, el tiempo de respuesta varia, pero siempre buscamos resolver tus dudas lo mas rapido posible.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Si. Puedes subir o bajar de plan cuando quieras. El cambio se aplica de forma inmediata y solo pagas la diferencia proporcional.",
  },
  {
    question: "¿Mis datos estan seguros?",
    answer: "Si. Usamos conexiones encriptadas (HTTPS), servidores seguros y respaldos automaticos para proteger toda tu informacion comercial y tributaria.",
  },
  {
    question: "¿Para que tipo de negocios sirve Innvoice?",
    answer: "Innvoice es ideal para bodegas, tiendas, restaurantes, servicios profesionales, agencias y cualquier negocio en Peru que necesite facturar electronicamente y llevar el control de sus ventas.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleItem(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="preguntas" className="faq section">
      <div className="container">
        <h2 className="section-title">
          Preguntas <span className="accent">Frecuentes</span>
        </h2>
        <p className="section-subtitle">
          Resolvemos tus dudas antes de que las tengas.
        </p>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <svg
                  className="faq-chevron"
                  width="20"
                  height="20"
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
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
