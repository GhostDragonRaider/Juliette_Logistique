import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { PageHeader } from '@/components/layout/PageHeader'
import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { paths } from '@/routes/paths'

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h3 className="text-gold-200 mb-4 text-xs font-semibold tracking-[0.18em] uppercase">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xs leading-relaxed text-neutral-300"
          >
            <Check className="text-gold-400 mt-0.5 size-4 shrink-0" strokeWidth={2} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default function CareersPage() {
  const { t } = useTranslation()
  const process = t('careers.process', { returnObjects: true })

  return (
    <>
      <PageHeader title={t('careers.title')} lead={t('careers.lead')} />

      <Section>
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-neutral-300">
          {t('careers.intro')}
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <ListCard
            title={t('careers.tasksTitle')}
            items={t('careers.tasks', { returnObjects: true })}
          />
          <ListCard
            title={t('careers.requirementsTitle')}
            items={t('careers.requirements', { returnObjects: true })}
          />
          <ListCard
            title={t('careers.offerTitle')}
            items={t('careers.offer', { returnObjects: true })}
          />
        </div>
      </Section>

      <Section title={t('careers.processTitle')} className="bg-ink-950 py-14 sm:py-20">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <li key={step} className="border-gold-hairline bg-ink-800/50 p-6">
              <span className="font-display text-gold-400/70 block text-3xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-xs leading-relaxed text-neutral-300">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Container className="pb-20 text-center">
        <ButtonLink to={paths.apply}>{t('cta.apply')}</ButtonLink>
      </Container>
    </>
  )
}
