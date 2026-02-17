import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './TermsPage.css'

const TOC_SECTIONS = [
  { id: 'objeto', title: 'Objeto y Alcance' },
  { id: 'definiciones', title: 'Definiciones' },
  { id: 'registro', title: 'Registro y Cuenta' },
  { id: 'servicio', title: 'Descripción del Servicio' },
  { id: 'sunat', title: 'Facturación Electrónica' },
  { id: 'planes', title: 'Planes y Pagos' },
  { id: 'prueba', title: 'Periodo de Prueba' },
  { id: 'uso', title: 'Uso Aceptable' },
  { id: 'propiedad', title: 'Propiedad Intelectual' },
  { id: 'datos', title: 'Protección de Datos' },
  { id: 'disponibilidad', title: 'Disponibilidad y Soporte' },
  { id: 'responsabilidad', title: 'Limitación de Responsabilidad' },
  { id: 'modificaciones', title: 'Modificaciones' },
  { id: 'terminacion', title: 'Terminación' },
  { id: 'ley', title: 'Ley Aplicable' },
  { id: 'contacto', title: 'Contacto' },
]

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('objeto')

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
          <h1 className="terms-hero-title">Términos y Condiciones</h1>
          <p className="terms-hero-meta">
            Última actualización: 17 de febrero de 2026
          </p>
          <p className="terms-hero-summary">
            Estos términos regulan el uso de la plataforma Innvoice, incluyendo los servicios de facturación electrónica, CRM y ERP. Al utilizar nuestros servicios, aceptas las condiciones descritas a continuación.
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
          <section className="terms-section" id="objeto">
            <div className="terms-section-header">
              <span className="terms-section-number">01</span>
              <h2 className="terms-section-title">Objeto y Alcance</h2>
            </div>
            <div className="terms-section-body">
              <p>Los presentes Términos y Condiciones regulan la relación entre <strong>Innvoice</strong> (en adelante, "la Plataforma"), operada por Enigma Developers S.A.C. con domicilio en Lima, Perú, y cualquier persona natural o jurídica que acceda, se registre o utilice los servicios ofrecidos a través de <strong>innvoice.pe</strong> y <strong>app.innvoice.pe</strong> (en adelante, "el Usuario").</p>
              <p>Estos términos aplican a todos los servicios proporcionados por la Plataforma, incluyendo pero no limitándose a: facturación electrónica homologada por SUNAT, gestión de relaciones con clientes (CRM), planificación de recursos empresariales (ERP), y cualquier funcionalidad adicional que se incorpore en el futuro.</p>
              <p>El uso de la Plataforma implica la aceptación plena e incondicional de estos Términos y Condiciones. Si no estás de acuerdo con alguna de estas disposiciones, te solicitamos que no utilices nuestros servicios.</p>
            </div>
          </section>

          <section className="terms-section" id="definiciones">
            <div className="terms-section-header">
              <span className="terms-section-number">02</span>
              <h2 className="terms-section-title">Definiciones</h2>
            </div>
            <div className="terms-section-body">
              <p>Para efectos de estos Términos y Condiciones, se entenderá por:</p>
              <ul className="terms-definitions">
                <li><strong>Plataforma:</strong> el software como servicio (SaaS) accesible a través de app.innvoice.pe y sus servicios asociados.</li>
                <li><strong>Usuario:</strong> toda persona natural o jurídica que se registre y utilice los servicios de Innvoice.</li>
                <li><strong>Cuenta:</strong> el perfil creado por el Usuario para acceder a los servicios de la Plataforma.</li>
                <li><strong>Comprobante Electrónico:</strong> facturas, boletas, notas de crédito, notas de débito y cualquier otro documento tributario emitido electrónicamente a través de la Plataforma y validado por SUNAT.</li>
                <li><strong>Plan:</strong> el nivel de suscripción contratado por el Usuario, que determina las funcionalidades y límites de uso disponibles.</li>
                <li><strong>SUNAT:</strong> Superintendencia Nacional de Aduanas y de Administración Tributaria del Perú.</li>
                <li><strong>Datos del Usuario:</strong> toda información ingresada, generada o almacenada por el Usuario dentro de la Plataforma.</li>
              </ul>
            </div>
          </section>

          <section className="terms-section" id="registro">
            <div className="terms-section-header">
              <span className="terms-section-number">03</span>
              <h2 className="terms-section-title">Registro y Cuenta</h2>
            </div>
            <div className="terms-section-body">
              <p>Para utilizar los servicios de Innvoice, el Usuario debe crear una cuenta proporcionando información veraz, completa y actualizada. El Usuario es responsable de:</p>
              <ul className="terms-list">
                <li>Proporcionar datos exactos durante el registro, incluyendo razón social, RUC y datos de contacto válidos.</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso (usuario y contraseña).</li>
                <li>Notificar de forma inmediata a Innvoice cualquier uso no autorizado de su cuenta.</li>
                <li>Toda actividad realizada desde su cuenta, independientemente de quién la ejecute.</li>
              </ul>
              <p>Innvoice se reserva el derecho de suspender o cancelar cuentas que contengan información falsa, incompleta o que incumplan estos Términos.</p>
              <p>El Usuario debe ser mayor de 18 años y contar con la capacidad legal necesaria para contratar servicios en nombre propio o de la empresa que representa.</p>
            </div>
          </section>

          <section className="terms-section" id="servicio">
            <div className="terms-section-header">
              <span className="terms-section-number">04</span>
              <h2 className="terms-section-title">Descripción del Servicio</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice es una plataforma SaaS que integra tres módulos principales en un solo sistema:</p>
              <div className="terms-features">
                <div className="terms-feature">
                  <h4>Facturación Electrónica</h4>
                  <p>Emisión de comprobantes electrónicos (facturas, boletas, notas de crédito y débito) homologados por SUNAT. Incluye firma digital, envío automático a SUNAT y generación de representaciones impresas.</p>
                </div>
                <div className="terms-feature">
                  <h4>CRM (Gestión de Clientes)</h4>
                  <p>Herramientas para gestionar la relación con clientes: registro de contactos, seguimiento de oportunidades, historial de interacciones y reportes de actividad comercial.</p>
                </div>
                <div className="terms-feature">
                  <h4>ERP (Gestión Empresarial)</h4>
                  <p>Módulos de gestión operativa que incluyen control de inventarios, cuentas por cobrar y pagar, reportes financieros y administración de productos y servicios.</p>
                </div>
              </div>
              <p>Las funcionalidades específicas disponibles para cada Usuario dependen del Plan contratado. Innvoice se reserva el derecho de agregar, modificar o descontinuar funcionalidades, notificando previamente a los Usuarios afectados.</p>
            </div>
          </section>

          <section className="terms-section" id="sunat">
            <div className="terms-section-header">
              <span className="terms-section-number">05</span>
              <h2 className="terms-section-title">Facturación Electrónica y SUNAT</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice opera como Proveedor de Servicios Electrónicos (PSE) o facilita la emisión de comprobantes electrónicos conforme a la normativa vigente de SUNAT. En relación a la facturación electrónica:</p>
              <ul className="terms-list">
                <li>Innvoice garantiza que los comprobantes emitidos a través de la Plataforma cumplen con los requisitos técnicos y formales establecidos por SUNAT al momento de su emisión.</li>
                <li>El Usuario es el único responsable de la veracidad y exactitud de la información contenida en los comprobantes que emita (datos del cliente, montos, descripciones, IGV, etc.).</li>
                <li>El Usuario debe mantener vigente su certificado digital y sus credenciales de SUNAT necesarias para la emisión electrónica.</li>
                <li>Innvoice no se responsabiliza por rechazos de comprobantes derivados de datos incorrectos ingresados por el Usuario o por cambios normativos de SUNAT que no hayan sido implementados aún en la Plataforma.</li>
                <li>En caso de cambios regulatorios por parte de SUNAT, Innvoice realizará las actualizaciones necesarias en un plazo razonable.</li>
              </ul>
              <p>El Usuario reconoce que es su obligación cumplir con todas las disposiciones tributarias aplicables y que Innvoice es una herramienta que facilita dicho cumplimiento, pero no sustituye la asesoría tributaria o contable profesional.</p>
            </div>
          </section>

          <section className="terms-section" id="planes">
            <div className="terms-section-header">
              <span className="terms-section-number">06</span>
              <h2 className="terms-section-title">Planes, Precios y Pagos</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice ofrece diferentes planes de suscripción, cada uno con funcionalidades y límites específicos. Los planes vigentes y sus precios se encuentran publicados en la página de Planes de innvoice.pe.</p>
              <div className="terms-highlight">
                <h4>Condiciones de pago</h4>
                <ul className="terms-list">
                  <li>Los pagos se realizan de forma anticipada, en ciclos mensuales o anuales según la modalidad elegida por el Usuario.</li>
                  <li>Los precios están expresados en Soles peruanos (PEN) e incluyen IGV cuando corresponda.</li>
                  <li>Los planes anuales gozan de un descuento respecto al precio mensual, según lo indicado en la página de precios.</li>
                  <li>El pago puede realizarse mediante los métodos habilitados en la Plataforma (transferencia bancaria, tarjeta de crédito/débito u otros medios disponibles).</li>
                </ul>
              </div>
              <p>Innvoice se reserva el derecho de modificar los precios de sus planes, notificando a los Usuarios con al menos 30 días de anticipación. Los cambios de precio no afectarán el ciclo de facturación en curso.</p>
              <p>En caso de falta de pago, Innvoice podrá suspender el acceso a la cuenta tras un periodo de gracia de 7 días naturales contados desde la fecha de vencimiento del pago. La suspensión no exime al Usuario de su obligación de pago.</p>
              <p>Si el Usuario excede los límites de su plan (número de comprobantes, usuarios, etc.), se le notificará para que actualice su plan. De no hacerlo, podrían aplicarse restricciones en la emisión.</p>
            </div>
          </section>

          <section className="terms-section" id="prueba">
            <div className="terms-section-header">
              <span className="terms-section-number">07</span>
              <h2 className="terms-section-title">Periodo de Prueba</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice ofrece un periodo de prueba gratuito de <strong>7 días</strong> para que los nuevos Usuarios puedan evaluar la Plataforma. Durante este periodo:</p>
              <ul className="terms-list">
                <li>El Usuario tendrá acceso a las funcionalidades del plan seleccionado para evaluación.</li>
                <li>No se requerirá información de pago para activar el periodo de prueba.</li>
                <li>Al finalizar los 7 días, el Usuario deberá seleccionar y pagar un plan para continuar utilizando los servicios.</li>
                <li>Si el Usuario no contrata un plan al término de la prueba, su cuenta será suspendida pero sus datos se conservarán por un periodo de 30 días adicionales.</li>
              </ul>
              <p>El periodo de prueba está disponible una sola vez por empresa (identificada por su RUC). Innvoice se reserva el derecho de modificar las condiciones del periodo de prueba.</p>
            </div>
          </section>

          <section className="terms-section" id="uso">
            <div className="terms-section-header">
              <span className="terms-section-number">08</span>
              <h2 className="terms-section-title">Uso Aceptable</h2>
            </div>
            <div className="terms-section-body">
              <p>El Usuario se compromete a utilizar la Plataforma de manera responsable y conforme a la legislación vigente. Queda expresamente prohibido:</p>
              <ul className="terms-list">
                <li>Utilizar la Plataforma para emitir comprobantes falsos, fraudulentos o que no correspondan a operaciones reales.</li>
                <li>Intentar acceder a cuentas de otros Usuarios o a áreas restringidas de la Plataforma sin autorización.</li>
                <li>Realizar ingeniería inversa, descompilar o intentar obtener el código fuente de la Plataforma.</li>
                <li>Utilizar la Plataforma para transmitir malware, virus o cualquier código malicioso.</li>
                <li>Sobrecargar intencionalmente los servidores o la infraestructura de la Plataforma.</li>
                <li>Revender, sublicenciar o redistribuir el acceso a la Plataforma sin autorización escrita de Innvoice.</li>
                <li>Utilizar la Plataforma para actividades ilegales, incluyendo lavado de activos, evasión tributaria o financiamiento del terrorismo.</li>
              </ul>
              <p>El incumplimiento de estas disposiciones podrá resultar en la suspensión inmediata de la cuenta, sin derecho a reembolso y sin perjuicio de las acciones legales que correspondan.</p>
            </div>
          </section>

          <section className="terms-section" id="propiedad">
            <div className="terms-section-header">
              <span className="terms-section-number">09</span>
              <h2 className="terms-section-title">Propiedad Intelectual</h2>
            </div>
            <div className="terms-section-body">
              <p>Todos los derechos de propiedad intelectual sobre la Plataforma, incluyendo pero no limitándose al software, diseño, interfaces, logotipos, marcas, contenido y documentación, son propiedad exclusiva de Enigma Developers S.A.C. o sus licenciantes.</p>
              <p>La suscripción a Innvoice otorga al Usuario una licencia limitada, no exclusiva, no transferible y revocable para utilizar la Plataforma conforme a estos Términos y al Plan contratado.</p>
              <p>Los Datos del Usuario son y seguirán siendo propiedad del Usuario. Innvoice no adquiere ningún derecho de propiedad sobre la información que el Usuario ingrese o genere en la Plataforma.</p>
            </div>
          </section>

          <section className="terms-section" id="datos">
            <div className="terms-section-header">
              <span className="terms-section-number">10</span>
              <h2 className="terms-section-title">Protección de Datos</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice se compromete a proteger los datos personales y empresariales del Usuario conforme a la Ley N° 29733 (Ley de Protección de Datos Personales del Perú) y su Reglamento:</p>
              <ul className="terms-list">
                <li>Los datos del Usuario serán utilizados exclusivamente para la prestación de los servicios contratados y la mejora de la Plataforma.</li>
                <li>Innvoice implementa medidas de seguridad técnicas y organizativas para proteger los datos contra acceso no autorizado, pérdida o alteración, incluyendo cifrado en tránsito (HTTPS/TLS) y en reposo.</li>
                <li>Innvoice no compartirá los datos del Usuario con terceros, salvo cuando sea necesario para la prestación del servicio (por ejemplo, envío de comprobantes a SUNAT) o cuando sea requerido por ley o autoridad competente.</li>
                <li>El Usuario tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales, conforme a la normativa vigente.</li>
                <li>Innvoice realiza copias de seguridad periódicas de los datos almacenados en la Plataforma.</li>
              </ul>
              <p>Para mayor detalle sobre el tratamiento de datos personales, consulta nuestra Política de Privacidad.</p>
            </div>
          </section>

          <section className="terms-section" id="disponibilidad">
            <div className="terms-section-header">
              <span className="terms-section-number">11</span>
              <h2 className="terms-section-title">Disponibilidad y Soporte</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice se esfuerza por mantener la Plataforma disponible las 24 horas del día, los 7 días de la semana. Sin embargo:</p>
              <ul className="terms-list">
                <li>La Plataforma puede experimentar interrupciones planificadas para mantenimiento, las cuales serán notificadas con anticipación razonable.</li>
                <li>Innvoice no garantiza disponibilidad ininterrumpida y no será responsable por interrupciones causadas por factores fuera de su control (fuerza mayor, fallos de terceros proveedores, problemas de conectividad del Usuario, etc.).</li>
                <li>El soporte técnico está disponible a través de WhatsApp (+51 959 561 015) y correo electrónico (hola@innvoice.pe), en horario de lunes a viernes de 9:00 a.m. a 6:00 p.m. (hora de Lima, GMT-5).</li>
              </ul>
              <p>Los tiempos de respuesta del soporte pueden variar según el Plan contratado y la complejidad de la consulta.</p>
            </div>
          </section>

          <section className="terms-section" id="responsabilidad">
            <div className="terms-section-header">
              <span className="terms-section-number">12</span>
              <h2 className="terms-section-title">Limitación de Responsabilidad</h2>
            </div>
            <div className="terms-section-body">
              <p>En la máxima medida permitida por la legislación peruana:</p>
              <ul className="terms-list">
                <li>Innvoice no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos, oportunidades de negocio o goodwill.</li>
                <li>La responsabilidad total acumulada de Innvoice por cualquier reclamación no excederá el monto pagado por el Usuario en los 12 meses anteriores al evento que dio origen a la reclamación.</li>
                <li>Innvoice no será responsable por errores en la información ingresada por el Usuario, ni por las consecuencias tributarias, legales o financieras derivadas del uso incorrecto de la Plataforma.</li>
                <li>Innvoice no garantiza que la Plataforma satisfaga todos los requerimientos específicos del Usuario o que opere sin interrupciones o errores.</li>
              </ul>
              <p>Estas limitaciones aplican independientemente de la teoría legal bajo la cual se presente la reclamación (contrato, agravio, negligencia u otra).</p>
            </div>
          </section>

          <section className="terms-section" id="modificaciones">
            <div className="terms-section-header">
              <span className="terms-section-number">13</span>
              <h2 className="terms-section-title">Modificaciones a los Términos</h2>
            </div>
            <div className="terms-section-body">
              <p>Innvoice se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Cuando se realicen cambios sustanciales:</p>
              <ul className="terms-list">
                <li>Se notificará a los Usuarios mediante correo electrónico y/o aviso dentro de la Plataforma con al menos 15 días de anticipación a la entrada en vigor de los cambios.</li>
                <li>La versión actualizada será publicada en innvoice.pe/terminos-y-condiciones con la fecha de última actualización.</li>
                <li>El uso continuado de la Plataforma después de la fecha de entrada en vigor constituirá la aceptación de los nuevos términos.</li>
                <li>Si el Usuario no está de acuerdo con los cambios, podrá cancelar su suscripción antes de la fecha de entrada en vigor sin penalidad.</li>
              </ul>
            </div>
          </section>

          <section className="terms-section" id="terminacion">
            <div className="terms-section-header">
              <span className="terms-section-number">14</span>
              <h2 className="terms-section-title">Terminación</h2>
            </div>
            <div className="terms-section-body">
              <p>La relación entre Innvoice y el Usuario puede terminar en los siguientes supuestos:</p>
              <div className="terms-highlight">
                <h4>Por el Usuario</h4>
                <p>El Usuario puede cancelar su suscripción en cualquier momento. La cancelación será efectiva al finalizar el ciclo de facturación en curso. No se otorgarán reembolsos proporcionales por el periodo no utilizado, salvo que la ley lo requiera.</p>
              </div>
              <div className="terms-highlight">
                <h4>Por Innvoice</h4>
                <p>Innvoice puede suspender o terminar la cuenta del Usuario en caso de: incumplimiento de estos Términos, falta de pago, uso fraudulento, o por requerimiento de autoridad competente. En caso de terminación por incumplimiento grave, no se otorgará reembolso.</p>
              </div>
              <p>Tras la terminación, el Usuario tendrá un periodo de 30 días para exportar sus datos de la Plataforma. Transcurrido dicho plazo, Innvoice podrá eliminar los datos de la cuenta conforme a su política de retención.</p>
              <p>Las obligaciones de pago pendientes, las disposiciones sobre propiedad intelectual, limitación de responsabilidad y ley aplicable sobrevivirán a la terminación de estos Términos.</p>
            </div>
          </section>

          <section className="terms-section" id="ley">
            <div className="terms-section-header">
              <span className="terms-section-number">15</span>
              <h2 className="terms-section-title">Ley Aplicable y Jurisdicción</h2>
            </div>
            <div className="terms-section-body">
              <p>Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de la República del Perú.</p>
              <p>Para la resolución de cualquier controversia derivada de estos Términos, las partes acuerdan someterse a la jurisdicción de los juzgados y tribunales competentes del distrito judicial de Lima, Perú, renunciando a cualquier otro fuero que pudiera corresponderles.</p>
              <p>Antes de iniciar cualquier procedimiento judicial, las partes se comprometen a intentar resolver la controversia de manera amistosa mediante negociación directa durante un periodo de 30 días calendario.</p>
            </div>
          </section>

          <section className="terms-section" id="contacto">
            <div className="terms-section-header">
              <span className="terms-section-number">16</span>
              <h2 className="terms-section-title">Contacto</h2>
            </div>
            <div className="terms-section-body">
              <p>Para cualquier consulta, reclamación o solicitud relacionada con estos Términos y Condiciones, puedes contactarnos a través de:</p>
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
