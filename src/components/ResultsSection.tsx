'use client'

import { useTranslations } from 'next-intl'
import { motion, type Variants } from 'framer-motion'

const METRICS = [
  { value: '10×', labelKey: 'm1', color: '#00D1FF' },
  { value: '3×', labelKey: 'm2', color: '#FF2FD1' },
  { value: '24/7', labelKey: 'm3', color: '#7B2CFF' },
  { value: '−80%', labelKey: 'm4', color: '#00D1FF' },
  { value: '0', labelKey: 'm5', color: '#FF2FD1' },
  { value: '∞', labelKey: 'm6', color: '#7B2CFF' },
] as const

const BEFORE_AFTER_KEYS = [
  { before: 'before1', after: 'after1', color: '#00D1FF' },
  { before: 'before2', after: 'after2', color: '#7B2CFF' },
  { before: 'before3', after: 'after3', color: '#FF2FD1' },
  { before: 'before4', after: 'after4', color: '#00D1FF' },
] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const metric: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ResultsSection() {
  const t = useTranslations('results')

  return (
    <section
      id="results"
      className="relative py-28 px-6 lg:px-10 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div
        className="blob"
        style={{
          width: '55vw',
          height: '50vh',
          top: '0',
          right: '-15%',
          background: 'rgba(0, 209, 255, 0.05)',
          animationDuration: '13s',
        }}
      />
      <div
        className="blob"
        style={{
          width: '40vw',
          height: '40vh',
          bottom: '5%',
          left: '-8%',
          background: 'rgba(123, 44, 255, 0.06)',
          animationDuration: '17s',
          animationDelay: '-7s',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 font-medium">
            {t('badge')}
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-white/50 text-lg leading-relaxed">{t('subtitle')}</p>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
        >
          {METRICS.map((m) => (
            <motion.div
              key={m.labelKey}
              variants={metric}
              className="relative glass rounded-2xl p-7 flex flex-col gap-2 overflow-hidden group"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 30% 50%, ${m.color}08 0%, transparent 65%)`,
                }}
              />
              <span
                className="text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none tracking-tight"
                style={{ color: m.color, filter: `drop-shadow(0 0 12px ${m.color}80)` }}
              >
                {m.value}
              </span>
              <span className="text-sm text-white/45 leading-snug font-medium">
                {t(m.labelKey)}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl overflow-hidden"
        >
          {/* Header row */}
          <div
            className="grid grid-cols-2 px-8 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-white/25">
              {t('beforeLabel')}
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-white/25 pl-6">
              {t('afterLabel')}
            </span>
          </div>

          {BEFORE_AFTER_KEYS.map((row, i) => (
            <div
              key={row.before}
              className="grid grid-cols-2 px-8 py-5"
              style={{
                borderBottom:
                  i < BEFORE_AFTER_KEYS.length - 1
                    ? '1px solid rgba(255,255,255,0.04)'
                    : 'none',
              }}
            >
              {/* Before */}
              <div className="flex items-center gap-3 pr-4">
                <span className="text-sm text-white/35 line-through decoration-white/20">
                  {t(row.before)}
                </span>
              </div>

              {/* After */}
              <div className="flex items-center gap-3 pl-6" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: row.color, boxShadow: `0 0 6px ${row.color}` }}
                />
                <span className="text-sm font-medium" style={{ color: row.color }}>
                  {t(row.after)}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
