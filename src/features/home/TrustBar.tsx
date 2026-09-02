import { Award, Gem, Handshake, MapPin, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Container } from '@/components/ui/Container'

const icons = [ShieldCheck, Award, MapPin, Gem, Handshake]

export function TrustBar() {
  const { t } = useTranslation()
  const items = t('trust', { returnObjects: true })

  return (
    <Container className="-mt-8 sm:-mt-10">
      <div className="border-gold-hairline bg-ink-800/80 grid grid-cols-2 gap-px backdrop-blur-sm sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item, index) => {
          const Icon = icons[index] ?? ShieldCheck
          return (
            <div
              key={item.title}
              className="flex flex-col items-center gap-2 px-4 py-6 text-center"
            >
              <Icon className="text-gold-400 size-5" strokeWidth={1.5} aria-hidden />
              <p className="text-[11px] font-semibold tracking-[0.16em] text-neutral-100 uppercase">
                {item.title}
              </p>
              <p className="text-[10px] tracking-wider text-neutral-500 uppercase">{item.text}</p>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
