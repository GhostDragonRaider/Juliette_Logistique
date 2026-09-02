import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

import { Logo } from '@/components/brand/Logo'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'
import { paths } from '@/routes/paths'

const navItems = [
  { to: paths.home, key: 'nav.home' },
  { to: paths.about, key: 'nav.about' },
  { to: paths.services, key: 'nav.services' },
  { to: paths.partners, key: 'nav.partners' },
  { to: paths.contact, key: 'nav.contact' },
  { to: paths.careers, key: 'nav.careers' },
] as const

export function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b-gold-400/15 bg-ink-950/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link to={paths.home} aria-label="Juliette Logistique">
          <Logo className="h-11 sm:h-14" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-[11px] font-medium tracking-[0.18em] uppercase transition-colors',
                  isActive ? 'text-gold-300' : 'hover:text-gold-200 text-neutral-300',
                )
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher className="hidden sm:flex" />
          <a
            href={`tel:${t('contact.phone').replace(/\s/g, '')}`}
            className="border-gold-hairline text-gold-200 hover:bg-gold-400/10 hidden rounded-full px-4 py-2 text-xs tracking-wider transition-colors md:inline-block"
          >
            {t('contact.phone')}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Menu"
            className="text-gold-200 p-2 lg:hidden"
          >
            <span className="block h-px w-6 bg-current" />
            <span className="mt-1.5 block h-px w-6 bg-current" />
            <span className="mt-1.5 block h-px w-6 bg-current" />
          </button>
        </div>
      </Container>

      {open ? (
        <nav className="border-t-gold-400/15 bg-ink-950 border-t lg:hidden">
          <Container className="flex flex-col py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'py-3 text-xs tracking-[0.18em] uppercase',
                    isActive ? 'text-gold-300' : 'text-neutral-300',
                  )
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
            <LanguageSwitcher className="py-3 sm:hidden" />
          </Container>
        </nav>
      ) : null}
    </header>
  )
}
