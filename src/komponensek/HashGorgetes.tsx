import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route-váltáskor a megfelelő pozícióra görget:
 * - hash esetén a cél szekcióra (simán),
 * - egyébként az oldal tetejére.
 */
export function HashGorgetes() {
  const hely = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hely.hash) {
      const idozito = window.setTimeout(() => {
        const elem = document.querySelector(hely.hash)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 80)

      return () => window.clearTimeout(idozito)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [hely.pathname, hely.hash, hely.key])

  return null
}
