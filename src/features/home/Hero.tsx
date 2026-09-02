import { useTranslation } from 'react-i18next'

import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { paths } from '@/routes/paths'

/*
 * A koncepción egy sötét háttéren álló, aranyfényben úszó sportautó a hero.
 * Amíg nincs meg a végleges render, gradiensekkel imitáljuk a hangulatot:
 * tedd a képet a `src/assets/hero/` mappába, importáld ide, és állítsd
 * `background-image`-ként a legalsó rétegre.
 */
export function Hero() {
  const { t } = useTranslation()
  const claims = t('hero.claims', { returnObjects: true })

  return (
    <section className="from-ink-950 via-ink-900 to-ink-950 relative isolate overflow-hidden bg-gradient-to-b">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(120% 80% at 75% 30%, rgba(212,175,55,0.28) 0%, rgba(212,175,55,0.06) 40%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/80 to-transparent"
      />

      <Container className="relative flex min-h-[70vh] flex-col justify-center py-20 sm:py-28">
        <p className="text-gold-300/80 mb-4 text-[11px] tracking-[0.4em] uppercase">
          {t('hero.eyebrow')}
        </p>

        <h1 className="font-display text-gold-gradient text-5xl leading-[0.9] tracking-tight uppercase italic sm:text-7xl lg:text-8xl">
          Juliette
          <br />
          Logistique
        </h1>

        <p className="mt-6 max-w-xl text-sm tracking-wide text-neutral-300 uppercase sm:text-base">
          {t('hero.subtitle')}
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] tracking-[0.3em] text-neutral-400 uppercase">
          {claims.map((claim) => (
            <li key={claim}>{claim}.</li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to={paths.contact}>{t('cta.requestQuote')}</ButtonLink>
          <ButtonLink to={paths.services} variant="outline">
            {t('cta.ourServices')}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
