'use client'

import { useTranslations } from 'next-intl'
import { motion, type Variants } from 'framer-motion'

const STAGES = [
  {
    labelKey: 'stage1',
    color: '#00D1FF',
    steps: [
      { key: 'cap1', number: '01', icon: '⚙', titleKey: 's1title', descKey: 's1desc' },
      { key: 'cap2', number: '02', icon: '💬', titleKey: 's2title', descKey: 's2desc' },
    ],
  },
  {
    labelKey: 'stage2',
    color: '#7B2CFF',
    steps: [
      { key: 'cap3', number: '03', icon: '◆', titleKey: 's3title', descKey: 's3desc' },
      { key: 'cap4', number: '04', icon: '◈', titleKey: 's4title', descKey: 's4desc' },
    ],
  },
  {
    labelKey: 'stage3',
    color: '#FF2FD1',
    steps: [
      { key: 'cap5', number: '05', icon: '▣', titleKey: 's5title', descKey: 's5desc' },
      { key: 'cap6', number: '06', icon: '◉', titleKey: 's6title', descKey: 's6desc' },
    ],
  },
] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function InfrastructureSection() {
  const t = useTranslations('infrastructure')

  return (
    <section
      id="infrastructure"
      className="relative overflow-hidden"
      style={{ scrollMarginTop: '80px', background: '#0d0d0f', paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(123,44,255,0.07) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div className="blob" style={{ width:'45vw', height:'45vh', top:'20%', right:'-8%', background:'rgba(123,44,255,0.06)', animationDuration:'12s' }} />
      <div className="blob" style={{ width:'35vw', height:'35vh', bottom:'10%', left:'-5%', background:'rgba(0,209,255,0.05)', animationDuration:'15s', animationDelay:'-4s' }} />

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
            color: '#7B2CFF',
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
            {t('titleStart')}{' '}
            <span className="gradient-text-flow">{t('titleEnd')}</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7,
            maxWidth: 580,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {t('subtitle')}
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {STAGES.map((stage) => (
            <div key={stage.labelKey}>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: stage.color,
                  flexShrink: 0,
                }}>
                  {t(stage.labelKey)}
                </span>
                <div style={{
                  flex: 1,
                  height: 1,
                  background: `linear-gradient(90deg, ${stage.color}40, transparent)`,
                }} />
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
              >
                {stage.steps.map((step) => (
                  <motion.div
                    key={step.key}
                    variants={item}
                    style={{
                      position: 'relative',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 18,
                      padding: '1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      overflow: 'hidden',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <span style={{
                      position: 'absolute', top: 16, right: 20,
                      fontSize: '4rem', fontWeight: 900,
                      color: `${stage.color}10`, lineHeight: 1,
                      userSelect: 'none', pointerEvents: 'none',
                    }}>
                      {step.number}
                    </span>

                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem',
                      background: `${stage.color}12`,
                      border: `1px solid ${stage.color}25`,
                      flexShrink: 0,
                    }}>
                      <span style={{ color: stage.color, filter: `drop-shadow(0 0 5px ${stage.color})` }}>
                        {step.icon}
                      </span>
                    </div>

                    <div>
                      <h3 style={{
                        fontSize: '1rem', fontWeight: 700,
                        color: '#ffffff', marginBottom: 8,
                        letterSpacing: '-0.01em',
                      }}>
                        {t(step.titleKey)}
                      </h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.7, margin: 0,
                      }}>
                        {t(step.descKey)}
                      </p>
                    </div>

                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                      background: `linear-gradient(90deg, transparent, ${stage.color}35, transparent)`,
                    }} />
                  </motion.div>
                ))}
              </motion.div>

            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '0.65rem 1.5rem', borderRadius: 9999,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#7B2CFF', boxShadow: '0 0 8px #7B2CFF',
              flexShrink: 0, animation: 'glow-pulse 1.5s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: '0.7rem', letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)', fontWeight: 500,
            }}>
              {t('footer')}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}