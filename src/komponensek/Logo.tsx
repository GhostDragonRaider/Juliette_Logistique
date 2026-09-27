import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { tema, fokuszKeret } from '../stilusok/tema'

type LogoTulajdonsagok = {
  meret?: number
  className?: string
}

/** A logo külső doboza — a rólunk szekció arany brand logóját használja */
const LogoDoboz = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-width: 0;
  max-width: min(42vw, 11.5rem);
  color: ${tema.szin.arany};

  &:focus-visible {
    ${fokuszKeret}
  }

  @media (min-width: ${tema.szelesseg.kicsi}) {
    max-width: 13.5rem;
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    max-width: 15rem;
  }
`

/** A pezsgőarany brand logo kép */
const LogoKep = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
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
        width={240}
        height={120}
        decoding="async"
      />
    </LogoDoboz>
  )
}
