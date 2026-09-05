import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { tema } from '../stilusok/tema'

/** A viewport tetején futó arany scroll progress vonal */
const HaladasSav = styled.div<{ arany: number }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 2px;
  width: ${(props) => props.arany * 100}%;
  background: linear-gradient(
    90deg,
    ${tema.szin.aranySotet},
    ${tema.szin.aranyVilagos},
    ${tema.szin.arany}
  );
  box-shadow: 0 0 12px rgba(197, 165, 114, 0.35);
  pointer-events: none;
  transition: width 0.05s linear;
`

/**
 * A lap tetején mutatja az oldalgörgetés arányát pezsgőarany vonallal.
 */
export function ScrollHaladas() {
  const [arany, setArany] = useState(0)

  useEffect(() => {
    /**
     * Kiszámolja a görgetés százalékát a dokumentum magasságához képest.
     */
    function gorgetesFigyelo() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setArany(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }

    gorgetesFigyelo()
    window.addEventListener('scroll', gorgetesFigyelo, { passive: true })
    window.addEventListener('resize', gorgetesFigyelo)
    return () => {
      window.removeEventListener('scroll', gorgetesFigyelo)
      window.removeEventListener('resize', gorgetesFigyelo)
    }
  }, [])

  return <HaladasSav className="scroll-haladas" arany={arany} aria-hidden="true" />
}
