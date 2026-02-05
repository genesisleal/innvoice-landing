import { useState } from 'react'
import './Components.css'

function Components() {
  const [activeTab, setActiveTab] = useState('buttons')

  return (
    <section id="componentes" className="brand-section">
      <div className="brand-section-header">
        <h2 className="brand-section-title">Componentes UI</h2>
        <p className="brand-section-subtitle">
          Ejemplos de componentes de interfaz que siguen las guías de marca.
          Estos son referencias visuales, no código de producción.
        </p>
      </div>

      <div className="components-tabs">
        {['buttons', 'inputs', 'cards', 'badges'].map(tab => (
          <button
            key={tab}
            className={`components-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="components-panel">
        {activeTab === 'buttons' && (
          <div className="components-showcase">
            <div className="showcase-group">
              <h4 className="showcase-label">Primary</h4>
              <div className="showcase-row">
                <button className="demo-btn demo-btn-primary demo-btn-lg">Comenzar Gratis</button>
                <button className="demo-btn demo-btn-primary">Comenzar Gratis</button>
                <button className="demo-btn demo-btn-primary demo-btn-sm">Comenzar</button>
              </div>
            </div>
            <div className="showcase-group">
              <h4 className="showcase-label">Secondary</h4>
              <div className="showcase-row">
                <button className="demo-btn demo-btn-secondary demo-btn-lg">Ver Demo</button>
                <button className="demo-btn demo-btn-secondary">Ver Demo</button>
                <button className="demo-btn demo-btn-secondary demo-btn-sm">Demo</button>
              </div>
            </div>
            <div className="showcase-group">
              <h4 className="showcase-label">Ghost</h4>
              <div className="showcase-row">
                <button className="demo-btn demo-btn-ghost">Saber más</button>
                <button className="demo-btn demo-btn-ghost demo-btn-sm">Más info</button>
              </div>
            </div>
            <div className="showcase-group">
              <h4 className="showcase-label">Con Icono</h4>
              <div className="showcase-row">
                <button className="demo-btn demo-btn-primary demo-btn-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                  Enviar
                </button>
                <button className="demo-btn demo-btn-whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contactar
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inputs' && (
          <div className="components-showcase">
            <div className="showcase-group">
              <h4 className="showcase-label">Text Input</h4>
              <div className="showcase-row showcase-row-vertical">
                <div className="demo-input-group">
                  <label className="demo-label">Email</label>
                  <input type="email" className="demo-input" placeholder="tu@empresa.com" />
                </div>
                <div className="demo-input-group">
                  <label className="demo-label">RUC</label>
                  <input type="text" className="demo-input" placeholder="20123456789" />
                  <span className="demo-hint">Ingresa tu número de RUC</span>
                </div>
              </div>
            </div>
            <div className="showcase-group">
              <h4 className="showcase-label">Select</h4>
              <div className="showcase-row">
                <div className="demo-input-group">
                  <label className="demo-label">Plan</label>
                  <select className="demo-select">
                    <option>INNVO FREE</option>
                    <option>INNVO</option>
                    <option>INNVO PRO</option>
                    <option>INNVO PREMIUM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="showcase-group">
              <h4 className="showcase-label">Checkbox & Toggle</h4>
              <div className="showcase-row">
                <label className="demo-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span className="demo-checkbox-mark" />
                  Facturación anual (15% descuento)
                </label>
                <div className="demo-toggle">
                  <span>Mensual</span>
                  <input type="checkbox" className="demo-toggle-input" defaultChecked />
                  <span>Anual</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cards' && (
          <div className="components-showcase">
            <div className="showcase-cards-grid">
              <div className="demo-card">
                <div className="demo-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                  </svg>
                </div>
                <h4 className="demo-card-title">Facturación Electrónica</h4>
                <p className="demo-card-description">
                  Emite boletas y facturas válidas ante SUNAT de forma rápida y sencilla.
                </p>
              </div>
              <div className="demo-card demo-card-featured">
                <div className="demo-card-badge">Popular</div>
                <h4 className="demo-card-title demo-card-title-white">INNVO PRO</h4>
                <div className="demo-card-price">
                  <span className="demo-card-currency">S/</span>
                  <span className="demo-card-amount">49</span>
                  <span className="demo-card-period">/mes</span>
                </div>
                <ul className="demo-card-features">
                  <li>150 comprobantes/mes</li>
                  <li>8 usuarios</li>
                  <li>Reportes mensuales</li>
                </ul>
              </div>
              <div className="demo-card demo-card-testimonial">
                <div className="demo-card-stars">★★★★★</div>
                <p className="demo-card-quote">
                  "Con Innvoice nuestro pipeline de ventas está ordenado y facturamos directo desde el sistema."
                </p>
                <div className="demo-card-author">
                  <div className="demo-card-avatar">CM</div>
                  <div>
                    <div className="demo-card-name">Carlos Mendoza</div>
                    <div className="demo-card-role">Gerente Comercial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="components-showcase">
            <div className="showcase-group">
              <h4 className="showcase-label">Status Badges</h4>
              <div className="showcase-row">
                <span className="demo-badge demo-badge-success">Activo</span>
                <span className="demo-badge demo-badge-warning">Pendiente</span>
                <span className="demo-badge demo-badge-error">Vencido</span>
                <span className="demo-badge demo-badge-neutral">Borrador</span>
              </div>
            </div>
            <div className="showcase-group">
              <h4 className="showcase-label">Feature Badges</h4>
              <div className="showcase-row">
                <span className="demo-badge demo-badge-primary">Nuevo</span>
                <span className="demo-badge demo-badge-discount">24% OFF</span>
                <span className="demo-badge demo-badge-popular">Más popular</span>
              </div>
            </div>
            <div className="showcase-group">
              <h4 className="showcase-label">Pills</h4>
              <div className="showcase-row">
                <span className="demo-pill">CRM</span>
                <span className="demo-pill">ERP</span>
                <span className="demo-pill">Facturación</span>
                <span className="demo-pill demo-pill-active">SUNAT</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Components
