import styled from '@emotion/styled'
import { AranyIkon } from './AranyIkon'
import { useNyelv } from '../nyelv/useNyelv'
import { tema } from '../stilusok/tema'

/** Az értékek vízszintes sávja */
const ErtekekKeret = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2.2rem 4vw;
  background: ${tema.hatter.sotet};
  border-top: 1px solid rgba(201, 162, 39, 0.18);
  border-bottom: 1px solid rgba(201, 162, 39, 0.18);

  @media (min-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: repeat(2, 1fr);
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
  gap: 0.7rem;
  padding: 0.35rem 0.25rem;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

/** Az érték címe */
const ErtekCim = styled.h3`
  font-family: ${tema.betu.cim};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

/** Az érték rövid leírása */
const ErtekLeiras = styled.p`
  font-size: 0.82rem;
  color: ${tema.szin.szurke};
`

/**
 * Az öt bizalmi / értékpontot jeleníti meg a kiválasztott nyelven.
 */
export function ErtekekSav() {
  const { szoveg } = useNyelv()

  return (
    <ErtekekKeret className="ertekek-sav" aria-label={szoveg.ertekekAria}>
      {szoveg.ertekek.map((pont) => (
        <ErtekKartya key={pont.azonosito} className="ertek-kartya">
          <AranyIkon tipus={pont.ikon} meret={30} className="ertek-ikon" />
          <ErtekCim className="ertek-cim">{pont.cim}</ErtekCim>
          <ErtekLeiras className="ertek-leiras">{pont.leiras}</ErtekLeiras>
        </ErtekKartya>
      ))}
    </ErtekekKeret>
  )
}
