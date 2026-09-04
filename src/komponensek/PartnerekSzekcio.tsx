import styled from '@emotion/styled'
import { partnerNevek } from '../adatok/fooldalAdatok'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

/** A partnerek szekció kerete */
const PartnerekKeret = styled.section`
  padding: 4.5rem 4vw;
  background: ${tema.hatter.fekete};
  text-align: center;
`

/** A szekció címe */
const SzekcioCim = styled.h2`
  margin-bottom: 2rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A partnernevek sora */
const PartnerSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.4rem 2.4rem;
`

/** Egy partnernév felirat */
const PartnerNev = styled.span`
  font-family: ${tema.betu.cim};
  font-size: clamp(0.95rem, 1.8vw, 1.25rem);
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(232, 212, 139, 0.72);
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: ${tema.szin.aranyVilagos};
    transform: translateY(-2px);
  }
`

/**
 * A partnerek tipográfikus logósorát jeleníti meg a kiválasztott nyelven.
 */
export function PartnerekSzekcio() {
  const { szoveg } = useNyelv()

  return (
    <PartnerekKeret className="partnerek-szekcio" id="partnerek">
      <SzekcioCim className="partnerek-cim">{szoveg.partnerekCim}</SzekcioCim>
      <PartnerSor className="partner-sor">
        {partnerNevek.map((nev) => (
          <PartnerNev key={nev} className="partner-nev">
            {nev}
          </PartnerNev>
        ))}
      </PartnerSor>
    </PartnerekKeret>
  )
}
