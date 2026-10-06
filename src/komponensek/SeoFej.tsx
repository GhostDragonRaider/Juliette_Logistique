import { useEffect } from 'react'
import { useWeboldalTartalom } from '../tartalom/WeboldalTartalomContext'
import { useNyelv } from '../nyelv/useNyelv'

/**
 * Beállítja vagy létrehozza a megadott meta elemet a document head-ben.
 */
function metaBeallitas(nev: string, tartalom: string, tulajdonsag = 'name') {
  let elem = document.head.querySelector(
    `meta[${tulajdonsag}="${nev}"]`,
  ) as HTMLMetaElement | null

  if (!elem) {
    elem = document.createElement('meta')
    elem.setAttribute(tulajdonsag, nev)
    document.head.appendChild(elem)
  }

  elem.setAttribute('content', tartalom)
}

/**
 * Beállítja vagy létrehozza a link[rel] elemet.
 */
function linkBeallitas(rel: string, href: string) {
  let elem = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null

  if (!elem) {
    elem = document.createElement('link')
    elem.setAttribute('rel', rel)
    document.head.appendChild(elem)
  }

  elem.setAttribute('href', href)
}

/**
 * A strukturált adat (JSON-LD) scriptet frissíti a head-ben.
 */
function jsonLdBeallitas(adat: Record<string, unknown>) {
  const azonosito = 'juliette-jsonld'
  let script = document.getElementById(azonosito) as HTMLScriptElement | null

  if (!script) {
    script = document.createElement('script')
    script.id = azonosito
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(adat)
}

export type SeoFeluliras = {
  cim?: string
  leiras?: string
  kulcsszavak?: string
}

/**
 * A kiválasztott nyelvhez igazítja a SEO meta adatokat és a JSON-LD-t.
 * Opcionálisan felülírható aloldal-specifikus címmel és leírással.
 */
export function SeoFej({ feluliras }: { feluliras?: SeoFeluliras }) {
  const { telefonszam, cegnev, email, cim } = useWeboldalTartalom()
  const { nyelv, szoveg } = useNyelv()

  const seoCim = feluliras?.cim ?? szoveg.seo.cim
  const seoLeiras = feluliras?.leiras ?? szoveg.seo.leiras
  const seoKulcsszavak = feluliras?.kulcsszavak ?? szoveg.seo.kulcsszavak

  useEffect(() => {
    const oldalUrl = window.location.origin + window.location.pathname
    const kepUrl = `${window.location.origin}/kepek/hos-hatter.png`

    document.title = seoCim
    metaBeallitas('description', seoLeiras)
    metaBeallitas('keywords', seoKulcsszavak)
    metaBeallitas('robots', 'index, follow')
    metaBeallitas('theme-color', '#141414')
    metaBeallitas('og:type', 'website', 'property')
    metaBeallitas('og:site_name', cegnev, 'property')
    metaBeallitas('og:title', seoCim, 'property')
    metaBeallitas('og:description', seoLeiras, 'property')
    metaBeallitas('og:locale', nyelv === 'hu' ? 'hu_HU' : nyelv === 'de' ? 'de_DE' : 'en_US', 'property')
    metaBeallitas('og:url', oldalUrl, 'property')
    metaBeallitas('og:image', kepUrl, 'property')
    metaBeallitas('twitter:card', 'summary_large_image')
    metaBeallitas('twitter:title', seoCim)
    metaBeallitas('twitter:description', seoLeiras)
    metaBeallitas('twitter:image', kepUrl)
    linkBeallitas('canonical', oldalUrl)

    const szervezet: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: cegnev,
      url: window.location.origin,
      logo: `${window.location.origin}/brand/logo.png`,
      image: kepUrl,
      description: seoLeiras,
      telephone: telefonszam,
      areaServed: ['DE', 'EU'],
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: telefonszam,
        contactType: 'customer service',
        availableLanguage: ['hu', 'en', 'de'],
        ...(email ? { email } : {}),
      },
    }
    if (email) {
      szervezet.email = email
    }
    if (cim) {
      szervezet.address = {
        '@type': 'PostalAddress',
        streetAddress: cim,
      }
    }

    jsonLdBeallitas(szervezet)
  }, [nyelv, seoCim, seoLeiras, seoKulcsszavak, telefonszam, cegnev, email, cim])

  return null
}
