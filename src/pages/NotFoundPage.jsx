import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-code">
          <span className="not-found-4">4</span>
          <div className="not-found-mascot-wrapper">
            <img
              src="/brand-assets/mascota-error.svg"
              alt="Facturin triste"
              className="not-found-mascot"
            />
          </div>
          <span className="not-found-4">4</span>
        </div>

        <div className="not-found-content">
          <h1 className="not-found-title">
            Esta factura no existe
          </h1>
          <p className="not-found-description">
            Facturin buscó por todas partes, pero no encontró la página que buscas.
            Quizá se perdió en el sistema... o nunca existió.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Volver al inicio
            </Link>
            <a
              href="https://wa.me/51999999999?text=Hola,%20necesito%20ayuda%20con%20Innvoice"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contactar soporte
            </a>
          </div>
        </div>

        <div className="not-found-hint">
          <span className="not-found-hint-code">ERROR_CODE: 404</span>
          <span className="not-found-hint-separator">•</span>
          <span className="not-found-hint-text">pagina_no_encontrada.jsx</span>
        </div>
      </div>
    </div>
  )
}
