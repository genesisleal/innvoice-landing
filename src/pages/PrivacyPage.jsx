import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TermsPage.css'

const TOC_SECTIONS = [
  { id: 'responsable', title: 'Responsable' },
  { id: 'datos-recopilados', title: 'Datos que Recopilamos' },
  { id: 'finalidad', title: 'Finalidad del Tratamiento' },
  { id: 'base-legal', title: 'Base Legal' },
  { id: 'terceros', title: 'Compartición con Terceros' },
  { id: 'seguridad', title: 'Medidas de Seguridad' },
  { id: 'retencion', title: 'Retención de Datos' },
  { id: 'derechos', title: 'Derechos del Usuario' },
  { id: 'cookies', title: 'Cookies y Tecnologías' },
  { id: 'transferencias', title: 'Transferencias Internacionales' },
  { id: 'menores', title: 'Menores de Edad' },
  { id: 'modificaciones', title: 'Modificaciones' },
  { id: 'contacto', title: 'Contacto' },
]

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('responsable')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140

      for (let i = TOC_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(TOC_SECTIONS[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(TOC_SECTIONS[i].id)
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
      const offset = 100
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="terms-page">
      <nav className="terms-nav">
        <div className="terms-nav-inner">
          <Link to="/" className="terms-nav-logo">
            <img src="/logo-innvoice.png" alt="Innvoice" />
          </Link>
          <Link to="/" className="terms-nav-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </nav>

      <header className="terms-hero">
        <div className="terms-hero-inner">
          <span className="terms-hero-badge">Documento Legal</span>
          <h1 className="terms-hero-title">Política de Privacidad</h1>
          <p className="terms-hero-meta">
            Última actualización: 17 de febrero de 2026
          </p>
          <p className="terms-hero-summary">
            En Innvoice nos comprometemos a proteger tu información personal y empresarial. Esta política describe cómo recopilamos, utilizamos, almacenamos y protegemos tus datos cuando usas nuestra plataforma.
          </p>
        </div>
      </header>

      <div className="terms-layout">
        <aside className="terms-toc">
          <div className="terms-toc-sticky">
            <span className="terms-toc-label">Contenido</span>
            <ul className="terms-toc-list">
              {TOC_SECTIONS.map((section, index) => (
                <li key={section.id}>
                  <button
                    className={`terms-toc-link ${activeSection === section.id ? 'terms-toc-link--active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    <span className="terms-toc-number">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="terms-content">
          <section className="terms-section" id="responsable">
            <div className="terms-section-header">
              <span className="terms-section-number">01</span>
              <h2 className="terms-section-title">Responsable del Tratamiento</h2>
            </div>
            <div className="terms-section-body">
              <p><strong>Innvoice</strong> es la entidad responsable del tratamiento de los datos personales recopilados a través de la plataforma accesible en <strong>innvoice.pe</strong> y <strong>app.innvoice.pe</strong>.</p>
              <div className="terms-contact-grid">
                <div className="terms-contact-card">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <span className="terms-contact-label">Correo electrónico</span>
                    <a href="mailto:hola@innvoice.pe" className="terms-contact-value">hola@innvoice.pe</a>
                  </div>
                </div>
                <div className="terms-contact-card">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span className="terms-contact-label">Dirección</span>
                    <span className="terms-contact-value">Lima, Perú</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="terms-section" id="datos-recopilados">
            <div className="terms-section-header">
              <span className="terms-section-number">02</span>
              <h2 className="terms-section-title">Datos que Recopilamos</h2>
            </div>
            <div className="terms-section-body">
              <p>Recopilamos diferentes tipos de datos según tu interacción con la Plataforma:</p>
              <div className="terms-features">
                <div className="terms-feature">
                  <h4>Datos de registro</h4>
                  <p>Nombre o razón social, RUC, correo electrónico, número de teléfono, dirección fiscal y datos del representante legal cuando corresponda.</p>
                </div>
                <div className="terms-feature">
                  <h4>Datos de facturación</h4>
                  <p>Información contenida en los comprobantes electrónicos emitidos: datos del emisor y receptor, descripción de productos o servicios, montos, IGV y otros tributos aplicables.</p>
                </div>
                <div className="terms-feature">
                  <h4>Datos comerciales</h4>
                  <p>Información de clientes y proveedores registrados en el CRM, historial de transacciones, inventarios, cuentas por cobrar y pagar, y reportes generados.</p>
                </div>
                <div className="terms-feature">
                  <h4>Datos de uso</h4>
                  <p>Dirección IP, tipo de navegador, sistema operativo, páginas visitadas, acciones realizadas dentro de la Plataforma, fecha y hora de acceso.</p>
                </div>
                <div className="terms-feature">
                  <h4>Datos de pago</h4>
                  <p>Método de pago utilizado e historial de transacciones. Innvoice no almacena números completos de tarjetas de crédito o débito; estos son procesados por proveedores de pago certificados.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="terms-section" id="finalidad">
            <div className="terms-section-header">
              <span className="terms-section-number">03</span>
              <h2 className="terms-section-title">Finalidad del Tratamiento</h2>
            </div>
            <div className="terms-section-body">
              <p>Utilizamos los datos recopilados para las siguientes finalidades:</p>
              <ul className="terms-list">
                <li>Prestar los servicios contratados: facturación electrónica, CRM y ERP.</li>
                <li>Emitir, firmar y enviar comprobantes electrónicos a SUNAT conforme a la normativa tributaria vigente.</li>
                <li>Gestionar tu cuenta, procesar pagos y administrar tu suscripción.</li>
                <li>Proporcionar soporte técnico y atención al cliente.</li>
                <li>Mejorar la Plataforma, desarrollar nuevas funcionalidades y optimizar la experiencia del usuario.</li>
                <li>Enviar comunicaciones relacionadas con el servicio: actualizaciones, cambios en los términos, alertas de seguridad y notificaciones operativas.</li>
                <li>Generar estadísticas anónimas y agregadas sobre el uso de la Plataforma.</li>
                <li>Cumplir con obligaciones legales y regulatorias aplicables en el Perú.</li>
              </ul>
              <p>Innvoice no utiliza tus datos para fines publicitarios de terceros ni los vende a ninguna entidad externa.</p>
            </div>
          </section>

          <section className="terms-section" id="base-legal">
            <div className="terms-section-header">
              <span className="terms-section-number">04</span>
              <h2 className="terms-section-title">Base Legal</h2>
            </div>
            <div className="terms-section-body">
              <p>El tratamiento de datos personales por parte de Innvoice se fundamenta en las siguientes bases legales, conforme a la <strong>Ley N° 29733</strong> (Ley de Protección de Datos Personales del Perú) y su Reglamento (Decreto Supremo N° 003-2013-JUS):</p>
              <ul className="terms-definitions">
                <li><strong>Ejecución contractual:</strong> el tratamiento es necesario para prestar los servicios contratados por el Usuario a través de la Plataforma.</li>
                <li><strong>Consentimiento:</strong> cuando el Usuario proporciona sus datos durante el registro y acepta esta Política de Privacidad.</li>
                <li><strong>Obligación legal:</strong> cuando el tratamiento es necesario para cumplir con obligaciones tributarias ante SUNAT u otras disposiciones legales peruanas.</li>
                <li><strong>Interés legítimo:</strong> para mejorar la seguridad de la Plataforma, prevenir fraudes y optimizar nuestros servicios.</li>
              </ul>
            </div>
          </section>

          <section className="terms-section" id="terceros">
            <div className="terms-section-header">
              <span className="terms-section-number">05</span>
              <h2 className="terms-section-title">Compartición con Terceros</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice puede compartir datos del Usuario únicamente en los siguientes casos:</p>
              <div className="terms-features">
                <div className="terms-feature">
                  <h4>SUNAT</h4>
                  <p>Los comprobantes electrónicos y la información tributaria asociada se envían a SUNAT conforme a la normativa vigente. Esta compartición es obligatoria por ley para toda empresa que emite comprobantes electrónicos en el Perú.</p>
                </div>
                <div className="terms-feature">
                  <h4>Proveedores de infraestructura</h4>
                  <p>Servicios de alojamiento (hosting), almacenamiento en la nube y copias de seguridad necesarios para operar la Plataforma. Estos proveedores están sujetos a acuerdos de confidencialidad.</p>
                </div>
                <div className="terms-feature">
                  <h4>Procesadores de pago</h4>
                  <p>Entidades financieras y pasarelas de pago que procesan las transacciones de suscripción. Solo reciben los datos estrictamente necesarios para completar el pago.</p>
                </div>
                <div className="terms-feature">
                  <h4>Autoridades competentes</h4>
                  <p>Cuando sea requerido por ley, orden judicial o requerimiento de autoridad administrativa competente en el Perú.</p>
                </div>
              </div>
              <p>Innvoice <strong>no vende, alquila ni comercializa</strong> datos personales a terceros con fines publicitarios o de marketing.</p>
            </div>
          </section>

          <section className="terms-section" id="seguridad">
            <div className="terms-section-header">
              <span className="terms-section-number">06</span>
              <h2 className="terms-section-title">Medidas de Seguridad</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice implementa medidas técnicas y organizativas para proteger los datos del Usuario:</p>
              <ul className="terms-list">
                <li>Cifrado de datos en tránsito mediante protocolo HTTPS/TLS en todas las comunicaciones.</li>
                <li>Cifrado de datos sensibles en reposo dentro de nuestros servidores.</li>
                <li>Contraseñas almacenadas mediante algoritmos de hash seguros; nunca en texto plano.</li>
                <li>Copias de seguridad (backups) periódicas y automatizadas.</li>
                <li>Control de acceso basado en roles, limitando el acceso a datos según las funciones de cada miembro del equipo.</li>
                <li>Monitoreo continuo de la infraestructura para detectar accesos no autorizados o actividades sospechosas.</li>
                <li>Actualizaciones regulares de seguridad en todos los componentes de la Plataforma.</li>
              </ul>
              <p>A pesar de estas medidas, ningún sistema es completamente infalible. En caso de un incidente de seguridad que afecte datos personales, Innvoice notificará a los Usuarios afectados y a las autoridades competentes conforme a la normativa vigente.</p>
            </div>
          </section>

          <section className="terms-section" id="retencion">
            <div className="terms-section-header">
              <span className="terms-section-number">07</span>
              <h2 className="terms-section-title">Retención de Datos</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice conserva los datos del Usuario durante los siguientes periodos:</p>
              <ul className="terms-definitions">
                <li><strong>Cuenta activa:</strong> mientras la cuenta del Usuario esté activa y el servicio se encuentre vigente.</li>
                <li><strong>Post-cancelación:</strong> los datos se conservan durante 30 días después de la cancelación de la cuenta, permitiendo al Usuario exportar su información.</li>
                <li><strong>Obligaciones tributarias:</strong> los comprobantes electrónicos y registros contables se conservan por el periodo exigido por SUNAT y la legislación tributaria peruana (actualmente 5 años como mínimo).</li>
                <li><strong>Obligaciones legales:</strong> datos que sean necesarios para cumplir con obligaciones legales, resolver disputas o hacer cumplir acuerdos se conservarán por el tiempo que dichas obligaciones lo requieran.</li>
              </ul>
              <p>Transcurridos los plazos de retención, los datos serán eliminados de forma segura o anonimizados de manera irreversible.</p>
            </div>
          </section>

          <section className="terms-section" id="derechos">
            <div className="terms-section-header">
              <span className="terms-section-number">08</span>
              <h2 className="terms-section-title">Derechos del Usuario</h2>
            </div>
            <div className="terms-section-body">
              <p>Conforme a la Ley N° 29733, el Usuario tiene los siguientes derechos sobre sus datos personales:</p>
              <div className="terms-highlight">
                <h4>Derechos ARCO</h4>
                <ul className="terms-list">
                  <li><strong>Acceso:</strong> solicitar información sobre qué datos personales tenemos y cómo los tratamos.</li>
                  <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
                  <li><strong>Cancelación:</strong> solicitar la eliminación de datos personales cuando ya no sean necesarios para la finalidad para la que fueron recopilados.</li>
                  <li><strong>Oposición:</strong> oponerse al tratamiento de datos personales en determinadas circunstancias.</li>
                </ul>
              </div>
              <p>Para ejercer cualquiera de estos derechos, el Usuario puede enviar su solicitud a <strong>hola@innvoice.pe</strong> indicando claramente el derecho que desea ejercer y adjuntando una copia de su documento de identidad. Innvoice responderá en un plazo máximo de 10 días hábiles.</p>
              <p>El ejercicio de estos derechos es gratuito, salvo en casos de solicitudes manifiestamente infundadas o excesivas, en cuyo caso podrá aplicarse un cargo razonable.</p>
              <p>Algunos datos no podrán ser eliminados cuando su conservación sea necesaria para cumplir obligaciones legales (por ejemplo, comprobantes electrónicos enviados a SUNAT).</p>
            </div>
          </section>

          <section className="terms-section" id="cookies">
            <div className="terms-section-header">
              <span className="terms-section-number">09</span>
              <h2 className="terms-section-title">Cookies y Tecnologías Similares</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice utiliza cookies y tecnologías similares para mejorar la experiencia del usuario:</p>
              <div className="terms-features">
                <div className="terms-feature">
                  <h4>Cookies esenciales</h4>
                  <p>Necesarias para el funcionamiento de la Plataforma: autenticación de sesión, preferencias de idioma y seguridad. No se pueden desactivar.</p>
                </div>
                <div className="terms-feature">
                  <h4>Cookies de rendimiento</h4>
                  <p>Nos ayudan a entender cómo los Usuarios interactúan con la Plataforma para mejorar su funcionamiento. La información recopilada es anónima y agregada.</p>
                </div>
                <div className="terms-feature">
                  <h4>Cookies de preferencias</h4>
                  <p>Permiten recordar las preferencias del Usuario (como la vista preferida del dashboard o configuraciones de reportes) para personalizar la experiencia.</p>
                </div>
              </div>
              <p>El Usuario puede gestionar las cookies a través de la configuración de su navegador. La desactivación de cookies no esenciales no afectará el funcionamiento básico de la Plataforma.</p>
            </div>
          </section>

          <section className="terms-section" id="transferencias">
            <div className="terms-section-header">
              <span className="terms-section-number">10</span>
              <h2 className="terms-section-title">Transferencias Internacionales</h2>
            </div>
            <div className="terms-section-body">
              <p>Los datos del Usuario pueden ser almacenados o procesados en servidores ubicados fuera del Perú, específicamente en centros de datos que cumplen con estándares internacionales de seguridad.</p>
              <p>En caso de transferencia internacional de datos, Innvoice garantiza que:</p>
              <ul className="terms-list">
                <li>Los países o entidades destinatarias cuentan con niveles adecuados de protección de datos.</li>
                <li>Se implementan cláusulas contractuales y medidas de seguridad equivalentes a las establecidas por la legislación peruana.</li>
                <li>Las transferencias se realizan conforme a lo dispuesto por la Ley N° 29733 y las directrices de la Autoridad Nacional de Protección de Datos Personales.</li>
              </ul>
            </div>
          </section>

          <section className="terms-section" id="menores">
            <div className="terms-section-header">
              <span className="terms-section-number">11</span>
              <h2 className="terms-section-title">Menores de Edad</h2>
            </div>
            <div className="terms-section-body">
              <p>Los servicios de Innvoice están dirigidos exclusivamente a personas mayores de 18 años con capacidad legal para contratar. No recopilamos intencionalmente datos personales de menores de edad.</p>
              <p>Si detectamos que hemos recopilado datos de un menor de edad sin el consentimiento de su representante legal, procederemos a eliminar dicha información de forma inmediata.</p>
            </div>
          </section>

          <section className="terms-section" id="modificaciones">
            <div className="terms-section-header">
              <span className="terms-section-number">12</span>
              <h2 className="terms-section-title">Modificaciones a esta Política</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice puede actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas de tratamiento de datos o en la legislación aplicable.</p>
              <ul className="terms-list">
                <li>Los cambios sustanciales serán notificados mediante correo electrónico y/o aviso dentro de la Plataforma con al menos 15 días de anticipación.</li>
                <li>La versión actualizada será publicada en innvoice.pe/privacidad con la fecha de última actualización.</li>
                <li>El uso continuado de la Plataforma después de la fecha de entrada en vigor constituirá la aceptación de la política actualizada.</li>
              </ul>
              <p>Recomendamos revisar esta página periódicamente para mantenerse informado sobre cómo protegemos tus datos.</p>
            </div>
          </section>

          <section className="terms-section" id="contacto">
            <div className="terms-section-header">
              <span className="terms-section-number">13</span>
              <h2 className="terms-section-title">Contacto</h2>
            </div>
            <div className="terms-section-body">
              <p>Si tienes preguntas, inquietudes o deseas ejercer tus derechos respecto al tratamiento de tus datos personales, puedes contactarnos:</p>
              <div className="terms-contact-grid">
                <div className="terms-contact-card">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <span className="terms-contact-label">Correo electrónico</span>
                    <a href="mailto:hola@innvoice.pe" className="terms-contact-value">hola@innvoice.pe</a>
                  </div>
                </div>
                <div className="terms-contact-card">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    <span className="terms-contact-label">WhatsApp</span>
                    <a href="https://wa.me/51959561015" target="_blank" rel="noopener noreferrer" className="terms-contact-value">+51 959 561 015</a>
                  </div>
                </div>
                <div className="terms-contact-card">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span className="terms-contact-label">Dirección</span>
                    <span className="terms-contact-value">Lima, Perú</span>
                  </div>
                </div>
              </div>
              <p>También puedes presentar una reclamación ante la <strong>Autoridad Nacional de Protección de Datos Personales</strong> del Ministerio de Justicia y Derechos Humanos del Perú si consideras que tus derechos no han sido debidamente atendidos.</p>
            </div>
          </section>
        </main>
      </div>

      <footer className="terms-footer">
        <div className="terms-footer-inner">
          <div className="terms-footer-top">
            <img src="/logo-innvoice.png" alt="Innvoice" className="terms-footer-logo" />
            <p className="terms-footer-tagline">Facturación electrónica, CRM y ERP para empresas en Perú</p>
          </div>
          <div className="terms-footer-divider" />
          <div className="terms-footer-bottom">
            <div className="terms-footer-credits">
              <p>Diseñado con ❤️ por <a href="https://genesisleal.com" target="_blank" rel="noopener noreferrer">Genesis Leal</a></p>
              <span className="terms-footer-dot">•</span>
              <p>Desarrollado por <a href="https://enigmasac.com" target="_blank" rel="noopener noreferrer">Enigma Developers</a></p>
            </div>
            <p className="terms-footer-copy">© {new Date().getFullYear()} Innvoice. Todos los derechos reservados.</p>
            <Link to="/" className="terms-footer-link">
              innvoice.pe
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
