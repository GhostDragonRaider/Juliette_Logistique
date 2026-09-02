import { useTranslation } from 'react-i18next'

import { PageHeader } from '@/components/layout/PageHeader'
import { AboutTeaser } from '@/features/home/AboutTeaser'
import { ContactCta } from '@/features/home/ContactCta'
import { TrustBar } from '@/features/home/TrustBar'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader title={t('about.title')} lead={t('about.lead')} />
      <TrustBar />
      <AboutTeaser />
      <ContactCta />
    </>
  )
}
