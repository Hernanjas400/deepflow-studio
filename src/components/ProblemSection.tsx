'use client'

import { useTranslations } from 'next-intl'
import { motion, type Variants } from 'framer-motion'

const PROBLEMS = [
  { key: 'tools', icon: '⚡', color: '#FF2FD1', number: '01' },
  { key: 'manual', icon: '⏳', color: '#7B2CFF', number: '02' },
  { key: 'friction', icon: '◈', color: '#00D1FF', number: '03' },
] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function ProblemSection() {
  const t = useTranslations('problem')

  return (
    <section
      id="problem"
      className="relative overflow-hidden"
      style={{ scrollMarginTop: '80px', background: '#0d0d0f', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 80%, rgba(123,44,255,0.08) 0%, rgba(0,209,255,0.04) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="blob" style={{ width:'50vw', height:'40vh', bottom:'-5%', left:'-10%', background:'rgba(255,47,209,0.05)', animationDuration:'16s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center' }}
        >
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#FF2FD1',
            fontWeight: 600,
            display: 'block',
            marginBottom: '1.5rem',
          }}>
            {t('badge')}
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
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.65,
            maxWidth: 620,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '3rem',
          }}>
            {t('subtitle')}
          </p>

          <p style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            fontWeight: 600,
            color: '#00D1FF',
            lineHeight: 1.6,
            marginBottom: '4rem',
          }}>
            {t('tension')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROBLEMS.map((p) => (
            <motion.div
              key={p.key}
              variants={card}
              className="relative flex flex-col overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.055)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 20,
                padding: '2rem 1.75rem 1.75rem',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <span aria-hidden style={{
                position: 'absolute', top: 16, right: 20,
                fontSize: '5rem', fontWeight: 900,
                color: `${p.color}12`, lineHeight: 1,
                userSelect: 'none', pointerEvents: 'none',
              }}>
                {p.number}
              </span>

              <div style={{
                width: 48, height: 48, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem',
                background: `${p.color}15`,
                border: `1px solid ${p.color}30`,
                marginBottom: '1.25rem', flexShrink: 0,
              }}>
                <span style={{ color: p.color, filter: `drop-shadow(0 0 6px ${p.color})` }}>
                  {p.icon}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.05rem', fontWeight: 700,
                color: '#ffffff', letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
              }}>
                {t(`${p.key}.title`)}
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
                flexGrow: 1,
              }}>
                {t(`${p.key}.description`)}
              </p>

              <div style={{
                padding: '0.875rem 1rem', borderRadius: 10,
                background: `${p.color}12`,
                border: `1px solid ${p.color}25`,
              }}>
                <p style={{
                  fontSize: '0.6rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 600, marginBottom: 5,
                }}>
                  {t('resultLabel')}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: p.color,
                  lineHeight: 1.55,
                  fontWeight: 600,
                }}>
                  {t(`${p.key}.result`)}
                </p>
              </div>

              <div aria-hidden style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, ${p.color}40, transparent)`,
              }} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}