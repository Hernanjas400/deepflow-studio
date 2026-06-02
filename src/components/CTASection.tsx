'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function CTACanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0, h = 0
    const COLORS = ['#00D1FF', '#7B2CFF', '#FF2FD1']
    const COUNT = 65

    type Particle = {
      x: number; y: number; vx: number; vy: number
      r: number; color: string; opacity: number
    }

    let particles: Particle[] = []

    function resize() {
      w = canvas!.offsetWidth
      h = canvas!.offsetHeight
      canvas!.width = w
      canvas!.height = h
    }

    function init() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.5 + 0.2,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx!.beginPath()
            ctx!.strokeStyle = particles[i].color
            ctx!.globalAlpha = (1 - dist / 110) * 0.12
            ctx!.lineWidth = 0.5
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.stroke()
          }
        }
      }
      for (const p of particles) {
        ctx!.globalAlpha = p.opacity
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = p.color
        ctx!.fill()
      }
      ctx!.globalAlpha = 1
    }

    function update() {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
      }
    }

    function loop() {
      update()
      draw()
      animId = requestAnimationFrame(loop)
    }

    resize()
    init()
    loop()

    const ro = new ResizeObserver(() => { resize(); init() })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 1,
      }}
    />
  )
}

const INPUT_BASE = 'w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:ring-1 focus:ring-[#00D1FF]/40'
const INPUT_STYLE = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
}

const GUARANTEE_KEYS = ['guarantee1', 'guarantee2', 'guarantee3', 'guarantee4'] as const

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
      className="relative overflow-hidden"
      style={{ background: '#0a0a0c', scrollMarginTop: '80px', paddingTop: '7rem', paddingBottom: '5rem' }}
    >
      <CTACanvas />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(123,44,255,0.09) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div className="blob" style={{ width:'55vw', height:'55vh', top:'5%', left:'-15%', background:'rgba(123,44,255,0.08)', animationDuration:'11s' }} />
      <div className="blob" style={{ width:'40vw', height:'45vh', bottom:'0', right:'-10%', background:'rgba(0,209,255,0.06)', animationDuration:'14s', animationDelay:'-5s' }} />

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
            color: '#FF2FD1',
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
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7,
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {t('subtitle')}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: '2rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
              backdropFilter: 'blur(12px)',
            }}>
              <p style={{
                fontSize: '0.7rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
                fontWeight: 600, marginBottom: 4,
              }}>
                {t('guaranteeTitle')}
              </p>
              {GUARANTEE_KEYS.map((key) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: '#00D1FF', fontSize: '0.85rem', flexShrink: 0 }}>✔</span>
                  <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#00D1FF', boxShadow: '0 0 8px #00D1FF',
                flexShrink: 0, display: 'inline-block',
                animation: 'glow-pulse 2s ease-in-out infinite',
              }} />
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
                contacto@deepflow.studio
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {submitted ? (
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(0,209,255,0.2)',
                borderRadius: 20, padding: '3rem 2rem',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '1.5rem',
                textAlign: 'center', backdropFilter: 'blur(12px)',
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  background: 'rgba(0,209,255,0.12)',
                  border: '1px solid rgba(0,209,255,0.28)',
                  color: '#00D1FF',
                  boxShadow: '0 0 24px rgba(0,209,255,0.15)',
                }}>
                  ✓
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.5, maxWidth: 280 }}>
                  {t('success')}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20, padding: '2rem',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  backdropFilter: 'blur(12px)',
                }}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            marginTop: '6rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, userSelect: 'none' }}>
            <span style={{ fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 100 }}>
              DEEP
            </span>
            <span className="gradient-text" style={{ fontSize: '1rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 800 }}>
              FLOW
            </span>
            <span style={{ fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', fontWeight: 400, marginLeft: 4 }}>
              STUDIO
            </span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Deep Flow Studio. Operational Intelligence Ecosystem.
          </span>
        </motion.div>

      </div>
    </section>
  )
}