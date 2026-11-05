import styled from '@emotion/styled'
import { Gomb } from '../komponensek/Gomb'
import {
  TartalomOldalKeret,
  OldalCim,
  OldalAlcim,
  OldalBekezdes,
  OldalSzekcioCim,
} from '../komponensek/TartalomOldalKeret'
import { useNyelv } from '../nyelv/useNyelv'
import { tema } from '../stilusok/tema'
import {
  KozepreIgazitottBelso,
  TeljesSzelessegReveal,
  KozepreCtaSor,
} from './kozepreIgazitottOldalStilus'

const KartyaRac = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin: 1.5rem 0 2rem;

  @media (min-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Kartya = styled.article`
  padding: 1.35rem 1.25rem;
  border: 1px solid rgba(197, 165, 114, 0.22);
  background: rgba(255, 255, 255, 0.02);
  text-align: center;
`

const KartyaCim = styled.h3`
  margin: 0 0 0.65rem;
  font-family: ${tema.betu.cim};
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

const KartyaSzoveg = styled.p`
  margin: 0;
  color: ${tema.szin.szurke};
  font-size: 0.92rem;
  line-height: 1.6;
`

/**
 * Rólunk tartalomoldal.
 */
export function RolunkOldal() {
  const { szoveg } = useNyelv()
  const oldal = szoveg.oldalak.rolunk

  return (
    <TartalomOldalKeret seo={oldal.seo}>
      <KozepreIgazitottBelso>
        <TeljesSzelessegReveal>
          <OldalCim>{oldal.cim}</OldalCim>
          <OldalAlcim>{oldal.alcim}</OldalAlcim>
        </TeljesSzelessegReveal>

        <TeljesSzelessegReveal>
          {oldal.bekezdesek.map((bekezdes) => (
            <OldalBekezdes key={bekezdes.slice(0, 24)}>{bekezdes}</OldalBekezdes>
          ))}
        </TeljesSzelessegReveal>

        <TeljesSzelessegReveal>
          <OldalSzekcioCim>{oldal.ertekekCim}</OldalSzekcioCim>
          <KartyaRac>
            {oldal.ertekek.map((ertek) => (
              <Kartya key={ertek.cim}>
                <KartyaCim>{ertek.cim}</KartyaCim>
                <KartyaSzoveg>{ertek.leiras}</KartyaSzoveg>
              </Kartya>
            ))}
          </KartyaRac>
        </TeljesSzelessegReveal>

        <TeljesSzelessegReveal>
          <OldalSzekcioCim>{oldal.folyamatCim}</OldalSzekcioCim>
          <KartyaRac>
            {oldal.folyamat.map((lepes) => (
              <Kartya key={lepes.cim}>
                <KartyaCim>{lepes.cim}</KartyaCim>
                <KartyaSzoveg>{lepes.leiras}</KartyaSzoveg>
              </Kartya>
            ))}
          </KartyaRac>
        </TeljesSzelessegReveal>

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
