import styled from '@emotion/styled'
import type { KovetelmenyOsszegzes } from './karrierKovetelmenyek'
import { tema } from '../stilusok/tema'

const Panel = styled.section`
  margin: 1.25rem 0 1.5rem;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(197, 165, 114, 0.28);
  background: rgba(255, 255, 255, 0.02);
`

const Cim = styled.h3`
  margin: 0 0 0.75rem;
  font-family: ${tema.betu.cim};
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

const Lista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Elem = styled.li<{ allapot: string }>`
  padding: 0.55rem 0.7rem;
  border: 1px solid
    ${(p) =>
      p.allapot === 'megfelel'
        ? 'rgba(72, 160, 96, 0.55)'
        : p.allapot === 'nem_megfelel'
          ? 'rgba(200, 80, 80, 0.55)'
          : 'rgba(197, 165, 114, 0.2)'};
  background: ${(p) =>
    p.allapot === 'megfelel'
      ? 'rgba(40, 100, 55, 0.35)'
      : p.allapot === 'nem_megfelel'
        ? 'rgba(120, 35, 35, 0.35)'
        : 'rgba(255, 255, 255, 0.02)'};
  font-size: 0.84rem;
  line-height: 1.45;
  color: ${tema.szin.feher};
`

const ElemCim = styled.strong`
  display: block;
  margin-bottom: 0.2rem;
  color: ${tema.szin.aranyVilagos};
`

type Props = {
  osszegzes: KovetelmenyOsszegzes
}

export function KovetelmenyPanel({ osszegzes }: Props) {
  return (
    <Panel>
      <Cim>Karrier követelmények (Kit keresünk?)</Cim>
      <Lista>
        {osszegzes.eredmenyek.map((e) => (
          <Elem key={e.id} allapot={e.allapot}>
            <ElemCim>{e.cimke}</ElemCim>
            {e.indok}
          </Elem>
        ))}
      </Lista>
    </Panel>
  )
}
