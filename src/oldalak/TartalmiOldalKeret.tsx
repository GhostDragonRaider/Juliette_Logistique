import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Fejlec } from '../komponensek/Fejlec'
import { LablecSzekcio } from '../komponensek/LablecSzekcio'
import { SeoFej } from '../komponensek/SeoFej'
import { UgrasATartalomra } from '../komponensek/UgrasATartalomra'
import { tema } from '../stilusok/tema'

type SeoFeluliras = {
  cim?: string
  leiras?: string
  kulcsszavak?: string
}

type TartalmiOldalKeretTulajdonsagok = {
  children: ReactNode
  osztalyNev?: string
  seo?: SeoFeluliras
  /** Ha false, nem jelenik meg a lábléc (pl. kapcsolat oldal saját CTA-val). */
  mutatLablec?: boolean
}

/** Marketing aloldalak közös gyökér konténere */
const OldalKeret = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  background: ${tema.hatter.fekete};
  color: ${tema.szin.feher};
`

/** Fejléc alatti tartalom — sticky fejléc miatt felső térköz */
const Tartalom = styled.main`
  display: block;
  padding-top: clamp(4.75rem, 10vh, 6rem);
`

/**
 * Közös keret a Rólunk, Szolgáltatások, Partnerek és Kapcsolat aloldalakhoz.
 */
export function TartalmiOldalKeret({
  children,
  osztalyNev,
  seo,
  mutatLablec = true,
}: TartalmiOldalKeretTulajdonsagok) {
  return (
    <OldalKeret className={osztalyNev}>
      <SeoFej feluliras={seo} />
      <UgrasATartalomra />
      <Fejlec mindigSticky />
      <Tartalom className="tartalmi-oldal-tartalom" id="fo-tartalom">
        {children}
        {mutatLablec ? <LablecSzekcio /> : null}
      </Tartalom>
    </OldalKeret>
  )
}
