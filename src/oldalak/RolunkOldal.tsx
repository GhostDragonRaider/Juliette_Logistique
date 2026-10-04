import styled from '@emotion/styled'
import { Gomb } from '../komponensek/Gomb'
import { GorgetesReveal } from '../komponensek/GorgetesReveal'
import {
  TartalomOldalKeret,
  OldalBelso,
  OldalCim,
  OldalAlcim,
  OldalBekezdes,
  OldalSzekcioCim,
} from '../komponensek/TartalomOldalKeret'
import { useNyelv } from '../nyelv/useNyelv'
import { tema } from '../stilusok/tema'

/** Rólunk oldal: középre igazított tartalom */
const RolunkBelso = styled(OldalBelso)`
  text-align: center;

  h1,
  h2,
  h3 {
    text-align: center;
  }

  p {
    margin-left: auto;
    margin-right: auto;
  }
`

const TeljesSzelessegReveal = styled(GorgetesReveal)`
  width: 100%;
`

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

const CtaSor = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`

/**
 * Rólunk tartalomoldal.
 */
export function RolunkOldal() {
  const { szoveg } = useNyelv()
  const oldal = szoveg.oldalak.rolunk

  return (
    <TartalomOldalKeret seo={oldal.seo}>
      <RolunkBelso>
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
          <CtaSor>
            <Gomb href="/kapcsolat" valtozat="telitett" mutatNyilat>
              {oldal.cta}
            </Gomb>
          </CtaSor>
        </TeljesSzelessegReveal>
      </RolunkBelso>
    </TartalomOldalKeret>
  )
}
