import styled from '@emotion/styled'
import type { JelentkezesReszlet } from '../api/jelentkezesApi'
import { jelentkezesMezoTerkep } from './karrierKovetelmenyek'
import { GombSor } from './adminStilus'
import { aranySzovegAtmenet, femesAranyGomb, tema } from '../stilusok/tema'
import { premiumKartya } from './adminPremiumStilus'

const FejlecSav = styled.header`
  ${premiumKartya}
  margin-top: 1.5rem;
  padding: 1.35rem 1.45rem 1.2rem;
`

const FejlecRacs = styled.div`
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: 1.25rem 2rem;
  align-items: start;

  @media (max-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Nev = styled.h2`
  margin: 0 0 0.4rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.2rem, 2.8vw, 1.65rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

const Alcím = styled.p`
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${tema.szin.szurkeSotet};
`

const Azonosito = styled.p`
  margin: 0.35rem 0 0;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: ${tema.szin.szurke};
  font-variant-numeric: tabular-nums;
`

const ChipSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.6rem;
  margin-top: 1rem;
`

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.75rem;
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  color: ${tema.szin.feher};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.2));
  border: 1px solid rgba(197, 165, 114, 0.28);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    border: 1px solid ${tema.szin.arany};
    transform: rotate(45deg);
    flex-shrink: 0;
  }
`

const MetaOszlop = styled.div`
  ${premiumKartya}
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.82rem;
  color: ${tema.szin.szurke};
  box-shadow: none;
`

const MetaSor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid rgba(197, 165, 114, 0.1);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  span {
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-size: 0.68rem;
    color: ${tema.szin.szurkeSotet};
  }

  strong {
    color: ${tema.szin.aranyVilagos};
    font-weight: 600;
    text-align: right;
  }
`

const StatuszGomb = styled.button<{ $aktiv?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: ${tema.betu.torzs};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.55rem 0.95rem;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  ${(p) =>
    p.$aktiv
      ? femesAranyGomb
      : `
    color: ${tema.szin.aranyVilagos};
    background: rgba(197, 165, 114, 0.1);
    border: 1px solid rgba(197, 165, 114, 0.32);
  `}

  &:hover {
    transform: translateY(-1px);
  }
`

type Props = {
  reszlet: JelentkezesReszlet
  id: string
  statuszAllit: (statusz: string) => void
}

export function JelentkezesFejlec({ reszlet, id, statuszAllit }: Props) {
  const adat = jelentkezesMezoTerkep(reszlet as Record<string, unknown>)
  const nev =
    (typeof adat.teljesNev === 'string' && adat.teljesNev) || reszlet.nev || '—'
  const beerkezett = reszlet.erkezett
    ? new Date(reszlet.erkezett).toLocaleString('hu-HU')
    : '—'
  const statusz = (reszlet.statusz || '').toLowerCase()

  return (
    <FejlecSav>
      <FejlecRacs>
        <div>
          <Alcím>Jelentkező</Alcím>
          <Nev>{nev}</Nev>
          <Azonosito>{id}</Azonosito>
          <ChipSor>
            {reszlet.email ? <Chip>{reszlet.email}</Chip> : null}
            {reszlet.telefon ? <Chip>{reszlet.telefon}</Chip> : null}
            {typeof adat.orszag === 'string' && adat.orszag ? (
              <Chip>{adat.orszag}</Chip>
            ) : null}
            {typeof adat.lakhely === 'string' && adat.lakhely ? (
              <Chip>{adat.lakhely}</Chip>
            ) : null}
          </ChipSor>
        </div>
        <MetaOszlop>
          <MetaSor>
            <span>Beérkezés</span>
            <strong>{beerkezett}</strong>
          </MetaSor>
          <MetaSor>
            <span>Státusz</span>
            <strong>{reszlet.statusz || '—'}</strong>
          </MetaSor>
        </MetaOszlop>
      </FejlecRacs>
      <GombSor style={{ marginTop: '1.15rem', marginBottom: 0 }}>
        <StatuszGomb type="button" $aktiv={statusz === 'uj'} onClick={() => statuszAllit('uj')}>
          Új
        </StatuszGomb>
        <StatuszGomb
          type="button"
          $aktiv={statusz === 'folyamatban'}
          onClick={() => statuszAllit('folyamatban')}
        >
          Folyamatban
        </StatuszGomb>
        <StatuszGomb
          type="button"
          $aktiv={statusz === 'lezart'}
          onClick={() => statuszAllit('lezart')}
        >
          Lezárt
        </StatuszGomb>
      </GombSor>
    </FejlecSav>
  )
}
