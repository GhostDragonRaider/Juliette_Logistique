import styled from '@emotion/styled'
import { Fejlec } from '../komponensek/Fejlec'
import { HosSzekcio } from '../komponensek/HosSzekcio'
import { ErtekekSav } from '../komponensek/ErtekekSav'
import { SzolgaltatasokSzekcio } from '../komponensek/SzolgaltatasokSzekcio'
import { RolunkSzekcio } from '../komponensek/RolunkSzekcio'
import { PartnerekSzekcio } from '../komponensek/PartnerekSzekcio'
import { LablecSzekcio } from '../komponensek/LablecSzekcio'
import { tema } from '../stilusok/tema'

/** A teljes főoldal gyökér konténere */
const FoOldalKeret = styled.main`
  min-height: 100vh;
  background: ${tema.hatter.fekete};
  color: ${tema.szin.feher};
`

/**
 * Összeállítja a Juliette Logistique főoldal összes szekcióját.
 */
export function FoOldal() {
  return (
    <FoOldalKeret className="fooldal-keret">
      {/* Fejléc: logo, menü, nyelv, telefon */}
      <Fejlec />

      {/* Hero: háttérkép + márkanév + CTA */}
      <HosSzekcio />

      {/* Bizalmi / értékek sáv */}
      <ErtekekSav />

      {/* Szolgáltatások rács */}
      <SzolgaltatasokSzekcio />

      {/* Rólunk: kép + szöveg */}
      <RolunkSzekcio />

      {/* Partnerek */}
      <PartnerekSzekcio />

      {/* Kapcsolat CTA + lábléc */}
      <LablecSzekcio />
    </FoOldalKeret>
  )
}
