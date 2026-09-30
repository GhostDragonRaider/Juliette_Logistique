import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jelentkezesReszletei, jelentkezesStatusz } from '../api/jelentkezesApi'
import { adminTokenOlvas } from './auth'
import { AdminLink, GombSor, KisGomb, UzenetSav } from './adminStilus'
import { JelentkezesAdatTabla } from './JelentkezesAdatTabla'
import { FajlMegtekinto } from './FajlMegtekinto'

export function AdminJelentkezesReszlet() {
  const { id = '' } = useParams()
  const [reszlet, setReszlet] = useState<Awaited<ReturnType<typeof jelentkezesReszletei>> | null>(null)
  const [hiba, setHiba] = useState('')

  useEffect(() => {
    jelentkezesReszletei(adminTokenOlvas(), id)
      .then(setReszlet)
      .catch((e) => setHiba(e instanceof Error ? e.message : 'Hiba'))
  }, [id])

  async function statuszAllit(statusz: string) {
    try {
      const friss = await jelentkezesStatusz(adminTokenOlvas(), id, statusz)
      setReszlet(friss)
    } catch (e) {
      setHiba(e instanceof Error ? e.message : 'Hiba')
    }
  }

  return (
    <div>
      <AdminLink to="/admin/jelentkezesek">← Vissza a listához</AdminLink>
      <h2 style={{ marginTop: '1rem' }}>{id}</h2>
      {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}
      {reszlet ? (
        <>
          <GombSor>
            <KisGomb type="button" onClick={() => void statuszAllit('uj')}>Új</KisGomb>
            <KisGomb type="button" onClick={() => void statuszAllit('folyamatban')}>Folyamatban</KisGomb>
            <KisGomb type="button" onClick={() => void statuszAllit('lezart')}>Lezárt</KisGomb>
          </GombSor>

          <JelentkezesAdatTabla reszlet={reszlet} />
          <FajlMegtekinto fajlok={reszlet.fajlok ?? []} />
        </>
      ) : null}
    </div>
  )
}
