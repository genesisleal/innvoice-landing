import { useState } from 'react'
import './LogoSection.css'

const BRAND_ASSETS = '/brand-assets/'

const LOGO_VARIANTS = {
  complete: [
    { id: 'original', name: 'Original', file: `${BRAND_ASSETS}Innvoice-original.svg`, bg: 'white' },
    { id: 'azul', name: 'Azul', file: `${BRAND_ASSETS}Innvoice-original-azul.svg`, bg: 'white' },
    { id: 'negro', name: 'Negro', file: `${BRAND_ASSETS}Innvoice-original-negro.svg`, bg: 'white' },
    { id: 'blanco', name: 'Blanco', file: `${BRAND_ASSETS}Innvoice-original-blanco.svg`, bg: 'dark' },
  ],
  icon: [
    { id: 'icon-original', name: 'Original', file: `${BRAND_ASSETS}Innvoice-faicon-original.svg`, bg: 'white' },
    { id: 'icon-azul', name: 'Azul', file: `${BRAND_ASSETS}Innvoice-faicon-azul.svg`, bg: 'white' },
    { id: 'icon-negro', name: 'Negro', file: `${BRAND_ASSETS}Innvoice-faicon-negro.svg`, bg: 'white' },
    { id: 'icon-blanco', name: 'Blanco', file: `${BRAND_ASSETS}Innvoice-faicon-blanco.png`, bg: 'dark' },
  ],
  text: [
    { id: 'text-azul', name: 'Azul', file: `${BRAND_ASSETS}font-innvoice-azul.svg`, bg: 'white' },
    { id: 'text-negro', name: 'Negro', file: `${BRAND_ASSETS}font-innvoice-negro.svg`, bg: 'white' },
    { id: 'text-blanco', name: 'Blanco', file: `${BRAND_ASSETS}font-innvoice-blanco.svg`, bg: 'dark' },
  ],
}

