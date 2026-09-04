import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { AranyIkon } from './AranyIkon'
import { tema, aranyKeret, fokuszKeret } from '../stilusok/tema'

type GombValtozat = 'telitett' | 'korvonal' | 'telefon'

type GombTulajdonsagok = {
  children: ReactNode
  href?: string
  valtozat?: GombValtozat
  className?: string
  onClick?: () => void
  mutatNyilat?: boolean
  mutatTelefont?: boolean
  ariaLabel?: string
}

/** Az elsődleges pezsgőarany gomb stílusa */
const telitettStilus = css`
  background: linear-gradient(
    135deg,
    ${tema.szin.aranySotet} 0%,
    ${tema.szin.aranyVilagos} 48%,
    ${tema.szin.arany} 100%
  );
  color: ${tema.hatter.fekete};
  border: 1px solid ${tema.szin.arany};

  &:hover {
    box-shadow: ${tema.arnyek.aranyFeny};
    transform: translateY(-2px);
  }
`

/** Az üres / arany keretes gomb stílusa */
const korvonalStilus = css`
  background: transparent;
  color: ${tema.szin.aranyVilagos};
  border: ${aranyKeret};

  &:hover {
    background: rgba(197, 165, 114, 0.08);
    box-shadow: ${tema.arnyek.aranyFeny};
    transform: translateY(-2px);
  }
`

/** A telefonos fejléc-gomb stílusa */
const telefonStilus = css`
  background: transparent;
  color: ${tema.szin.aranyVilagos};
  border: ${aranyKeret};
  min-width: 44px;
  min-height: 44px;
  padding: 0.55rem 0.7rem;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  font-style: italic;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    padding: 0.55rem 0.95rem;
    font-size: 0.84rem;
  }

  &:hover {
    background: rgba(197, 165, 114, 0.1);
  }
`

/** A gomb közös alapja */
const GombAlap = styled.a<{ valtozat: GombValtozat }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 44px;
  padding: 0.85rem 1.25rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.72rem, 1.4vw, 0.84rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:focus-visible {
    ${fokuszKeret}
  }

  ${(props) => props.valtozat === 'telitett' && telitettStilus}
  ${(props) => props.valtozat === 'korvonal' && korvonalStilus}
  ${(props) => props.valtozat === 'telefon' && telefonStilus}
`

/**
 * Egységes pezsgőarany gombot rajzol ki (telített, keretes vagy telefonos változat).
 */
export function Gomb({
  children,
  href = '#',
  valtozat = 'telitett',
  className,
  onClick,
  mutatNyilat = false,
  mutatTelefont = false,
  ariaLabel,
}: GombTulajdonsagok) {
  return (
    <GombAlap
      className={className}
      href={href}
      valtozat={valtozat}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {mutatTelefont ? <AranyIkon tipus="telefon" meret={16} /> : null}
      <span>{children}</span>
      {mutatNyilat ? <AranyIkon tipus="nyil" meret={16} /> : null}
    </GombAlap>
  )
}
