import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { AranyIkon } from './AranyIkon'
import { premiumKattintasHang } from '../lib/premiumHang'
import { tema, aranyKeret, fokuszKeret, femesAranyGomb } from '../stilusok/tema'

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
  /** Opcionális halk UI hang kattintáskor */
  hanggal?: boolean
}

/** Fémes, csúszó feltöltésű elsődleges gomb */
const telitettStilus = css`
  ${femesAranyGomb}
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    background-position 0.55s ease;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover svg {
    transform: translateX(3px);
  }
`

/** Az üres / arany keretes gomb stílusa */
const korvonalStilus = css`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: transparent;
  color: ${tema.szin.aranyVilagos};
  border: ${aranyKeret};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: translateX(-105%);
    background: linear-gradient(
      105deg,
      transparent 0%,
      rgba(197, 165, 114, 0.16) 45%,
      transparent 70%
    );
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    box-shadow: ${tema.arnyek.aranyFeny};
    transform: translateY(-2px);
  }

  &:hover::before {
    transform: translateX(105%);
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover svg {
    transform: translateX(3px);
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
  hanggal = false,
}: GombTulajdonsagok) {
  /**
   * Kattintáskor opcionális hangot ad, majd a kapott onClick-et futtatja.
   */
  function kattintasKezelo() {
    if (hanggal) {
      premiumKattintasHang()
    }
    onClick?.()
  }

  return (
    <GombAlap
      className={className}
      href={href}
      valtozat={valtozat}
      onClick={kattintasKezelo}
      aria-label={ariaLabel}
    >
      {mutatTelefont ? <AranyIkon tipus="telefon" meret={16} /> : null}
      <span>{children}</span>
      {mutatNyilat ? <AranyIkon tipus="nyil" meret={16} /> : null}
    </GombAlap>
  )
}
