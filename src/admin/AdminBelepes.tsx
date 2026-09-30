import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminBejelentkezes } from '../api/jelentkezesApi'
import { adminTokenMent, adminTokenOlvas } from './auth'
import { AdminCim, AdminKeret, AdminPanel, FoGomb, MezoCsoport, SzovegMezo, UzenetSav } from './adminStilus'

export function AdminBelepes() {
  const navigate = useNavigate()
  const [felhasznalo, setFelhasznalo] = useState('admin')
  const [jelszo, setJelszo] = useState('')
  const [hiba, setHiba] = useState('')
  const [fut, setFut] = useState(false)

  useEffect(() => {
    if (adminTokenOlvas()) {
      navigate('/admin', { replace: true })
    }
  }, [navigate])

  async function kuldes(e: FormEvent) {
    e.preventDefault()
    setHiba('')
    setFut(true)
    try {
      const { token } = await adminBejelentkezes(felhasznalo, jelszo)
      adminTokenMent(token)
      navigate('/admin')
    } catch (err) {
      setHiba(err instanceof Error ? err.message : 'Hiba')
    } finally {
      setFut(false)
    }
  }

  return (
    <AdminKeret>
      <AdminPanel style={{ maxWidth: 420 }}>
        <AdminCim>Admin belépés</AdminCim>
        <form onSubmit={kuldes}>
          <MezoCsoport>
            Felhasználónév
            <SzovegMezo
              value={felhasznalo}
              onChange={(e) => setFelhasznalo(e.target.value)}
              autoComplete="username"
              required
            />
          </MezoCsoport>
          <MezoCsoport>
            Jelszó
            <SzovegMezo
              type="password"
              value={jelszo}
              onChange={(e) => setJelszo(e.target.value)}
              autoComplete="current-password"
              required
            />
          </MezoCsoport>
          {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}
          <FoGomb type="submit" disabled={fut}>{fut ? 'Belépés…' : 'Belépés'}</FoGomb>
        </form>
      </AdminPanel>
    </AdminKeret>
  )
}
