import { useTranslation } from 'react-i18next'

import { PageHeader } from '@/components/layout/PageHeader'
import { Section } from '@/components/ui/Section'
import { ApplicationForm } from '@/features/careers/ApplicationForm'

export default function ApplyPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader title={t('application.title')} lead={t('careers.lead')} />
      <Section>
        <ApplicationForm />
      </Section>
    </>
  )
}
