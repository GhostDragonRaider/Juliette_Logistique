import type { UrlapHibaUzenetek } from '../nyelv/nyelvTipusok'
import { magyarJelentkezesPaket } from '../nyelv/jelentkezes/paketHu'
import { EGYEB_ERTEK } from '../nyelv/jelentkezes/opciokErtekek'
import type { UrlapAllapot, FeltoltesKulcs } from './urlapTipusok'
import { ellenorizFeltoltesFajl } from './urlapFajl'

export type UrlapHibak = Partial<Record<string, string>>

const alapUzenetek: UrlapHibaUzenetek = magyarJelentkezesPaket.hibak

function ures(ertek: string) {
  return ertek.trim().length === 0
}

function emailErvenyes(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/** HTML date input max: utolsó nap, amikor még 18 év alatti a születésnap. */
export function legkesobbiSzuletesiDatumTizennyolcEvhez(): string {
  const ma = new Date()
  const hatar = new Date(ma.getFullYear() - 18, ma.getMonth(), ma.getDate())
  const ev = hatar.getFullYear()
  const honap = String(hatar.getMonth() + 1).padStart(2, '0')
  const nap = String(hatar.getDate()).padStart(2, '0')
  return `${ev}-${honap}-${nap}`
}

function betoltotteATizennyolcat(szuletesiDatum: string): boolean {
  const resz = szuletesiDatum.trim().split('-')
  if (resz.length !== 3) return false
  const ev = Number(resz[0])
  const honap = Number(resz[1]) - 1
  const nap = Number(resz[2])
  if (!Number.isFinite(ev) || !Number.isFinite(honap) || !Number.isFinite(nap)) {
    return false
  }
  const szuletes = new Date(ev, honap, nap)
  if (Number.isNaN(szuletes.getTime())) return false
  if (szuletes.getFullYear() !== ev || szuletes.getMonth() !== honap || szuletes.getDate() !== nap) {
    return false
  }
  const ma = new Date()
  const tizennyolcEve = new Date(ma.getFullYear() - 18, ma.getMonth(), ma.getDate())
  return szuletes.getTime() <= tizennyolcEve.getTime()
}

/**
 * Az összes kötelező mezőt és feltöltést ellenőrzi.
 * Minden feltöltés kötelező, kivéve a Führungszeugnist, ha az erkölcsi bizonyítvány
 * státusza „Nem” vagy „Beszerzés alatt”.
 */
export function ellenorizUrlap(
  adat: UrlapAllapot,
  uzenetek: UrlapHibaUzenetek = alapUzenetek,
): UrlapHibak {
  const hibak: UrlapHibak = {}

  if (ures(adat.teljesNev)) hibak.teljesNev = uzenetek.kotelezo
  if (ures(adat.szuletesiDatum)) {
    hibak.szuletesiDatum = uzenetek.kotelezo
  } else if (!betoltotteATizennyolcat(adat.szuletesiDatum)) {
    hibak.szuletesiDatum = uzenetek.tizennyolcEv
  }
  if (ures(adat.telefon)) hibak.telefon = uzenetek.kotelezo
  if (ures(adat.email)) hibak.email = uzenetek.kotelezo
  else if (!emailErvenyes(adat.email)) hibak.email = uzenetek.email
  if (ures(adat.lakhely)) hibak.lakhely = uzenetek.kotelezo
  if (ures(adat.orszag)) hibak.orszag = uzenetek.valasztas

  if (ures(adat.bJogositvanyEve)) hibak.bJogositvanyEve = uzenetek.valasztas
  if (ures(adat.professzionalisEv)) hibak.professzionalisEv = uzenetek.valasztas
  if (ures(adat.soforkentNemetorszag)) hibak.soforkentNemetorszag = uzenetek.valasztas
  if (adat.korabbiTerulet.length === 0) hibak.korabbiTerulet = uzenetek.legalabbEgy
  if (
    adat.korabbiTerulet.includes(EGYEB_ERTEK) &&
    ures(adat.korabbiTeruletEgyeb)
  ) {
    hibak.korabbiTeruletEgyeb = uzenetek.egyeb
  }

  if (ures(adat.premiumTapasztalat)) hibak.premiumTapasztalat = uzenetek.valasztas
  if (adat.premiumMarkak.length === 0) hibak.premiumMarkak = uzenetek.legalabbEgy
  if (adat.premiumMarkak.includes(EGYEB_ERTEK) && ures(adat.premiumMarkaEgyeb)) {
    hibak.premiumMarkaEgyeb = uzenetek.egyeb
  }
  if (ures(adat.premiumGyakorisag)) hibak.premiumGyakorisag = uzenetek.valasztas
  if (ures(adat.automataValto)) hibak.automataValto = uzenetek.valasztas

  if (ures(adat.munkavallalasiJog)) hibak.munkavallalasiJog = uzenetek.valasztas
  if (ures(adat.nemetorszagiCim)) hibak.nemetorszagiCim = uzenetek.valasztas
  if (ures(adat.munkabaAllas)) hibak.munkabaAllas = uzenetek.valasztas
  if (ures(adat.rugalmassag)) hibak.rugalmassag = uzenetek.valasztas

  if (adat.jogositvanyKategoria.length === 0) {
    hibak.jogositvanyKategoria = uzenetek.legalabbEgy
  }
  if (adat.jogositvanyKategoria.includes(EGYEB_ERTEK) && ures(adat.jogositvanyEgyeb)) {
    hibak.jogositvanyEgyeb = uzenetek.egyeb
  }
  if (ures(adat.jogositvanyErvenyes)) hibak.jogositvanyErvenyes = uzenetek.valasztas
  if (ures(adat.eltiltas)) hibak.eltiltas = uzenetek.valasztas
  if (ures(adat.erkolesi)) hibak.erkolesi = uzenetek.valasztas

  if (ures(adat.nemetNyelv)) hibak.nemetNyelv = uzenetek.valasztas
  if (ures(adat.angolNyelv)) hibak.angolNyelv = uzenetek.valasztas

  if (ures(adat.okostelefon)) hibak.okostelefon = uzenetek.valasztas
  if (ures(adat.navigacio)) hibak.navigacio = uzenetek.valasztas
  if (ures(adat.gpsKovetes)) hibak.gpsKovetes = uzenetek.valasztas

  if (ures(adat.hosszuUt)) hibak.hosszuUt = uzenetek.valasztas
  if (ures(adat.hetvege)) hibak.hetvege = uzenetek.valasztas
  if (ures(adat.tobbnapos)) hibak.tobbnapos = uzenetek.valasztas
  if (ures(adat.hetiNapok)) hibak.hetiNapok = uzenetek.valasztas

  if (ures(adat.haromEvAktiv)) hibak.haromEvAktiv = uzenetek.valasztas
  if (ures(adat.haromEvProf)) hibak.haromEvProf = uzenetek.valasztas
  if (ures(adat.premiumSzuro)) hibak.premiumSzuro = uzenetek.valasztas
  if (ures(adat.biztonsagosVezetes)) hibak.biztonsagosVezetes = uzenetek.valasztas
  if (ures(adat.gondosKezeles)) hibak.gondosKezeles = uzenetek.valasztas
  if (ures(adat.ellenorzesElfogadas)) hibak.ellenorzesElfogadas = uzenetek.valasztas

  if (ures(adat.motivacio)) hibak.motivacio = uzenetek.kotelezo
  if (ures(adat.tapasztalatLeiras)) hibak.tapasztalatLeiras = uzenetek.kotelezo

  const kotelezoFeltoltesek: FeltoltesKulcs[] = [
    'szemelyi',
    'jogositvany',
    'fuehrungszeugnis',
    'oneletrajz',
    'profilkep',
    'referencia',
  ]

  for (const kulcs of kotelezoFeltoltesek) {
    if (
      kulcs === 'fuehrungszeugnis' &&
      (adat.erkolesi === 'Nem' || adat.erkolesi === 'Beszerzés alatt')
    ) {
      continue
    }
    const fajl = adat.feltoltesek[kulcs]
    if (!fajl) {
      hibak[`feltoltes.${kulcs}`] = uzenetek.fajl
      continue
    }
    const tipusHiba = ellenorizFeltoltesFajl(kulcs, fajl, uzenetek)
    if (tipusHiba) {
      hibak[`feltoltes.${kulcs}`] = tipusHiba
    }
  }

  if (!adat.adatvedelem) {
    hibak.adatvedelem = uzenetek.adatvedelem
  }
  if (!adat.hozzajarulas) {
    hibak.hozzajarulas = uzenetek.hozzajarulas
  }

  return hibak
}

export function urlapErvenyes(adat: UrlapAllapot) {
  return Object.keys(ellenorizUrlap(adat)).length === 0
}
