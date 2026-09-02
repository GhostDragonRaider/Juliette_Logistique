import { useTranslation } from 'react-i18next'

import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { paths } from '@/routes/paths'

export function ContactCta() {
  const { t } = useTranslation()

  return (
    <section className="from-gold-700/25 via-ink-900 to-ink-950 bg-gradient-to-r py-14">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-heading text-gold-200 text-lg tracking-[0.15em] uppercase">
            {t('contact.lead')}
          </p>
          <p className="mt-2 text-sm text-neutral-400">{t('contact.text')}</p>
        </div>
        <ButtonLink to={paths.contact}>{t('cta.requestQuote')}</ButtonLink>
      </Container>
    </section>
  )
}
