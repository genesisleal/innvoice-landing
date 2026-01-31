import "./Footer.css"

const FOOTER_LINKS = {
  Producto: [
    { label: "Funciones", href: "#features" },
    { label: "Planes", href: "#pricing" },
    { label: "Demo", href: "https://wa.me/51959561015?text=Hola%2C%20quiero%20una%20demo%20de%20Innvoice" },
  ],
  Legal: [
    { label: "Privacidad", href: "#" },
    { label: "Terminos", href: "#" },
    { label: "Contacto", href: "https://wa.me/51959561015?text=Hola%2C%20quiero%20contactar%20con%20Innvoice" },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo-innvoice.png" alt="Innvoice" className="footer-logo" />
            <p className="footer-description">
              CRM + ERP + Facturacion electronica para empresas en Peru. Vende, organiza y factura desde un solo sistema.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="footer-column">
              <h4 className="footer-column-title">{category}</h4>
              <ul className="footer-link-list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Innvoice. Todos los derechos reservados.</p>
          <p className="footer-credits">
            Diseñado con ❤️ por <a href="https://genesisleal.com" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Genesis Leal</a> y Desarrollado por <a href="https://enigmasac.com" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Enigma Developers</a>
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/innvoice" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
