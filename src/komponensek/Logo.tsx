import styled from '@emotion/styled'
import { tema } from '../stilusok/tema'

type LogoTulajdonsagok = {
  meret?: number
  className?: string
}

/** A logo külső doboza */
const LogoDoboz = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: ${tema.szin.arany};
`

/** A JL monogram SVG mérete */
const LogoSvg = styled.svg`
  display: block;
  flex-shrink: 0;
`

/** A logo szöveges része */
const LogoSzoveg = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.05;
`

/** „Juliette” márkanév */
const MarkaNev = styled.span`
  font-family: ${tema.betu.marka};
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${tema.szin.aranyVilagos};
`

/** „LOGISTIQUE” alcím */
const MarkaAlcim = styled.span`
  font-family: ${tema.betu.cim};
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: ${tema.szin.arany};
`

/**
 * A Juliette Logistique arany logóját jeleníti meg (JL monogram + szöveg).
 */
export function Logo({ meret = 52, className }: LogoTulajdonsagok) {
  return (
    <LogoDoboz className={className} href="#kezdooldal" aria-label="Juliette Logistique">
      <LogoSvg
        width={meret}
        height={meret}
        viewBox="0 0 80 80"
        role="img"
        aria-hidden="true"
      >
        <text
          x="12"
          y="48"
          fill={tema.szin.arany}
          fontFamily="Georgia, serif"
          fontSize="42"
          fontWeight="700"
        >
          J
        </text>
        <text
          x="36"
          y="48"
          fill={tema.szin.aranyVilagos}
          fontFamily="Georgia, serif"
          fontSize="42"
          fontWeight="700"
        >
          L
        </text>
        {/* Út ív a monogram alatt */}
        <path
          d="M8 56 C 24 48, 40 62, 72 50"
          fill="none"
          stroke={tema.szin.arany}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M28 55 C 40 52, 52 56, 64 52"
          fill="none"
          stroke={tema.hatter.fekete}
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
      </LogoSvg>
      <LogoSzoveg>
        <MarkaNev>Juliette</MarkaNev>
        <MarkaAlcim>Logistique</MarkaAlcim>
      </LogoSzoveg>
    </LogoDoboz>
  )
}
