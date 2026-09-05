import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

/** A betöltő JL finom pulzálása */
const pulzus = keyframes`
  0%, 100% { opacity: 0.45; transform: scale(0.96); }
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

/** A pulzáló JL monogram */
const JlJel = styled.div`
  font-family: ${tema.betu.marka};
  font-size: clamp(2.4rem, 8vw, 4rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  animation: ${pulzus} 1.6s ease-in-out infinite;
  ${aranySzovegAtmenet}
`

/**
 * Rövid prémium betöltő képernyőt mutat JL pulzussal az oldal indulásakor.
 */
export function BetoltoKepernyo() {
  const [lathato, setLathato] = useState(true)

  useEffect(() => {
    const idozito = window.setTimeout(() => setLathato(false), 1100)
    return () => window.clearTimeout(idozito)
  }, [])

  return (
    <BetoltoKeret className="betolto-kepernyo" lathato={lathato} aria-hidden={!lathato}>
      <JlJel className="betolto-jl">JL</JlJel>
    </BetoltoKeret>
  )
}
