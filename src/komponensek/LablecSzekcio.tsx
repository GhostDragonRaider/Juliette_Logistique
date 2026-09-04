import styled from '@emotion/styled'
import { Gomb } from './Gomb'
import { lablecSzovegek, telefonszam } from '../adatok/fooldalAdatok'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

/** A záró CTA sáv */
const LablecCtaKeret = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 2.4rem 4vw;
  background: ${tema.hatter.emelt};
  border-top: 1px solid rgba(201, 162, 39, 0.25);

  @media (min-width: ${tema.szelesseg.mobil}) {
    flex-direction: row;
    align-items: center;
  }
`

/** A CTA kérdés szövege */
const LablecKerdes = styled.h2`
  font-family: ${tema.betu.cim};
  font-size: clamp(1.15rem, 2.4vw, 1.7rem);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A tényleges lábléc */
const LablecKeret = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 1.3rem 4vw 1.8rem;
  background: ${tema.hatter.fekete};
  border-top: 1px solid rgba(201, 162, 39, 0.12);
  color: ${tema.szin.szurke};
  font-size: 0.82rem;
`

/** Kis arany kiemelés a láblécben */
const LablecKiemeles = styled.span`
  color: ${tema.szin.arany};
`

/**
 * A záró „kapcsolatfelvétel” sávot és a láblécet jeleníti meg.
 */
export function LablecSzekcio() {
  return (
    <>
      <LablecCtaKeret className="lablec-cta-szekcio" id="kapcsolat">
        <LablecKerdes className="lablec-kerdes">
          {lablecSzovegek.kerdes}
        </LablecKerdes>
        <Gomb
          className="lablec-kapcsolat-gomb"
          href={`tel:${telefonszam.replace(/\s/g, '')}`}
          valtozat="telitett"
          mutatNyilat
        >
          {lablecSzovegek.gomb}
        </Gomb>
      </LablecCtaKeret>

      <LablecKeret className="lablec-keret">
        <p className="lablec-marka">
          <LablecKiemeles>Juliette Logistique</LablecKiemeles>
          {' — Premium Fahrzeugüberführung'}
        </p>
        <p className="lablec-telefon">{telefonszam}</p>
      </LablecKeret>
    </>
  )
}
