import { getTranslations } from 'next-intl/server'
import ServicesCanvas from './ServicesCanvas'

const secondaryServices = [
  { key: 'deepops', icon: '⚙', color: '#7B2CFF', nameKey: 'deepops.name', descKey: 'deepops.description' },
  { key: 'deepsales', icon: '◈', color: '#00D1FF', nameKey: 'deepsales.name', descKey: 'deepsales.description' },
  { key: 'deeplife', icon: '◉', color: '#FF2FD1', nameKey: 'deeplife.name', descKey: 'deeplife.description' },
]

const WAPI_METRICS = [
  { valueKey: 'wapibots.m1value', labelKey: 'wapibots.m1label', color: '#00D1FF', compact: false },
  { valueKey: 'wapibots.m2value', labelKey: 'wapibots.m2label', color: '#7B2CFF', compact: false },
  { valueKey: 'wapibots.m3value', labelKey: 'wapibots.m3label', color: '#FF2FD1', compact: true },
  { valueKey: 'wapibots.m4value', labelKey: 'wapibots.m4label', color: '#00D1FF', compact: true },
]

export default async function ServicesSection() {
  const t = await getTranslations('services')
  const wapiFeatures = t.raw('wapibots.features') as string[]
  const highlightedFeature = t('wapibots.featureHighlight')

  return (
    <section
      id="products"
      className="relative overflow-hidden"
      style={{ scrollMarginTop: '80px', background: '#0a0a0c', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 80% 20%, rgba(0,209,255,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div className="blob" style={{ width:'40vw', height:'40vh', top:'10%', right:'-5%', background:'rgba(0,209,255,0.05)', animationDuration:'14s' }} />
      <ServicesCanvas />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#00D1FF',
            fontWeight: 600,
            display: 'block',
            marginBottom: '1.25rem',
          }}>
            Ecosistema
          </span>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.1vw, 3.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}>
            {t('titleStart')}{' '}
            <span className="gradient-text-flow">{t('titleEnd')}</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7,
            maxWidth: 640,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1rem',
          }}>
            {t('subtitle')}
          </p>
        </div>

        {/* WAPIBOTS */}
        <div style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          marginBottom: '1.5rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(0,209,255,0.07) 0%, rgba(123,44,255,0.07) 100%)',
          border: '1px solid rgba(0,209,255,0.2)',
          boxShadow: '0 0 80px rgba(0,209,255,0.07), 0 0 160px rgba(123,44,255,0.04)',
        }}>
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 280, height: 280, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,209,255,0.1) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
            pointerEvents: 'none',
          }} />

          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ position: 'relative', zIndex: 1, gap: '3rem', alignItems: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem',
                  background: 'rgba(0,209,255,0.1)',
                  border: '1px solid rgba(0,209,255,0.25)',
                  flexShrink: 0,
                }}>
                  💬
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      {t('wapibots.name')}
                    </h3>
                    <span style={{
                      fontSize: '0.6rem', padding: '3px 10px', borderRadius: 9999,
                      fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      background: 'rgba(0,209,255,0.15)', color: '#00D1FF',
                      border: '1px solid rgba(0,209,255,0.3)',
                    }}>
                      {t('wapibots.badge')}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: 3, letterSpacing: '0.05em' }}>
                    {t('wapibots.category')}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0, maxWidth: 400 }}>
                {t('wapibots.description')}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {wapiFeatures.map((feature: string) => {
                  const isHighlighted = feature === highlightedFeature

                  return (
                    <span key={feature} style={{
                      fontSize: '0.75rem', padding: '4px 12px', borderRadius: 9999,
                      fontWeight: isHighlighted ? 700 : 500,
                      background: isHighlighted
                        ? 'linear-gradient(135deg, rgba(0,209,255,0.18), rgba(123,44,255,0.18))'
                        : 'rgba(255,255,255,0.06)',
                      border: isHighlighted
                        ? '1px solid rgba(0,209,255,0.4)'
                        : '1px solid rgba(255,255,255,0.1)',
                      boxShadow: isHighlighted ? '0 0 16px rgba(0,209,255,0.12)' : 'none',
                      color: isHighlighted ? '#ffffff' : 'rgba(255,255,255,0.75)',
                    }}>
                      {feature}
                    </span>
                  )
                })}
              </div>

              <a
                href="https://www.wapibots.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  alignSelf: 'flex-start', padding: '0.65rem 1.75rem',
                  borderRadius: 9999, fontSize: '0.9rem', fontWeight: 600,
                  color: '#fff', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                {t('wapibots.cta')}
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {WAPI_METRICS.map((m) => (
                <div key={m.labelKey} style={{
                  borderRadius: 14, padding: '1.25rem',
                  display: 'flex', flexDirection: 'column', gap: 6,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <span style={{
                    fontSize: m.compact ? 'clamp(1rem, 2vw, 1.35rem)' : '2rem',
                    fontWeight: 800,
                    color: m.color,
                    lineHeight: m.compact ? 1.15 : 1,
                  }}>
                    {t(m.valueKey)}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.3 }}>
                    {t(m.labelKey)}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* SERVICIOS SECUNDARIOS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {secondaryServices.map((p) => (
            <div key={p.key} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 18, padding: '1.75rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem',
                background: `${p.color}15`,
                border: `1px solid ${p.color}25`,
                flexShrink: 0,
              }}>
                <span style={{ color: p.color, filter: `drop-shadow(0 0 4px ${p.color})` }}>
                  {p.icon}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                  {t(p.nameKey)}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                  {t(p.descKey)}
                </p>
              </div>

              <span style={{
                marginTop: 'auto', fontSize: '0.75rem', fontWeight: 500,
                color: `${p.color}90`, letterSpacing: '0.03em',
              }}>
                {t('wapibots.next')}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
