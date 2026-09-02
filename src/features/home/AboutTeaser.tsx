import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Logo } from '@/components/brand/Logo'
import { ButtonLink } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { paths } from '@/routes/paths'

export function AboutTeaser() {
  const { t } = useTranslation()
  const points = t('about.points', { returnObjects: true })

  return (
    <Section>
      <div className="border-gold-hairline bg-ink-800/40 grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-gold-gradient text-xl tracking-[0.2em] uppercase sm:text-2xl">
            {t('about.title')}
          </h2>
          <p className="text-gold-100 mt-4 text-lg font-light">{t('about.lead')}</p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">{t('about.body')}</p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-xs text-neutral-300">
                <Check
                  className="text-gold-400 mt-0.5 size-4 shrink-0"
                  strokeWidth={2}
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>

          <ButtonLink to={paths.about} variant="outline" className="mt-8">
            {t('cta.learnMore')}
          </ButtonLink>
        </div>

        <div className="flex justify-center">
          <Logo className="w-64 max-w-full opacity-90 sm:w-80" />
        </div>
      </div>
    </Section>
  )
}
