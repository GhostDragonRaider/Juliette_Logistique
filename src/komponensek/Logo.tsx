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
  align-self: center;
  height: 44px;
  min-width: 0;
  overflow: visible;
  color: ${tema.szin.arany};

  &:focus-visible {
    ${fokuszKeret}
  }
`

/**
 * Fejléc logó — vizuálisan nagyobb (scale), layout doboz változatlan → header nem nő.
 */
const LogoMarkaKep = styled.img`
  display: block;
  flex-shrink: 0;
  width: auto;
  height: 42px;
  object-fit: contain;
  object-position: left center;
  transform: scale(1.38);
  transform-origin: left center;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    height: 46px;
    transform: scale(1.42);
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    height: 48px;
    transform: scale(1.45);
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
