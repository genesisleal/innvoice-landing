import "./Footer.css"

const FOOTER_LINKS = {
  Producto: [
    { label: "Funciones", href: "#funciones" },
    { label: "Planes", href: "#planes" },
    { label: "Preguntas Frecuentes", href: "#preguntas" },
    { label: "Demo", href: "https://wa.me/51959561015?text=Hola%2C%20quiero%20una%20demo%20de%20Innvoice" },
  ],
  Legal: [
    { label: "Privacidad", href: "/privacidad" },
    { label: "Terminos", href: "/terminos-y-condiciones" },
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

          <div className="footer-column">
            <h4 className="footer-column-title">Contacto</h4>
            <ul className="footer-link-list">
              <li className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="https://wa.me/51959561015" target="_blank" rel="noopener noreferrer" className="footer-link">+51 959 561 015</a>
              </li>
              <li className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:hola@innvoice.pe" className="footer-link">hola@innvoice.pe</a>
              </li>
              <li className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="footer-contact-text">Lun - Vie, 9am - 6pm</span>
              </li>
              <li className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="footer-contact-text">Lima, Peru</span>
              </li>
            </ul>
          </div>
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
            <a href="https://www.instagram.com/innvoice.pe" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
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
