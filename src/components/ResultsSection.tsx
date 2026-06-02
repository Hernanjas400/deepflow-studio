'use client'

import { useTranslations } from 'next-intl'
import { motion, type Variants } from 'framer-motion'
import ResultsCanvas from './ResultsCanvas'

const METRICS_FEATURED = [
  { valueKey: 'm1value', labelKey: 'm1label', color: '#00D1FF' },
  { valueKey: 'm2value', labelKey: 'm2label', color: '#FF2FD1' },
  { valueKey: 'm3value', labelKey: 'm3label', color: '#7B2CFF' },
] as const

const METRICS_SECONDARY = [
  { valueKey: 'm4value', labelKey: 'm4label', color: '#00D1FF' },
  { valueKey: 'm5value', labelKey: 'm5label', color: '#FF2FD1' },
  { valueKey: 'm6value', labelKey: 'm6label', color: '#7B2CFF' },
] as const

const BEFORE_AFTER = [
  { beforeKey: 'before1', afterKey: 'after1', color: '#00D1FF' },
  { beforeKey: 'before2', afterKey: 'after2', color: '#7B2CFF' },
  { beforeKey: 'before3', afterKey: 'after3', color: '#FF2FD1' },
  { beforeKey: 'before4', afterKey: 'after4', color: '#00D1FF' },
] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function ResultsSection() {
  const t = useTranslations('results')

  return (
    <section
      id="results"
      className="relative overflow-hidden"
      style={{ background: '#0a0a0c', scrollMarginTop: '80px', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <ResultsCanvas />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 70% 30%, rgba(0,209,255,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div className="blob" style={{ width:'55vw', height:'50vh', top:'0', right:'-15%', background:'rgba(0,209,255,0.04)', animationDuration:'13s' }} />
      <div className="blob" style={{ width:'40vw', height:'40vh', bottom:'5%', left:'-8%', background:'rgba(123,44,255,0.05)', animationDuration:'17s', animationDelay:'-7s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* Header */}
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
            <span className="gradient-text-flow">{t('titleStart')}</span>{' '}
            {t('titleEnd')}
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7,
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Métricas nivel 1 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}
        >
          {METRICS_FEATURED.map((m) => (
            <motion.div
              key={m.valueKey}
              variants={item}
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${m.color}25`,
                borderRadius: 18,
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                overflow: 'hidden',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: m.color,
                lineHeight: 1,
                filter: `drop-shadow(0 0 12px ${m.color}70)`,
              }}>
                {t(m.valueKey)}
              </span>
              <span style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.4,
                fontWeight: 500,
              }}>
                {t(m.labelKey)}
              </span>
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${m.color}50, transparent)`,
              }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Métricas nivel 2 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: '3rem' }}
        >
          {METRICS_SECONDARY.map((m) => (
            <motion.div
              key={m.valueKey}
              variants={item}
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14,
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <span style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 800,
                color: m.color,
                lineHeight: 1,
                flexShrink: 0,
              }}>
                {t(m.valueKey)}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.4,
                fontWeight: 500,
              }}>
                {t(m.labelKey)}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabla Antes / Después */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24,
            overflow: 'hidden',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '1.25rem 2.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <span style={{
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
            }}>
              {t('beforeLabel')}
            </span>
            <span style={{
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              paddingLeft: '2rem',
            }}>
              {t('afterLabel')}
            </span>
          </div>

          {BEFORE_AFTER.map((row, i) => (
            <div
              key={row.beforeKey}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                padding: '1.5rem 2.5rem',
                borderBottom: i < BEFORE_AFTER.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                alignItems: 'center',
              }}
            >
              <span style={{
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.28)',
                textDecoration: 'line-through',
                textDecorationColor: 'rgba(255,255,255,0.12)',
                paddingRight: '1.5rem',
              }}>
                {t(row.beforeKey)}
              </span>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                paddingLeft: '2rem',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: row.color, boxShadow: `0 0 8px ${row.color}`,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '0.95rem', fontWeight: 600,
                  color: row.color, lineHeight: 1.4,
                }}>
                  {t(row.afterKey)}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6,
          }}
        >
          {t('disclaimer')}
        </motion.p>

      </div>
    </section>
  )
}