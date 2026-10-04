import { SzolgaltatasokSzekcio } from '../komponensek/SzolgaltatasokSzekcio'
import { RolunkSzekcio } from '../komponensek/RolunkSzekcio'
import { PartnerekSzekcio } from '../komponensek/PartnerekSzekcio'
import { LablecSzekcio } from '../komponensek/LablecSzekcio'
import { useNyelv } from '../nyelv/useNyelv'
import { TartalmiOldalKeret } from './TartalmiOldalKeret'

/**
 * Rólunk tartalom külön URL-en (/rolunk).
 */
export function RolunkOldal() {
  const { szoveg } = useNyelv()

  return (
    <TartalmiOldalKeret
      osztalyNev="rolunk-oldal"
      seo={{
        cim: `${szoveg.rolunk.cim} | Juliette Logistique`,
        leiras: szoveg.rolunk.bekezdes,
      }}
    >
      <RolunkSzekcio />
    </TartalmiOldalKeret>
  )
}

/**
 * Szolgáltatások tartalom külön URL-en (/szolgaltatasok).
 */
export function SzolgaltatasokOldal() {
  const { szoveg } = useNyelv()

  return (
    <TartalmiOldalKeret
      osztalyNev="szolgaltatasok-oldal"
      seo={{
        cim: `${szoveg.szolgaltatasokCim} | Juliette Logistique`,
        leiras: szoveg.seo.leiras,
      }}
    >
      <SzolgaltatasokSzekcio />
    </TartalmiOldalKeret>
  )
}

/**
 * Partnerek tartalom külön URL-en (/partnerek).
 */
export function PartnerekOldal() {
  const { szoveg } = useNyelv()

  return (
    <TartalmiOldalKeret
      osztalyNev="partnerek-oldal"
      seo={{
        cim: `${szoveg.partnerekCim} | Juliette Logistique`,
        leiras: szoveg.seo.leiras,
      }}
    >
      <PartnerekSzekcio />
    </TartalmiOldalKeret>
  )
}

/**
 * Kapcsolatfelvétel külön URL-en (/kapcsolat).
 */
export function KapcsolatOldal() {
  const { szoveg } = useNyelv()

  return (
    <TartalmiOldalKeret
      osztalyNev="kapcsolat-oldal"
      mutatLablec={false}
      seo={{
        cim: `${szoveg.lablec.kerdes} | Juliette Logistique`,
        leiras: szoveg.seo.leiras,
      }}
    >
      <LablecSzekcio />
    </TartalmiOldalKeret>
  )
}
