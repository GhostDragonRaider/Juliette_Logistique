import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import { tartalomBetoltese, tartalomMentese, type SzerkeszthetoTartalom } from '../api/jelentkezesApi'
import { adminTokenOlvas } from './auth'
import { FoGomb, MezoCsoport, SzovegMezo, UzenetSav } from './adminStilus'

const uresTartalom: SzerkeszthetoTartalom = {
  cegnev: '',
  telefonszam: '',
  email: '',
  cim: '',
  terulet: '',
  elerhetoseg: '',
}

export function AdminTartalom() {
  const [adat, setAdat] = useState<SzerkeszthetoTartalom>(uresTartalom)
  const [hiba, setHiba] = useState('')
  const [uzenet, setUzenet] = useState('')
  const [ment, setMent] = useState(false)

  useEffect(() => {
    const token = adminTokenOlvas()
    tartalomBetoltese(token)
      .then(setAdat)
      .catch((e) => setHiba(e instanceof Error ? e.message : 'Hiba'))
  }, [])

  function valtozas(kulcs: keyof SzerkeszthetoTartalom) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setAdat((elozo) => ({ ...elozo, [kulcs]: e.target.value }))
    }
  }

  async function kuldes(e: FormEvent) {
    e.preventDefault()
    setHiba('')
    setUzenet('')
    setMent(true)
    try {
      const token = adminTokenOlvas()
      await tartalomMentese(token, adat)
      setUzenet('Mentve.')
    } catch (err) {
      setHiba(err instanceof Error ? err.message : 'Hiba')
    } finally {
      setMent(false)
    }
  }

  return (
    <div>
      <h2 style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>Szerkeszthető tartalom</h2>
      <form onSubmit={kuldes}>
        <MezoCsoport>Cégnév<SzovegMezo value={adat.cegnev} onChange={valtozas('cegnev')} /></MezoCsoport>
        <MezoCsoport>Telefonszám<SzovegMezo value={adat.telefonszam} onChange={valtozas('telefonszam')} /></MezoCsoport>
        <MezoCsoport>E-mail<SzovegMezo type="email" value={adat.email} onChange={valtozas('email')} /></MezoCsoport>
        <MezoCsoport>Kapcsolati cím<SzovegMezo value={adat.cim} onChange={valtozas('cim')} placeholder="Utca, város…" /></MezoCsoport>
        <MezoCsoport>Terület / lefedettség<SzovegMezo value={adat.terulet} onChange={valtozas('terulet')} /></MezoCsoport>
        <MezoCsoport>Elérhetőség (időpont)<SzovegMezo value={adat.elerhetoseg} onChange={valtozas('elerhetoseg')} /></MezoCsoport>
        {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}
        {uzenet ? <UzenetSav>{uzenet}</UzenetSav> : null}
        <FoGomb type="submit" disabled={ment}>{ment ? 'Mentés…' : 'Mentés'}</FoGomb>
      </form>
    </div>
  )
}
