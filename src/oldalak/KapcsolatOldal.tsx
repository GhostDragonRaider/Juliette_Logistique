import styled from '@emotion/styled'
import { useTelefonszam } from '../tartalom/WeboldalTartalomContext'
import { Gomb } from '../komponensek/Gomb'
import { PremiumSzam } from '../komponensek/PremiumSzam'
import {
  TartalomOldalKeret,
  OldalCim,
  OldalAlcim,
  OldalBekezdes,
} from '../komponensek/TartalomOldalKeret'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'
import {
  KozepreIgazitottBelso,
  TeljesSzelessegReveal,
  KozepreCtaSor,
} from './kozepreIgazitottOldalStilus'

const InfoRac = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.35rem 0;
  width: 100%;
  max-width: 28rem;
  margin: 2rem auto;
  text-align: center;
  justify-items: center;
`

const InfoCimke = styled.dt`
  margin: 1rem 0 0.25rem;
  font-family: ${tema.betu.cim};
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

const InfoErtek = styled.dd`
  margin: 0;
  color: ${tema.szin.feher};
  font-size: 1.02rem;
  line-height: 1.5;
`

/**
 * Kapcsolat tartalomoldal.
 */
export function KapcsolatOldal() {
  const telefonszam = useTelefonszam()
  const { szoveg } = useNyelv()
  const oldal = szoveg.oldalak.kapcsolat

  return (
    <TartalomOldalKeret seo={oldal.seo}>
      <KozepreIgazitottBelso>
        <TeljesSzelessegReveal>
          <OldalCim>{oldal.cim}</OldalCim>
          <OldalAlcim>{oldal.alcim}</OldalAlcim>
          {oldal.bekezdesek.map((bekezdes) => (
            <OldalBekezdes key={bekezdes.slice(0, 24)}>{bekezdes}</OldalBekezdes>
          ))}
        </TeljesSzelessegReveal>

        <TeljesSzelessegReveal>
          <InfoRac>
            <InfoCimke>{oldal.telefonCimke}</InfoCimke>
            <InfoErtek>
              <PremiumSzam>{telefonszam}</PremiumSzam>
            </InfoErtek>
            <InfoCimke>{oldal.teruletCimke}</InfoCimke>
            <InfoErtek>{oldal.teruletErtek}</InfoErtek>
            <InfoCimke>{oldal.idopontCimke}</InfoCimke>
            <InfoErtek>{oldal.idopontErtek}</InfoErtek>
          </InfoRac>
        </TeljesSzelessegReveal>

        <TeljesSzelessegReveal>
          <KozepreCtaSor>
            <Gomb
              href={`tel:${telefonszam.replace(/\s/g, '')}`}
              valtozat="telitett"
              mutatTelefont
              ariaLabel={telefonszam}
            >
              {oldal.cta}
            </Gomb>
          </KozepreCtaSor>
        </TeljesSzelessegReveal>
      </KozepreIgazitottBelso>
    </TartalomOldalKeret>
  )
}
