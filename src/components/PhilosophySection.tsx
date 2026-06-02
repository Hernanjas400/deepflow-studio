'use client'

import { useTranslations } from 'next-intl'
import { motion, type Variants } from 'framer-motion'

const DIFFERENTIALS = [
  { icon: '⚙', color: '#00D1FF', titleKey: 'd1title', descKey: 'd1desc' },
  { icon: '💬', color: '#7B2CFF', titleKey: 'd2title', descKey: 'd2desc' },
  { icon: '◈', color: '#FF2FD1', titleKey: 'd3title', descKey: 'd3desc' },
] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function PhilosophySection() {
  const t = useTranslations('philosophy')

  return (
    <section
      id="philosophy"
      className="relative overflow-hidden"
      style={{ scrollMarginTop: '80px', background: '#0d0d0f', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(123,44,255,0.08) 0%, rgba(0,209,255,0.05) 40%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div className="blob" style={{ width:'45vw', height:'40vh', top:'10%', right:'-10%', background:'rgba(0,209,255,0.05)', animationDuration:'14s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#00D1FF',
            fontWeight: 600,
            display: 'block',
            marginBottom: '1.25rem',
          }}>
            {t('badge')}
          </span>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}>
            {t('preQuote')}<br />
            <span className="gradient-text">{t('highlight')}</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7,
            maxWidth: 580,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        >
          {DIFFERENTIALS.map((d) => (
            <motion.div
              key={d.titleKey}
              variants={card}
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${d.color}20`,
                borderRadius: 20,
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                overflow: 'hidden',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem',
                background: `${d.color}12`,
                border: `1px solid ${d.color}25`,
                flexShrink: 0,
              }}>
                <span style={{ color: d.color, filter: `drop-shadow(0 0 6px ${d.color})` }}>
                  {d.icon}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.05rem', fontWeight: 700,
                color: '#ffffff', letterSpacing: '-0.01em', margin: 0,
              }}>
                {t(d.titleKey)}
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7, margin: 0,
              }}>
                {t(d.descKey)}
              </p>

              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, ${d.color}35, transparent)`,
              }} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}