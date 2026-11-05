import { Outlet } from 'react-router-dom'
import { Fejlec } from './Fejlec'

/**
 * Nyilvános oldalak közös kerete — egyetlen, állandó fejléc minden al-oldalon.
 */
export function NyilvanosLayout() {
  return (
    <>
      <Fejlec />
      <Outlet />
    </>
  )
}
