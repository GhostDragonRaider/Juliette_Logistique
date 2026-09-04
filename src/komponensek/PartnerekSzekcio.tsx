import styled from '@emotion/styled'
import { partnerNevek } from '../adatok/fooldalAdatok'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

/** A partnerek szekció kerete */
const PartnerekKeret = styled.section`
  padding: clamp(3rem, 6vw, 4.5rem) ${tema.oldalsoPadding};
  background: ${tema.hatter.fekete};
  text-align: center;
`

/** Belső max szélességű tartalom */
const BelsoTartalom = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
`

/** A szekció címe */
const SzekcioCim = styled.h2`
  margin-bottom: 1.75rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.25rem, 3vw, 1.9rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A partnernevek sora */
const PartnerSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 1.6rem;

  @media (min-width: ${tema.szelesseg.mobil}) {
    gap: 1.4rem 2.4rem;
  }
`

/** Egy partnernév felirat */
const PartnerNev = styled.span`
  font-family: ${tema.betu.cim};
  font-size: clamp(0.85rem, 2.2vw, 1.25rem);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(232, 212, 139, 0.8);
  transition: color 0.25s ease, transform 0.25s ease;

  @media (hover: hover) {
    &:hover {
      color: ${tema.szin.aranyVilagos};
      transform: translateY(-2px);
    }
  }
`

/**
 * A partnerek tipográfikus logósorát jeleníti meg a kiválasztott nyelven.
 */
export function PartnerekSzekcio() {
  const { szoveg } = useNyelv()

  return (
    <PartnerekKeret
      className="partnerek-szekcio"
      id="partnerek"
      aria-labelledby="partnerek-cim"
    >
      <BelsoTartalom>
        <SzekcioCim className="partnerek-cim" id="partnerek-cim">
          {szoveg.partnerekCim}
        </SzekcioCim>
        <PartnerSor className="partner-sor">
          {partnerNevek.map((nev) => (
            <PartnerNev key={nev} className="partner-nev">
              {nev}
            </PartnerNev>
          ))}
        </PartnerSor>
      </BelsoTartalom>
    </PartnerekKeret>
  )
}
