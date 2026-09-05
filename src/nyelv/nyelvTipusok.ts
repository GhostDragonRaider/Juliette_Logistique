/**
 * A weboldalon választható nyelvek típusai.
 */
export type NyelvKod = 'hu' | 'en' | 'de'

/**
 * Egy navigációs link fordított felirattal.
 */
export type NavigacioLinkForditas = {
  azonosito: string
  felirat: string
  cel: string
}

/**
 * Egy értékpont fordított szövegei.
 */
export type ErtekPontForditas = {
  azonosito: string
  cim: string
  leiras: string
  ikon: 'pajzs' | 'csillag' | 'terkep' | 'gyemant' | 'kezetfogas'
}

/**
 * Egy szolgáltatás fordított szövegei.
 */
export type SzolgaltatasForditas = {
  azonosito: string
  cim: string
  leiras: string
  kep: string
  ikon: 'auto' | 'kulcs' | 'flotta' | 'ut' | 'europa' | 'kamera'
}

/**
 * Egy teljes nyelv fordításkészlete.
 */
export type OldalForditas = {
  htmlNyelv: string
  navigacioAria: string
  nyelvAria: string
  menuAria: string
  menuBezaroAria: string
  ugrasATartalomra: string
  seo: {
    cim: string
    leiras: string
    kulcsszavak: string
  }
  navigacio: NavigacioLinkForditas[]
  hos: {
    markaNev: string
    alcim: string
    motto: string
    elsodlegesGomb: string
    masodlagosGomb: string
  }
  ertekekAria: string
  ertekek: ErtekPontForditas[]
  szolgaltatasokCim: string
  szolgaltatasokGomb: string
  szolgaltatasok: SzolgaltatasForditas[]
  rolunk: {
    cim: string
    bekezdes: string
    pontok: string[]
    gomb: string
    kepAlt: string
  }
  partnerekCim: string
  hogyanDolgozunk: {
    cim: string
    lepesek: { szam: string; cim: string; leiras: string }[]
  }
  idezet: {
    szoveg: string
    szerzo: string
  }
  zaroKep: {
    cim: string
    gomb: string
    kepAlt: string
  }
  lablec: {
    kerdes: string
    gomb: string
    markaLeiras: string
  }
}

/**
 * A fejlécben megjelenő nyelvkapcsoló feliratok.
 */
export const nyelvKapcsolok: { kod: NyelvKod; felirat: string }[] = [
  { kod: 'hu', felirat: 'HU' },
  { kod: 'en', felirat: 'EN' },
  { kod: 'de', felirat: 'DE' },
]

/** Alapértelmezett nyelv */
export const alapNyelv: NyelvKod = 'hu'

/** LocalStorage kulcs a választott nyelvhez */
export const nyelvTaroloKulcs = 'juliette-nyelv'
