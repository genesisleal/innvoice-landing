import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ComplaintsBookPage.css'

const INITIAL_FORM = {
  consumerName: '',
  consumerLastName: '',
  documentType: 'dni',
  documentNumber: '',
  consumerAddress: '',
  consumerEmail: '',
  consumerPhone: '',
  guardianName: '',
  contractedGoodType: 'producto',
  amount: '',
  goodDescription: '',
  claimType: 'reclamo',
  detail: '',
  consumerRequest: '',
  consent: false,
}

function validateForm(data) {
  const errors = {}

  if (!data.consumerName || data.consumerName.trim().length < 2)
    errors.consumerName = 'Ingresa tu nombre'

  if (!data.consumerLastName || data.consumerLastName.trim().length < 2)
    errors.consumerLastName = 'Ingresa tus apellidos'

  if (!data.documentNumber || data.documentNumber.trim().length === 0) {
    errors.documentNumber = 'Ingresa tu número de documento'
  } else if (data.documentType === 'dni' && !/^\d{8}$/.test(data.documentNumber.trim())) {
    errors.documentNumber = 'El DNI debe tener 8 dígitos'
  } else if (data.documentType === 'ce' && !/^[a-zA-Z0-9]{9,12}$/.test(data.documentNumber.trim())) {
    errors.documentNumber = 'El CE debe tener entre 9 y 12 caracteres'
  } else if (data.documentType === 'pasaporte' && !/^[a-zA-Z0-9]{6,12}$/.test(data.documentNumber.trim())) {
    errors.documentNumber = 'El pasaporte debe tener entre 6 y 12 caracteres'
  }

  if (!data.consumerAddress || data.consumerAddress.trim().length < 5)
    errors.consumerAddress = 'Ingresa tu dirección'

  if (!data.consumerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.consumerEmail.trim()))
    errors.consumerEmail = 'Ingresa un correo electrónico válido'

  if (!data.consumerPhone || !/^\d{9}$/.test(data.consumerPhone.trim()))
    errors.consumerPhone = 'Ingresa un teléfono válido de 9 dígitos'

  if (!data.amount || parseFloat(data.amount) <= 0)
    errors.amount = 'Ingresa el monto reclamado'

  if (!data.goodDescription || data.goodDescription.trim().length < 10)
    errors.goodDescription = 'Describe el bien contratado (mínimo 10 caracteres)'

  if (!data.detail || data.detail.trim().length < 20)
    errors.detail = 'Describe el reclamo con al menos 20 caracteres'

  if (!data.consumerRequest || data.consumerRequest.trim().length < 20)
    errors.consumerRequest = 'Describe tu pedido con al menos 20 caracteres'

  if (!data.consent)
    errors.consent = 'Debes aceptar el tratamiento de datos personales'

  return errors
}

function generateClaimNumber() {
  const now = new Date()
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
  const random = String(Math.floor(Math.random() * 10000)).padStart(4, '0')
  return `LR-${date}-${random}`
}

