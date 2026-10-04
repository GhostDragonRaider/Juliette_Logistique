import styled from '@emotion/styled'
import { Gomb } from '../komponensek/Gomb'
import { GorgetesReveal } from '../komponensek/GorgetesReveal'
import {
  TartalomOldalKeret,
  OldalBelso,
  OldalCim,
  OldalAlcim,
  OldalBekezdes,
  OldalLista,
  OldalListaPont,
} from '../komponensek/TartalomOldalKeret'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

const SzolgaltatasLista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.75rem 0 2rem;
`

const SzolgaltatasKartya = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(197, 165, 114, 0.22);

  @media (min-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 2rem;
    align-items: start;
  }
`

const SzolgaltatasCim = styled.h2`
  margin: 0 0 0.75rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.98rem, 1.8vw, 1.15rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

const SzolgaltatasKep = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border: 1px solid rgba(197, 165, 114, 0.25);
`

const CtaSor = styled.div`
  margin-top: 1rem;
`

/**
 * Szolgáltatások tartalomoldal.
 */
export function SzolgaltatasokOldal() {
  const { szoveg } = useNyelv()
  const oldal = szoveg.oldalak.szolgaltatasok
  const kepek = Object.fromEntries(
    szoveg.szolgaltatasok.map((s) => [s.azonosito, s.kep]),
  )

  return (
    <TartalomOldalKeret seo={oldal.seo}>
      <OldalBelso>
        <GorgetesReveal>
          <OldalCim>{oldal.cim}</OldalCim>
          <OldalAlcim>{oldal.alcim}</OldalAlcim>
          <OldalBekezdes>{oldal.bevezeto}</OldalBekezdes>
        </GorgetesReveal>

        <SzolgaltatasLista>
          {oldal.tetelek.map((tetel) => (
            <GorgetesReveal key={tetel.azonosito}>
              <SzolgaltatasKartya>
                <div>
                  <SzolgaltatasCim>{tetel.cim}</SzolgaltatasCim>
                  <OldalBekezdes>{tetel.leiras}</OldalBekezdes>
                  <OldalLista>
                    {tetel.pontok.map((pont) => (
                      <OldalListaPont key={pont}>{pont}</OldalListaPont>
                    ))}
                  </OldalLista>
                </div>
                {kepek[tetel.azonosito] ? (
                  <SzolgaltatasKep
                    src={kepek[tetel.azonosito]}
                    alt={tetel.cim}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </SzolgaltatasKartya>
            </GorgetesReveal>
          ))}
        </SzolgaltatasLista>

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
