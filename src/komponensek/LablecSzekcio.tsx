import styled from '@emotion/styled'
import { PremiumSzam } from './PremiumSzam'
import { telefonszam } from '../adatok/fooldalAdatok'
import { useNyelv } from '../nyelv/useNyelv'
import { tema } from '../stilusok/tema'

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
 * A láblécet jeleníti meg (a záró kép CTA külön szekció).
 */
export function LablecSzekcio() {
  const { szoveg } = useNyelv()

  return (
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
  )
}
