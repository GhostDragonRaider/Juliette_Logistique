import { UzenetSav } from './adminStilus'

export function AdminAttekintes() {
  return (
    <div>
      <h2 style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>Áttekintés</h2>
      <UzenetSav>
        A beérkezett jelentkezéseket a <strong>Jelentkezések</strong> menüpontban tekintheti meg
        táblázatos formában, a feltöltött PDF-eket pedig közvetlenül megnyithatja. A{' '}
        <strong>Napló</strong> menüpontban az admin tevékenységek és új jelentkezések követhetők.
      </UzenetSav>
    </div>
  )
}
