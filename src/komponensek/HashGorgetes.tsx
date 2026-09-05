import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Főoldali hash linkeknél a megfelelő szekcióra görget (pl. /#rolunk).
 */
export function HashGorgetes() {
  const hely = useLocation()

  useEffect(() => {
    if (!hely.hash) {
      return
    }

    const idozito = window.setTimeout(() => {
      const elem = document.querySelector(hely.hash)
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      }
    }, 80)

    return () => window.clearTimeout(idozito)
  }, [hely.pathname, hely.hash])

  return null
}
