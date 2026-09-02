import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Logo } from '@/components/brand/Logo'
import { Container } from '@/components/ui/Container'
import { paths } from '@/routes/paths'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t-gold-400/15 bg-ink-950 border-t py-12">
      <Container className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo className="h-14" />
          <p className="max-w-xs text-center text-xs text-neutral-500 sm:text-left">
            {t('footer.tagline')}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs text-neutral-400 sm:items-end">
          <a href={`tel:${t('contact.phone').replace(/\s/g, '')}`} className="hover:text-gold-200">
            {t('contact.phone')}
          </a>
          <Link to={paths.careers} className="hover:text-gold-200">
            {t('nav.careers')}
          </Link>
          <Link to={paths.contact} className="hover:text-gold-200">
            {t('nav.contact')}
          </Link>
          <p className="mt-4 text-neutral-600">
            © {new Date().getFullYear()} Juliette Logistique. {t('footer.rights')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
