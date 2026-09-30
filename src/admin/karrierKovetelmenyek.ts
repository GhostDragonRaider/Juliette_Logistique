/**
 * A /karrier oldal „Kit keresünk?” blokkja alapján automatikusan ellenőrizhető követelmények.
 * A szubjektív pontokhoz a jelentkezési űrlap kapcsolódó mezői szolgálnak proxyként.
 */

export type KovetelmenyAllapot = 'megfelel' | 'nem_megfelel' | 'nem_ellenorizheto'

export type KovetelmenyEredmeny = {
  id: string
  cimke: string
  forras: string
  allapot: KovetelmenyAllapot
  mezok: string[]
  indok: string
}

export type KovetelmenyOsszegzes = {
  eredmenyek: KovetelmenyEredmeny[]
  teljesMegfeleles: boolean
  vanHiba: boolean
}

type KovetelmenyDef = {
  id: string
  cimke: string
  forras: string
  mezok: string[]
  ertekeles: (adat: Record<string, unknown>) => { allapot: KovetelmenyAllapot; indok: string }
}

function nyelvMegfelel(szint: unknown): boolean {
  return typeof szint === 'string' && szint !== '' && szint !== 'Egyáltalán nem'
}

function igenErtek(ertek: unknown): boolean {
  return ertek === 'Igen'
}

const KOVETELMENY_DEFINICIOK: KovetelmenyDef[] = [
  {
    id: 'b_jogositvany',
    cimke: 'Érvényes B jogosítvány (BE előny)',
    forras: 'Kit keresünk? – karrier oldal',
    mezok: ['jogositvanyKategoria', 'jogositvanyErvenyes', 'bJogositvanyEve'],
    ertekeles(adat) {
      const kat = adat.jogositvanyKategoria
      const kategoriak = Array.isArray(kat) ? kat.map(String) : []
      const vanB = kategoriak.some((k) => k === 'B' || k === 'BE' || k === 'C')
      if (!vanB) {
        return { allapot: 'nem_megfelel', indok: 'Nincs B / BE / C kategória a jelentkezésben.' }
      }
      if (adat.jogositvanyErvenyes !== 'Igen') {
        return { allapot: 'nem_megfelel', indok: 'A jogosítvány nincs érvényesnek jelölve.' }
      }
      if (adat.bJogositvanyEve === 'Nincs') {
        return { allapot: 'nem_megfelel', indok: 'Nincs B kategóriás jogosítvány tapasztalat.' }
      }
      return { allapot: 'megfelel', indok: 'Érvényes jogosítvány és tapasztalat rendben.' }
    },
  },
  {
    id: 'hozzaallas',
    cimke: 'Megbízható, precíz, ügyfélközpontú hozzáállás',
    forras: 'Kit keresünk? – karrier oldal (űrlap: biztonság, gondosság)',
    mezok: ['biztonsagosVezetes', 'gondosKezeles', 'ellenorzesElfogadas'],
    ertekeles(adat) {
      const kotelezo = ['biztonsagosVezetes', 'gondosKezeles', 'ellenorzesElfogadas'] as const
      const hianyzik = kotelezo.filter((k) => adat[k] === undefined || adat[k] === '')
      if (hianyzik.length > 0) {
        return { allapot: 'nem_ellenorizheto', indok: 'Hiányzó űrlapmezők a hozzáállás értékeléséhez.' }
      }
      const mindIgen = kotelezo.every((k) => igenErtek(adat[k]))
      if (!mindIgen) {
        return {
          allapot: 'nem_megfelel',
          indok: 'A biztonságos vezetés / gondos kezelés / ellenőrzés elfogadása nincs mind „Igen”.',
        }
      }
      return { allapot: 'megfelel', indok: 'A kapcsolódó mezők mind „Igen” értékűek.' }
    },
  },
  {
    id: 'tiszta_eloet',
    cimke: 'Tiszta előélet és gondos járműkezelés',
    forras: 'Kit keresünk? – karrier oldal',
    mezok: ['eltiltas', 'erkolesi', 'gondosKezeles'],
    ertekeles(adat) {
      if (!adat.eltiltas) {
        return { allapot: 'nem_ellenorizheto', indok: 'Nincs kitöltve az eltiltás kérdés.' }
      }
      if (adat.eltiltas !== 'Nem') {
        return { allapot: 'nem_megfelel', indok: 'Van eltiltás vagy súlyos szabálysértés jelölve.' }
      }
      if (!igenErtek(adat.gondosKezeles)) {
        return { allapot: 'nem_megfelel', indok: 'A gondos járműkezelés nincs „Igen”-ként jelölve.' }
      }
      return { allapot: 'megfelel', indok: 'Tiszta előélet és gondos kezelés a válaszok alapján rendben.' }
    },
  },
  {
    id: 'rugalmassag',
    cimke: 'Rugalmasság regionális és országos útvonalakra',
    forras: 'Kit keresünk? – karrier oldal',
    mezok: ['rugalmassag', 'hosszuUt', 'hetvege', 'tobbnapos'],
    ertekeles(adat) {
      const rug = adat.rugalmassag
      if (!rug) {
        return { allapot: 'nem_ellenorizheto', indok: 'Nincs kitöltve a rugalmasság mező.' }
      }
      if (rug === 'Csak a lakóhelyem közelében') {
        return { allapot: 'nem_megfelel', indok: 'Csak helyi munkavégzés vállalása – nem elég rugalmas.' }
      }
      const utazasRendben =
        rug === 'Németországon belül rugalmas vagyok' ||
        rug === 'Egész Németországban vállalok munkát'
      if (!utazasRendben) {
        return { allapot: 'nem_megfelel', indok: 'A rugalmasság válasz nem felel meg az elvárásnak.' }
      }
      return { allapot: 'megfelel', indok: 'Országos / regionális rugalmasság rendben.' }
    },
  },
  {
    id: 'nyelv',
    cimke: 'Alapszintű német és/vagy angol kommunikáció',
    forras: 'Kit keresünk? – karrier oldal',
    mezok: ['nemetNyelv', 'angolNyelv'],
    ertekeles(adat) {
      const de = nyelvMegfelel(adat.nemetNyelv)
      const en = nyelvMegfelel(adat.angolNyelv)
      if (!de && !en) {
        return {
          allapot: 'nem_megfelel',
          indok: 'Sem német, sem angol nyelv nem éri el az alapszintet.',
        }
      }
      return {
        allapot: 'megfelel',
        indok: de && en
          ? 'Német és angol is legalább alapszint.'
          : de
            ? 'Német legalább alapszint.'
            : 'Angol legalább alapszint.',
      }
    },
  },
]

