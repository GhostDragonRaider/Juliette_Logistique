import { useEffect } from 'react'
import { telefonszam } from '../adatok/fooldalAdatok'
import { useNyelv } from '../nyelv/useNyelv'

/** Opcionális SEO felülírás aloldalakhoz */
export type SeoFeluliras = {
  cim: string
  leiras: string
  kulcsszavak: string
}

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

type SeoFejTulajdonsagok = {
  feluliras?: SeoFeluliras
}

/**
 * A kiválasztott nyelvhez igazítja a SEO meta adatokat és a JSON-LD-t.
 */
export function SeoFej({ feluliras }: SeoFejTulajdonsagok = {}) {
  const { nyelv, szoveg } = useNyelv()
  const seo = feluliras ?? szoveg.seo

  useEffect(() => {
    const oldalUrl = window.location.origin + window.location.pathname
    const kepUrl = `${window.location.origin}/kepek/hos-hatter.png`

    document.title = seo.cim
    metaBeallitas('description', seo.leiras)
    metaBeallitas('keywords', seo.kulcsszavak)
    metaBeallitas('robots', 'index, follow')
    metaBeallitas('theme-color', '#141414')
    metaBeallitas('og:type', 'website', 'property')
    metaBeallitas('og:site_name', 'Juliette Logistique', 'property')
    metaBeallitas('og:title', seo.cim, 'property')
    metaBeallitas('og:description', seo.leiras, 'property')
    metaBeallitas(
      'og:locale',
      nyelv === 'hu' ? 'hu_HU' : nyelv === 'de' ? 'de_DE' : 'en_US',
      'property',
    )
    metaBeallitas('og:url', oldalUrl, 'property')
    metaBeallitas('og:image', kepUrl, 'property')
    metaBeallitas('twitter:card', 'summary_large_image')
    metaBeallitas('twitter:title', seo.cim)
    metaBeallitas('twitter:description', seo.leiras)
    metaBeallitas('twitter:image', kepUrl)
    linkBeallitas('canonical', oldalUrl)

    jsonLdBeallitas({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Juliette Logistique',
      url: window.location.origin,
      logo: `${window.location.origin}/brand/logo.png`,
      image: kepUrl,
      description: seo.leiras,
      telephone: telefonszam,
      areaServed: ['DE', 'EU'],
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: telefonszam,
        contactType: 'customer service',
        availableLanguage: ['hu', 'en', 'de'],
      },
    })
  }, [nyelv, seo])

  return null
}