function LogoSection() {
  const [activeComplete, setActiveComplete] = useState('original')
  const [downloading, setDownloading] = useState(null)

  const handleDownload = (file, name) => {
    setDownloading(name)
    const link = document.createElement('a')
    link.href = file
    link.download = file.split('/').pop()
    link.click()
    setTimeout(() => setDownloading(null), 1000)
  }

  const activeVariant = LOGO_VARIANTS.complete.find(v => v.id === activeComplete)

  return (
    <section id="logo" className="brand-section">
      <div className="brand-section-header">
        <h2 className="brand-section-title">Logo</h2>
        <p className="brand-section-subtitle">
          El logo de Innvoice utiliza la tipografía Montserrat en peso Regular (400).
          Disponible en múltiples variantes para diferentes contextos.
        </p>
      </div>

      <div className="logo-main-display">
        <h3 className="logo-group-title">Logo Principal</h3>
        <div className={`logo-display-card logo-display-${activeVariant?.bg || 'white'}`}>
          <img
            src={activeVariant?.file}
            alt={`Logo Innvoice ${activeVariant?.name}`}
            className="logo-main-image"
          />
          <button
            className="logo-download-btn"
            onClick={() => handleDownload(activeVariant?.file, activeVariant?.id)}
          >
            {downloading === activeVariant?.id ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            )}
            SVG
          </button>
        </div>
        <div className="logo-variant-tabs">
          {LOGO_VARIANTS.complete.map(v => (
            <button
              key={v.id}
              className={`logo-variant-tab ${activeComplete === v.id ? 'active' : ''}`}
              onClick={() => setActiveComplete(v.id)}
            >
              <span className={`logo-tab-dot logo-tab-dot-${v.id}`} />
              {v.name}
            </button>
          ))}
        </div>
      </div>

      <div className="logo-variants-grid">
        <div className="logo-variant-group">
          <h3 className="logo-group-title">Isotipo (Favicon)</h3>
          <p className="logo-group-desc">Para espacios reducidos, iconos y favicons</p>
          <div className="logo-variant-cards logo-variant-cards-4">
            {LOGO_VARIANTS.icon.map(v => (
              <div key={v.id} className={`logo-variant-card logo-variant-card-${v.bg}`}>
                <img src={v.file} alt={`Isotipo ${v.name}`} className="logo-variant-image logo-variant-icon" />
                <div className="logo-variant-info">
                  <span className="logo-variant-name">{v.name}</span>
                  <button
                    className="logo-variant-download"
                    onClick={() => handleDownload(v.file, v.id)}
                  >
                    {downloading === v.id ? '✓' : '↓'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="logo-variant-group">
          <h3 className="logo-group-title">Logotipo (Solo texto)</h3>
          <p className="logo-group-desc">Tipografía Montserrat Regular</p>
          <div className="logo-variant-cards">
            {LOGO_VARIANTS.text.map(v => (
              <div key={v.id} className={`logo-variant-card logo-variant-card-${v.bg}`}>
                <img src={v.file} alt={`Logotipo ${v.name}`} className="logo-variant-image logo-variant-text" />
                <div className="logo-variant-info">
                  <span className="logo-variant-name">{v.name}</span>
                  <button
                    className="logo-variant-download"
                    onClick={() => handleDownload(v.file, v.id)}
                  >
                    {downloading === v.id ? '✓' : '↓'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="logo-specs">
        <div className="logo-spec-card">
          <div className="logo-spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7V4h16v3M9 20h6M12 4v16"/>
            </svg>
          </div>
          <h3 className="logo-spec-title">Tipografía</h3>
          <p className="logo-spec-value">Montserrat</p>
          <p className="logo-spec-detail">Regular (400)</p>
        </div>

        <div className="logo-spec-card">
          <div className="logo-spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3 className="logo-spec-title">Color Principal</h3>
          <p className="logo-spec-value">#0044d7</p>
          <p className="logo-spec-detail">Electric Blue</p>
        </div>

        <div className="logo-spec-card">
          <div className="logo-spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <h3 className="logo-spec-title">Área de respeto</h3>
          <p className="logo-spec-value">1x altura</p>
          <p className="logo-spec-detail">Mínimo alrededor</p>
        </div>

        <div className="logo-spec-card">
          <div className="logo-spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            </svg>
          </div>
          <h3 className="logo-spec-title">Tamaño mínimo</h3>
          <p className="logo-spec-value">80px</p>
          <p className="logo-spec-detail">Ancho mínimo digital</p>
        </div>
      </div>

      <div className="logo-mascot">
        <h3 className="logo-group-title">Mascota</h3>
        <p className="logo-group-desc">Personaje de marca para comunicaciones amigables y CTAs</p>
        <div className="logo-mascot-grid">
          <div className="logo-mascot-variant">
            <div className="logo-mascot-card">
              <img src={`${BRAND_ASSETS}mascota-hands-up.svg`} alt="Facturin Feliz" className="logo-mascot-image" />
            </div>
            <div className="logo-mascot-variant-info">
              <span className="logo-mascot-variant-name">Feliz</span>
              <button
                className="logo-mascot-download-sm"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = `${BRAND_ASSETS}mascota-hands-up.svg`
                  link.download = 'facturin-feliz.svg'
                  link.click()
                }}
              >
                ↓
              </button>
            </div>
          </div>
          <div className="logo-mascot-variant">
            <div className="logo-mascot-card logo-mascot-card-error">
              <img src={`${BRAND_ASSETS}mascota-error.svg`} alt="Facturin Error" className="logo-mascot-image" />
            </div>
            <div className="logo-mascot-variant-info">
              <span className="logo-mascot-variant-name">Error</span>
              <button
                className="logo-mascot-download-sm"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = `${BRAND_ASSETS}mascota-error.svg`
                  link.download = 'facturin-error.svg'
                  link.click()
                }}
              >
                ↓
              </button>
            </div>
          </div>
        </div>
        <div className="logo-mascot-info">
          <h4>Facturin</h4>
          <p>La mascota de Innvoice representa cercanía y confianza. Se usa principalmente en secciones de llamada a la acción y comunicaciones directas con el usuario.</p>
          <ul>
            <li>Usar en CTAs y mensajes de bienvenida</li>
            <li>Versión "Error" para páginas de error (404, 500, etc.)</li>
            <li>Mantener proporciones originales</li>
          </ul>
        </div>
      </div>

      <div className="logo-usage">
        <h3 className="logo-usage-title">Uso correcto vs incorrecto</h3>
        <div className="logo-usage-grid">
          <div className="logo-usage-card logo-usage-correct">
            <div className="logo-usage-preview">
              <img src={`${BRAND_ASSETS}Innvoice-original.svg`} alt="Uso correcto" className="logo-usage-img" />
            </div>
            <div className="logo-usage-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Colores originales
            </div>
          </div>
          <div className="logo-usage-card logo-usage-correct">
            <div className="logo-usage-preview logo-usage-preview-dark">
              <img src={`${BRAND_ASSETS}Innvoice-original-blanco.svg`} alt="Uso sobre oscuro" className="logo-usage-img" />
            </div>
            <div className="logo-usage-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Blanco sobre oscuro
            </div>
          </div>
          <div className="logo-usage-card logo-usage-wrong">
            <div className="logo-usage-preview">
              <img src={`${BRAND_ASSETS}Innvoice-original.svg`} alt="No estirar" className="logo-usage-img logo-usage-stretched" />
            </div>
            <div className="logo-usage-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              No estirar
            </div>
          </div>
          <div className="logo-usage-card logo-usage-wrong">
            <div className="logo-usage-preview">
              <img src={`${BRAND_ASSETS}Innvoice-original.svg`} alt="No rotar" className="logo-usage-img logo-usage-rotated" />
            </div>
            <div className="logo-usage-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              No rotar
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoSection
