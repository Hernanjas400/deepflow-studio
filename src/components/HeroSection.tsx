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

const METRICS = [
  { value: '231', labelKey: 'metric1', color: '#00D1FF', tag: 'LIVE' },
  { value: '47',  labelKey: 'metric2', color: '#7B2CFF', tag: 'AI'  },
  { value: '12',  labelKey: 'metric3', color: '#FF2FD1', tag: 'AUTO'},
  { value: '4',   labelKey: 'metric4', color: '#00D1FF', tag: '$'   },
] as const

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
    <section className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden bg-brand-black">

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      <div className="blob" style={{ width:'55vw', height:'55vh', top:'-15%', left:'-12%', background:'rgba(123,44,255,0.12)', animationDuration:'9s' }} />
      <div className="blob" style={{ width:'45vw', height:'50vh', top:'-8%', right:'-10%', background:'rgba(0,209,255,0.08)', animationDuration:'11s', animationDelay:'-3s', animationDirection:'reverse' }} />
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background:'linear-gradient(to top, #080808, transparent)' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto py-20 lg:py-28" style={{ paddingLeft: 56, paddingRight: 56 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* IZQUIERDA */}
          <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col gap-3">

            <motion.div variants={item}>
              <p style={{ fontSize:'0.75rem', letterSpacing:'0.25em', color:'rgba(255,255,255,0.35)', textTransform:'uppercase', fontWeight:700, margin:0 }}>
                {t('impactLine')}
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h1 style={{ fontSize:'clamp(2.6rem,5.0vw,3.6rem)', fontWeight:800, color:'#ffffff', lineHeight:1.05, letterSpacing:'-0.03em', margin:0 }}>
                {t('headlineStart')}<br />
                <span className="gradient-text-flow">{t('headlineMid')}</span><br />
                {t('headlineEnd')}
              </h1>
            </motion.div>

            <motion.div variants={item}>
              <p style={{ fontSize:'1.05rem', color:'rgba(255,255,255,0.55)', lineHeight:1.65, margin:0, maxWidth:460 }}>
                {t('taglineNew')}
              </p>
            </motion.div>

            <motion.div variants={item} style={{ display:'flex', gap:16, flexWrap:'wrap', marginTop:4 }}>
              <a
                href="#contact"
                className="btn-primary"
                style={{ padding:'0.8rem 2rem', borderRadius:9999, fontSize:'0.95rem', fontWeight:600, color:'#fff', textDecoration:'none', display:'inline-flex', alignItems:'center' }}
              >
                {t('ctaPrimary')}
              </a>
              <a
                href="#ecosystem"
                className="btn-secondary"
                style={{ padding:'0.8rem 2rem', borderRadius:9999, fontSize:'0.95rem', fontWeight:500, color:'rgba(255,255,255,0.75)', textDecoration:'none', display:'inline-flex', alignItems:'center' }}
              >
                {t('ctaSecondary')}
              </a>
            </motion.div>

            <motion.div variants={item} style={{ display:'flex', flexWrap:'wrap', gap:'8px 24px', marginTop:4 }}>
              {[t('g1'), t('g2'), t('g3'), t('g4')].map((g) => (
                <span key={g} style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.4)', display:'flex', alignItems:'center', gap:6 }}>
                  <span style={{ color:'#00D1FF', fontSize:'0.75rem' }}>✔</span> {g}
                </span>
              ))}
            </motion.div>

          </motion.div>

          {/* PANEL MÉTRICAS */}
          <motion.div
            initial={{ opacity:0, x:30 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.65, ease:'easeOut', delay:0.25 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="glass-blue rounded-3xl w-full max-w-xs" style={{ padding:'1.5rem', border:'1px solid rgba(0,209,255,0.15)' }}>

              <div style={{ marginBottom:'1rem' }}>
                <p style={{ fontSize:'0.65rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.85)', marginBottom:8, fontWeight:600 }}>
                  {t('panelTitle')}
                </p>
                <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ width:7, height:7, borderRadius:'50%', background:'#00D1FF', boxShadow:'0 0 6px #00D1FF', flexShrink:0, display:'inline-block' }} />
                  <span style={{ fontSize:'0.9rem', fontWeight:600, color:'rgba(255,255,255,0.85)' }}>
                    {t('panelSubtitle')}
                  </span>
                </div>
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {METRICS.map((m, i) => (
                  <motion.div
                    key={m.labelKey}
                    initial={{ opacity:0, x:-12 }}
                    animate={{ opacity:1, x:0 }}
                    transition={{ duration:0.35, ease:'easeOut', delay:0.4 + i * 0.08 }}
                    style={{
                      background:'rgba(255,255,255,0.03)',
                      border:'1px solid rgba(255,255,255,0.07)',
                      borderRadius:10,
                      padding:'10px 14px',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'space-between',
                      gap:8,
                    }}
                  >
                    <div style={{ display:'flex', alignItems:'center', gap:8, minWidth:0 }}>
                      <span style={{
                        fontSize:'0.6rem',
                        background:`${m.color}18`,
                        color:m.color,
                        border:`1px solid ${m.color}35`,
                        borderRadius:4,
                        padding:'2px 6px',
                        fontWeight:700,
                        letterSpacing:'0.05em',
                        flexShrink:0,
                      }}>
                        {m.tag}
                      </span>
                      <span style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.85)', whiteSpace:'nowrap' }}>
                        {t(m.labelKey)}
                      </span>
                    </div>
                    <span style={{ fontSize:'1.3rem', fontWeight:800, color:m.color, flexShrink:0 }}>{m.value}</span>
                  </motion.div>
                ))}
              </div>

              <p style={{ fontSize:'0.7rem', color:'rgba(255,255,255,0.85)', textAlign:'center', marginTop:14, lineHeight:1.6 }}>
                {t('panelFooter')}
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}