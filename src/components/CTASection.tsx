'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const INPUT_BASE =
  'w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:ring-1 focus:ring-[#00D1FF]/40'

const INPUT_STYLE = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
}

export default function CTASection() {
  const t = useTranslations('contact')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Deep Flow Studio — ${name}`
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    window.location.href = `mailto:contacto@deepflow.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative py-28 px-6 lg:px-10 overflow-hidden"
      style={{ background: '#050505' }}
    >
      <div
        className="blob"
        style={{
          width: '55vw',
          height: '55vh',
          top: '5%',
          left: '-15%',
          background: 'rgba(123, 44, 255, 0.1)',
          animationDuration: '11s',
        }}
      />
      <div
        className="blob"
        style={{
          width: '40vw',
          height: '45vh',
          bottom: '0',
          right: '-10%',
          background: 'rgba(0, 209, 255, 0.08)',
          animationDuration: '14s',
          animationDelay: '-5s',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — text + secondary CTA */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-7"
        >
          <span className="text-xs tracking-widest uppercase text-white/30 font-medium">
            {t('badge')}
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('title')}
          </h2>

          <p className="text-white/50 text-lg leading-relaxed max-w-md">
            {t('subtitle')}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://cal.com"
              className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white w-fit"
            >
              {t('demo')} →
            </a>
            <p className="text-xs text-white/25 ml-1">
              {t('orText')} completá el formulario →
            </p>
          </div>

          <div
            className="mt-2 inline-flex items-center gap-2 text-sm"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                background: '#00D1FF',
                boxShadow: '0 0 6px #00D1FF',
                animation: 'glow-pulse 2s ease-in-out infinite',
              }}
            />
            contacto@deepflow.studio
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
        >
          {submitted ? (
            <div className="glass rounded-3xl p-12 flex flex-col items-center gap-5 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{
                  background: 'rgba(0,209,255,0.12)',
                  border: '1px solid rgba(0,209,255,0.28)',
                  color: '#00D1FF',
                  boxShadow: '0 0 24px rgba(0,209,255,0.15)',
                }}
              >
                ✓
              </div>
              <p className="text-white font-semibold text-lg leading-relaxed max-w-xs">
                {t('success')}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder={t('namePlaceholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={INPUT_BASE}
                style={INPUT_STYLE}
              />
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={INPUT_BASE}
                style={INPUT_STYLE}
              />
              <textarea
                placeholder={t('messagePlaceholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className={`${INPUT_BASE} resize-none`}
                style={INPUT_STYLE}
              />
              <button
                type="submit"
                className="btn-primary w-full py-3.5 rounded-full text-sm font-semibold text-white mt-1"
              >
                {t('submit')}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Footer strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto mt-24 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-baseline gap-2 select-none">
          <span className="text-base tracking-[0.12em] uppercase text-white/40" style={{ fontWeight: 100 }}>
            DEEP
          </span>
          <span className="text-base tracking-[0.12em] uppercase gradient-text" style={{ fontWeight: 800 }}>
            FLOW
          </span>
          <span className="ml-1 text-[9px] tracking-[0.3em] uppercase text-white/20" style={{ fontWeight: 400 }}>
            STUDIO
          </span>
        </div>
        <span className="text-xs text-white/20">
          © {new Date().getFullYear()} Deep Flow Studio. Operational Intelligence Ecosystem.
        </span>
      </motion.div>
    </section>
  )
}
