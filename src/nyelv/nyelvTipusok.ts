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

/** SEO mezők aloldalakhoz is */
export type SeoForditas = {
  cim: string
  leiras: string
  kulcsszavak: string
}

/** Egy értékkártya az aloldalakon */
export type OldalErtekForditas = {
  cim: string
  leiras: string
}

/** Részletes szolgáltatás az aloldalon */
export type SzolgaltatasReszletForditas = {
  azonosito: string
  cim: string
  leiras: string
  pontok: string[]
}

/** Rólunk / szolgáltatások / partnerek / kapcsolat aloldal-tartalmak */
export type OldalakForditas = {
  rolunk: {
    seo: SeoForditas
    cim: string
    alcim: string
    bekezdesek: string[]
    ertekekCim: string
    ertekek: OldalErtekForditas[]
    folyamatCim: string
    folyamat: OldalErtekForditas[]
    cta: string
  }
  szolgaltatasok: {
    seo: SeoForditas
    cim: string
    alcim: string
    bevezeto: string
    tetelek: SzolgaltatasReszletForditas[]
    cta: string
  }
  partnerek: {
    seo: SeoForditas
    cim: string
    alcim: string
    bekezdesek: string[]
    elonyokCim: string
    elonyok: string[]
    cta: string
  }
  kapcsolat: {
    seo: SeoForditas
    cim: string
    alcim: string
    bekezdesek: string[]
    telefonCimke: string
    emailCimke: string
    cimCimke: string
    teruletCimke: string
    teruletErtek: string
    idopontCimke: string
    idopontErtek: string
    cta: string
  }
}

/** Űrlap válasz: kanonikus érték (admin) + megjelenített felirat */
export type UrlapOpcio = {
  ertek: string
  felirat: string
}

export type UrlapHibaUzenetek = {
  kotelezo: string
  valasztas: string
  legalabbEgy: string
  egyeb: string
  fajl: string
  email: string
  tizennyolcEv: string
  adatvedelem: string
  hozzajarulas: string
  fajlPdf: string
  fajlKep: string
  fajlKepVagyPdf: string
  profilkepFeldolgozas: string
  kuldesSikertelen: string
}

/** Karrier landing oldal */
export type KarrierForditas = {
  seo: SeoForditas
  animacioCim1: string
  animacioCim2: string
  allomasCim: string
  bevezeto: string
  feladatokCim: string
  feladatok: string[]
  elvarasokCim: string
  elvarasok: string[]
  kinalunkCim: string
  kinalunk: string[]
  cta: string
}

/** Sofőr jelentkezési űrlap */
export type JelentkezesForditas = {
  seo: SeoForditas
  foCim: string
  alcim: string
  bevezeto: string
  szekcio: {
    szemelyes: string
    vezetes: string
    premium: string
    nemetorszag: string
    jogositvany: string
    nyelv: string
    keszsegek: string
    feltetelek: string
    szurok: string
    dokumentumok: string
    motivacio: string
    kuldes: string
  }
  mezo: Record<string, string>
  opciok: Record<string, UrlapOpcio[]>
  dokumentumokBevezeto: string
  feltoltes: Record<string, { cim: string; leiras: string; seged?: string }>
  adatvedelemElotte: string
  adatvedelemLink: string
  adatvedelemUtana: string
  hozzajarulas: string
  gombKuldes: string
  gombKuldesFut: string
  gombKepFeldolgozas: string
  osszesitoHiba: string
  osszesitoHibaDarab: string
  popupCim: string
  popupSzoveg: string
  popupZar: string
  valasszon: string
  egyebPlaceholder: string
  egyebAria: string
  feltoltesGomb: string
  hibak: UrlapHibaUzenetek
  egyebErtek: string
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
  seo: SeoForditas
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
  lablec: {
    kerdes: string
    gomb: string
    markaLeiras: string
  }
  oldalak: OldalakForditas
  karrier: KarrierForditas
  jelentkezes: JelentkezesForditas
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
export const alapNyelv: NyelvKod = 'de'

/** LocalStorage kulcs a választott nyelvhez */
export const nyelvTaroloKulcs = 'juliette-nyelv'
