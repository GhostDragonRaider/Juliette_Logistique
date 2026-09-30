import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { jelentkezesekListazasa } from '../api/jelentkezesApi'
import { adminTokenOlvas } from './auth'
import { ListaTabla, UzenetSav } from './adminStilus'

export function AdminJelentkezesLista() {
  const [lista, setLista] = useState<Awaited<ReturnType<typeof jelentkezesekListazasa>>>([])
  const [hiba, setHiba] = useState('')

  useEffect(() => {
    jelentkezesekListazasa(adminTokenOlvas())
      .then(setLista)
      .catch((e) => setHiba(e instanceof Error ? e.message : 'Hiba'))
  }, [])

  return (
    <div>
      <h2 style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>Jelentkezések</h2>
      {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}
      {!hiba && lista.length === 0 ? <UzenetSav>Még nincs beérkezett jelentkezés.</UzenetSav> : null}
      {lista.length > 0 ? (
        <ListaTabla>
          <thead>
            <tr>
              <th>Dátum</th>
              <th>Név</th>
              <th>Telefon</th>
              <th>Státusz</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {lista.map((elem) => (
              <tr key={elem.id}>
                <td>{new Date(elem.erkezett).toLocaleString()}</td>
                <td>{elem.nev || '—'}</td>
                <td>{elem.telefon || '—'}</td>
                <td>{elem.statusz}</td>
                <td>
                  <Link to={`/admin/jelentkezesek/${elem.id}`}>Megnyitás</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </ListaTabla>
      ) : null}
    </div>
  )
}
