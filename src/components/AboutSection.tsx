'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function AboutSection() {
  const t = useTranslations('about')

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ scrollMarginTop: '80px', background: '#080808', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 40% 60%, rgba(0,209,255,0.07) 0%, rgba(123,44,255,0.05) 40%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div className="blob" style={{ width:'50vw', height:'40vh', bottom:'0', left:'-10%', background:'rgba(0,209,255,0.04)', animationDuration:'16s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

          {/* Izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <span style={{
              fontSize: '0.8rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#7B2CFF',
              fontWeight: 600,
            }}>
              {t('badge')}
            </span>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
            }}>
              {t('titleStart')}{' '}
              <span className="gradient-text-flow">{t('titleEnd')}</span>
            </h2>

            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              fontWeight: 600,
              color: '#00D1FF',
              lineHeight: 1.6,
              fontStyle: 'italic',
              margin: 0,
            }}>
              {t('quote')}
            </p>
          </motion.div>

          {/* Derecha */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: 0,
            }}>
              {t('text1')}
            </p>

            <p style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: 0,
            }}>
              {t('text2')}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              paddingTop: '0.5rem',
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#7B2CFF',
                boxShadow: '0 0 8px #7B2CFF',
                flexShrink: 0,
                animation: 'glow-pulse 2s ease-in-out infinite',
              }} />
              <div style={{ height: 1, flex: 1, background: 'rgba(255,255,255,0.08)' }} />
              <span style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
                fontWeight: 500,
              }}>
                Deep Flow Studio
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}