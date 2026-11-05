import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { jelentkezesekListazasa, jelentkezesReszletei } from '../api/jelentkezesApi'
import { adminTokenOlvas } from './auth'
import { ListaTabla, UzenetSav } from './adminStilus'
import {
  ertekelesJelentkezes,
  type KovetelmenySzuro,
  szuroIlleszkedik,
} from './karrierKovetelmenyek'
import { tema } from '../stilusok/tema'

const SzuroSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
  margin: 1rem 0 1.25rem;
  font-size: 0.85rem;
  color: ${tema.szin.szurke};
`

const SzuroValaszto = styled.select`
  padding: 0.45rem 0.6rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(197, 165, 114, 0.35);
  color: ${tema.szin.feher};
  font-size: 0.85rem;
`

function listaSorHatter(teljesMegfeleles: boolean, vanHiba: boolean) {
  if (teljesMegfeleles) return 'rgba(40, 100, 55, 0.28)'
  if (vanHiba) return 'rgba(120, 35, 35, 0.32)'
  return undefined
}

export function AdminJelentkezesLista() {
  const [lista, setLista] = useState<Awaited<ReturnType<typeof jelentkezesekListazasa>>>([])
  const [hiba, setHiba] = useState('')
  const [szuro, setSzuro] = useState<KovetelmenySzuro>('osszes')
  const [ertekelesek, setErtekelesek] = useState<
    Record<string, ReturnType<typeof ertekelesJelentkezes>>
  >({})
  const [ertekelesBetolt, setErtekelesBetolt] = useState(false)

  useEffect(() => {
    jelentkezesekListazasa(adminTokenOlvas())
      .then(setLista)
      .catch((e) => setHiba(e instanceof Error ? e.message : 'Hiba'))
  }, [])

  useEffect(() => {
    if (lista.length === 0) return
    const token = adminTokenOlvas()
    setErtekelesBetolt(true)
    Promise.all(
      lista.map(async (elem) => {
        try {
          const reszlet = await jelentkezesReszletei(token, elem.id)
          return [elem.id, ertekelesJelentkezes(reszlet as Record<string, unknown>)] as const
        } catch {
          return [elem.id, null] as const
        }
      }),
    )
      .then((parok) => {
        const map: Record<string, ReturnType<typeof ertekelesJelentkezes>> = {}
        for (const [id, ossz] of parok) {
          if (ossz) map[id] = ossz
        }
        setErtekelesek(map)
      })
      .finally(() => setErtekelesBetolt(false))
  }, [lista])

  const szurtLista = useMemo(() => {
    if (szuro === 'osszes') return lista
    return lista.filter((elem) => {
      const ossz = ertekelesek[elem.id]
      if (!ossz) return false
      return szuroIlleszkedik(szuro, ossz)
    })
  }, [lista, szuro, ertekelesek])

  return (
    <div>
      <h2 style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>Jelentkezések</h2>
      <p style={{ fontSize: '0.85rem', color: tema.szin.szurke, margin: '0.5rem 0 0' }}>
        Szűrés a karrier oldal „Kit keresünk?” követelményei alapján (zöld: megfelel, piros: nem
        felel meg).
      </p>
      <SzuroSor>
        <label>
          Követelmény szűrő:{' '}
          <SzuroValaszto
            value={szuro}
            onChange={(e) => setSzuro(e.target.value as KovetelmenySzuro)}
          >
            <option value="osszes">Összes jelentkezés</option>
            <option value="megfelel">Minden követelménynek megfelel</option>
            <option value="nem_megfelel">Van nem teljesített követelmény</option>
            <option value="reszben">Részben / nem egyértelmű</option>
          </SzuroValaszto>
        </label>
        {ertekelesBetolt ? <span>Követelmények számítása…</span> : null}
      </SzuroSor>
      {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}
      {!hiba && lista.length === 0 ? <UzenetSav>Még nincs beérkezett jelentkezés.</UzenetSav> : null}
      {!hiba && lista.length > 0 && szurtLista.length === 0 ? (
        <UzenetSav>Nincs a szűrőnek megfelelő jelentkezés.</UzenetSav>
      ) : null}
      {szurtLista.length > 0 ? (
        <ListaTabla>
          <thead>
            <tr>
              <th>Dátum</th>
              <th>Név</th>
              <th>Telefon</th>
              <th>Státusz</th>
              <th>Követelmény</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {szurtLista.map((elem) => {
              const ossz = ertekelesek[elem.id]
              const hatter =
                ossz ? listaSorHatter(ossz.teljesMegfeleles, ossz.vanHiba) : undefined
              const rovid =
                ossz == null
                  ? '—'
                  : ossz.teljesMegfeleles
                    ? 'Megfelel'
                    : ossz.vanHiba
                      ? 'Nem felel meg'
                      : 'Részben'
              return (
                <tr key={elem.id} style={hatter ? { background: hatter } : undefined}>
                  <td>{new Date(elem.erkezett).toLocaleString()}</td>
                  <td>{elem.nev || '—'}</td>
                  <td>{elem.telefon || '—'}</td>
                  <td>{elem.statusz}</td>
                  <td>{rovid}</td>
                  <td>
                    <Link to={`/admin/jelentkezesek/${elem.id}`}>Megnyitás</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </ListaTabla>
      ) : null}
    </div>
  )
}
