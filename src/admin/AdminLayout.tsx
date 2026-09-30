import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { adminKijelentkezes, adminTokenOlvas } from './auth'
import { AdminCim, AdminKeret, AdminNav, AdminPanel, AdminLink } from './adminStilus'

/**
 * Védett admin útvonalak közös kerete.
 */
export function AdminLayout() {
  const navigate = useNavigate()
  const token = adminTokenOlvas()

  if (!token) {
    return <Navigate to="/admin/belepes" replace />
  }

  function kilepes() {
    adminKijelentkezes()
    navigate('/admin/belepes')
  }

  return (
    <AdminKeret>
      <AdminPanel>
        <AdminCim>Admin</AdminCim>
        <AdminNav>
          <AdminLink to="/admin">Áttekintés</AdminLink>
          <AdminLink to="/admin/tartalom">Tartalom</AdminLink>
          <AdminLink to="/admin/jelentkezesek">Jelentkezések</AdminLink>
          <AdminLink to="/">Weboldal</AdminLink>
          <button type="button" onClick={kilepes} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            Kilépés
          </button>
        </AdminNav>
        <Outlet />
      </AdminPanel>
    </AdminKeret>
  )
}
