import { useTranslation } from 'react-i18next'

import { PageHeader } from '@/components/layout/PageHeader'
import { ContactCta } from '@/features/home/ContactCta'
import { PartnersStrip } from '@/features/home/PartnersStrip'

export default function PartnersPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader title={t('partners.title')} />
      <PartnersStrip />
      <ContactCta />
    </>
  )
}
