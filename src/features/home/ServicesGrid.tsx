import { Building2, Camera, Globe, Route, Truck, Waypoints } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { paths } from '@/routes/paths'

const icons = [Truck, Waypoints, Building2, Route, Globe, Camera]

export function ServicesGrid() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })

  return (
    <Section id="services" title={t('services.title')}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index] ?? Truck
          return (
            <Card key={item.title} className="flex flex-col items-start gap-3">
              <Icon className="text-gold-400 size-6" strokeWidth={1.25} aria-hidden />
              <h3 className="text-xs font-semibold tracking-[0.16em] text-neutral-100 uppercase">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-400">{item.text}</p>
            </Card>
          )
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <ButtonLink to={paths.services} variant="outline">
          {t('cta.allServices')}
        </ButtonLink>
      </div>
    </Section>
  )
}
