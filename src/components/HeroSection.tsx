'use client'

import { useTranslations } from 'next-intl'
import { motion, type Variants } from 'framer-motion'

/* ── Animation variants ── */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

/* ── Flow diagram steps ── */
const FLOW_STEPS = [
  { label: 'step1', icon: '◆', color: '#FF2FD1' },
  { label: 'step2', icon: '💬', color: '#00D1FF' },
  { label: 'step3', icon: '◉', color: '#7B2CFF' },
  { label: 'step4', icon: '⚡', color: '#00D1FF' },
  { label: 'step5', icon: '◈', color: '#FF2FD1' },
  { label: 'step6', icon: '▣', color: '#7B2CFF' },
] as const

/* ── Metrics ── */
const METRICS = [
  { value: '10×', label: 'Más eficiencia' },
  { value: '24/7', label: 'Automatización' },
  { value: '∞', label: 'Escalabilidad' },
] as const

/* ── Particles positioned relative to the headline container ── */
const PARTICLES = [
  { id: 1, x: -50, y: -75, size: 3, delay: 0, dur: 3.2, color: '#00D1FF' },
  { id: 2, x: 110, y: -100, size: 2, delay: 0.7, dur: 2.5, color: '#FF2FD1' },
  { id: 3, x: 260, y: -88, size: 4, delay: 1.2, dur: 4.1, color: '#7B2CFF' },
  { id: 4, x: 440, y: -65, size: 2, delay: 0.4, dur: 3.6, color: '#00D1FF' },
  { id: 5, x: 570, y: -35, size: 3, delay: 1.8, dur: 2.9, color: '#FF2FD1' },
  { id: 6, x: 610, y: 55, size: 2, delay: 0.9, dur: 3.3, color: '#7B2CFF' },
  { id: 7, x: -35, y: 85, size: 3, delay: 0.5, dur: 5.1, color: '#00D1FF' },
  { id: 8, x: 195, y: -112, size: 5, delay: 2.1, dur: 3.0, color: '#FF2FD1' },
  { id: 9, x: 390, y: 118, size: 2, delay: 1.4, dur: 3.9, color: '#7B2CFF' },
  { id: 10, x: -18, y: 128, size: 3, delay: 0.2, dur: 2.8, color: '#00D1FF' },
  { id: 11, x: 520, y: -95, size: 4, delay: 1.6, dur: 4.6, color: '#FF2FD1' },
  { id: 12, x: 340, y: 145, size: 2, delay: 0.8, dur: 3.4, color: '#7B2CFF' },
] as const

