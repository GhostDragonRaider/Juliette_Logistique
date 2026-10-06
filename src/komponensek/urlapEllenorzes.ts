import type { UrlapAllapot, FeltoltesKulcs } from './urlapTipusok'
import { ellenorizFeltoltesFajl } from './urlapFajl'

export type UrlapHibak = Partial<Record<string, string>>

const KOTELEZO_UZENET = 'Ez a mező kötelező.'
const VALASZ_UZENET = 'Kérjük, válasszon egy lehetőséget.'
const LEGALABB_EGY_UZENET = 'Válasszon legalább egy lehetőséget.'
const EGYEB_UZENET = 'Kérjük, részletezze az „Egyéb” választ.'
const FAJL_UZENET = 'Dokumentum feltöltése kötelező.'
const EMAIL_UZENET = 'Érvényes e-mail-címet adjon meg.'
const TIZENNYOLC_EV_UZENET =
  'A jelentkezéshez legalább 18 évesnek kell lennie (a 18. életév betöltése kötelező).'

function ures(ertek: string) {
  return ertek.trim().length === 0
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

function emailErvenyes(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * Az összes kötelező mezőt és feltöltést ellenőrzi.
 * Minden feltöltés kötelező, kivéve a Führungszeugnist, ha az erkölcsi bizonyítvány
 * státusza „Nem” vagy „Beszerzés alatt”.
 */
export function ellenorizUrlap(adat: UrlapAllapot): UrlapHibak {
  const hibak: UrlapHibak = {}

  if (ures(adat.teljesNev)) hibak.teljesNev = KOTELEZO_UZENET
  if (ures(adat.szuletesiDatum)) {
    hibak.szuletesiDatum = KOTELEZO_UZENET
  } else if (!betoltotteATizennyolcat(adat.szuletesiDatum)) {
    hibak.szuletesiDatum = TIZENNYOLC_EV_UZENET
  }
  if (ures(adat.telefon)) hibak.telefon = KOTELEZO_UZENET
  if (ures(adat.email)) hibak.email = KOTELEZO_UZENET
  else if (!emailErvenyes(adat.email)) hibak.email = EMAIL_UZENET
  if (ures(adat.lakhely)) hibak.lakhely = KOTELEZO_UZENET
  if (ures(adat.orszag)) hibak.orszag = VALASZ_UZENET

  if (ures(adat.bJogositvanyEve)) hibak.bJogositvanyEve = VALASZ_UZENET
  if (ures(adat.professzionalisEv)) hibak.professzionalisEv = VALASZ_UZENET
  if (ures(adat.soforkentNemetorszag)) hibak.soforkentNemetorszag = VALASZ_UZENET
  if (adat.korabbiTerulet.length === 0) hibak.korabbiTerulet = LEGALABB_EGY_UZENET
  if (
    adat.korabbiTerulet.includes('Egyéb') &&
    ures(adat.korabbiTeruletEgyeb)
  ) {
    hibak.korabbiTeruletEgyeb = EGYEB_UZENET
  }

  if (ures(adat.premiumTapasztalat)) hibak.premiumTapasztalat = VALASZ_UZENET
  if (adat.premiumMarkak.length === 0) hibak.premiumMarkak = LEGALABB_EGY_UZENET
  if (adat.premiumMarkak.includes('Egyéb') && ures(adat.premiumMarkaEgyeb)) {
    hibak.premiumMarkaEgyeb = EGYEB_UZENET
  }
  if (ures(adat.premiumGyakorisag)) hibak.premiumGyakorisag = VALASZ_UZENET
  if (ures(adat.automataValto)) hibak.automataValto = VALASZ_UZENET

  if (ures(adat.munkavallalasiJog)) hibak.munkavallalasiJog = VALASZ_UZENET
  if (ures(adat.nemetorszagiCim)) hibak.nemetorszagiCim = VALASZ_UZENET
  if (ures(adat.munkabaAllas)) hibak.munkabaAllas = VALASZ_UZENET
  if (ures(adat.rugalmassag)) hibak.rugalmassag = VALASZ_UZENET

  if (adat.jogositvanyKategoria.length === 0) {
    hibak.jogositvanyKategoria = LEGALABB_EGY_UZENET
  }
  if (adat.jogositvanyKategoria.includes('Egyéb') && ures(adat.jogositvanyEgyeb)) {
    hibak.jogositvanyEgyeb = EGYEB_UZENET
  }
  if (ures(adat.jogositvanyErvenyes)) hibak.jogositvanyErvenyes = VALASZ_UZENET
  if (ures(adat.eltiltas)) hibak.eltiltas = VALASZ_UZENET
  if (ures(adat.erkolesi)) hibak.erkolesi = VALASZ_UZENET

  if (ures(adat.nemetNyelv)) hibak.nemetNyelv = VALASZ_UZENET
  if (ures(adat.angolNyelv)) hibak.angolNyelv = VALASZ_UZENET

  if (ures(adat.okostelefon)) hibak.okostelefon = VALASZ_UZENET
  if (ures(adat.navigacio)) hibak.navigacio = VALASZ_UZENET
  if (ures(adat.gpsKovetes)) hibak.gpsKovetes = VALASZ_UZENET

  if (ures(adat.hosszuUt)) hibak.hosszuUt = VALASZ_UZENET
  if (ures(adat.hetvege)) hibak.hetvege = VALASZ_UZENET
  if (ures(adat.tobbnapos)) hibak.tobbnapos = VALASZ_UZENET
  if (ures(adat.hetiNapok)) hibak.hetiNapok = VALASZ_UZENET

  if (ures(adat.haromEvAktiv)) hibak.haromEvAktiv = VALASZ_UZENET
  if (ures(adat.haromEvProf)) hibak.haromEvProf = VALASZ_UZENET
  if (ures(adat.premiumSzuro)) hibak.premiumSzuro = VALASZ_UZENET
  if (ures(adat.biztonsagosVezetes)) hibak.biztonsagosVezetes = VALASZ_UZENET
  if (ures(adat.gondosKezeles)) hibak.gondosKezeles = VALASZ_UZENET
  if (ures(adat.ellenorzesElfogadas)) hibak.ellenorzesElfogadas = VALASZ_UZENET

  if (ures(adat.motivacio)) hibak.motivacio = KOTELEZO_UZENET
  if (ures(adat.tapasztalatLeiras)) hibak.tapasztalatLeiras = KOTELEZO_UZENET

  const kotelezoFeltoltesek: FeltoltesKulcs[] = [
    'szemelyi',
    'jogositvany',
    'fuehrungszeugnis',
    'oneletrajz',
    'profilkep',
    'referencia',
  ]

  for (const kulcs of kotelezoFeltoltesek) {
    // Führungszeugnis: ha még nincs / beszerzés alatt, a fájl nem kötelező
    if (
      kulcs === 'fuehrungszeugnis' &&
      (adat.erkolesi === 'Nem' || adat.erkolesi === 'Beszerzés alatt')
    ) {
      continue
    }
    const fajl = adat.feltoltesek[kulcs]
    if (!fajl) {
      hibak[`feltoltes.${kulcs}`] = FAJL_UZENET
      continue
    }
    const tipusHiba = ellenorizFeltoltesFajl(kulcs, fajl)
    if (tipusHiba) {
      hibak[`feltoltes.${kulcs}`] = tipusHiba
    }
  }

  if (!adat.adatvedelem) {
    hibak.adatvedelem = 'Az adatvédelmi tájékoztató elfogadása kötelező.'
  }
  if (!adat.hozzajarulas) {
    hibak.hozzajarulas = 'A hozzájárulás megadása kötelező.'
  }

  return hibak
}

export function urlapErvenyes(adat: UrlapAllapot) {
  return Object.keys(ellenorizUrlap(adat)).length === 0
}
