import { getTranslations } from 'next-intl/server'

export default async function ServicesSection() {
  const t = await getTranslations('services')

  const secondaryProducts = [
    {
      key: 'deepops',
      icon: '⚙',
      color: '#7B2CFF',
      name: t('deepops.name'),
      description: t('deepops.description'),
    },
    {
      key: 'deepsales',
      icon: '◈',
      color: '#00D1FF',
      name: t('deepsales.name'),
      description: t('deepsales.description'),
    },
    {
      key: 'deeplife',
      icon: '◉',
      color: '#FF2FD1',
      name: t('deeplife.name'),
      description: t('deeplife.description'),
    },
  ]

  const wapiFeatures = t.raw('wapibots.features') as string[]

  return (
    <section
      id="products"
      className="relative py-28 px-6 lg:px-10 overflow-hidden bg-[#080808]"
    >
      {/* Background accent */}
      <div
        className="blob"
        style={{
          width: '40vw',
          height: '40vh',
          top: '10%',
          right: '-5%',
          background: 'rgba(0, 209, 255, 0.06)',
          animationDuration: '14s',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs tracking-widest uppercase text-white/30 font-medium">
            Ecosystem
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-white/50 text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* ─── WapiBots — featured card ─── */}
        <div
          className="relative rounded-3xl overflow-hidden mb-6 p-8 lg:p-12"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,209,255,0.06) 0%, rgba(123,44,255,0.06) 100%)',
            border: '1px solid rgba(0, 209, 255, 0.2)',
            boxShadow:
              '0 0 60px rgba(0, 209, 255, 0.08), 0 0 120px rgba(123, 44, 255, 0.05)',
          }}
        >
          {/* Background gradient blob inside card */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(0,209,255,0.1) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: 'rgba(0,209,255,0.1)',
                    border: '1px solid rgba(0,209,255,0.25)',
                  }}
                >
                  💬
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">
                      {t('wapibots.name')}
                    </h3>
                    <span
                      className="text-[10px] px-2.5 py-1 rounded-full font-semibold tracking-wide uppercase"
                      style={{
                        background: 'rgba(0,209,255,0.15)',
                        color: '#00D1FF',
                        border: '1px solid rgba(0,209,255,0.3)',
                      }}
                    >
                      {t('wapibots.badge')}
                    </span>
                  </div>
                  <p className="text-xs text-white/30 mt-0.5 tracking-wide">
                    WhatsApp AI Automation
                  </p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed text-base max-w-md">
                {t('wapibots.description')}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2">
                {wapiFeatures.map((feature: string) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button className="btn-primary self-start px-7 py-3 rounded-full text-sm font-semibold text-white">
                Ver WapiBots →
              </button>
            </div>

            {/* Right: mini metrics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3×', label: 'Más conversiones', color: '#00D1FF' },
                { value: '24/7', label: 'Respuesta automática', color: '#7B2CFF' },
                { value: '0', label: 'Leads perdidos', color: '#FF2FD1' },
                { value: '100%', label: 'Integrado al CRM', color: '#00D1FF' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-5 flex flex-col gap-1"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <span
                    className="text-3xl font-bold leading-none"
                    style={{ color: m.color }}
                  >
                    {m.value}
                  </span>
                  <span className="text-xs text-white/40 leading-snug">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Secondary products grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondaryProducts.map((p) => (
            <div
              key={p.key}
              className="glass rounded-2xl p-6 flex flex-col gap-4 group hover:border-white/15 transition-all duration-300"
              style={{
                borderColor: 'rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}25`,
                }}
              >
                <span style={{ filter: `drop-shadow(0 0 4px ${p.color})` }}>
                  {p.icon}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <span
                className="self-start text-xs font-medium mt-auto opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: p.color }}
              >
                Próximamente →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
