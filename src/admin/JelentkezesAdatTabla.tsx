import { jelentkezesTablaSorok } from './jelentkezesMezok'
import { AdatTabla } from './adminStilus'
import type { JelentkezesReszlet } from '../api/jelentkezesApi'

type Props = {
  reszlet: JelentkezesReszlet
}

/**
 * A beküldött űrlap mezői kétoszlopos, átlátható táblázatban.
 */
export function JelentkezesAdatTabla({ reszlet }: Props) {
  const sorok = jelentkezesTablaSorok(reszlet as Record<string, unknown>)

  return (
    <AdatTabla>
      <tbody>
        {sorok.map((sor) => (
          <tr key={sor.kulcs}>
            <th scope="row">{sor.cimke}</th>
            <td>{sor.ertek}</td>
          </tr>
        ))}
      </tbody>
    </AdatTabla>
  )
}
