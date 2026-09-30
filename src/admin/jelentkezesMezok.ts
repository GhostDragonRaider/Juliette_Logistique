/** Űrlapmezők megjelenítési címkéi az admin táblázathoz. */
export const JELENTKEZES_MEZO_CIMKEK: Record<string, string> = {
  id: 'Azonosító',
  erkezett: 'Beérkezés ideje',
  statusz: 'Státusz',
  nev: 'Név (lista)',
  teljesNev: 'Teljes név',
  szuletesiDatum: 'Születési dátum',
  telefon: 'Telefonszám',
  email: 'E-mail',
  lakhely: 'Lakhely',
  orszag: 'Ország',
  bJogositvanyEve: 'B jogosítvány éve',
  professzionalisEv: 'Professzionális tapasztalat',
  soforkentNemetorszag: 'Sofőrként Németországban',
  korabbiTerulet: 'Korábbi területek',
  korabbiTeruletEgyeb: 'Korábbi terület (egyéb)',
  premiumTapasztalat: 'Prémium tapasztalat',
  premiumMarkak: 'Prémium márkák',
  premiumMarkaEgyeb: 'Prémium márka (egyéb)',
  premiumGyakorisag: 'Prémium gyakoriság',
  automataValto: 'Automata váltó',
  munkavallalasiJog: 'Munkavállalási jog',
  nemetorszagiCim: 'Németországi cím',
  munkabaAllas: 'Munkába állás',
  rugalmassag: 'Rugalmasság',
  jogositvanyKategoria: 'Jogosítvány kategória',
  jogositvanyEgyeb: 'Jogosítvány (egyéb)',
  jogositvanyErvenyes: 'Érvényes jogosítvány',
  eltiltas: 'Eltiltás / szabálysértés',
  erkolesi: 'Erkölcsi bizonyítvány',
  nemetNyelv: 'Német nyelv',
  angolNyelv: 'Angol nyelv',
  okostelefon: 'Okostelefon',
  navigacio: 'Navigáció',
  gpsKovetes: 'GPS követés',
  hosszuUt: 'Hosszú út',
  hetvege: 'Hétvége',
  tobbnapos: 'Többnapos utak',
  hetiNapok: 'Heti napok',
  utazasMod: 'Utazás módja',
  haromEvAktiv: '3 év aktív vezetés',
  haromEvProf: '3 év profi tapasztalat',
  premiumSzuro: 'Prémium szűrő',
  biztonsagosVezetes: 'Biztonságos vezetés',
  gondosKezeles: 'Gondos kezelés',
  ellenorzesElfogadas: 'Ellenőrzés elfogadása',
  motivacio: 'Motiváció',
  tapasztalatLeiras: 'Tapasztalat leírása',
  adatvedelem: 'Adatvédelmi tájékoztató',
  hozzajarulas: 'Hozzájárulás',
}

const META_KULCSOK = new Set([
  'id',
  'erkezett',
  'statusz',
  'nev',
  'telefon',
  'email',
  'adat',
  'mezok',
  'fajlok',
  'feltoltesek',
])

export function mezoCimke(kulcs: string): string {
  return JELENTKEZES_MEZO_CIMKEK[kulcs] ?? kulcs
}

export function ertekSzoveg(ertek: unknown): string {
  if (ertek === null || ertek === undefined || ertek === '') return '—'
  if (typeof ertek === 'boolean') return ertek ? 'Igen' : 'Nem'
  if (Array.isArray(ertek)) return ertek.length ? ertek.join(', ') : '—'
  return String(ertek)
}

export type TablaSor = { kulcs: string; cimke: string; ertek: string }

export function jelentkezesTablaSorok(reszlet: Record<string, unknown>): TablaSor[] {
  const sorok: TablaSor[] = []

  const meta: Array<[string, unknown]> = [
    ['id', reszlet.id],
    ['erkezett', reszlet.erkezett],
    ['statusz', reszlet.statusz],
    ['nev', reszlet.nev],
    ['telefon', reszlet.telefon],
    ['email', reszlet.email],
  ]

  for (const [kulcs, ertek] of meta) {
    if (ertek !== undefined && ertek !== null && ertek !== '') {
      let szoveg = ertekSzoveg(ertek)
      if (kulcs === 'erkezett' && typeof ertek === 'string') {
        const datum = new Date(ertek)
        if (!Number.isNaN(datum.getTime())) {
          szoveg = datum.toLocaleString('hu-HU')
        }
      }
      sorok.push({ kulcs, cimke: mezoCimke(kulcs), ertek: szoveg })
    }
  }

  const mezoBlokk =
    reszlet.mezok && typeof reszlet.mezok === 'object' && !Array.isArray(reszlet.mezok)
      ? (reszlet.mezok as Record<string, unknown>)
      : reszlet.adat && typeof reszlet.adat === 'object' && !Array.isArray(reszlet.adat)
        ? (reszlet.adat as Record<string, unknown>)
        : null

  if (mezoBlokk) {
    for (const [kulcs, ertek] of Object.entries(mezoBlokk)) {
      if (kulcs === 'feltoltesek') continue
      sorok.push({ kulcs, cimke: mezoCimke(kulcs), ertek: ertekSzoveg(ertek) })
    }
  } else {
    for (const [kulcs, ertek] of Object.entries(reszlet)) {
      if (META_KULCSOK.has(kulcs)) continue
      sorok.push({ kulcs, cimke: mezoCimke(kulcs), ertek: ertekSzoveg(ertek) })
    }
  }

  return sorok
}

