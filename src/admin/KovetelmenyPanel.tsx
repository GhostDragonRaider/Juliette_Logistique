import styled from '@emotion/styled'
import type { KovetelmenyOsszegzes } from './karrierKovetelmenyek'
import { aranySzovegAtmenet, tema } from '../stilusok/tema'
import { premiumKartya, premiumSzekcioCim } from './adminPremiumStilus'

const Panel = styled.section`
  ${premiumKartya}
  margin: 1.5rem 0;
  padding: 1.2rem 1.25rem 1.3rem;
`

const FejlecSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  margin-bottom: 1rem;
`

const Cim = styled.h3`
  ${premiumSzekcioCim}
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;

  &::after {
    display: none;
  }
`

const Osszegzo = styled.span<{ $tipus: 'ok' | 'hiba' | 'resz' }>`
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.7rem;
  border: 1px solid
    ${(p) =>
      p.$tipus === 'ok'
        ? 'rgba(88, 175, 110, 0.5)'
        : p.$tipus === 'hiba'
          ? 'rgba(210, 95, 95, 0.5)'
          : 'rgba(197, 165, 114, 0.35)'};
  background: ${(p) =>
    p.$tipus === 'ok'
      ? 'rgba(45, 110, 65, 0.25)'
      : p.$tipus === 'hiba'
        ? 'rgba(120, 40, 40, 0.28)'
        : 'rgba(197, 165, 114, 0.08)'};
  color: ${tema.szin.feher};
`

const Lista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 0.85rem;

  @media (max-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Elem = styled.li<{ allapot: string }>`
  padding: 0.7rem 0.8rem;
  border-radius: 2px;
  border: 1px solid
    ${(p) =>
      p.allapot === 'megfelel'
        ? 'rgba(88, 175, 110, 0.45)'
        : p.allapot === 'nem_megfelel'
          ? 'rgba(210, 95, 95, 0.48)'
          : 'rgba(197, 165, 114, 0.18)'};
  background: ${(p) =>
    p.allapot === 'megfelel'
      ? 'linear-gradient(145deg, rgba(45, 110, 65, 0.3), rgba(20, 50, 32, 0.15))'
      : p.allapot === 'nem_megfelel'
        ? 'linear-gradient(145deg, rgba(130, 40, 40, 0.35), rgba(60, 20, 20, 0.12))'
        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.12))'};
  font-size: 0.82rem;
  line-height: 1.48;
  color: ${tema.szin.szurke};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`

const ElemCim = styled.strong`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.35rem;
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

const Jelolo = styled.span<{ allapot: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${(p) =>
    p.allapot === 'megfelel'
      ? '#6fcf97'
      : p.allapot === 'nem_megfelel'
        ? '#e07a7a'
        : tema.szin.arany};
  box-shadow: 0 0 10px
    ${(p) =>
      p.allapot === 'megfelel'
        ? 'rgba(111, 207, 151, 0.45)'
        : p.allapot === 'nem_megfelel'
          ? 'rgba(224, 122, 122, 0.4)'
          : 'rgba(197, 165, 114, 0.35)'};
`

type Props = {
  osszegzes: KovetelmenyOsszegzes
}

export function KovetelmenyPanel({ osszegzes }: Props) {
  const osszegzoTipus = osszegzes.teljesMegfeleles
    ? 'ok'
    : osszegzes.vanHiba
      ? 'hiba'
      : 'resz'

  const osszegzoSzoveg = osszegzes.teljesMegfeleles
    ? 'Összesen megfelel'
    : osszegzes.vanHiba
      ? 'Van hiányosság'
      : 'Részben / ellenőrizendő'

  return (
    <Panel>
      <FejlecSor>
        <Cim>Karrier követelmények</Cim>
        <Osszegzo $tipus={osszegzoTipus}>{osszegzoSzoveg}</Osszegzo>
      </FejlecSor>
      <Lista>
        {osszegzes.eredmenyek.map((e) => (
          <Elem key={e.id} allapot={e.allapot}>
            <ElemCim>
              <Jelolo allapot={e.allapot} aria-hidden />
              {e.cimke}
            </ElemCim>
            {e.indok}
          </Elem>
        ))}
      </Lista>
    </Panel>
  )
}
