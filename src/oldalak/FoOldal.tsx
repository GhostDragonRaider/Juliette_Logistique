import styled from '@emotion/styled'
import { Fejlec } from '../komponensek/Fejlec'
import { HosSzekcio } from '../komponensek/HosSzekcio'
import { ErtekekSav } from '../komponensek/ErtekekSav'
import { SzolgaltatasokSzekcio } from '../komponensek/SzolgaltatasokSzekcio'
import { RolunkSzekcio } from '../komponensek/RolunkSzekcio'
import { PartnerekSzekcio } from '../komponensek/PartnerekSzekcio'
import { LablecSzekcio } from '../komponensek/LablecSzekcio'
import { SeoFej } from '../komponensek/SeoFej'
import { UgrasATartalomra } from '../komponensek/UgrasATartalomra'
import { tema } from '../stilusok/tema'

/** A teljes főoldal gyökér konténere */
const FoOldalKeret = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  background: ${tema.hatter.fekete};
  color: ${tema.szin.feher};
`

/** A fő tartalmi terület */
const FoTartalom = styled.main`
  display: block;
`

/**
 * Összeállítja a Juliette Logistique főoldal összes szekcióját.
 */
export function FoOldal() {
  return (
    <FoOldalKeret className="fooldal-keret">
      {/* SEO meta adatok a kiválasztott nyelvhez */}
      <SeoFej />

      {/* Akadálymentes ugrás a tartalomra */}
      <UgrasATartalomra />

      {/* Fejléc: logo, menü, nyelv, telefon */}
      <Fejlec />

      <FoTartalom className="fo-tartalom" id="fo-tartalom">
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
      </FoTartalom>
    </FoOldalKeret>
  )
}
