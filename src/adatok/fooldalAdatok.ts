/**
 * A főoldalon megjelenő szövegek és adatok egy helyen.
 * Így később könnyű fordítani vagy módosítani a tartalmat.
 */

/** Egy navigációs link adatai */
export type NavigacioLink = {
  azonosito: string
  felirat: string
  cel: string
}

/** Egy érték / erősség a hero alatti sávban */
export type ErtekPont = {
  azonosito: string
  cim: string
  leiras: string
  ikon: 'pajzs' | 'csillag' | 'terkep' | 'gyemant' | 'kezetfogas'
}

/** Egy szolgáltatás kártya adatai */
export type Szolgaltatas = {
  azonosito: string
  cim: string
  leiras: string
  kep: string
  ikon: 'auto' | 'kulcs' | 'flotta' | 'ut' | 'europa' | 'kamera'
}

/** A fejléc navigációs linkjei */
export const navigacioLinkek: NavigacioLink[] = [
  { azonosito: 'kezdo', felirat: 'STARTSEITE', cel: '#kezdooldal' },
  { azonosito: 'rolunk', felirat: 'ÜBER UNS', cel: '#rolunk' },
  { azonosito: 'szolgaltatasok', felirat: 'LEISTUNGEN', cel: '#szolgaltatasok' },
  { azonosito: 'partnerek', felirat: 'PARTNER', cel: '#partnerek' },
  { azonosito: 'kapcsolat', felirat: 'KONTAKT', cel: '#kapcsolat' },
]

/** A nyelvek a fejlécben */
export const nyelvek = ['DE', 'FR', 'EN'] as const

/** Telefonszám a fejlécben és a kapcsolatnál */
export const telefonszam = '+49 157 35 88 47 88'

/** Hero szekció szövegei */
export const hosSzovegek = {
  markaNev: 'JULIETTE LOGISTIQUE',
  alcim: 'PREMIUM FAHRZEUGÜBERFÜHRUNG & LOGISTIK',
  mottó: 'ZUVERLÄSSIG. SICHER. PÜNKTLICH.',
  elsodlegesGomb: 'TRANSPORT ANFRAGEN',
  masodlagosGomb: 'MEHR ÜBER UNS',
}

/** Értékek / bizalmi sáv */
export const ertekPontok: ErtekPont[] = [
  {
    azonosito: 'biztonsag',
    cim: 'SICHERHEIT',
    leiras: 'Höchste Priorität bei jedem Transport',
    ikon: 'pajzs',
  },
  {
    azonosito: 'tapasztalat',
    cim: '5+ JAHRE ERFAHRUNG',
    leiras: 'Professionelle Fahrzeuglogistik',
    ikon: 'csillag',
  },
  {
    azonosito: 'lefedettseg',
    cim: 'DEUTSCHLANDWEIT & EUROPAWEIT',
    leiras: 'Zuverlässige Streckenplanung',
    ikon: 'terkep',
  },
  {
    azonosito: 'premium',
    cim: 'PREMIUM SERVICE',
    leiras: 'Persönliche Betreuung',
    ikon: 'gyemant',
  },
  {
    azonosito: 'partnerek',
    cim: 'VERLÄSSLICHE PARTNER',
    leiras: 'Starke Netzwerke',
    ikon: 'kezetfogas',
  },
]

/** Szolgáltatások a főoldalon */
export const szolgaltatasok: Szolgaltatas[] = [
  {
    azonosito: 'sajat-kerekeken',
    cim: 'ÜBERFÜHRUNG AUF EIGENEN RÄDERN',
    leiras: 'Sichere Fahrzeugüberführung mit erfahrenen Fahrern.',
    kep: '/kepek/szolgaltatas-szallitas.png',
    ikon: 'auto',
  },
  {
    azonosito: 'atvetel',
    cim: 'ABHOLUNG & ZUSTELLUNG',
    leiras: 'Flexible Termine und pünktliche Übergabe.',
    kep: '/kepek/szolgaltatas-atvetel.png',
    ikon: 'kulcs',
  },
  {
    azonosito: 'flotta',
    cim: 'HÄNDLER- & FLOTTENTRANSPORTE',
    leiras: 'Effiziente Lösungen für Händler und Flotten.',
    kep: '/kepek/szolgaltatas-flotta.png',
    ikon: 'flotta',
  },
  {
    azonosito: 'tavolsag',
    cim: 'KURZ- & LANGSTRECKE',
    leiras: 'Von regionalen Fahrten bis europaweite Routen.',
    kep: '/kepek/szolgaltatas-tavolsag.png',
    ikon: 'ut',
  },
  {
    azonosito: 'europa',
    cim: 'BUNDESWEIT & EUROPAWEIT',
    leiras: 'Zuverlässige Logistik über Ländergrenzen hinweg.',
    kep: '/kepek/szolgaltatas-europa.png',
    ikon: 'europa',
  },
  {
    azonosito: 'dokumentacio',
    cim: 'FOTODOKUMENTATION',
    leiras: 'Transparente Übergabe mit vollständiger Dokumentation.',
    kep: '/kepek/szolgaltatas-dokumentacio.png',
    ikon: 'kamera',
  },
]

/** Rólunk szekció szövegei */
export const rolunkSzovegek = {
  cim: 'LEIDENSCHAFT FÜR FAHRZEUGE. VERANTWORTUNG FÜR IHREN ERFOLG.',
  bekezdes:
    'Juliette Logistique steht für Premium-Fahrzeugüberführung und maßgeschneiderte Logistik. Wir verbinden Präzision, Sicherheit und persönlichen Service — für Händler, Flotten und anspruchsvolle Privatkunden.',
  pontok: [
    'Erfahrene Fahrer',
    'Moderne Prozesse',
    'Transparente Abläufe',
    'Persönlicher Kontakt',
  ],
  gomb: 'MEHR ÜBER UNS',
}

/** Partnernevek a logósorhoz */
export const partnerNevek = ['SIXT', 'EUROPCAR', 'AVIS', 'KROSCHKE', 'FINN']

/** Lábléc CTA szövegei */
export const lablecSzovegek = {
  kerdes: 'BEREIT ZUR ZUSAMMENARBEIT?',
  gomb: 'KONTAKT AUFNEHMEN',
}
