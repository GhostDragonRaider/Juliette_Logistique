import styled from '@emotion/styled'
import { AranyIkon } from './AranyIkon'
import { PremiumSzam } from './PremiumSzam'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, revealAlap } from '../stilusok/tema'

/** Teljes szélességű háttérsáv */
const ErtekekHatter = styled.section`
  background: rgba(27, 27, 27, 0.85);
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
  padding: clamp(2.2rem, 5vw, 3rem) ${tema.oldalsoPadding};
  ${revealAlap}

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
  gap: 0.7rem;
  padding: 0.5rem 0.25rem;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
    }
  }
`

/** Nagy prémium szám / cím */
const ErtekCim = styled.h3`
  font-family: ${tema.betu.cim};
  font-size: clamp(0.92rem, 2vw, 1.08rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
  line-height: 1.25;
`

/** Az érték rövid leírása */
const ErtekLeiras = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 0.88rem);
  color: ${tema.szin.szurke};
`

/**
 * A címben lévő számokat PremiumSzam stílussal emeli ki.
 */
function ertekCimSzamokkal(cim: string) {
  const reszek = cim.split(/(\d+\+?)/g)
  return reszek.map((resz, index) => {
    if (/^\d+\+?$/.test(resz)) {
      return (
        <PremiumSzam key={`${resz}-${index}`} className="ertek-premium-szam">
          <span style={{ fontSize: '1.35em' }}>{resz}</span>
        </PremiumSzam>
      )
    }
    return <span key={`${resz}-${index}`}>{resz}</span>
  })
}

/**
 * Az öt bizalmi / értékpontot jeleníti meg nagyobb prémium számokkal.
 */
export function ErtekekSav() {
  const { szoveg } = useNyelv()
  const { referencia, lathato } = useScrollReveal<HTMLDivElement>(0.15)

  return (
    <ErtekekHatter className="ertekek-sav" aria-label={szoveg.ertekekAria}>
      <ErtekekKeret
        ref={referencia}
        className={`ertekek-keret${lathato ? ' lathato' : ''}`}
      >
        {szoveg.ertekek.map((pont) => (
          <ErtekKartya key={pont.azonosito} className="ertek-kartya">
            <AranyIkon tipus={pont.ikon} meret={34} className="ertek-ikon" />
            <ErtekCim className="ertek-cim">{ertekCimSzamokkal(pont.cim)}</ErtekCim>
            <ErtekLeiras className="ertek-leiras">{pont.leiras}</ErtekLeiras>
          </ErtekKartya>
        ))}
      </ErtekekKeret>
    </ErtekekHatter>
  )
}
