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
            <a href="https://wa.me/51959561015?text=Hola%2C%20quiero%20información%20sobre%20Innvoice" target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={() => setOpen(false)}>
              Solicitar Demo
            </a>
          </li>
        </ul>

        <a href="https://wa.me/51959561015?text=Hola%2C%20quiero%20información%20sobre%20Innvoice" target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar-cta-desktop">
          Solicitar Demo
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
    </nav>
  )
}
