import type { JelentkezesForditas, SeoForditas, UrlapHibaUzenetek } from '../nyelvTipusok'
import {
  B_JOGOSITVANY_EV,
  EGYEB_ERTEK,
  ERKOLESI,
  HETI_NAPOK,
  HETVEGE,
  IGEN_NEM,
  JOGOSITVANY_KATEGORIA,
  KORABBI_TERULET,
  MUNKABA_ALLAS,
  NYELV_SZINT,
  ORSZAG_ERTEKEK,
  PREMIUM_GYAKORISAG,
  PREMIUM_MARKAK,
  PROF_EV,
  RUGALMASSAG,
} from './opciokErtekek'

function paros(ertekek: readonly string[], feliratok: readonly string[]) {
  return ertekek.map((ertek, i) => ({
    ertek,
    felirat: feliratok[i] ?? ertek,
  }))
}

export type JelentkezesOpciokFelirat = {
  orszagok: readonly string[]
  igenNem: readonly string[]
  bJogositvanyEve: readonly string[]
  professzionalisEv: readonly string[]
  korabbiTerulet: readonly string[]
  premiumMarkak: readonly string[]
  premiumGyakorisag: readonly string[]
  munkabaAllas: readonly string[]
  rugalmassag: readonly string[]
  jogositvanyKategoria: readonly string[]
  erkolesi: readonly string[]
  nyelvSzint: readonly string[]
  hetvege: readonly string[]
  hetiNapok: readonly string[]
}

export type JelentkezesSzovegPaket = {
  seo: SeoForditas
  foCim: string
  alcim: string
  bevezeto: string
  szekcio: JelentkezesForditas['szekcio']
  mezo: JelentkezesForditas['mezo']
  dokumentumokBevezeto: string
  feltoltes: JelentkezesForditas['feltoltes']
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
  opciokFelirat: JelentkezesOpciokFelirat
}

export function epitJelentkezesForditas(paket: JelentkezesSzovegPaket): JelentkezesForditas {
  const o = paket.opciokFelirat
  return {
    seo: paket.seo,
    foCim: paket.foCim,
    alcim: paket.alcim,
    bevezeto: paket.bevezeto,
    szekcio: paket.szekcio,
    mezo: paket.mezo,
    dokumentumokBevezeto: paket.dokumentumokBevezeto,
    feltoltes: paket.feltoltes,
    adatvedelemElotte: paket.adatvedelemElotte,
    adatvedelemLink: paket.adatvedelemLink,
    adatvedelemUtana: paket.adatvedelemUtana,
    hozzajarulas: paket.hozzajarulas,
    gombKuldes: paket.gombKuldes,
    gombKuldesFut: paket.gombKuldesFut,
    gombKepFeldolgozas: paket.gombKepFeldolgozas,
    osszesitoHiba: paket.osszesitoHiba,
    osszesitoHibaDarab: paket.osszesitoHibaDarab,
    popupCim: paket.popupCim,
    popupSzoveg: paket.popupSzoveg,
    popupZar: paket.popupZar,
    valasszon: paket.valasszon,
    egyebPlaceholder: paket.egyebPlaceholder,
    egyebAria: paket.egyebAria,
    feltoltesGomb: paket.feltoltesGomb,
    hibak: paket.hibak,
    egyebErtek: EGYEB_ERTEK,
    opciok: {
      orszagok: paros(ORSZAG_ERTEKEK, o.orszagok),
      igenNem: paros(IGEN_NEM, o.igenNem),
      bJogositvanyEve: paros(B_JOGOSITVANY_EV, o.bJogositvanyEve),
      professzionalisEv: paros(PROF_EV, o.professzionalisEv),
      korabbiTerulet: paros(KORABBI_TERULET, o.korabbiTerulet),
      premiumMarkak: paros(PREMIUM_MARKAK, o.premiumMarkak),
      premiumGyakorisag: paros(PREMIUM_GYAKORISAG, o.premiumGyakorisag),
      munkabaAllas: paros(MUNKABA_ALLAS, o.munkabaAllas),
      rugalmassag: paros(RUGALMASSAG, o.rugalmassag),
      jogositvanyKategoria: paros(JOGOSITVANY_KATEGORIA, o.jogositvanyKategoria),
      erkolesi: paros(ERKOLESI, o.erkolesi),
      nyelvSzint: paros(NYELV_SZINT, o.nyelvSzint),
      hetvege: paros(HETVEGE, o.hetvege),
      hetiNapok: paros(HETI_NAPOK, o.hetiNapok),
    },
  }
}
