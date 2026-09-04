import styled from '@emotion/styled'
import { Gomb } from './Gomb'
import { PremiumSzam } from './PremiumSzam'
import { telefonszam } from '../adatok/fooldalAdatok'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

/** Teljes szélességű CTA háttér */
const LablecCtaHatter = styled.section`
  background: ${tema.hatter.emelt};
  border-top: 1px solid rgba(197, 165, 114, 0.22);
`

/** A záró CTA sáv belseje */
const LablecCtaKeret = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 1.2rem;
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
  padding: clamp(1.8rem, 4vw, 2.4rem) ${tema.oldalsoPadding};

  @media (min-width: ${tema.szelesseg.mobil}) {
    flex-direction: row;
    align-items: center;
  }
`

/** A CTA kérdés szövege */
const LablecKerdes = styled.h2`
  font-family: ${tema.betu.cim};
  font-size: clamp(1.05rem, 2.8vw, 1.6rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A tényleges lábléc */
const LablecKeret = styled.footer`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.6rem;
  padding:
    1.2rem
    ${tema.oldalsoPadding}
    max(1.5rem, env(safe-area-inset-bottom, 0px));
  background: ${tema.hatter.fekete};
  border-top: 1px solid rgba(197, 165, 114, 0.12);
  color: ${tema.szin.szurke};
  font-size: clamp(0.78rem, 1.6vw, 0.86rem);

  @media (min-width: ${tema.szelesseg.kicsi}) {
    flex-direction: row;
    align-items: center;
  }
`

/** Kis arany kiemelés a láblécben */
const LablecKiemeles = styled.span`
  color: ${tema.szin.arany};
`

/** Telefon link a láblécben */
const TelefonLink = styled.a`
  color: ${tema.szin.aranyVilagos};

  &:hover {
    text-decoration: underline;
  }
`

/**
 * A záró kapcsolatfelvételi sávot és a láblécet jeleníti meg a kiválasztott nyelven.
 */
export function LablecSzekcio() {
  const { szoveg } = useNyelv()

  return (
    <>
      <LablecCtaHatter
        className="lablec-cta-szekcio"
        id="kapcsolat"
        aria-labelledby="kapcsolat-cim"
      >
        <LablecCtaKeret className="lablec-cta-keret">
          <LablecKerdes className="lablec-kerdes" id="kapcsolat-cim">
            {szoveg.lablec.kerdes}
          </LablecKerdes>
          <Gomb
            className="lablec-kapcsolat-gomb"
            href={`tel:${telefonszam.replace(/\s/g, '')}`}
            valtozat="telitett"
            mutatNyilat
            ariaLabel={`${szoveg.lablec.gomb}: ${telefonszam}`}
          >
            {szoveg.lablec.gomb}
          </Gomb>
        </LablecCtaKeret>
      </LablecCtaHatter>

      <LablecKeret className="lablec-keret">
        <p className="lablec-marka">
          <LablecKiemeles>Juliette Logistique</LablecKiemeles>
          {' '}
          {szoveg.lablec.markaLeiras}
        </p>
        <p className="lablec-telefon">
          <TelefonLink href={`tel:${telefonszam.replace(/\s/g, '')}`}>
            <PremiumSzam>{telefonszam}</PremiumSzam>
          </TelefonLink>
        </p>
      </LablecKeret>
    </>
  )
}
