import styled from '@emotion/styled'
import type { JelentkezesReszlet } from '../api/jelentkezesApi'
import { jelentkezesMezoTerkep } from './karrierKovetelmenyek'
import { GombSor, KisGomb } from './adminStilus'
import { tema } from '../stilusok/tema'

const FejlecSav = styled.header`
  margin-top: 1.25rem;
  padding: 1.15rem 1.25rem 1.05rem;
  background:
    linear-gradient(135deg, rgba(197, 165, 114, 0.14), rgba(197, 165, 114, 0.03)),
    ${tema.hatter.kartya};
  border: 1px solid rgba(197, 165, 114, 0.35);
  box-shadow: ${tema.arnyek.kartya};
`

const FejlecRacs = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1rem 1.5rem;
  align-items: start;

  @media (max-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Nev = styled.h2`
  margin: 0 0 0.35rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.15rem, 2.5vw, 1.55rem);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

const Azonosito = styled.p`
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: ${tema.szin.szurkeSotet};
`

const ChipSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.55rem;
  margin-top: 0.75rem;
`

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.65rem;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: ${tema.szin.feher};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(197, 165, 114, 0.25);
`

const MetaOszlop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  font-size: 0.82rem;
  color: ${tema.szin.szurke};
`

const MetaSor = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid rgba(197, 165, 114, 0.12);

  strong {
    color: ${tema.szin.aranyVilagos};
    font-weight: 600;
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

  return (
    <FejlecSav>
      <FejlecRacs>
        <div>
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
      <GombSor style={{ marginTop: '1rem', marginBottom: 0 }}>
        <KisGomb type="button" onClick={() => statuszAllit('uj')}>Új</KisGomb>
        <KisGomb type="button" onClick={() => statuszAllit('folyamatban')}>Folyamatban</KisGomb>
        <KisGomb type="button" onClick={() => statuszAllit('lezart')}>Lezárt</KisGomb>
      </GombSor>
    </FejlecSav>
  )
}
