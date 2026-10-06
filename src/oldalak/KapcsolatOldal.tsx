import styled from '@emotion/styled'
import { useTelefonszam, useWeboldalTartalom } from '../tartalom/WeboldalTartalomContext'
import { kapcsolatMegjelenitettErtekek } from '../tartalom/kapcsolatMegjelenites'
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
const EmailLink = styled.a`
  color: ${tema.szin.aranyVilagos};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export function KapcsolatOldal() {
  const telefonszam = useTelefonszam()
  const tartalom = useWeboldalTartalom()
  const { szoveg } = useNyelv()
  const oldal = szoveg.oldalak.kapcsolat
  const kapcsolat = kapcsolatMegjelenitettErtekek(tartalom, oldal)

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
            {kapcsolat.email ? (
              <>
                <InfoCimke>{oldal.emailCimke}</InfoCimke>
                <InfoErtek>
                  <EmailLink href={`mailto:${kapcsolat.email}`}>{kapcsolat.email}</EmailLink>
                </InfoErtek>
              </>
            ) : null}
            {kapcsolat.cim ? (
              <>
                <InfoCimke>{oldal.cimCimke}</InfoCimke>
                <InfoErtek>{kapcsolat.cim}</InfoErtek>
              </>
            ) : null}
            <InfoCimke>{oldal.teruletCimke}</InfoCimke>
            <InfoErtek>{kapcsolat.terulet}</InfoErtek>
            <InfoCimke>{oldal.idopontCimke}</InfoCimke>
            <InfoErtek>{kapcsolat.elerhetoseg}</InfoErtek>
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