export default function HeroSection() {
  const t = useTranslations('hero')
  const tf = useTranslations('flow')

  return (
    <section className="relative flex flex-col overflow-hidden bg-brand-black">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Ambient glow blobs */}
      <div
        className="blob"
        style={{
          width: '55vw',
          height: '55vh',
          top: '-15%',
          left: '-12%',
          background: 'rgba(123, 44, 255, 0.14)',
          animationDuration: '9s',
        }}
      />
      <div
        className="blob"
        style={{
          width: '45vw',
          height: '50vh',
          top: '-8%',
          right: '-10%',
          background: 'rgba(0, 209, 255, 0.1)',
          animationDuration: '11s',
          animationDelay: '-3s',
          animationDirection: 'reverse',
        }}
      />
      <div
        className="blob"
        style={{
          width: '35vw',
          height: '40vh',
          bottom: '-15%',
          left: '25%',
          background: 'rgba(255, 47, 209, 0.08)',
          animationDuration: '13s',
          animationDelay: '-6s',
        }}
      />

      {/* Main content — sin padding-top, el layout maneja los 64px del navbar */}
      <div className="relative z-10 flex items-start pb-16 px-6 lg:px-10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ─── LEFT: text content ─── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-widest uppercase text-white/60">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: '#00D1FF',
                    boxShadow: '0 0 6px #00D1FF',
                    animation: 'glow-pulse 2s ease-in-out infinite',
                  }}
                />
                {t('badge')}
              </span>
            </motion.div>

            {/* ── Headline with particles + glow ── */}
            <motion.div variants={item} className="relative flex flex-col">

              {/* Title glow — energy field behind text */}
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  inset: '-60px -40px -40px -60px',
                  background:
                    'radial-gradient(ellipse at 45% 55%, rgba(0,209,255,0.22) 0%, rgba(123,44,255,0.18) 35%, rgba(255,47,209,0.08) 60%, transparent 78%)',
                  filter: 'blur(32px)',
                }}
              />

              {/* Particles */}
              {PARTICLES.map((p) => (
                <motion.div
                  key={p.id}
                  aria-hidden
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    left: p.x,
                    top: p.y,
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 7}px ${p.color}55`,
                  }}
                  animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 1.6, 1] }}
                  transition={{
                    duration: p.dur,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* DEEP FLOW */}
              <div className="relative flex items-baseline gap-3 leading-none">
                <span
                  className="gradient-text-deep text-[clamp(4.5rem,11vw,9rem)] tracking-[-0.03em] uppercase"
                  style={{ fontWeight: 100 }}
                >
                  DEEP
                </span>
                <span
                  className="gradient-text-flow text-[clamp(4.5rem,11vw,9rem)] tracking-[-0.03em] uppercase"
                  style={{ fontWeight: 900 }}
                >
                  FLOW
                </span>
              </div>

              {/* STUDIO */}
              <span
                className="relative text-[clamp(0.65rem,1.4vw,0.95rem)] tracking-[0.6em] uppercase text-white/25 mt-1"
                style={{ fontWeight: 400 }}
              >
                STUDIO
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-[clamp(1rem,1.8vw,1.2rem)] text-white/65 leading-relaxed max-w-md"
            >
              {t('tagline')}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <button className="btn-primary px-7 py-3.5 rounded-full text-sm font-semibold text-white tracking-wide">
                {t('ctaPrimary')}
              </button>
              <button className="btn-secondary px-7 py-3.5 rounded-full text-sm font-medium text-white/80 tracking-wide">
                {t('ctaSecondary')}
              </button>
            </motion.div>

            {/* ── Metrics — big, prominent ── */}
            <motion.div variants={item}>
              <div
                className="glass rounded-2xl overflow-hidden flex"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                {METRICS.map((m, i) => (
                  <div
                    key={m.label}
                    className="flex-1 flex flex-col items-center justify-center py-5 px-3 gap-1.5"
                    style={{
                      borderRight:
                        i < METRICS.length - 1
                          ? '1px solid rgba(255,255,255,0.06)'
                          : 'none',
                    }}
                  >
                    <span
                      className="gradient-text-flow leading-none tracking-tight"
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    >
                      {m.value}
                    </span>
                    <span className="text-[11px] text-white/35 text-center font-medium tracking-wide">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: flow diagram ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center lg:justify-end pr-6 lg:pr-0"
          >
            <div
              className="glass-blue rounded-3xl p-6 w-full max-w-xs"
              style={{ minWidth: '260px' }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-white/30 mb-0.5">
                    Deep Flow Engine
                  </p>
                  <p className="text-sm font-semibold text-white/80">
                    Operational Flow
                  </p>
                </div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: '#00D1FF',
                    boxShadow: '0 0 8px #00D1FF',
                    animation: 'glow-pulse 1.5s ease-in-out infinite',
                  }}
                />
              </div>

              {/* Steps */}
              <div className="flex flex-col">
                {FLOW_STEPS.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeOut',
                      delay: 0.45 + i * 0.09,
                    }}
                    className="flex flex-col"
                  >
                    <div
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <span
                        className="text-base leading-none shrink-0"
                        style={{
                          color: step.color,
                          filter: `drop-shadow(0 0 4px ${step.color})`,
                        }}
                      >
                        {step.icon}
                      </span>
                      <span className="text-sm font-medium text-white/80">
                        {tf(step.label)}
                      </span>
                      <span
                        className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: `${step.color}18`,
                          color: step.color,
                          border: `1px solid ${step.color}30`,
                        }}
                      >
                        AI
                      </span>
                    </div>

                    {i < FLOW_STEPS.length - 1 && (
                      <div className="flex flex-col items-center ml-5.5 py-0.5">
                        <div className="w-px h-4 flow-line opacity-40" />
                        <div
                          className="flow-dot w-1 h-1 rounded-full"
                          style={{
                            background: step.color,
                            boxShadow: `0 0 4px ${step.color}`,
                            animationDelay: `${i * 0.35}s`,
                          }}
                        />
                        <div className="w-px h-4 flow-line opacity-40" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }}
      />
    </section>
  )
}
