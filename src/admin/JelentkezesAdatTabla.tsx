import { jelentkezesTablaSorok } from './jelentkezesMezok'
import { mezoKovetelmenyKiemels } from './karrierKovetelmenyek'
import { AdatTabla } from './adminStilus'
import type { JelentkezesReszlet } from '../api/jelentkezesApi'

type Props = {
  reszlet: JelentkezesReszlet
}

function sorHatter(kiemels: ReturnType<typeof mezoKovetelmenyKiemels>) {
  if (kiemels === 'megfelel') return 'rgba(40, 100, 55, 0.32)'
  if (kiemels === 'nem_megfelel') return 'rgba(120, 35, 35, 0.38)'
  return undefined
}

/**
 * A beküldött űrlap mezői kétoszlopos, átlátható táblázatban.
 */
export function JelentkezesAdatTabla({ reszlet }: Props) {
  const sorok = jelentkezesTablaSorok(reszlet as Record<string, unknown>)
  const reszletRekord = reszlet as Record<string, unknown>

  return (
    <AdatTabla>
      <tbody>
        {sorok.map((sor) => {
          const kiemels = mezoKovetelmenyKiemels(sor.kulcs, reszletRekord)
          const hatter = sorHatter(kiemels)
          return (
            <tr key={sor.kulcs} style={hatter ? { background: hatter } : undefined}>
              <th scope="row">{sor.cimke}</th>
              <td>{sor.ertek}</td>
            </tr>
          )
        })}
      </tbody>
    </AdatTabla>
  )
}
