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
