import { useEffect } from 'react'
import { documentGorgetesVisszavonasa } from '../lib/gorgetes'

/**
 * Megakadályozza, hogy a böngésző a window-t görgesse a #root helyett.
 * Fókuszváltáskor (űrlap 2. szekció stb.) különben üres fekete képernyő jelenik meg.
 */
export function DocumentGorgetesOrzo() {
  useEffect(() => {
    function javit() {
      documentGorgetesVisszavonasa()
    }

    function fókuszUtanJavit() {
      // A böngésző scrollIntoView-ja a focus után fut — két frame kell.
      requestAnimationFrame(() => {
        requestAnimationFrame(javit)
      })
    }

    window.addEventListener('scroll', javit, { passive: true })
    document.addEventListener('focusin', fókuszUtanJavit)
    return () => {
      window.removeEventListener('scroll', javit)
      document.removeEventListener('focusin', fókuszUtanJavit)
    }
  }, [])

  return null
}
