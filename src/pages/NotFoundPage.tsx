import { useTranslation } from 'react-i18next'

import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { paths } from '@/routes/paths'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <p className="font-display text-gold-gradient text-6xl">404</p>
      <h1 className="font-heading text-gold-200 text-lg tracking-[0.15em] uppercase">
        {t('notFound.title')}
      </h1>
      <p className="text-sm text-neutral-400">{t('notFound.text')}</p>
      <ButtonLink to={paths.home} variant="outline" className="mt-4">
        {t('notFound.back')}
      </ButtonLink>
    </Container>
  )
}