/** API válasz → egy lapos mezőtérkép (mezok / adat). */
export function jelentkezesMezoTerkep(
  reszlet: Record<string, unknown>,
): Record<string, unknown> {
  const mezok =
    reszlet.mezok && typeof reszlet.mezok === 'object' && !Array.isArray(reszlet.mezok)
      ? (reszlet.mezok as Record<string, unknown>)
      : null
  const adat =
    reszlet.adat && typeof reszlet.adat === 'object' && !Array.isArray(reszlet.adat)
      ? (reszlet.adat as Record<string, unknown>)
      : null
  const bazis = mezok ?? adat ?? {}
  return { ...bazis, id: reszlet.id, erkezett: reszlet.erkezett, statusz: reszlet.statusz }
}

export function ertekelesJelentkezes(
  reszlet: Record<string, unknown>,
): KovetelmenyOsszegzes {
  const adat = jelentkezesMezoTerkep(reszlet)
  const eredmenyek: KovetelmenyEredmeny[] = KOVETELMENY_DEFINICIOK.map((def) => {
    const { allapot, indok } = def.ertekeles(adat)
    return {
      id: def.id,
      cimke: def.cimke,
      forras: def.forras,
      allapot,
      mezok: def.mezok,
      indok,
    }
  })

  const vanHiba = eredmenyek.some((e) => e.allapot === 'nem_megfelel')
  const teljesMegfeleles = eredmenyek.every((e) => e.allapot === 'megfelel')

  return { eredmenyek, teljesMegfeleles, vanHiba }
}

export type MezoKiemels = 'megfelel' | 'nem_megfelel' | null

/** Táblázat-sor háttér: zöld ha a kapcsolódó követelmény(ek) teljesülnek, piros ha nem. */
export function mezoKovetelmenyKiemels(
  mezoKulcs: string,
  reszlet: Record<string, unknown>,
): MezoKiemels {
  const adat = jelentkezesMezoTerkep(reszlet)
  const kapcsolodok = KOVETELMENY_DEFINICIOK.filter((d) => d.mezok.includes(mezoKulcs))
  if (kapcsolodok.length === 0) return null

  let vanPiros = false
  let mindZold = true
  for (const def of kapcsolodok) {
    const { allapot } = def.ertekeles(adat)
    if (allapot === 'nem_megfelel') vanPiros = true
    if (allapot !== 'megfelel') mindZold = false
  }
  if (vanPiros) return 'nem_megfelel'
  if (mindZold) return 'megfelel'
  return null
}

export type KovetelmenySzuro = 'osszes' | 'megfelel' | 'nem_megfelel' | 'reszben'

export function szuroIlleszkedik(
  szuro: KovetelmenySzuro,
  osszegzes: KovetelmenyOsszegzes,
): boolean {
  if (szuro === 'osszes') return true
  if (szuro === 'megfelel') return osszegzes.teljesMegfeleles
  if (szuro === 'nem_megfelel') return osszegzes.vanHiba
  if (szuro === 'reszben') {
    return !osszegzes.teljesMegfeleles && !osszegzes.vanHiba
  }
  return true
}
