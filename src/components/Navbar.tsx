'use client'

import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useParams } from 'next/navigation'

export default function Navbar() {
  const t = useTranslations('nav')
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as string

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale })
  }

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 flex items-center" style={{ height: '68px' }}>
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(8,8,8,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      />

      <div className="relative w-full flex items-center justify-between" style={{ paddingLeft: 56, paddingRight: 56 }}>

        {/* Logo */}
        <div className="flex items-center gap-1.5 select-none">
          <span style={{ fontSize: '1.35rem', fontWeight: 200, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff' }}>
            DEEP
          </span>
          <span className="gradient-text" style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            FLOW
          </span>
          <span style={{ fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginLeft: 4, alignSelf: 'flex-end', marginBottom: 2 }}>
            STUDIO
          </span>
        </div>

        {/* Menú central */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
          <a href="#ecosystem" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color='#fff')} onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.6)')}>
            {t('ecosystem')}
          </a>
          <a href="#products" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color='#fff')} onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.6)')}>
            {t('products')}
          </a>
          <a href="#contact" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color='#fff')} onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.6)')}>
            {t('contact')}
          </a>
        </div>

        {/* Bloque derecho */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>
            <button
              onClick={() => switchLocale('es')}
              style={{
                fontSize: '0.85rem',
                fontWeight: currentLocale === 'es' ? 600 : 400,
                color: currentLocale === 'es' ? '#ffffff' : 'rgba(255,255,255,0.45)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 4px',
              }}
            >
              ES
            </button>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <button
              onClick={() => switchLocale('en')}
              style={{
                fontSize: '0.85rem',
                fontWeight: currentLocale === 'en' ? 600 : 400,
                color: currentLocale === 'en' ? '#ffffff' : 'rgba(255,255,255,0.45)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 4px',
              }}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="btn-primary hidden sm:flex items-center rounded-full font-semibold text-white"
            style={{ fontSize: '0.9rem', padding: '0.55rem 1.6rem', whiteSpace: 'nowrap' }}
          >
            {t('contact')}
          </a>
        </div>

      </div>
    </nav>
  )
}