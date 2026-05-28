'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function PhilosophySection() {
  const t = useTranslations('philosophy')

  return (
    <section
      id="philosophy"
      className="relative py-36 px-6 lg:px-10 overflow-hidden bg-brand-black"
    >
      {/* Central radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(123,44,255,0.12) 0%, rgba(0,209,255,0.07) 35%, transparent 65%)',
        }}
      />

      {/* Horizontal line decorations */}
      <div
        aria-hidden
        className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(123,44,255,0.2), rgba(0,209,255,0.2), transparent)',
          transform: 'translateY(-80px)',
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(123,44,255,0.1), rgba(0,209,255,0.1), transparent)',
          transform: 'translateY(80px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-12">

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-2"
        >
          <span
            className="text-[clamp(2.2rem,5.5vw,4rem)] font-thin text-white/70 leading-tight tracking-tight"
          >
            {t('preQuote')}
          </span>
          <span
            className="gradient-text text-[clamp(2.2rem,5.5vw,4rem)] font-black leading-tight tracking-tight"
          >
            {t('highlight')}
          </span>
        </motion.div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-12" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <span className="text-xs tracking-widest uppercase text-white/25 font-medium">
            {t('attribution')}
          </span>
          <div className="h-px w-12" style={{ background: 'rgba(255,255,255,0.15)' }} />
        </motion.div>

        {/* Supporting lines */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col gap-2 max-w-xl"
        >
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/35 leading-relaxed">
            {t('line1')}
          </p>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/55 leading-relaxed font-medium">
            {t('line2')}
          </p>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/35 leading-relaxed">
            {t('line3')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
