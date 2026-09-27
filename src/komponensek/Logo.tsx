import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { tema, fokuszKeret } from '../stilusok/tema'

type LogoTulajdonsagok = {
  meret?: number
  className?: string
}

/** A logo külső doboza — az eredeti fejléc-mérettel */
const LogoDoboz = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: ${tema.szin.arany};

  &:focus-visible {
    ${fokuszKeret}
  }
`

/**
 * A pezsgőarany brand logo — magasság az eredeti JL monogrammérettel
 * (40 / 48 / 52 px).
 */
const LogoKep = styled.img`
  display: block;
  width: auto;
  height: 40px;
  object-fit: contain;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    height: 48px;
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    height: 52px;
  }
`

/**
 * A Juliette Logistique arany brand logóját jeleníti meg a fejlécben
 * (ugyanaz, mint a rólunk szekció kamionképe sarkában).
 */
export function Logo({ className }: LogoTulajdonsagok) {
  return (
    <LogoDoboz className={className} to="/" aria-label="Juliette Logistique">
      <LogoKep
        src="/brand/logo-arany.png"
        alt="Juliette Logistique"
        width={104}
        height={52}
        decoding="async"
      />
    </LogoDoboz>
  )
}
