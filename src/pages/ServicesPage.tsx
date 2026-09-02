import { useTranslation } from 'react-i18next'

import { ContactCta } from '@/features/home/ContactCta'
import { ServicesGrid } from '@/features/home/ServicesGrid'
import { PageHeader } from '@/components/layout/PageHeader'

export default function ServicesPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader title={t('services.title')} lead={t('hero.subtitle')} />
      <ServicesGrid />
      <ContactCta />
    </>
  )
}
