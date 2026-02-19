import { useState } from "react"
import "./Navbar.css"

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Funciones", href: "#funciones" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
]

const WHATSAPP_URL = "https://wa.me/51959561015?text=Hola%2C%20quiero%20información%20sobre%20Innvoice"
const APP_URL = "https://app.innvoice.pe"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#inicio" className="navbar-logo">
          <img src="/logo-innvoice.png" alt="Innvoice" />
        </a>

        <ul className={`navbar-links ${open ? "navbar-links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar-cta-mobile">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => setOpen(false)}>
              Solicitar Demo
            </a>
          </li>
          <li className="navbar-cta-mobile">
            <a href={APP_URL} className="btn btn-outline" onClick={() => setOpen(false)}>
              Acceder
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar-cta-desktop">
            Solicitar Demo
          </a>
          <a href={APP_URL} className="btn btn-outline navbar-cta-desktop">
            Acceder
          </a>
          <a href={APP_URL} className="btn btn-outline navbar-access-mobile">
            Acceder
          </a>
          <button
            className={`navbar-toggle ${open ? "navbar-toggle--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
