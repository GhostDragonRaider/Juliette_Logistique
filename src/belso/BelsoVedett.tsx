import { Navigate, useLocation } from 'react-router-dom'
import { useBelsoAuth } from './BelsoAuthContext'

export function BelsoVedett({ children }: { children: React.ReactNode }) {
  const { bejelentkezve, betolt } = useBelsoAuth()
  const hely = useLocation()

  if (betolt) {
    return (
      <div
        style={{
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#cfc6b8',
        }}
        role="status"
        aria-live="polite"
      >
        Betöltés…
      </div>
    )
  }

  if (!bejelentkezve) {
    return <Navigate to="/login" replace state={{ from: hely.pathname }} />
  }

  return children
}
