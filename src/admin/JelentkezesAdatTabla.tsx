import styled from '@emotion/styled'
import {
  jelentkezesMezoTerkep,
  mezoKovetelmenyKiemels,
  type MezoKiemels,
} from './karrierKovetelmenyek'
import { jelentkezesSzekcioCsoportok, type TablaSor } from './jelentkezesMezok'
import type { JelentkezesReszlet } from '../api/jelentkezesApi'
import { tema } from '../stilusok/tema'

const OszlopRacs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.15rem 1.25rem;
  margin: 1.5rem 0 0;

  @media (max-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`

const SzekcioKartya = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 1rem 1.05rem 1.1rem;
  background:
    linear-gradient(165deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01)),
    ${tema.hatter.emelt};
  border: 1px solid rgba(197, 165, 114, 0.28);
  box-shadow: ${tema.arnyek.kartya};
`

const SzekcioCim = styled.h3`
  margin: 0 0 0.85rem;
  padding-bottom: 0.55rem;
  font-family: ${tema.betu.cim};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
  border-bottom: 1px solid rgba(197, 165, 114, 0.2);
`

const MezoRacs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 0.85rem;

  @media (max-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: 1fr;
  }
`

const MezoCella = styled.div<{ kiemels?: MezoKiemels; teljesSzeles?: boolean }>`
  grid-column: ${(p) => (p.teljesSzeles ? '1 / -1' : 'auto')};
  padding: 0.55rem 0.65rem;
  border: 1px solid
    ${(p) =>
      p.kiemels === 'nem_megfelel'
        ? 'rgba(200, 90, 90, 0.45)'
        : p.kiemels === 'megfelel'
          ? 'rgba(72, 160, 96, 0.45)'
          : 'rgba(197, 165, 114, 0.12)'};
  background: ${(p) =>
    p.kiemels === 'nem_megfelel'
      ? 'rgba(120, 35, 35, 0.32)'
      : p.kiemels === 'megfelel'
        ? 'rgba(40, 100, 55, 0.28)'
        : 'rgba(0, 0, 0, 0.18)'};
`

const MezoCimke = styled.div`
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.arany};
  margin-bottom: 0.25rem;
`

const MezoErtek = styled.div`
  font-size: 0.86rem;
  line-height: 1.45;
  color: ${tema.szin.feher};
  word-break: break-word;
  white-space: pre-wrap;
`

const TELJES_SZELES_MEZOK = new Set([
  'motivacio',
  'tapasztalatLeiras',
  'korabbiTerulet',
  'korabbiTeruletEgyeb',
  'premiumMarkak',
  'jogositvanyKategoria',
  'rugalmassag',
  'hetiNapok',
])

type Props = {
  reszlet: JelentkezesReszlet
}

function mezoKiemelsSzine(
  sor: TablaSor,
  reszletRekord: Record<string, unknown>,
): MezoKiemels {
  return mezoKovetelmenyKiemels(sor.kulcs, reszletRekord)
}

/**
 * Prémium, kétoszlopos szekciókártyás elrendezés a beküldött jelentkezéshez.
 */
export function JelentkezesAdatTabla({ reszlet }: Props) {
  const reszletRekord = reszlet as Record<string, unknown>
  const szekciok = jelentkezesSzekcioCsoportok(reszletRekord)
  const adat = jelentkezesMezoTerkep(reszletRekord)
  const teljesNev =
    (typeof adat.teljesNev === 'string' && adat.teljesNev) ||
    reszlet.nev ||
    'Jelentkező'

  return (
    <div>
      <SzekcioCim as="h2" style={{ fontSize: '0.92rem', marginBottom: 0 }}>
        {teljesNev} — beküldött adatlap
      </SzekcioCim>
      <OszlopRacs>
        {szekciok.map((szekcio) => (
          <SzekcioKartya key={szekcio.id} aria-labelledby={`szekcio-${szekcio.id}`}>
            <SzekcioCim id={`szekcio-${szekcio.id}`}>{szekcio.cim}</SzekcioCim>
            <MezoRacs>
              {szekcio.sorok.map((sor) => {
                const kiemels = mezoKiemelsSzine(sor, reszletRekord)
                const teljesSzeles =
                  TELJES_SZELES_MEZOK.has(sor.kulcs) || sor.ertek.length > 72
                return (
                  <MezoCella key={sor.kulcs} kiemels={kiemels ?? undefined} teljesSzeles={teljesSzeles}>
                    <MezoCimke>{sor.cimke}</MezoCimke>
                    <MezoErtek>{sor.ertek}</MezoErtek>
                  </MezoCella>
                )
              })}
            </MezoRacs>
          </SzekcioKartya>
        ))}
      </OszlopRacs>
    </div>
  )
}
