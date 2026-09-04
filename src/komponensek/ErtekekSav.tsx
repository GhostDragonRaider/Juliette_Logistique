import styled from '@emotion/styled'
import { AranyIkon } from './AranyIkon'
import { premiumSzamokkal } from './premiumSzamokkal'
import { useNyelv } from '../nyelv/useNyelv'
import { tema } from '../stilusok/tema'

/** Teljes szélességű háttérsáv */
const ErtekekHatter = styled.section`
  background: ${tema.hatter.sotet};
  border-top: 1px solid rgba(197, 165, 114, 0.16);
  border-bottom: 1px solid rgba(197, 165, 114, 0.16);
`

/** Az értékek belső rácsa */
const ErtekekKeret = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
  padding: 2rem ${tema.oldalsoPadding};

  @media (min-width: ${tema.szelesseg.kicsi}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }
`

/** Egy értékpont doboza */
const ErtekKartya = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.5rem 0.25rem;
  transition: transform 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`

/** Az érték címe */
const ErtekCim = styled.h3`
  font-family: ${tema.betu.cim};
  font-size: clamp(0.78rem, 1.5vw, 0.88rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

/** Az érték rövid leírása */
const ErtekLeiras = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 0.88rem);
  color: ${tema.szin.szurke};
`

/**
 * Az öt bizalmi / értékpontot jeleníti meg a kiválasztott nyelven.
 */
export function ErtekekSav() {
  const { szoveg } = useNyelv()

  return (
    <ErtekekHatter className="ertekek-sav" aria-label={szoveg.ertekekAria}>
      <ErtekekKeret className="ertekek-keret">
        {szoveg.ertekek.map((pont) => (
          <ErtekKartya key={pont.azonosito} className="ertek-kartya">
            <AranyIkon tipus={pont.ikon} meret={30} className="ertek-ikon" />
            <ErtekCim className="ertek-cim">{premiumSzamokkal(pont.cim)}</ErtekCim>
            <ErtekLeiras className="ertek-leiras">{pont.leiras}</ErtekLeiras>
          </ErtekKartya>
        ))}
      </ErtekekKeret>
    </ErtekekHatter>
  )
}
