/**
 * Nyelvfüggetlen állandó adatok a főoldalhoz.
 */

/** Telefonszám a fejlécben és a kapcsolatnál */
export const telefonszam = '+49 157 35 88 47 88'

/** Egy partner logó adatai */
export type PartnerLogo = {
  azonosito: string
  nev: string
  kep: string
}

/** Partner logók a főoldali logósorhoz */
export const partnerLogok: PartnerLogo[] = [
  {
    azonosito: 'sixt',
    nev: 'SIXT',
    kep: '/kepek/partnerek/sixt.png',
  },
  {
    azonosito: 'europcar',
    nev: 'Europcar',
    kep: '/kepek/partnerek/europcar.png',
  },
  {
    azonosito: 'avis',
    nev: 'Avis',
    kep: '/kepek/partnerek/avis.png',
  },
  {
    azonosito: 'kroschke',
    nev: 'Kroschke',
    kep: '/kepek/partnerek/kroschke.png',
  },
  {
    azonosito: 'finn',
    nev: 'FINN',
    kep: '/kepek/partnerek/finn.png',
  },
]
