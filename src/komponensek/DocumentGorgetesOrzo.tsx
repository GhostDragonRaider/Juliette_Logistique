import { useEffect } from 'react'
import {
  documentGorgetesVisszavonasa,
  elemLathatovaGorget,
} from '../lib/gorgetes'

/**
 * Megakadályozza, hogy a böngésző a window-t görgesse a #root helyett.
 * Fókuszváltáskor (űrlap 2. szekció stb.) különben üres fekete képernyő jelenik meg.
 */
export function DocumentGorgetesOrzo() {
  useEffect(() => {
    function javit() {
      documentGorgetesVisszavonasa()
    }

    function fókuszUtanJavit(esemeny: FocusEvent) {
      const cel = esemeny.target
      const futtat = () => {
        documentGorgetesVisszavonasa()
        if (
          cel instanceof HTMLElement &&
          document.getElementById('root')?.contains(cel)
        ) {
          elemLathatovaGorget(cel, { behavior: 'auto', block: 'nearest' })
        }
      }
      // A böngésző scrollIntoView-ja a focus után fut — frame + késleltetés kell.
      requestAnimationFrame(() => {
        requestAnimationFrame(futtat)
      })
      window.setTimeout(futtat, 50)
      window.setTimeout(futtat, 120)
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
