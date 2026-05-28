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
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10" style={{ height: '64px' }}>
      <div
        className="absolute inset-0 glass"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      />

      {/* Logo */}
      <div className="relative flex items-center gap-1 select-none">
        <span
          className="text-xl tracking-[0.12em] uppercase"
          style={{ fontWeight: 100 }}
        >
          DEEP
        </span>
        <span
          className="text-xl tracking-[0.12em] uppercase gradient-text"
          style={{ fontWeight: 800 }}
        >
          FLOW
        </span>
        <span
          className="ml-1 text-[10px] tracking-[0.3em] uppercase text-white/40 self-end mb-0.5"
          style={{ fontWeight: 400 }}
        >
          STUDIO
        </span>
      </div>

      {/* Nav links */}
      <div className="relative hidden md:flex items-center gap-8">
        <a
          href="#ecosystem"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          {t('ecosystem')}
        </a>
        <a
          href="#products"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          {t('products')}
        </a>
        <a
          href="#contact"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          {t('contact')}
        </a>
      </div>

      {/* Lang switcher + CTA */}
      <div className="relative flex items-center gap-4">
        <div className="flex items-center gap-1 text-xs text-white/40">
          <button
            onClick={() => switchLocale('es')}
            className={`px-1.5 py-0.5 rounded transition-colors ${
              currentLocale === 'es'
                ? 'text-white font-medium'
                : 'hover:text-white/70'
            }`}
          >
            ES
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => switchLocale('en')}
            className={`px-1.5 py-0.5 rounded transition-colors ${
              currentLocale === 'en'
                ? 'text-white font-medium'
                : 'hover:text-white/70'
            }`}
          >
            EN
          </button>
        </div>

        <a
          href="#contact"
          className="btn-primary hidden sm:flex items-center px-5 py-2 rounded-full text-sm font-medium text-white"
        >
          {t('contact')}
        </a>
      </div>
    </nav>
  )
}
