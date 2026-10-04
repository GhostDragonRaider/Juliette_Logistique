import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { tema, fokuszKeret } from '../stilusok/tema'

/** Ugyanaz a arany márkalogó, mint a rólunk szekció kép jelvényén */
export const MARKA_LOGO_ARANY = '/brand/logo-arany.png'

type LogoTulajdonsagok = {
  className?: string
}

/** A logo külső doboza */
const LogoDoboz = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-width: 0;
  color: ${tema.szin.arany};

  &:focus-visible {
    ${fokuszKeret}
  }
`

/**
 * Fejléc logó — a korábbi JL SVG dobozával megegyező méret (header nem nő).
 */
const LogoMarkaKep = styled.img`
  display: block;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  object-fit: contain;
  object-position: left center;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    width: 52px;
    height: 52px;
  }
`

/**
 * A Juliette Logistique arany logóját jeleníti meg (rólunk jelvényével megegyező kép).
 */
export function Logo({ className }: LogoTulajdonsagok) {
  return (
    <LogoDoboz className={className} to="/" aria-label="Juliette Logistique">
      <LogoMarkaKep src={MARKA_LOGO_ARANY} alt="" decoding="async" />
    </LogoDoboz>
  )
}