export default function ComplaintsBookPage() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [claimNumber, setClaimNumber] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstErrorKey = Object.keys(newErrors)[0]
      const firstErrorEl = document.querySelector(`[name="${firstErrorKey}"]`) || document.getElementById(firstErrorKey)
      if (firstErrorEl) {
        firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    setErrors({})
    setClaimNumber(generateClaimNumber())
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const inputClass = (field) =>
    `cb-input${errors[field] ? ' cb-input--error' : ''}`

  const textareaClass = (field) =>
    `cb-textarea${errors[field] ? ' cb-textarea--error' : ''}`

  return (
    <div className="cb-page">
      <nav className="cb-nav">
        <div className="cb-nav-inner">
          <Link to="/" className="cb-nav-logo">
            <img src="/logo-innvoice.png" alt="Innvoice" />
          </Link>
          <Link to="/" className="cb-nav-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </nav>

      <main className="cb-main">
        <div className="cb-container">
          {submitted ? (
            <div className="cb-success" role="status" aria-live="polite">
              <div className="cb-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="cb-success-title">Reclamo registrado</h2>
              <span className="cb-success-code">{claimNumber}</span>
              <p className="cb-success-message">
                Tu reclamo ha sido registrado exitosamente. Conforme a la normativa vigente, el plazo máximo de respuesta es de 30 días calendario contados a partir de la fecha de registro.
              </p>
              <p className="cb-success-note">
                Esta es una maqueta de demostración. La funcionalidad de envío por correo electrónico será implementada próximamente.
              </p>
              <Link to="/" className="cb-success-back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Volver al inicio
              </Link>
            </div>
          ) : (
            <>
              <div className="cb-header">
                <span className="cb-badge">INDECOPI</span>
                <h1 className="cb-title">Libro de Reclamaciones</h1>
                <p className="cb-subtitle">Ley N° 29571 — Código de Protección y Defensa del Consumidor</p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="cb-section">
                  <h2 className="cb-section-title">Datos del Consumidor</h2>
                  <div className="cb-form-grid">
                    <div className="cb-field">
                      <label className="cb-label" htmlFor="consumerName">
                        Nombres <span className="cb-label-required">*</span>
                      </label>
                      <input
                        type="text"
                        id="consumerName"
                        name="consumerName"
                        className={inputClass('consumerName')}
                        value={formData.consumerName}
                        onChange={handleChange}
                        placeholder="Ej: Juan Carlos"
                      />
                      {errors.consumerName && <span className="cb-error">{errors.consumerName}</span>}
                    </div>

                    <div className="cb-field">
                      <label className="cb-label" htmlFor="consumerLastName">
                        Apellidos <span className="cb-label-required">*</span>
                      </label>
                      <input
                        type="text"
                        id="consumerLastName"
                        name="consumerLastName"
                        className={inputClass('consumerLastName')}
                        value={formData.consumerLastName}
                        onChange={handleChange}
                        placeholder="Ej: Pérez García"
                      />
                      {errors.consumerLastName && <span className="cb-error">{errors.consumerLastName}</span>}
                    </div>

                    <div className="cb-field">
                      <label className="cb-label" htmlFor="documentType">
                        Tipo de documento <span className="cb-label-required">*</span>
                      </label>
                      <select
                        id="documentType"
                        name="documentType"
                        className="cb-select"
                        value={formData.documentType}
                        onChange={handleChange}
                      >
                        <option value="dni">DNI</option>
                        <option value="ce">Carné de Extranjería</option>
                        <option value="pasaporte">Pasaporte</option>
                      </select>
                    </div>

                    <div className="cb-field">
                      <label className="cb-label" htmlFor="documentNumber">
                        N° de documento <span className="cb-label-required">*</span>
                      </label>
                      <input
                        type="text"
                        id="documentNumber"
                        name="documentNumber"
                        className={inputClass('documentNumber')}
                        value={formData.documentNumber}
                        onChange={handleChange}
                        placeholder={formData.documentType === 'dni' ? '12345678' : 'Número de documento'}
                      />
                      {errors.documentNumber && <span className="cb-error">{errors.documentNumber}</span>}
                    </div>

                    <div className="cb-field cb-field--full">
                      <label className="cb-label" htmlFor="consumerAddress">
                        Dirección <span className="cb-label-required">*</span>
                      </label>
                      <input
                        type="text"
                        id="consumerAddress"
                        name="consumerAddress"
                        className={inputClass('consumerAddress')}
                        value={formData.consumerAddress}
                        onChange={handleChange}
                        placeholder="Ej: Av. Javier Prado 1234, San Isidro, Lima"
                      />
                      {errors.consumerAddress && <span className="cb-error">{errors.consumerAddress}</span>}
                    </div>

                    <div className="cb-field">
                      <label className="cb-label" htmlFor="consumerEmail">
                        Correo electrónico <span className="cb-label-required">*</span>
                      </label>
                      <input
                        type="email"
                        id="consumerEmail"
                        name="consumerEmail"
                        className={inputClass('consumerEmail')}
                        value={formData.consumerEmail}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                      />
                      {errors.consumerEmail && <span className="cb-error">{errors.consumerEmail}</span>}
                    </div>

                    <div className="cb-field">
                      <label className="cb-label" htmlFor="consumerPhone">
                        Teléfono <span className="cb-label-required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="consumerPhone"
                        name="consumerPhone"
                        className={inputClass('consumerPhone')}
                        value={formData.consumerPhone}
                        onChange={handleChange}
                        placeholder="987654321"
                      />
                      {errors.consumerPhone && <span className="cb-error">{errors.consumerPhone}</span>}
                    </div>

                    <div className="cb-field cb-field--full">
                      <label className="cb-label" htmlFor="guardianName">
                        Padre o Apoderado (menor de edad)
                      </label>
                      <input
                        type="text"
                        id="guardianName"
                        name="guardianName"
                        className="cb-input"
                        value={formData.guardianName}
                        onChange={handleChange}
                        placeholder="Nombre completo del padre, madre o apoderado"
                      />
                      <span className="cb-field-hint">Solo completar si el consumidor es menor de edad</span>
                    </div>
                  </div>
                </div>

                <div className="cb-section">
                  <h2 className="cb-section-title">Bien Contratado</h2>
                  <div className="cb-field">
                    <label className="cb-label">
                      Tipo de bien <span className="cb-label-required">*</span>
                    </label>
                    <div className="cb-radio-group">
                      <label className={`cb-radio-option${formData.contractedGoodType === 'producto' ? ' cb-radio-option--active' : ''}`}>
                        <input
                          type="radio"
                          name="contractedGoodType"
                          value="producto"
                          checked={formData.contractedGoodType === 'producto'}
                          onChange={() => handleRadioChange('contractedGoodType', 'producto')}
                        />
                        <span className="cb-radio-title">
                          <span className="cb-radio-indicator">
                            <span className="cb-radio-indicator-dot" />
                          </span>
                          Producto
                        </span>
                      </label>
                      <label className={`cb-radio-option${formData.contractedGoodType === 'servicio' ? ' cb-radio-option--active' : ''}`}>
                        <input
                          type="radio"
                          name="contractedGoodType"
                          value="servicio"
                          checked={formData.contractedGoodType === 'servicio'}
                          onChange={() => handleRadioChange('contractedGoodType', 'servicio')}
                        />
                        <span className="cb-radio-title">
                          <span className="cb-radio-indicator">
                            <span className="cb-radio-indicator-dot" />
                          </span>
                          Servicio
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="cb-form-grid" style={{ marginTop: 'var(--space-lg)' }}>
                    <div className="cb-field">
                      <label className="cb-label" htmlFor="amount">
                        Monto reclamado (S/) <span className="cb-label-required">*</span>
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        className={inputClass('amount')}
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                      />
                      {errors.amount && <span className="cb-error">{errors.amount}</span>}
                    </div>

                    <div className="cb-field">
                      <label className="cb-label" htmlFor="goodDescription">
                        Descripción del bien <span className="cb-label-required">*</span>
                      </label>
                      <textarea
                        id="goodDescription"
                        name="goodDescription"
                        className={textareaClass('goodDescription')}
                        value={formData.goodDescription}
                        onChange={handleChange}
                        placeholder="Describe el producto o servicio contratado..."
                      />
                      {errors.goodDescription && <span className="cb-error">{errors.goodDescription}</span>}
                    </div>
                  </div>
                </div>

                <div className="cb-section">
                  <h2 className="cb-section-title">Tipo de Reclamo</h2>
                  <div className="cb-radio-group">
                    <label className={`cb-radio-option${formData.claimType === 'reclamo' ? ' cb-radio-option--active' : ''}`}>
                      <input
                        type="radio"
                        name="claimType"
                        value="reclamo"
                        checked={formData.claimType === 'reclamo'}
                        onChange={() => handleRadioChange('claimType', 'reclamo')}
                      />
                      <span className="cb-radio-title">
                        <span className="cb-radio-indicator">
                          <span className="cb-radio-indicator-dot" />
                        </span>
                        Reclamo
                      </span>
                      <p className="cb-radio-description">
                        Disconformidad relacionada a los productos o servicios adquiridos o contratados.
                      </p>
                    </label>
                    <label className={`cb-radio-option${formData.claimType === 'queja' ? ' cb-radio-option--active' : ''}`}>
                      <input
                        type="radio"
                        name="claimType"
                        value="queja"
                        checked={formData.claimType === 'queja'}
                        onChange={() => handleRadioChange('claimType', 'queja')}
                      />
                      <span className="cb-radio-title">
                        <span className="cb-radio-indicator">
                          <span className="cb-radio-indicator-dot" />
                        </span>
                        Queja
                      </span>
                      <p className="cb-radio-description">
                        Disconformidad no relacionada a los productos o servicios, sino al proceso de atención.
                      </p>
                    </label>
                  </div>
                </div>

                <div className="cb-section">
                  <h2 className="cb-section-title">Detalle del Reclamo</h2>
                  <div className="cb-field">
                    <label className="cb-label" htmlFor="detail">
                      Descripción detallada <span className="cb-label-required">*</span>
                    </label>
                    <textarea
                      id="detail"
                      name="detail"
                      className={textareaClass('detail')}
                      value={formData.detail}
                      onChange={handleChange}
                      placeholder="Describe de manera detallada los hechos que motivan tu reclamo o queja..."
                      style={{ minHeight: '140px' }}
                    />
                    {errors.detail && <span className="cb-error">{errors.detail}</span>}
                    <span className="cb-field-hint">Mínimo 20 caracteres</span>
                  </div>
                </div>

                <div className="cb-section">
                  <h2 className="cb-section-title">Pedido del Consumidor</h2>
                  <div className="cb-field">
                    <label className="cb-label" htmlFor="consumerRequest">
                      ¿Qué solución esperas? <span className="cb-label-required">*</span>
                    </label>
                    <textarea
                      id="consumerRequest"
                      name="consumerRequest"
                      className={textareaClass('consumerRequest')}
                      value={formData.consumerRequest}
                      onChange={handleChange}
                      placeholder="Indica qué acción o solución esperas por parte de Innvoice..."
                      style={{ minHeight: '140px' }}
                    />
                    {errors.consumerRequest && <span className="cb-error">{errors.consumerRequest}</span>}
                    <span className="cb-field-hint">Mínimo 20 caracteres</span>
                  </div>
                </div>

                <div className="cb-section cb-section--last">
                  <div
                    className={`cb-checkbox-wrapper${errors.consent ? ' cb-checkbox-wrapper--error' : ''}`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, consent: !prev.consent }))
                      if (errors.consent) {
                        setErrors(prev => {
                          const next = { ...prev }
                          delete next.consent
                          return next
                        })
                      }
                    }}
                  >
                    <div className={`cb-checkbox${formData.consent ? ' cb-checkbox--checked' : ''}`}>
                      {formData.consent && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span className="cb-checkbox-label">
                      Autorizo el tratamiento de mis datos personales conforme a la Ley N° 29733, Ley de Protección de Datos Personales, para la atención de este reclamo o queja. Declaro que la información proporcionada es veraz.
                    </span>
                  </div>
                  {errors.consent && <span className="cb-error" style={{ marginTop: '8px' }}>{errors.consent}</span>}

                  <button type="submit" className="cb-submit-btn">
                    Registrar Reclamo
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </main>

      <footer className="cb-footer">
        <div className="cb-footer-inner">
          <img src="/logo-innvoice.png" alt="Innvoice" className="cb-footer-logo" />
          <p className="cb-footer-copy">© {new Date().getFullYear()} Innvoice. Todos los derechos reservados.</p>
          <div className="cb-footer-credits">
            <span>Diseñado por <a href="https://genesisleal.com" target="_blank" rel="noopener noreferrer">Genesis Leal</a></span>
            <span className="cb-footer-dot">•</span>
            <span>Desarrollado por <a href="https://enigmasac.com" target="_blank" rel="noopener noreferrer">Enigma Developers</a></span>
          </div>
        </div>
      </footer>
    </div>
  )
}
