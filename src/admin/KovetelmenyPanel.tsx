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

const KetOszlop = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1rem 1.25rem;
  align-items: start;

  @media (max-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Oszlop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;
`

const OszlopCim = styled.h4<{ $hang: 'ok' | 'hiba' }>`
  margin: 0 0 0.15rem;
  padding-bottom: 0.45rem;
  font-family: ${tema.betu.cim};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(p) => (p.$hang === 'ok' ? '#8fd4a8' : '#e8a0a0')};
  border-bottom: 1px solid
    ${(p) =>
      p.$hang === 'ok' ? 'rgba(88, 175, 110, 0.35)' : 'rgba(210, 95, 95, 0.35)'};
`

const Lista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`

const UresOszlop = styled.p`
  margin: 0;
  padding: 0.65rem 0.75rem;
  font-size: 0.78rem;
  font-style: italic;
  color: ${tema.szin.szurke};
  border: 1px dashed rgba(197, 165, 114, 0.2);
  border-radius: 2px;
`

const SemlegesSzekcio = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(197, 165, 114, 0.15);
`

const SemlegesCim = styled.h4`
  margin: 0 0 0.5rem;
  font-family: ${tema.betu.cim};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
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

const IndokSzoveg = styled.p`
  margin: 0 0 0.5rem;
`

const ValaszBlokk = styled.div`
  margin-top: 0.55rem;
  padding-top: 0.55rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`

const ValaszFejlec = styled.p`
  margin: 0 0 0.4rem;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

const ValaszLista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

const ValaszSor = styled.li`
  font-size: 0.78rem;
  line-height: 1.45;
  color: ${tema.szin.feher};
`

const ValaszCimke = styled.span`
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${tema.szin.szurke};
  margin-bottom: 0.1rem;
`

const ValaszErtek = styled.span`
  display: block;
  word-break: break-word;
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

function KovetelmenyElemek({
  elemek,
  mutatKitoltoValaszok = false,
}: {
  elemek: KovetelmenyOsszegzes['eredmenyek']
  mutatKitoltoValaszok?: boolean
}) {
  if (elemek.length === 0) {
    return <UresOszlop>Nincs megjeleníthető pont ebben a csoportban.</UresOszlop>
  }

  return (
    <Lista>
      {elemek.map((e) => (
        <Elem key={e.id} allapot={e.allapot}>
          <ElemCim>
            <Jelolo allapot={e.allapot} aria-hidden />
            {e.cimke}
          </ElemCim>
          <IndokSzoveg>{e.indok}</IndokSzoveg>
          {mutatKitoltoValaszok && e.kitoltoValaszok.length > 0 ? (
            <ValaszBlokk>
              <ValaszFejlec>Kitöltő válasza a kérdőívben</ValaszFejlec>
              <ValaszLista>
                {e.kitoltoValaszok.map((v) => (
                  <ValaszSor key={v.mezo}>
                    <ValaszCimke>{v.cimke}</ValaszCimke>
                    <ValaszErtek>{v.ertek}</ValaszErtek>
                  </ValaszSor>
                ))}
              </ValaszLista>
            </ValaszBlokk>
          ) : null}
        </Elem>
      ))}
    </Lista>
  )
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

  const megfelel = osszegzes.eredmenyek.filter((e) => e.allapot === 'megfelel')
  const nemMegfelel = osszegzes.eredmenyek.filter((e) => e.allapot === 'nem_megfelel')
  const nemEllenorizheto = osszegzes.eredmenyek.filter(
    (e) => e.allapot === 'nem_ellenorizheto',
  )

  return (
    <Panel>
      <FejlecSor>
        <Cim>Karrier követelmények</Cim>
        <Osszegzo $tipus={osszegzoTipus}>{osszegzoSzoveg}</Osszegzo>
      </FejlecSor>
      <KetOszlop>
        <Oszlop>
          <OszlopCim $hang="ok">Megfelel / előny</OszlopCim>
          <KovetelmenyElemek elemek={megfelel} />
        </Oszlop>
        <Oszlop>
          <OszlopCim $hang="hiba">Nem teljesített / hátrány</OszlopCim>
          <KovetelmenyElemek elemek={nemMegfelel} mutatKitoltoValaszok />
        </Oszlop>
      </KetOszlop>
      {nemEllenorizheto.length > 0 ? (
        <SemlegesSzekcio>
          <SemlegesCim>Nem automatikusan ellenőrizhető</SemlegesCim>
          <KovetelmenyElemek elemek={nemEllenorizheto} />
        </SemlegesSzekcio>
      ) : null}
    </Panel>
  )
}
