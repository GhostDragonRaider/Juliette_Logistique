import styled from '@emotion/styled'
import { partnerLogok } from '../adatok/fooldalAdatok'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet, revealAlap } from '../stilusok/tema'

/** A partnerek szekció kerete */
const PartnerekKeret = styled.section`
  padding: clamp(3rem, 6vw, 4.5rem) ${tema.oldalsoPadding};
  background: transparent;
  text-align: center;
`

/** Belső max szélességű tartalom */
const BelsoTartalom = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
  ${revealAlap}
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

/** A partner logók sora — középre igazítva */
const PartnerSor = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.75rem 2.25rem;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @media (min-width: ${tema.szelesseg.mobil}) {
    gap: 2.25rem 3.25rem;
  }
`

/** Egy partner logó doboza — arany monokróm → szín hoverre */
const PartnerLogoDoboz = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 18vw, 170px);
  height: clamp(56px, 9vw, 72px);
  margin: 0;
  padding: 0;
  background: transparent;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
    }

    &:hover img {
      filter: none;
      opacity: 1;
    }
  }
`

/** Maga a logó kép — alapból arany monokróm */
const PartnerLogoKep = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  object-fit: contain;
  object-position: center;
  background: transparent;
  opacity: 0.78;
  filter: grayscale(1) brightness(1.15) sepia(0.55) hue-rotate(5deg) saturate(1.4);
  transition: filter 0.4s ease, opacity 0.4s ease;
`

/**
 * A partnerek logósorát jeleníti meg monokróm → szín hoverrel.
 */
export function PartnerekSzekcio() {
  const { szoveg } = useNyelv()
  const { referencia, lathato } = useScrollReveal<HTMLDivElement>()

  return (
    <PartnerekKeret
      className="partnerek-szekcio"
      id="partnerek"
      aria-labelledby="partnerek-cim"
    >
      <BelsoTartalom
        ref={referencia}
        className={lathato ? 'lathato' : undefined}
      >
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
