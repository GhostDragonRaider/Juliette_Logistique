import styled from '@emotion/styled'
import {
  jelentkezesMezoTerkep,
  mezoKovetelmenyKiemels,
  type MezoKiemels,
} from './karrierKovetelmenyek'
import { jelentkezesSzekcioCsoportok, type TablaSor } from './jelentkezesMezok'
import type { JelentkezesReszlet } from '../api/jelentkezesApi'
import { tema } from '../stilusok/tema'
import { premiumKartya, premiumOldalCim, premiumSzekcioCim } from './adminPremiumStilus'

const AdatlapKeret = styled.div`
  margin-top: 0.5rem;
`

const OszlopRacs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.35rem 1.4rem;

  @media (max-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1fr;
  }
`

const SzekcioKartya = styled.section<{ teljesSzeles?: boolean }>`
  ${premiumKartya}
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 1.15rem 1.2rem 1.25rem;
  grid-column: ${(p) => (p.teljesSzeles ? '1 / -1' : 'auto')};
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    border-color: rgba(197, 165, 114, 0.45);
    box-shadow:
      inset 0 1px 0 rgba(232, 215, 181, 0.14),
      0 20px 48px rgba(0, 0, 0, 0.38);
    transform: translateY(-2px);
  }
`

const SzekcioCim = styled.h3`
  ${premiumSzekcioCim}
`

const OldalCim = styled.h2`
  ${premiumOldalCim}
`

const MezoRacs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem 0.9rem;

  @media (max-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: 1fr;
  }
`

const MezoCella = styled.div<{ kiemels?: MezoKiemels; teljesSzeles?: boolean }>`
  grid-column: ${(p) => (p.teljesSzeles ? '1 / -1' : 'auto')};
  padding: 0.65rem 0.75rem;
  border-radius: 2px;
  border: 1px solid
    ${(p) =>
      p.kiemels === 'nem_megfelel'
        ? 'rgba(210, 95, 95, 0.5)'
        : p.kiemels === 'megfelel'
          ? 'rgba(88, 175, 110, 0.45)'
          : 'rgba(197, 165, 114, 0.14)'};
  background: ${(p) =>
    p.kiemels === 'nem_megfelel'
      ? 'linear-gradient(135deg, rgba(140, 45, 45, 0.38), rgba(80, 25, 25, 0.25))'
      : p.kiemels === 'megfelel'
        ? 'linear-gradient(135deg, rgba(45, 110, 65, 0.32), rgba(25, 60, 40, 0.2))'
        : 'linear-gradient(180deg, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.12))'};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
`

const MezoCimke = styled.div`
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tema.szin.arany};
  margin-bottom: 0.35rem;
  opacity: 0.95;
`

const MezoErtek = styled.div`
  font-size: 0.88rem;
  line-height: 1.5;
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

const TELJES_SZELES_SZEKCIO = new Set(['motivacio', 'beerkezes'])

type Props = {
  reszlet: JelentkezesReszlet
}

function mezoKiemelsSzine(
  sor: TablaSor,
  reszletRekord: Record<string, unknown>,
): MezoKiemels {
  return mezoKovetelmenyKiemels(sor.kulcs, reszletRekord)
}

export function JelentkezesAdatTabla({ reszlet }: Props) {
  const reszletRekord = reszlet as Record<string, unknown>
  const szekciok = jelentkezesSzekcioCsoportok(reszletRekord)
  const adat = jelentkezesMezoTerkep(reszletRekord)
  const teljesNev =
    (typeof adat.teljesNev === 'string' && adat.teljesNev) ||
    reszlet.nev ||
    'Jelentkező'

  return (
    <AdatlapKeret>
      <OldalCim>{teljesNev} — beküldött adatlap</OldalCim>
      <OszlopRacs>
        {szekciok.map((szekcio) => (
          <SzekcioKartya
            key={szekcio.id}
            teljesSzeles={TELJES_SZELES_SZEKCIO.has(szekcio.id)}
            aria-labelledby={`szekcio-${szekcio.id}`}
          >
            <SzekcioCim id={`szekcio-${szekcio.id}`}>{szekcio.cim}</SzekcioCim>
            <MezoRacs>
              {szekcio.sorok.map((sor) => {
                const kiemels = mezoKiemelsSzine(sor, reszletRekord)
                const teljesSzeles =
                  TELJES_SZELES_MEZOK.has(sor.kulcs) || sor.ertek.length > 72
                return (
                  <MezoCella
                    key={sor.kulcs}
                    kiemels={kiemels ?? undefined}
                    teljesSzeles={teljesSzeles}
                  >
                    <MezoCimke>{sor.cimke}</MezoCimke>
                    <MezoErtek>{sor.ertek}</MezoErtek>
                  </MezoCella>
                )
              })}
            </MezoRacs>
          </SzekcioKartya>
        ))}
      </OszlopRacs>
    </AdatlapKeret>
  )
}
