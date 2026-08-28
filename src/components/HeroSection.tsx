'use client'

import { useTranslations } from 'next-intl'
import { motion, type Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function HeroSection() {
  const t = useTranslations('hero')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0, h = 0
    const COLORS = ['#00D1FF', '#7B2CFF', '#FF2FD1']
    const COUNT = 100

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
    <section
      className="relative flex min-h-[calc(100svh-64px)] items-center overflow-hidden bg-brand-black"
      style={{
        paddingTop: 'clamp(2.5rem, 6vh, 4.5rem)',
        paddingBottom: 'clamp(2.5rem, 6vh, 4.5rem)',
      }}
    >

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 0.7 }}
      />

      <div aria-hidden="true" className="blob" style={{ width:'55vw', height:'55vh', top:'-15%', left:'-12%', background:'rgba(123,44,255,0.12)', animationDuration:'9s' }} />
      <div aria-hidden="true" className="blob" style={{ width:'45vw', height:'50vh', top:'-8%', right:'-10%', background:'rgba(0,209,255,0.08)', animationDuration:'11s', animationDelay:'-3s', animationDirection:'reverse' }} />
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-40" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32" style={{ background:'linear-gradient(to top, #080808, transparent)' }} />

      <div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
        style={{ transform: 'translateY(clamp(1rem, 2vh, 1.5rem))' }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <motion.div variants={item} style={{ position: 'relative', top: '5mm' }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/60 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_10px_#00D1FF]" />
              {t('impactLine')}
            </p>
          </motion.div>

          <motion.div variants={item} style={{ marginTop: 'clamp(1.5rem, 3vh, 2rem)' }}>
            <h1 className="text-[clamp(2.2rem,7vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-white">
              <span className="block">{t('headlineStart')}</span>
              <span className="gradient-text-flow block py-[0.08em]">{t('headlineMid')}</span>
              <span className="block">{t('headlineEnd')}</span>
            </h1>
          </motion.div>

          <motion.div variants={item} style={{ marginTop: 'clamp(1.5rem, 3vh, 1.75rem)' }}>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg lg:text-xl lg:leading-relaxed">
              {t('taglineNew')}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
            style={{ marginTop: 'clamp(2rem, 4vh, 2.75rem)' }}
          >
            <a
              href="#contact"
              className="btn-primary inline-flex min-h-14 items-center justify-center rounded-full px-8 text-base font-semibold text-white no-underline sm:min-w-56"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#products"
              className="btn-secondary inline-flex min-h-14 items-center justify-center rounded-full px-8 text-base font-medium text-white/80 no-underline sm:min-w-52"
            >
              {t('ctaSecondary')}
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex max-w-3xl flex-wrap justify-center gap-2.5 sm:gap-3"
            style={{
              marginTop: 'clamp(1.25rem, 2.5vh, 2rem)',
              columnGap: 'clamp(0.9rem, 1.8vw, 1.5rem)',
              rowGap: '0.9rem',
            }}
          >
            {[t('g1'), t('g2'), t('g3'), t('g4')].map((guarantee) => (
              <span
                key={guarantee}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/65 backdrop-blur-sm"
                style={{ padding: '0.65rem 1.25rem' }}
              >
                <span aria-hidden="true" className="text-xs font-bold text-brand-blue">✓</span>
                {guarantee}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
