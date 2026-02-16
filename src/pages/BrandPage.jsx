import { useState, useEffect } from 'react'
import './BrandPage.css'
import BrandHero from './brand/BrandHero'
import LogoSection from './brand/LogoSection'
import ColorPalette from './brand/ColorPalette'
import Typography from './brand/Typography'
import Spacing from './brand/Spacing'
import Components from './brand/Components'

const BRAND_ASSETS = '/brand-assets/'

const NAV_LINKS = [
  { id: 'logo', label: 'Logo' },
  { id: 'colores', label: 'Colores' },
  { id: 'tipografia', label: 'Tipografía' },
  { id: 'espaciado', label: 'Espaciado' },
  { id: 'componentes', label: 'Componentes' },
]

export default function BrandPage() {
  const [activeSection, setActiveSection] = useState('logo')

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="brand-page">
      <div className="brand-app">
        <nav className="brand-nav">
          <div className="brand-nav-inner">
            <a href="#" className="brand-nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <img src={`${BRAND_ASSETS}Innvoice-original.svg`} alt="Innvoice" />
            </a>
            <div className="brand-nav-links">
              {NAV_LINKS.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`brand-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id) }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <main className="brand-main">
          <BrandHero />
          <LogoSection />
          <div className="brand-divider" />
          <ColorPalette />
          <div className="brand-divider" />
          <Typography />
          <div className="brand-divider" />
          <Spacing />
          <div className="brand-divider" />
          <Components />
        </main>

        <footer className="brand-footer">
          <div className="brand-footer-inner">
            <div className="brand-footer-top">
              <img src={`${BRAND_ASSETS}Innvoice-original.svg`} alt="Innvoice" className="brand-footer-logo" />
              <p className="brand-footer-tagline">Sistema de facturación electrónica, CRM y ERP</p>
            </div>
            <div className="brand-footer-divider" />
            <div className="brand-footer-bottom">
              <div className="brand-footer-credits">
                <p>Diseñado con ❤️ por <a href="https://genesisleal.com" target="_blank" rel="noopener noreferrer">Genesis Leal</a></p>
                <span className="brand-footer-dot">•</span>
                <p>Desarrollado por <a href="https://enigmasac.com" target="_blank" rel="noopener noreferrer">Enigma Developers</a></p>
              </div>
              <p className="brand-footer-version">Brand Guidelines v1.0 — {new Date().getFullYear()}</p>
              <a href="https://innvoice.pe" target="_blank" rel="noopener noreferrer" className="brand-footer-link">
                innvoice.pe
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
