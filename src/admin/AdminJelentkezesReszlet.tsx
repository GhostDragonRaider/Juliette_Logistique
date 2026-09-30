import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jelentkezesReszletei, jelentkezesStatusz } from '../api/jelentkezesApi'
import { adminTokenOlvas } from './auth'
import styled from '@emotion/styled'
import { AdminLink, UzenetSav } from './adminStilus'
import { JelentkezesAdatTabla } from './JelentkezesAdatTabla'
import { JelentkezesFejlec } from './JelentkezesFejlec'
import { FajlMegtekinto } from './FajlMegtekinto'
import { KovetelmenyPanel } from './KovetelmenyPanel'
import { ertekelesJelentkezes } from './karrierKovetelmenyek'
import { tema } from '../stilusok/tema'

const ReszletKeret = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
`


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
    <ReszletKeret>
      <AdminLink to="/admin/jelentkezesek">← Vissza a listához</AdminLink>
      {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}
      {reszlet ? (
        <>
          <JelentkezesFejlec
            reszlet={reszlet}
            id={id}
            statuszAllit={(s) => void statuszAllit(s)}
          />
          <KovetelmenyPanel
            osszegzes={ertekelesJelentkezes(reszlet as Record<string, unknown>)}
          />
          <JelentkezesAdatTabla reszlet={reszlet} />
          <FajlMegtekinto fajlok={reszlet.fajlok ?? []} />
        </>
      ) : null}
    </ReszletKeret>
  )
}
