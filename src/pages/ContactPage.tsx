import { Mail, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { PageHeader } from '@/components/layout/PageHeader'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader title={t('contact.title')} lead={t('contact.text')} />
      <Section>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <Card className="flex flex-col items-start gap-2">
            <Phone className="text-gold-400 size-5" strokeWidth={1.5} aria-hidden />
            <a
              href={`tel:${t('contact.phone').replace(/\s/g, '')}`}
              className="text-gold-200 text-sm tracking-wider"
            >
              {t('contact.phone')}
            </a>
          </Card>
          <Card className="flex flex-col items-start gap-2">
            <Mail className="text-gold-400 size-5" strokeWidth={1.5} aria-hidden />
            <a
              href="mailto:info@juliette-logistique.com"
              className="text-gold-200 text-sm tracking-wider"
            >
              info@juliette-logistique.com
            </a>
          </Card>
        </div>

        {/* TODO: ajánlatkérő űrlap — ugyanaz a mintázat, mint a jelentkezési űrlapnál
            (react-hook-form + zod), de fájlfeltöltés nélkül. */}
      </Section>
    </>
  )
}
