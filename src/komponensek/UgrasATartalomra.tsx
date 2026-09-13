import styled from '@emotion/styled'
import { useNyelv } from '../nyelv/useNyelv'
import { tema } from '../stilusok/tema'

/** „Ugrás a tartalomra” link — csak billentyűzetes fókusznál látszik */
const UgrasLink = styled.a`
  position: absolute;
  left: 1rem;
  top: -100px;
  z-index: 1000;
  padding: 0.75rem 1rem;
  background: ${tema.szin.arany};
  color: ${tema.hatter.fekete};
  font-family: ${tema.betu.cim};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  &:focus {
    top: 1rem;
  }

  &:focus-visible {
    top: 1rem;
  }
`

/**
 * Akadálymentes „ugrás a tartalomra” linket jelenít meg.
 */
export function UgrasATartalomra() {
  const { szoveg } = useNyelv()

  return (
    <UgrasLink className="ugras-a-tartalomra" href="#fo-tartalom">
      {szoveg.ugrasATartalomra}
    </UgrasLink>
  )
}
