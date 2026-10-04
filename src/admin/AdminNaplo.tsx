import { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { naploLekeres, type NaploBejegyzes } from '../api/jelentkezesApi'
import { adminTokenOlvas } from './auth'
import { ListaTabla, UzenetSav } from './adminStilus'
import { premiumKartya, premiumSzekcioCim } from './adminPremiumStilus'
import { NAPLO_ESEMENY_CIMKE, NAPLO_KATEGORIA_CIMKE } from './naploCimkek'
import { tema } from '../stilusok/tema'
import { Link } from 'react-router-dom'

const SzuroSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
  margin: 1.25rem 0;
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

const Panel = styled.section`
  ${premiumKartya}
  padding: 1rem 1.1rem 1.2rem;
  margin-top: 0.5rem;
`

const Cim = styled.h2`
  ${premiumSzekcioCim}
  font-size: 0.95rem;
  margin-bottom: 0;
`

const AdatCella = styled.td`
  font-size: 0.8rem;
  color: ${tema.szin.szurke};
  max-width: 14rem;
  word-break: break-word;
`

const UzenetCella = styled.td`
  line-height: 1.45;
`

const Lapozo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  font-size: 0.82rem;
  color: ${tema.szin.szurke};
`

const LapGomb = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
  background: rgba(197, 165, 114, 0.12);
  border: 1px solid rgba(197, 165, 114, 0.32);
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`

const OLDAL_MERET = 50

function kategoriaCimke(k: string) {
  return NAPLO_KATEGORIA_CIMKE[k] || k
}

function esemenyCimke(e: string) {
  return NAPLO_ESEMENY_CIMKE[e] || e
}

function adatOsszefoglalo(bejegyzes: NaploBejegyzes) {
  const a = bejegyzes.adat || {}
  if (a.jelentkezesId) {
    return (
      <Link to={`/admin/jelentkezesek/${a.jelentkezesId}`} style={{ color: tema.szin.aranyVilagos }}>
        {String(a.jelentkezesId)}
      </Link>
    )
  }
  if (a.utvonal) return String(a.utvonal)
  if (Array.isArray(a.valtozottMezok) && a.valtozottMezok.length) {
    return `Mezők: ${a.valtozottMezok.join(', ')}`
  }
  if (a.darab != null) return `${a.darab} db`
  if (a.nev) return String(a.nev)
  return '—'
}

export function AdminNaplo() {
  const [naplo, setNaplo] = useState<NaploBejegyzes[]>([])
  const [osszesen, setOsszesen] = useState(0)
  const [offset, setOffset] = useState(0)
  const [kategoria, setKategoria] = useState('')
  const [hiba, setHiba] = useState('')
  const [betolt, setBetolt] = useState(false)

  const betoltes = useCallback(async () => {
    setBetolt(true)
    setHiba('')
    try {
      const valasz = await naploLekeres(adminTokenOlvas(), {
        limit: OLDAL_MERET,
        offset,
        kategoria: kategoria || undefined,
      })
      setNaplo(valasz.naplo)
      setOsszesen(valasz.osszesen)
    } catch (e) {
      setHiba(e instanceof Error ? e.message : 'A napló betöltése sikertelen.')
    } finally {
      setBetolt(false)
    }
  }, [offset, kategoria])

  useEffect(() => {
    void betoltes()
  }, [betoltes])

  useEffect(() => {
    setOffset(0)
  }, [kategoria])

  const elozoOldal = () => setOffset((o) => Math.max(0, o - OLDAL_MERET))
  const kovetkezoOldal = () => {
    if (offset + OLDAL_MERET < osszesen) {
      setOffset((o) => o + OLDAL_MERET)
    }
  }

  return (
    <div>
      <Cim>Eseménynapló</Cim>
      <p style={{ fontSize: '0.85rem', color: tema.szin.szurke, margin: '0.5rem 0 0' }}>
        Bejelentkezések, tartalom-módosítások, új jelentkezések, státuszváltások és fájlműveletek.
      </p>

      <SzuroSor>
        <label>
          Kategória:{' '}
          <SzuroValaszto
            value={kategoria}
            onChange={(e) => setKategoria(e.target.value)}
          >
            <option value="">Összes</option>
            {Object.entries(NAPLO_KATEGORIA_CIMKE).map(([kulcs, cimke]) => (
              <option key={kulcs} value={kulcs}>{cimke}</option>
            ))}
          </SzuroValaszto>
        </label>
        <LapGomb type="button" onClick={() => void betoltes()} disabled={betolt}>
          {betolt ? 'Frissítés…' : 'Frissítés'}
        </LapGomb>
      </SzuroSor>

      {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}

      <Panel>
        {naplo.length === 0 && !betolt ? (
          <UzenetSav>Még nincs naplóbejegyzés (az új események innentől jelennek meg).</UzenetSav>
        ) : (
          <ListaTabla>
            <thead>
              <tr>
                <th>Időpont</th>
                <th>Kategória</th>
                <th>Esemény</th>
                <th>Leírás</th>
                <th>Kapcsolódó</th>
                <th>Felhasználó</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              {naplo.map((sor) => (
                <tr key={sor.id}>
                  <td>{new Date(sor.idopont).toLocaleString('hu-HU')}</td>
                  <td>{kategoriaCimke(sor.kategoria)}</td>
                  <td>{esemenyCimke(sor.esemeny)}</td>
                  <UzenetCella>{sor.uzenet}</UzenetCella>
                  <AdatCella>{adatOsszefoglalo(sor)}</AdatCella>
                  <td>{sor.felhasznalo || '—'}</td>
                  <td style={{ fontSize: '0.75rem', color: tema.szin.szurkeSotet }}>{sor.ip || '—'}</td>
                </tr>
              ))}
            </tbody>
          </ListaTabla>
        )}

        <Lapozo>
          <LapGomb type="button" onClick={elozoOldal} disabled={offset === 0 || betolt}>
            Előző
          </LapGomb>
          <span>
            {osszesen === 0
              ? '0 bejegyzés'
              : `${offset + 1}–${Math.min(offset + OLDAL_MERET, osszesen)} / ${osszesen}`}
          </span>
          <LapGomb
            type="button"
            onClick={kovetkezoOldal}
            disabled={offset + OLDAL_MERET >= osszesen || betolt}
          >
            Következő
          </LapGomb>
        </Lapozo>
      </Panel>
    </div>
  )
}
