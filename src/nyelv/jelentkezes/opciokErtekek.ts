/** Kanonikus űrlapértékek — mindig ezek kerülnek mentésre (admin kompatibilitás). */

export const EGYEB_ERTEK = 'Egyéb'

export const ORSZAG_ERTEKEK = [
  'Németország',
  'Magyarország',
  'Ausztria',
  'Lengyelország',
  'Csehország',
  'Szlovákia',
  'Románia',
  'Hollandia',
  'Belgium',
  'Franciaország',
  'Egyéb',
] as const

export const IGEN_NEM = ['Igen', 'Nem'] as const

export const B_JOGOSITVANY_EV = [
  'Kevesebb mint 1 év',
  '1–2 év',
  '3–5 év',
  'Több mint 5 év',
] as const

export const PROF_EV = ['Nincs', '1–2 év', '3–5 év', 'Több mint 5 év'] as const

export const KORABBI_TERULET = [
  'Személyszállítás',
  'Fahrzeugüberführung / autóátadás',
  'VIP- vagy luxus személyszállítás',
  'Autókölcsönző',
  'Taxi',
  'Futár / kiszállítás',
  EGYEB_ERTEK,
] as const

export const PREMIUM_MARKAK = [
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Porsche',
  'Bentley',
  'Lamborghini',
  'Ferrari',
  'Range Rover',
  EGYEB_ERTEK,
] as const

export const PREMIUM_GYAKORISAG = ['Alkalmanként', 'Rendszeresen', 'Naponta'] as const

export const MUNKABA_ALLAS = [
  'Azonnal',
  '1 héten belül',
  '2 héten belül',
  '1 hónapon belül',
  'Később',
] as const

export const RUGALMASSAG = [
  'Csak a lakóhelyem közelében',
  'Németországon belül rugalmas vagyok',
  'Egész Németországban vállalok munkát',
] as const

export const JOGOSITVANY_KATEGORIA = ['B', 'BE', 'C', EGYEB_ERTEK] as const

export const ERKOLESI = ['Igen', 'Nem', 'Beszerzés alatt'] as const

export const NYELV_SZINT = [
  'Egyáltalán nem',
  'Alapszint',
  'Kommunikációs szint',
  'Jó',
  'Anyanyelvi szint',
] as const

export const HETVEGE = ['Igen', 'Nem', 'Esetenként'] as const

export const HETI_NAPOK = ['2–3 nap', '4 nap', '5 nap', '6 vagy több nap'] as const
