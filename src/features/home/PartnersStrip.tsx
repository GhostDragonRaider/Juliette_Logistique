import { useTranslation } from 'react-i18next'

import { Section } from '@/components/ui/Section'

/*
 * A partnerlogók a koncepció szerint: SIXT, Europcar, AVIS, KROSCHE, FINN.
 * Amíg nincs meg a hivatalos logókészlet (és az engedély a használatra),
 * szöveges wordmarkokat jelenítünk meg. A logókat majd `src/assets/partners/`
 * alá tegyük, és cseréljük le a <span>-eket <img>-re.
 */
const partners = ['SIXT', 'Europcar', 'AVIS', 'KROSCHE', 'FINN']

export function PartnersStrip() {
  const { t } = useTranslation()

  return (
    <Section id="partners" title={t('partners.title')} className="py-12 sm:py-16">
      <div className="border-gold-hairline bg-ink-800/40 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 py-8">
        {partners.map((partner) => (
          <span
            key={partner}
            className="text-lg font-semibold tracking-[0.15em] text-neutral-400 uppercase transition-colors hover:text-neutral-200 sm:text-xl"
          >
            {partner}
          </span>
        ))}
      </div>
    </Section>
  )
}
