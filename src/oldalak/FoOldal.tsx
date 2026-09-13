import styled from '@emotion/styled'
import { Fejlec } from '../komponensek/Fejlec'
import { HosSzekcio } from '../komponensek/HosSzekcio'
import { ErtekekSav } from '../komponensek/ErtekekSav'
import { SzolgaltatasokSzekcio } from '../komponensek/SzolgaltatasokSzekcio'
import { HogyanDolgozunkSzekcio } from '../komponensek/HogyanDolgozunkSzekcio'
import { RolunkSzekcio } from '../komponensek/RolunkSzekcio'
import { IdezetSzekcio } from '../komponensek/IdezetSzekcio'
import { PartnerekSzekcio } from '../komponensek/PartnerekSzekcio'
import { ZaroKepSzekcio } from '../komponensek/ZaroKepSzekcio'
import { LablecSzekcio } from '../komponensek/LablecSzekcio'
import { SeoFej } from '../komponensek/SeoFej'
import { UgrasATartalomra } from '../komponensek/UgrasATartalomra'
import { ScrollHaladas } from '../komponensek/ScrollHaladas'
import { BetoltoKepernyo } from '../komponensek/BetoltoKepernyo'
import { tema } from '../stilusok/tema'

/** A teljes főoldal gyökér konténere */
const FoOldalKeret = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  background: transparent;
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
      {/* Prémium betöltő + scroll progress */}
      <BetoltoKepernyo />
      <ScrollHaladas />

      {/* SEO meta adatok a kiválasztott nyelvhez */}
      <SeoFej />

      {/* Akadálymentes ugrás a tartalomra */}
      <UgrasATartalomra />

      {/* Fejléc: sticky üveg, logo, menü, nyelv, telefon */}
      <Fejlec />

      <FoTartalom className="fo-tartalom" id="fo-tartalom">
        {/* Hero: Ken Burns + light sweep + parallax */}
        <HosSzekcio />

        {/* Bizalmi / értékek sáv */}
        <ErtekekSav />

        {/* Szolgáltatások rács */}
        <SzolgaltatasokSzekcio />

        {/* Hogyan dolgozunk — 01–03 */}
        <HogyanDolgozunkSzekcio />

        {/* Rólunk: kép + szöveg */}
        <RolunkSzekcio />

        {/* Ügyfélidézet */}
        <IdezetSzekcio />

        {/* Partnerek */}
        <PartnerekSzekcio />

        {/* Full-bleed záró kép CTA */}
        <ZaroKepSzekcio />

        {/* Lábléc */}
        <LablecSzekcio />
      </FoTartalom>
    </FoOldalKeret>
  )
}
