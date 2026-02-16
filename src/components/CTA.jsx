import { useRef, useEffect, useState } from "react"
import "./CTA.css"

export default function CTA() {
  const pupilLeftRef = useRef(null)
  const pupilRightRef = useRef(null)
  const mascotRef = useRef(null)
  const [handsUp, setHandsUp] = useState(false)

  useEffect(() => {
    function handleMouseMove(e) {
      if (!mascotRef.current || !pupilLeftRef.current || !pupilRightRef.current) return

      const rect = mascotRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height * 0.25

      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const angle = Math.atan2(dy, dx)
      const dist = Math.min(Math.sqrt(dx * dx + dy * dy) / 120, 1)
      const mx = Math.cos(angle) * 3.5 * dist
      const my = Math.sin(angle) * 2.5 * dist

      pupilLeftRef.current.style.transform = `translate(${mx}px, ${my}px)`
      pupilRightRef.current.style.transform = `translate(${mx}px, ${my}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="contacto" className="cta section">
      <div className="container">
        <div className="cta-layout">
          <div
            className="cta-mascot"
            ref={mascotRef}
            aria-hidden="true"
          >
            <svg viewBox="-10 -30 260 340" xmlns="http://www.w3.org/2000/svg">

              <g className={`cta-mascot-arm-down cta-mascot-arm-down--l ${handsUp ? "cta-arm-hidden" : ""}`}>
                <path d="M48 90 C30 100, 18 130, 22 160" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <ellipse cx="22" cy="164" rx="10" ry="9" fill="#fff" stroke="#374151" strokeWidth="2"/>
                <circle cx="14" cy="158" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
                <circle cx="22" cy="155" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
                <circle cx="30" cy="158" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
              </g>

              <g className={`cta-mascot-arm-down cta-mascot-arm-down--r ${handsUp ? "cta-arm-hidden" : ""}`}>
                <path d="M192 90 C210 100, 222 130, 218 160" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <ellipse cx="218" cy="164" rx="10" ry="9" fill="#fff" stroke="#374151" strokeWidth="2"/>
                <circle cx="210" cy="158" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
                <circle cx="218" cy="155" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
                <circle cx="226" cy="158" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
              </g>

              <g className={`cta-mascot-arm-up cta-mascot-arm-up--l ${handsUp ? "" : "cta-arm-hidden"}`}>
                <path d="M48 90 C28 78, 12 50, 18 20" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <ellipse cx="16" cy="16" rx="10" ry="9" fill="#fff" stroke="#374151" strokeWidth="2"/>
                <circle cx="8" cy="10" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
                <circle cx="16" cy="7" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
                <circle cx="24" cy="10" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
              </g>

              <g className={`cta-mascot-arm-up cta-mascot-arm-up--r ${handsUp ? "" : "cta-arm-hidden"}`}>
                <path d="M192 90 C212 78, 228 50, 222 20" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <ellipse cx="224" cy="16" rx="10" ry="9" fill="#fff" stroke="#374151" strokeWidth="2"/>
                <circle cx="216" cy="10" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
                <circle cx="224" cy="7" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
                <circle cx="232" cy="10" r="4.5" fill="#fff" stroke="#374151" strokeWidth="1.5"/>
              </g>

              <rect x="44" y="10" width="152" height="190" rx="22" fill="#fff" stroke="#374151" strokeWidth="3"/>

              <path d="M78 50 Q85 42 94 50" stroke="#374151" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M146 50 Q153 42 162 50" stroke="#374151" strokeWidth="2" strokeLinecap="round" fill="none"/>

              <circle cx="86" cy="72" r="20" fill="#fff" stroke="#374151" strokeWidth="2.5"/>
              <circle cx="154" cy="72" r="20" fill="#fff" stroke="#374151" strokeWidth="2.5"/>

              <g ref={pupilLeftRef} className="cta-pupil">
                <circle cx="90" cy="76" r="8" fill="#1f2937"/>
                <circle cx="93" cy="71" r="3" fill="#fff"/>
              </g>
              <g ref={pupilRightRef} className="cta-pupil">
                <circle cx="150" cy="76" r="8" fill="#1f2937"/>
                <circle cx="153" cy="71" r="3" fill="#fff"/>
              </g>

              <ellipse cx="58" cy="90" rx="9" ry="6" fill="#fecaca" opacity="0.5"/>
              <ellipse cx="182" cy="90" rx="9" ry="6" fill="#fecaca" opacity="0.5"/>

              <path d="M104 102 Q120 116 136 102" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

              <rect x="72" y="130" width="96" height="16" rx="8" fill="#1f2937"/>
              <circle cx="86" cy="138" r="2.8" fill="#6b7280"/>
              <circle cx="98" cy="138" r="2.8" fill="#6b7280"/>
              <circle cx="110" cy="138" r="2.8" fill="#6b7280"/>
              <circle cx="122" cy="138" r="2.8" fill="#6b7280"/>
              <circle cx="134" cy="138" r="2.8" fill="#6b7280"/>
              <circle cx="146" cy="138" r="2.8" fill="#6b7280"/>
              <circle cx="158" cy="138" r="2.8" fill="#6b7280"/>

              <rect x="72" y="156" width="38" height="4" rx="2" fill="#d1d5db"/>
              <rect x="72" y="164" width="26" height="4" rx="2" fill="#e5e7eb"/>

              <rect x="126" y="154" width="11" height="16" rx="2.5" fill="#6ee7b7"/>
              <rect x="140" y="160" width="11" height="10" rx="2.5" fill="#6ee7b7" opacity="0.6"/>
              <rect x="154" y="152" width="11" height="18" rx="2.5" fill="#6ee7b7" opacity="0.8"/>

              <line x1="100" y1="202" x2="94" y2="248" stroke="#374151" strokeWidth="3" strokeLinecap="round"/>
              <line x1="140" y1="202" x2="146" y2="248" stroke="#374151" strokeWidth="3" strokeLinecap="round"/>

              <ellipse cx="90" cy="258" rx="16" ry="9" fill="#6EE7B7" stroke="#374151" strokeWidth="1.8"/>
              <ellipse cx="150" cy="258" rx="16" ry="9" fill="#6EE7B7" stroke="#374151" strokeWidth="1.8"/>
            </svg>
          </div>

          <div className="cta-box">
            <h2 className="cta-title">
              Empieza a Gestionar Tu Negocio con Innvoice
            </h2>
            <p className="cta-description">
              Unite a las empresas peruanas que ya transformaron su operacion con Innvoice.
            </p>
            <div className="cta-actions">
              <a href="https://wa.me/51959561015?text=Hola%2C%20quiero%20solicitar%20una%20demo%20de%20Innvoice" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn-primary">
                Solicitar Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="https://wa.me/51959561015?text=Hola%2C%20quiero%20hablar%20con%20un%20asesor%20de%20Innvoice"
                target="_blank"
                rel="noopener noreferrer"
                className="btn cta-btn-secondary"
                onMouseEnter={() => setHandsUp(true)}
                onMouseLeave={() => setHandsUp(false)}
              >
                Hablar con un Asesor
              </a>
            </div>
            <p className="cta-note">Sin tarjeta de credito · Cancela cuando quieras</p>
          </div>
        </div>
      </div>
    </section>
  )
}
