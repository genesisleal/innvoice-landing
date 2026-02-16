import './Typography.css'

const BRAND_ASSETS = '/brand-assets/'

const FONT_WEIGHTS = [
  { weight: 300, name: 'Light' },
  { weight: 400, name: 'Regular' },
  { weight: 500, name: 'Medium' },
  { weight: 600, name: 'SemiBold' },
  { weight: 700, name: 'Bold' },
  { weight: 800, name: 'ExtraBold' },
]

function Typography() {
  return (
    <section id="tipografia" className="brand-section">
      <div className="brand-section-header">
        <h2 className="brand-section-title">Tipografía</h2>
        <p className="brand-section-subtitle">
          Sistema tipográfico con dos familias: Montserrat para todo el contenido
          y JetBrains Mono para código y datos.
        </p>
      </div>

      <div className="type-fonts">
        <div className="type-font-card type-font-primary">
          <div className="type-font-badge">Logo & Web</div>
          <div className="type-font-preview">
            <img src={`${BRAND_ASSETS}font-innvoice-negro.svg`} alt="Innvoice Logo" className="type-logo-image" />
          </div>
          <div className="type-font-info">
            <h3 className="type-font-name">Montserrat</h3>
            <p className="type-font-description">
              Tipografía geométrica sans-serif usada para el logotipo y todo el contenido web.
              Su forma limpia y moderna transmite profesionalismo y confianza.
            </p>
            <div className="type-font-meta">
              <span>Google Fonts</span>
              <span>Variable: 300-800</span>
            </div>
          </div>
          <div className="type-weights">
            {FONT_WEIGHTS.map(({ weight, name }) => (
              <div key={weight} className={`type-weight ${weight === 400 ? 'type-weight-active' : ''}`}>
                <span className="type-weight-sample" style={{ fontWeight: weight }}>Aa</span>
                <span className="type-weight-value">{weight}</span>
                <span className="type-weight-name">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="type-font-card type-font-mono">
          <div className="type-font-badge">Code & Data</div>
          <div className="type-font-preview">
            <span className="type-font-sample mono">S/ 1,234.00</span>
          </div>
          <div className="type-font-info">
            <h3 className="type-font-name">JetBrains Mono</h3>
            <p className="type-font-description">
              Tipografía monoespaciada para código, precios, números y datos técnicos.
              Diseñada para máxima legibilidad en pantalla.
            </p>
            <div className="type-font-meta">
              <span>Google Fonts</span>
              <span>Pesos: 400, 500</span>
            </div>
          </div>
          <div className="type-mono-samples">
            <code>const invoice = new Invoice()</code>
            <code>RUC: 20123456789</code>
            <code>F001-00001234</code>
          </div>
        </div>
      </div>

      <div className="type-scale">
        <h3 className="type-scale-title">Escala Tipográfica</h3>
        <div className="type-scale-list">
          <div className="type-scale-item">
            <span className="type-scale-sample" style={{ fontSize: '3rem', fontWeight: 700 }}>Display</span>
            <span className="type-scale-meta">3rem / 48px · Bold</span>
          </div>
          <div className="type-scale-item">
            <span className="type-scale-sample" style={{ fontSize: '2.25rem', fontWeight: 700 }}>Heading 1</span>
            <span className="type-scale-meta">2.25rem / 36px · Bold</span>
          </div>
          <div className="type-scale-item">
            <span className="type-scale-sample" style={{ fontSize: '1.875rem', fontWeight: 600 }}>Heading 2</span>
            <span className="type-scale-meta">1.875rem / 30px · SemiBold</span>
          </div>
          <div className="type-scale-item">
            <span className="type-scale-sample" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Heading 3</span>
            <span className="type-scale-meta">1.5rem / 24px · SemiBold</span>
          </div>
          <div className="type-scale-item">
            <span className="type-scale-sample" style={{ fontSize: '1.25rem', fontWeight: 500 }}>Heading 4</span>
            <span className="type-scale-meta">1.25rem / 20px · Medium</span>
          </div>
          <div className="type-scale-item">
            <span className="type-scale-sample" style={{ fontSize: '1rem', fontWeight: 400 }}>Body</span>
            <span className="type-scale-meta">1rem / 16px · Regular</span>
          </div>
          <div className="type-scale-item">
            <span className="type-scale-sample" style={{ fontSize: '0.875rem', fontWeight: 400 }}>Small</span>
            <span className="type-scale-meta">0.875rem / 14px · Regular</span>
          </div>
          <div className="type-scale-item">
            <span className="type-scale-sample" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Caption</span>
            <span className="type-scale-meta">0.75rem / 12px · Medium</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Typography
