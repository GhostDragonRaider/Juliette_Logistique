import styled from '@emotion/styled'
import { telefonszam } from '../adatok/fooldalAdatok'
import { Gomb } from '../komponensek/Gomb'
import { PremiumSzam } from '../komponensek/PremiumSzam'
import {
  TartalomOldalKeret,
  OldalBelso,
  OldalCim,
  OldalAlcim,
  OldalBekezdes,
} from '../komponensek/TartalomOldalKeret'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

const InfoRac = styled.dl`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.15rem 2rem;
  margin: 2rem 0;
  max-width: 36rem;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    grid-template-columns: 10rem 1fr;
    align-items: baseline;
  }
`

const InfoCimke = styled.dt`
  margin: 0;
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

const CtaSor = styled.div`
  margin-top: 1.5rem;
`

/**
 * Kapcsolat tartalomoldal.
 */
export function KapcsolatOldal() {
  const { szoveg } = useNyelv()
  const oldal = szoveg.oldalak.kapcsolat

  return (
    <TartalomOldalKeret seo={oldal.seo}>
      <OldalBelso>
        <OldalCim>{oldal.cim}</OldalCim>
        <OldalAlcim>{oldal.alcim}</OldalAlcim>
        {oldal.bekezdesek.map((bekezdes) => (
          <OldalBekezdes key={bekezdes.slice(0, 24)}>{bekezdes}</OldalBekezdes>
        ))}

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

        <CtaSor>
          <Gomb
            href={`tel:${telefonszam.replace(/\s/g, '')}`}
            valtozat="telitett"
            mutatTelefont
            ariaLabel={telefonszam}
          >
            {oldal.cta}
          </Gomb>
        </CtaSor>
      </OldalBelso>
    </TartalomOldalKeret>
  )
}