export type JelentkezesSzekcio = {
  id: string
  cim: string
  sorok: TablaSor[]
}

/** Űrlap-szekciók szerinti csoportosítás a prémium oszlopos nézethez. */
export const SZEKCIO_MEZOK: { id: string; cim: string; mezok: string[] }[] = [
  {
    id: 'beerkezes',
    cim: 'Beérkezés',
    mezok: ['id', 'erkezett', 'statusz', 'nev', 'telefon', 'email'],
  },
  {
    id: 'szemelyes',
    cim: 'Személyes adatok',
    mezok: ['teljesNev', 'szuletesiDatum', 'lakhely', 'orszag'],
  },
  {
    id: 'vezetes',
    cim: 'Vezetési tapasztalat',
    mezok: [
      'bJogositvanyEve',
      'professzionalisEv',
      'soforkentNemetorszag',
      'korabbiTerulet',
      'korabbiTeruletEgyeb',
    ],
  },
  {
    id: 'premium',
    cim: 'Prémium tapasztalat',
    mezok: [
      'premiumTapasztalat',
      'premiumMarkak',
      'premiumMarkaEgyeb',
      'premiumGyakorisag',
      'automataValto',
    ],
  },
  {
    id: 'nemetorszag',
    cim: 'Németországi munkavégzés',
    mezok: ['munkavallalasiJog', 'nemetorszagiCim', 'munkabaAllas', 'rugalmassag'],
  },
  {
    id: 'jogositvany',
    cim: 'Jogosítvány és előélet',
    mezok: [
      'jogositvanyKategoria',
      'jogositvanyEgyeb',
      'jogositvanyErvenyes',
      'eltiltas',
      'erkolesi',
    ],
  },
  {
    id: 'nyelv',
    cim: 'Nyelvtudás',
    mezok: ['nemetNyelv', 'angolNyelv'],
  },
  {
    id: 'keszsegek',
    cim: 'Munkavégzéshez szükséges készségek',
    mezok: ['okostelefon', 'navigacio', 'gpsKovetes'],
  },
  {
    id: 'feltetelek',
    cim: 'Munkavállalási feltételek',
    mezok: ['hosszuUt', 'hetvege', 'tobbnapos', 'hetiNapok', 'utazasMod'],
  },
  {
    id: 'szurok',
    cim: 'Fontos szűrőkérdések',
    mezok: [
      'haromEvAktiv',
      'haromEvProf',
      'premiumSzuro',
      'biztonsagosVezetes',
      'gondosKezeles',
      'ellenorzesElfogadas',
    ],
  },
  {
    id: 'motivacio',
    cim: 'Motiváció',
    mezok: ['motivacio', 'tapasztalatLeiras'],
  },
  {
    id: 'hozzajarulas',
    cim: 'Hozzájárulások',
    mezok: ['adatvedelem', 'hozzajarulas'],
  },
]

export function jelentkezesSzekcioCsoportok(reszlet: Record<string, unknown>): JelentkezesSzekcio[] {
  const sorok = jelentkezesTablaSorok(reszlet)
  const sorMap = new Map(sorok.map((s) => [s.kulcs, s]))
  const hasznalt = new Set<string>()
  const szekciok: JelentkezesSzekcio[] = []

  for (const def of SZEKCIO_MEZOK) {
    const blokk: TablaSor[] = []
    for (const kulcs of def.mezok) {
      const sor = sorMap.get(kulcs)
      if (sor) {
        blokk.push(sor)
        hasznalt.add(kulcs)
      }
    }
    if (blokk.length > 0) {
      szekciok.push({ id: def.id, cim: def.cim, sorok: blokk })
    }
  }

  const egyeb = sorok.filter((s) => !hasznalt.has(s.kulcs))
  if (egyeb.length > 0) {
    szekciok.push({ id: 'egyeb', cim: 'További adatok', sorok: egyeb })
  }

  return szekciok
}
