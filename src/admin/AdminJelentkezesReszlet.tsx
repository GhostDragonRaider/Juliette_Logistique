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
  padding-bottom: 2.5rem;
`

const VisszaLink = styled(AdminLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 0.25rem;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.9;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
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
      <VisszaLink to="/admin/jelentkezesek">← Vissza a listához</VisszaLink>
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
