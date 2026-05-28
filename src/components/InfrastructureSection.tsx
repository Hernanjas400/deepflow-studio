'use client'

import { useTranslations } from 'next-intl'
import { motion, type Variants } from 'framer-motion'

const CAPABILITIES = [
  { key: 'cap1', icon: '⚙', color: '#00D1FF' },
  { key: 'cap2', icon: '💬', color: '#FF2FD1' },
  { key: 'cap3', icon: '◆', color: '#7B2CFF' },
  { key: 'cap4', icon: '◈', color: '#00D1FF' },
  { key: 'cap5', icon: '▣', color: '#FF2FD1' },
  { key: 'cap6', icon: '◉', color: '#7B2CFF' },
] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function InfrastructureSection() {
  const t = useTranslations('infrastructure')

  return (
    <section
      id="infrastructure"
      className="relative py-28 px-6 lg:px-10 overflow-hidden bg-brand-black"
    >
      <div
        className="blob"
        style={{
          width: '45vw',
          height: '45vh',
          top: '20%',
          right: '-8%',
          background: 'rgba(123, 44, 255, 0.07)',
          animationDuration: '12s',
        }}
      />
      <div
        className="blob"
        style={{
          width: '35vw',
          height: '35vh',
          bottom: '10%',
          left: '-5%',
          background: 'rgba(0, 209, 255, 0.06)',
          animationDuration: '15s',
          animationDelay: '-4s',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.key}
              variants={item}
              className="group relative glass rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${cap.color}0d 0%, transparent 70%)`,
                }}
              />
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cap.color}55, transparent)`,
                }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                style={{ background: `${cap.color}12`, border: `1px solid ${cap.color}22` }}
              >
                <span style={{ color: cap.color, filter: `drop-shadow(0 0 5px ${cap.color})` }}>
                  {cap.icon}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-base mb-1.5">{t(`${cap.key}Title`)}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{t(`${cap.key}Desc`)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass"
            style={{ borderColor: 'rgba(0,209,255,0.15)' }}
          >
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{
                background: '#00D1FF',
                boxShadow: '0 0 8px #00D1FF',
                animation: 'glow-pulse 1.5s ease-in-out infinite',
              }}
            />
            <span className="text-xs tracking-widest uppercase text-white/40 font-medium">
              Powered by Deep Flow Engine
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
