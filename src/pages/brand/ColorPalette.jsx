import { useState } from 'react'
import './ColorPalette.css'

const COLORS = {
  primary: [
    { name: 'Primary Blue', value: '#0044d7', var: '--color-primary' },
    { name: 'Light Blue', value: '#3366e6', var: '--color-primary-light' },
    { name: 'Dark Blue', value: '#0033a3', var: '--color-primary-dark' },
    { name: 'Black', value: '#000000', var: '--color-black' },
  ],
  grayscale: [
    { name: 'White', value: '#ffffff', var: '--color-white', light: true },
    { name: 'Light Gray', value: '#f0f2f7', var: '--color-gray-100', light: true },
    { name: 'Medium Gray', value: '#9aa1b3', var: '--color-gray-400' },
    { name: 'Dark Gray', value: '#1f2937', var: '--color-gray-800' },
  ],
  semantic: [
    { name: 'Success', value: '#10b981', var: '--color-success' },
    { name: 'Warning', value: '#f59e0b', var: '--color-warning' },
    { name: 'Error', value: '#ef4444', var: '--color-error' },
  ],
}

function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState(null)

  const copyToClipboard = (value, name) => {
    navigator.clipboard.writeText(value)
    setCopiedColor(name)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const renderColorCard = (color) => (
    <div
      key={color.name}
      className={`color-card ${color.light ? 'color-card-light' : ''}`}
      onClick={() => copyToClipboard(color.value, color.name)}
    >
      <div
        className="color-swatch"
        style={{ backgroundColor: color.value }}
      >
        {copiedColor === color.name && (
          <div className="color-copied">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
        )}
      </div>
      <div className="color-info">
        <span className="color-name">{color.name}</span>
        <span className="color-value">{color.value}</span>
        <code className="color-var">{color.var}</code>
      </div>
    </div>
  )

  return (
    <section id="colores" className="brand-section">
      <div className="brand-section-header">
        <h2 className="brand-section-title">Colores</h2>
        <p className="brand-section-subtitle">
          Paleta de colores diseñada para transmitir confianza, profesionalismo y modernidad.
          Haz clic en cualquier color para copiar su valor.
        </p>
      </div>

      <div className="color-group">
        <h3 className="color-group-title">Colores Primarios</h3>
        <p className="color-group-description">
          El azul eléctrico es el color principal de la marca. El negro se usa para el logotipo.
        </p>
        <div className="color-grid color-grid-4">
          {COLORS.primary.map(renderColorCard)}
        </div>
      </div>

      <div className="color-group">
        <h3 className="color-group-title">Escala de Grises</h3>
        <p className="color-group-description">
          Usados para textos, fondos y elementos de UI. Mantienen legibilidad y jerarquía visual.
        </p>
        <div className="color-grid color-grid-4">
          {COLORS.grayscale.map(renderColorCard)}
        </div>
      </div>

      <div className="color-group">
        <h3 className="color-group-title">Colores Semánticos</h3>
        <p className="color-group-description">
          Usados para feedback de estados: éxito, advertencia y error.
        </p>
        <div className="color-grid color-grid-3">
          {COLORS.semantic.map(renderColorCard)}
        </div>
      </div>

      <div className="color-gradients">
        <h3 className="color-group-title">Gradientes</h3>
        <div className="gradient-cards">
          <div className="gradient-card">
            <div className="gradient-preview gradient-bg" />
            <div className="gradient-info">
              <span className="gradient-name">Background Gradient</span>
              <code className="gradient-value">linear-gradient(180deg, #fff 0%, #eef1fa 50%, #e8ecf8 100%)</code>
            </div>
          </div>
          <div className="gradient-card">
            <div className="gradient-preview gradient-cta" />
            <div className="gradient-info">
              <span className="gradient-name">CTA Gradient</span>
              <code className="gradient-value">linear-gradient(135deg, #0044d7 0%, #1a5ce8 50%, #3a7bff 100%)</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ColorPalette
