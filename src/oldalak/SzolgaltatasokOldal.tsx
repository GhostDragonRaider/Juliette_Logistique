import styled from '@emotion/styled'
import { Gomb } from '../komponensek/Gomb'
import {
  TartalomOldalKeret,
  OldalCim,
  OldalAlcim,
  OldalBekezdes,
  OldalListaPont,
} from '../komponensek/TartalomOldalKeret'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'
import {
  KozepreIgazitottBelso,
  TeljesSzelessegReveal,
  KozepreCtaSor,
  KozepreLista,
} from './kozepreIgazitottOldalStilus'

const SzolgaltatasLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin: 1.75rem 0 2rem;
`

const SzolgaltatasKartya = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${tema.maxTartalom};
  margin: 0 auto;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
  text-align: center;

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: clamp(1.5rem, 3vw, 2.5rem);
    align-items: center;
    justify-items: center;
  }
`

const SzolgaltatasSzoveg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  max-width: min(100%, 28rem);
  margin: 0 auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border: 1px solid rgba(197, 165, 114, 0.25);

  @media (min-width: ${tema.szelesseg.tablet}) {
    max-width: 100%;
  }
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
      <KozepreIgazitottBelso>
        <TeljesSzelessegReveal>
          <OldalCim>{oldal.cim}</OldalCim>
          <OldalAlcim>{oldal.alcim}</OldalAlcim>
          <OldalBekezdes>{oldal.bevezeto}</OldalBekezdes>
        </TeljesSzelessegReveal>

        <SzolgaltatasLista>
          {oldal.tetelek.map((tetel) => (
            <TeljesSzelessegReveal key={tetel.azonosito}>
              <SzolgaltatasKartya>
                <SzolgaltatasSzoveg>
                  <SzolgaltatasCim>{tetel.cim}</SzolgaltatasCim>
                  <OldalBekezdes>{tetel.leiras}</OldalBekezdes>
                  <KozepreLista>
                    {tetel.pontok.map((pont) => (
                      <OldalListaPont key={pont}>{pont}</OldalListaPont>
                    ))}
                  </KozepreLista>
                </SzolgaltatasSzoveg>
                {kepek[tetel.azonosito] ? (
                  <SzolgaltatasKep
                    src={kepek[tetel.azonosito]}
                    alt={tetel.cim}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </SzolgaltatasKartya>
            </TeljesSzelessegReveal>
          ))}
        </SzolgaltatasLista>

        <TeljesSzelessegReveal>
          <KozepreCtaSor>
            <Gomb href="/kapcsolat" valtozat="telitett" mutatNyilat>
              {oldal.cta}
            </Gomb>
          </KozepreCtaSor>
        </TeljesSzelessegReveal>
      </KozepreIgazitottBelso>
    </TartalomOldalKeret>
  )
}
