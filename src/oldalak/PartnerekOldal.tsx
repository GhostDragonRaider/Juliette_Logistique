import styled from '@emotion/styled'
import { partnerLogok } from '../adatok/fooldalAdatok'
import { Gomb } from '../komponensek/Gomb'
import { GorgetesReveal } from '../komponensek/GorgetesReveal'
import {
  TartalomOldalKeret,
  OldalBelso,
  OldalCim,
  OldalAlcim,
  OldalBekezdes,
  OldalSzekcioCim,
  OldalLista,
  OldalListaPont,
} from '../komponensek/TartalomOldalKeret'
import { useNyelv } from '../nyelv/useNyelv'

const PartnerSor = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1.75rem 2.5rem;
  margin: 1.75rem 0 2rem;
  padding: 0;
  list-style: none;
`

const PartnerLogoDoboz = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(120px, 18vw, 170px);
  height: clamp(56px, 9vw, 72px);
`

const PartnerLogoKep = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`

const CtaSor = styled.div`
  margin-top: 2rem;
`

/**
 * Partnerek tartalomoldal.
 */
export function PartnerekOldal() {
  const { szoveg } = useNyelv()
  const oldal = szoveg.oldalak.partnerek

  return (
    <TartalomOldalKeret seo={oldal.seo}>
      <OldalBelso>
        <GorgetesReveal>
          <OldalCim>{oldal.cim}</OldalCim>
          <OldalAlcim>{oldal.alcim}</OldalAlcim>
          {oldal.bekezdesek.map((bekezdes) => (
            <OldalBekezdes key={bekezdes.slice(0, 24)}>{bekezdes}</OldalBekezdes>
          ))}
        </GorgetesReveal>

        <GorgetesReveal>
          <PartnerSor>
            {partnerLogok.map((partner) => (
              <PartnerLogoDoboz key={partner.azonosito}>
                <PartnerLogoKep
                  src={partner.kep}
                  alt={partner.nev}
                  loading="lazy"
                  decoding="async"
                />
              </PartnerLogoDoboz>
            ))}
          </PartnerSor>
        </GorgetesReveal>

        <GorgetesReveal>
          <OldalSzekcioCim>{oldal.elonyokCim}</OldalSzekcioCim>
          <OldalLista>
            {oldal.elonyok.map((elony) => (
              <OldalListaPont key={elony}>{elony}</OldalListaPont>
            ))}
          </OldalLista>
        </GorgetesReveal>

        <GorgetesReveal>
          <CtaSor>
            <Gomb href="/kapcsolat" valtozat="telitett" mutatNyilat>
              {oldal.cta}
            </Gomb>
          </CtaSor>
        </GorgetesReveal>
      </OldalBelso>
    </TartalomOldalKeret>
  )
}
