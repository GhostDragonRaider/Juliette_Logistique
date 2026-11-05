import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { elemLathatovaGorget, oldalTetejereGorget } from '../lib/gorgetes'

/**
 * Route-váltáskor a megfelelő pozícióra görget:
 * - hash esetén a cél szekcióra (a #root konténerben),
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
          elemLathatovaGorget(elem, { behavior: 'smooth', block: 'start' })
        }
      }, 80)

      return () => window.clearTimeout(idozito)
    }

    oldalTetejereGorget('auto')
  }, [hely.pathname, hely.hash, hely.key])

  return null
}
