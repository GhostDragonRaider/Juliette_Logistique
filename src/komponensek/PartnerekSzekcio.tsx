import styled from '@emotion/styled'
import { partnerLogok } from '../adatok/fooldalAdatok'
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
  margin-bottom: 2.2rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.25rem, 3vw, 1.9rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A partner logók sora */
const PartnerSor = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem 2rem;
  list-style: none;

  @media (min-width: ${tema.szelesseg.mobil}) {
    gap: 2rem 3rem;
  }
`

/** Egy partner logó doboza */
const PartnerLogoDoboz = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  min-height: 64px;
  padding: 0.35rem;
  opacity: 0.88;
  transition: opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
      transform: translateY(-4px);
      filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.35));
    }
  }

  @media (min-width: ${tema.szelesseg.mobil}) {
    min-width: 150px;
    min-height: 72px;
  }
`

/** Maga a logó kép */
const PartnerLogoKep = styled.img`
  display: block;
  width: auto;
  max-width: min(170px, 36vw);
  height: clamp(40px, 7vw, 56px);
  object-fit: contain;
`

/**
 * A partnerek logósorát jeleníti meg a kiválasztott nyelven.
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

        <PartnerSor className="partner-logo-sor">
          {partnerLogok.map((partner) => (
            <PartnerLogoDoboz key={partner.azonosito} className="partner-logo-doboz">
              <PartnerLogoKep
                className="partner-logo-kep"
                src={partner.kep}
                alt={`${partner.nev} logo`}
                loading="lazy"
                decoding="async"
              />
            </PartnerLogoDoboz>
          ))}
        </PartnerSor>
      </BelsoTartalom>
    </PartnerekKeret>
  )
}
