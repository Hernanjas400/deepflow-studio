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
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function ProblemSection() {
  const t = useTranslations('problem')

  return (
    <section
      id="problem"
      className="relative py-28 px-6 lg:px-10 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div
        className="blob"
        style={{
          width: '50vw',
          height: '40vh',
          bottom: '-5%',
          left: '-10%',
          background: 'rgba(255, 47, 209, 0.06)',
          animationDuration: '16s',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 font-medium">
            {t('badge')}
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('title')}
          </h2>
          <p className="mt-4 text-white/50 text-lg leading-relaxed">{t('subtitle')}</p>
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
              className="relative glass rounded-3xl p-8 flex flex-col gap-5 overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute top-4 right-6 text-6xl font-black leading-none select-none pointer-events-none"
                style={{ color: `${p.color}12`, fontWeight: 900 }}
              >
                {p.number}
              </span>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}
              >
                <span style={{ color: p.color, filter: `drop-shadow(0 0 6px ${p.color})` }}>
                  {p.icon}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">{t(`${p.key}.title`)}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{t(`${p.key}.description`)}</p>
              </div>

              <div
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${p.color}40, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
