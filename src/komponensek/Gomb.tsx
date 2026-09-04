import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { AranyIkon } from './AranyIkon'
import { tema, aranyKeret } from '../stilusok/tema'

type GombValtozat = 'telitett' | 'korvonal' | 'telefon'

type GombTulajdonsagok = {
  children: ReactNode
  href?: string
  valtozat?: GombValtozat
  className?: string
  onClick?: () => void
  mutatNyilat?: boolean
  mutatTelefont?: boolean
}

/** Az elsődleges (arannyal töltött) gomb stílusa */
const telitettStilus = css`
  background: linear-gradient(135deg, ${tema.szin.arany} 0%, ${tema.szin.aranyVilagos} 50%, ${tema.szin.arany} 100%);
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
    background: rgba(201, 162, 39, 0.08);
    box-shadow: ${tema.arnyek.aranyFeny};
    transform: translateY(-2px);
  }
`

/** A telefonos fejléc-gomb stílusa */
const telefonStilus = css`
  background: transparent;
  color: ${tema.szin.aranyVilagos};
  border: ${aranyKeret};
  padding: 0.55rem 0.9rem;
  font-size: 0.78rem;
  letter-spacing: 0.04em;

  &:hover {
    background: rgba(201, 162, 39, 0.1);
  }
`

/** A gomb közös alapja */
const GombAlap = styled.a<{ valtozat: GombValtozat }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.85rem 1.35rem;
  font-family: ${tema.betu.cim};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  ${(props) => props.valtozat === 'telitett' && telitettStilus}
  ${(props) => props.valtozat === 'korvonal' && korvonalStilus}
  ${(props) => props.valtozat === 'telefon' && telefonStilus}
`

/**
 * Egységes arany gombot rajzol ki (telített, keretes vagy telefonos változat).
 */
export function Gomb({
  children,
  href = '#',
  valtozat = 'telitett',
  className,
  onClick,
  mutatNyilat = false,
  mutatTelefont = false,
}: GombTulajdonsagok) {
  return (
    <GombAlap
      className={className}
      href={href}
      valtozat={valtozat}
      onClick={onClick}
    >
      {mutatTelefont ? <AranyIkon tipus="telefon" meret={16} /> : null}
      <span>{children}</span>
      {mutatNyilat ? <AranyIkon tipus="nyil" meret={16} /> : null}
    </GombAlap>
  )
}
