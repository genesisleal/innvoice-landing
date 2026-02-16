import { useRef, useState, useEffect } from "react"
import "./Hero.css"

export default function Hero() {
  const dashRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0, gx: 50, gy: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  function handleMouseMove(e) {
    const rect = dashRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const tiltX = (y - 0.5) * -12
    const tiltY = (x - 0.5) * 12
    setTilt({ x: tiltX, y: tiltY, gx: x * 100, gy: y * 100 })
  }

  function handleMouseEnter() {
    setIsHovering(true)
  }

  function handleMouseLeave() {
    setIsHovering(false)
    setTilt({ x: 0, y: 0, gx: 50, gy: 50 })
  }

  return (
    <section id="inicio" className={`hero section ${loaded ? "hero--loaded" : ""}`}>
      <div className="container hero-container">
        <span className="hero-badge">Facturacion Electronica + CRM + ERP</span>

        <h1
          className="hero-title"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = ((e.clientX - rect.left) / rect.width) * 100
            e.currentTarget.style.setProperty("--shine-x", `${x}%`)
          }}
        >
          Factura en SUNAT y Gestiona
          <br />
          Tu Negocio Desde <span className="hero-accent">Un Solo Lugar</span>
        </h1>

        <p className="hero-description">
          Emite boletas y facturas electronicas validas ante SUNAT, controla tus
          ventas, clientes e inventario. Todo desde un sistema simple y moderno.
        </p>

        <p className="hero-audience">
          Ideal para servicios, comercios, restaurantes y cualquier negocio en Peru.
        </p>

        <div className="hero-proof">
          <div className="hero-proof-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>Valido ante SUNAT</span>
          </div>
          <div className="hero-proof-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>Activa en minutos</span>
          </div>
          <div className="hero-proof-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span>15 dias gratis</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="https://wa.me/51959561015?text=Hola%2C%20quiero%20probar%20Innvoice%2015%20dias%20gratis" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Probar 15 Dias Gratis
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://wa.me/51959561015?text=Hola%2C%20quiero%20solicitar%20una%20demo%20de%20Innvoice" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Solicitar Demo
          </a>
        </div>

        <div
          ref={dashRef}
          className={`hero-dashboard ${isHovering ? "hero-dashboard--active" : ""}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="hero-dashboard-glow"
            style={{
              background: `radial-gradient(600px circle at ${tilt.gx}% ${tilt.gy}%, rgba(0, 68, 215, 0.12), transparent 50%)`,
            }}
          />
          <div
            className="hero-dashboard-window"
            style={{
              transform: isHovering
                ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                : "perspective(1000px) rotateX(2deg) rotateY(0deg) scale3d(1, 1, 1)",
            }}
          >
            <div className="hero-dashboard-shine" />
            <div className="hero-dashboard-topbar">
              <div className="hero-dashboard-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-dashboard-url">app.innvoice.pe</div>
            </div>

            <div className="hero-dashboard-content">
              <div className="hero-icon-rail">
                <div className="hero-rail-icon hero-rail-icon--user">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0112 0v1"/></svg>
                </div>
                <div className="hero-rail-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
                </div>
                <div className="hero-rail-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                </div>
                <div className="hero-rail-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
                </div>
                <div className="hero-rail-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
                </div>
                <div className="hero-rail-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5"/></svg>
                </div>
              </div>

              <div className="hero-dashboard-sidebar">
                <div className="hero-dash-logo">
                  <img src="/logo-innvoice.png" alt="Innvoice" className="hero-dash-logo-img" />
                </div>
                <div className="hero-dash-nav">
                  <div className="hero-dash-nav-section">
                    <div className="hero-dash-nav-item hero-dash-nav-item--parent">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                      <span className="hero-dash-nav-item--active">Tablero</span>
                    </div>
                  </div>
                  <div className="hero-dash-nav-section">
                    <div className="hero-dash-nav-item hero-dash-nav-item--parent">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 8h20"/></svg>
                      <span className="hero-dash-nav-link--blue">Ventas</span>
                      <svg className="hero-dash-chevron" width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8l4 4 4-4"/></svg>
                    </div>
                    <div className="hero-dash-subnav">
                      <div className="hero-dash-nav-sub">Comprobantes</div>
                      <div className="hero-dash-nav-sub">Notas de Credito</div>
                      <div className="hero-dash-nav-sub">Notas de Debito</div>
                      <div className="hero-dash-nav-sub">Clientes</div>
                    </div>
                  </div>
                  <div className="hero-dash-nav-section">
                    <div className="hero-dash-nav-item hero-dash-nav-item--parent">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                      <span>Compras</span>
                      <svg className="hero-dash-chevron hero-dash-chevron--down" width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8l4 4 4-4"/></svg>
                    </div>
                  </div>
                  <div className="hero-dash-nav-section">
                    <div className="hero-dash-nav-item hero-dash-nav-item--parent">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
                      <span className="hero-dash-nav-link--blue">Inventario</span>
                      <svg className="hero-dash-chevron" width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8l4 4 4-4"/></svg>
                    </div>
                    <div className="hero-dash-subnav">
                      <div className="hero-dash-nav-sub">Articulos</div>
                      <div className="hero-dash-nav-sub">Grupos</div>
                      <div className="hero-dash-nav-sub">Variantes</div>
                      <div className="hero-dash-nav-sub">Almacenes</div>
                    </div>
                  </div>
                  <div className="hero-dash-nav-section">
                    <div className="hero-dash-nav-item hero-dash-nav-item--parent">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v4"/><path d="M12 14v4"/><path d="M16 14v4"/></svg>
                      <span>Bancos</span>
                      <svg className="hero-dash-chevron hero-dash-chevron--down" width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8l4 4 4-4"/></svg>
                    </div>
                  </div>
                  <div className="hero-dash-nav-section">
                    <div className="hero-dash-nav-item hero-dash-nav-item--parent">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                      <span>Informes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-dashboard-main">
                <div className="hero-dash-header">
                  <span className="hero-dash-title">Tablero</span>
                  <div className="hero-dash-date-picker">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    <span>2026-01-01</span>
                    <span className="hero-dash-date-sep">-</span>
                    <span>2026-12-31</span>
                  </div>
                </div>

                <div className="hero-dash-tab-bar">
                  <span className="hero-dash-tab">Tablero</span>
                  <div className="hero-dash-tab-actions">
                    <span className="hero-dash-tab-link">Agregar Widget</span>
                    <span className="hero-dash-tab-link">Nuevo Tablero</span>
                  </div>
                </div>

                <div className="hero-dash-widgets">
                  <div className="hero-dash-widget">
                    <div className="hero-dash-widget-header">
                      <span className="hero-dash-widget-title">Cuentas por cobrar</span>
                      <span className="hero-dash-widget-link">Ver informe</span>
                    </div>
                    <p className="hero-dash-widget-desc">Cantidad que aun no has recibido de tus clientes</p>
                    <div className="hero-dash-widget-total">
                      <span>Total de facturas no pagadas (PEN):</span>
                      <span className="hero-dash-widget-amount">S/0.00</span>
                    </div>
                    <div className="hero-dash-progress">
                      <div className="hero-dash-progress-bar hero-dash-progress-bar--cobrar" />
                    </div>
                    <div className="hero-dash-widget-row">
                      <div className="hero-dash-widget-col">
                        <span className="hero-dash-widget-label">Por Vencer</span>
                        <span className="hero-dash-widget-val">S/0.00</span>
                      </div>
                      <div className="hero-dash-widget-col">
                        <span className="hero-dash-widget-label">Vencido</span>
                        <span className="hero-dash-widget-val">S/0.00 ▾</span>
                      </div>
                    </div>
                  </div>

                  <div className="hero-dash-widget">
                    <div className="hero-dash-widget-header">
                      <span className="hero-dash-widget-title">Cuentas por pagar</span>
                      <span className="hero-dash-widget-link">Ver informe</span>
                    </div>
                    <p className="hero-dash-widget-desc">Cantidad que aun tienes que pagar a tus proveedores</p>
                    <div className="hero-dash-widget-total">
                      <span>Total de facturas no pagadas (PEN):</span>
                      <span className="hero-dash-widget-amount">S/0.00</span>
                    </div>
                    <div className="hero-dash-progress">
                      <div className="hero-dash-progress-bar hero-dash-progress-bar--pagar" />
                    </div>
                    <div className="hero-dash-widget-row">
                      <div className="hero-dash-widget-col">
                        <span className="hero-dash-widget-label">Por Vencer</span>
                        <span className="hero-dash-widget-val">S/0.00</span>
                      </div>
                      <div className="hero-dash-widget-col">
                        <span className="hero-dash-widget-label">Vencido</span>
                        <span className="hero-dash-widget-val">S/0.00 ▾</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-dash-chart-section">
                  <div className="hero-dash-chart-header">
                    <div>
                      <span className="hero-dash-widget-title">Flujo de Efectivo</span>
                      <p className="hero-dash-widget-desc">Dinero entrando y saliendo de su negocio</p>
                    </div>
                    <span className="hero-dash-widget-link">Ver informe</span>
                  </div>
                  <div className="hero-dash-chart-legend">
                    <span className="hero-dash-legend-item"><span className="hero-dash-legend-dot hero-dash-legend-dot--green" />Entrante (PEN)</span>
                    <span className="hero-dash-legend-item"><span className="hero-dash-legend-dot hero-dash-legend-dot--pink" />Saliente (PEN)</span>
                    <span className="hero-dash-legend-item"><span className="hero-dash-legend-dot hero-dash-legend-dot--green-dark" />Entrante (USD)</span>
                    <span className="hero-dash-legend-item"><span className="hero-dash-legend-dot hero-dash-legend-dot--pink-dark" />Saliente (USD)</span>
                  </div>
                  <div className="hero-dash-chart">
                    <div className="hero-dash-chart-y">
                      <span>S/2.00</span>
                      <span>S/1.50</span>
                      <span>S/1.00</span>
                      <span>S/0.50</span>
                      <span>S/0.00</span>
                    </div>
                    <div className="hero-dash-chart-area">
                      <div className="hero-dash-chart-grid">
                        <div className="hero-dash-chart-line" />
                        <div className="hero-dash-chart-line" />
                        <div className="hero-dash-chart-line" />
                        <div className="hero-dash-chart-line" />
                        <div className="hero-dash-chart-line" />
                      </div>
                      <div className="hero-dash-chart-bars">
                        <div className="hero-dash-bar-group">
                          <div className="hero-dash-bar hero-dash-bar--green" style={{ height: "6px" }} />
                          <div className="hero-dash-bar hero-dash-bar--pink" style={{ height: "4px" }} />
                        </div>
                        <div className="hero-dash-bar-group">
                          <div className="hero-dash-bar hero-dash-bar--green" style={{ height: "8px" }} />
                          <div className="hero-dash-bar hero-dash-bar--pink" style={{ height: "5px" }} />
                        </div>
                        <div className="hero-dash-bar-group">
                          <div className="hero-dash-bar hero-dash-bar--green" style={{ height: "4px" }} />
                          <div className="hero-dash-bar hero-dash-bar--pink" style={{ height: "3px" }} />
                        </div>
                        <div className="hero-dash-bar-group">
                          <div className="hero-dash-bar hero-dash-bar--green" style={{ height: "10px" }} />
                          <div className="hero-dash-bar hero-dash-bar--pink" style={{ height: "6px" }} />
                        </div>
                        <div className="hero-dash-bar-group">
                          <div className="hero-dash-bar hero-dash-bar--green" style={{ height: "5px" }} />
                          <div className="hero-dash-bar hero-dash-bar--pink" style={{ height: "4px" }} />
                        </div>
                        <div className="hero-dash-bar-group">
                          <div className="hero-dash-bar hero-dash-bar--green" style={{ height: "7px" }} />
                          <div className="hero-dash-bar hero-dash-bar--pink" style={{ height: "3px" }} />
                        </div>
                        <div className="hero-dash-bar-group">
                          <div className="hero-dash-bar hero-dash-bar--green" style={{ height: "9px" }} />
                          <div className="hero-dash-bar hero-dash-bar--pink" style={{ height: "5px" }} />
                        </div>
                        <div className="hero-dash-bar-group">
                          <div className="hero-dash-bar hero-dash-bar--green" style={{ height: "6px" }} />
                          <div className="hero-dash-bar hero-dash-bar--pink" style={{ height: "4px" }} />
                        </div>
                      </div>
                      <div className="hero-dash-chart-x">
                        <span>ene. 2026</span>
                        <span>abr. 2026</span>
                        <span>jul. 2026</span>
                        <span>oct. 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
