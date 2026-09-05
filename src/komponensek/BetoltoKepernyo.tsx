import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { tema } from '../stilusok/tema'

/** Körkörös arany betöltőcsík forgása */
const korForgas = keyframes`
  to {
    transform: rotate(360deg);
  }
`

/** Finom pulzus a logón */
const pulzus = keyframes`
  0%, 100% { opacity: 0.75; transform: scale(0.98); }
  50% { opacity: 1; transform: scale(1); }
`

/** Teljes képernyős betöltő */
const BetoltoKeret = styled.div<{ lathato: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${tema.hatter.fekete};
  opacity: ${(props) => (props.lathato ? 1 : 0)};
  visibility: ${(props) => (props.lathato ? 'visible' : 'hidden')};
  transition: opacity 0.7s ease, visibility 0.7s ease;
  pointer-events: ${(props) => (props.lathato ? 'auto' : 'none')};
`

/** Logó + körcsík konténer */
const LogoCsoport = styled.div`
  position: relative;
  width: clamp(112px, 28vw, 148px);
  height: clamp(112px, 28vw, 148px);
  display: flex;
  align-items: center;
  justify-content: center;
`

/** Körkörös prémium betöltőcsík a logó körül */
const BetoltoKor = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    conic-gradient(
      from 0deg,
      transparent 0deg,
      ${tema.szin.aranySotet} 40deg,
      ${tema.szin.aranyVilagos} 110deg,
      ${tema.szin.arany} 160deg,
      transparent 220deg
    );
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px));
  animation: ${korForgas} 1.15s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: radial-gradient(
      farthest-side,
      transparent calc(100% - 2px),
      rgba(197, 165, 114, 0.45) calc(100% - 1.5px)
    );
  }
`

/** Halvány állandó kör a háttérben */
const AlapKor = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(197, 165, 114, 0.22);
  pointer-events: none;
`

/** A fejlécben is használt JL monogram SVG */
const JlLogoSvg = styled.svg`
  position: relative;
  z-index: 1;
  width: clamp(56px, 14vw, 72px);
  height: clamp(56px, 14vw, 72px);
  animation: ${pulzus} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

/**
 * Rövid prémium betöltő: ugyanaz a JL monogram + körkörös arany csík.
 */
export function BetoltoKepernyo() {
  const [lathato, setLathato] = useState(true)

  useEffect(() => {
    const idozito = window.setTimeout(() => setLathato(false), 1300)
    return () => window.clearTimeout(idozito)
  }, [])

  return (
    <BetoltoKeret className="betolto-kepernyo" lathato={lathato} aria-hidden={!lathato}>
      <LogoCsoport className="betolto-logo-csoport">
        <AlapKor aria-hidden="true" />
        <BetoltoKor className="betolto-kor" aria-hidden="true" />
        <JlLogoSvg viewBox="0 0 80 80" role="img" aria-label="Juliette Logistique">
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
        </JlLogoSvg>
      </LogoCsoport>
    </BetoltoKeret>
  )
}
