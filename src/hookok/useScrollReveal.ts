import { useEffect, useRef, useState } from 'react'

type UseScrollRevealOpciok = {
  /** IntersectionObserver threshold (0–1) */
  kuszob?: number
  /** Alsó rootMargin a korábbi / későbbi triggerhez */
  alsoMargó?: string
}

/**
 * Scroll-reveal: amikor az elem a viewportba ér, „lathato” állapotba kerül.
 * Prémium felúszó / fade animációkhoz.
 */
export function useScrollReveal<T extends HTMLElement>(
  kuszobVagyOpciok: number | UseScrollRevealOpciok = 0.14,
) {
  const opciok =
    typeof kuszobVagyOpciok === 'number'
      ? { kuszob: kuszobVagyOpciok, alsoMargó: '-10%' }
      : {
          kuszob: kuszobVagyOpciok.kuszob ?? 0.14,
          alsoMargó: kuszobVagyOpciok.alsoMargó ?? '-10%',
        }

  const referencia = useRef<T | null>(null)
  const [lathato, setLathato] = useState(false)

  useEffect(() => {
    const elem = referencia.current
    if (!elem) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLathato(true)
      return
    }

    /**
     * Figyeli, hogy az elem láthatóvá vált-e a képernyőn.
     */
    const megfigyelo = new IntersectionObserver(
      (bejegyzesek) => {
        bejegyzesek.forEach((bejegyzes) => {
          if (bejegyzes.isIntersecting) {
            setLathato(true)
            megfigyelo.unobserve(bejegyzes.target)
          }
        })
      },
      {
        threshold: opciok.kuszob,
        rootMargin: `0px 0px ${opciok.alsoMargó} 0px`,
      },
    )

    megfigyelo.observe(elem)
    return () => megfigyelo.disconnect()
  }, [opciok.kuszob, opciok.alsoMargó])

  return { referencia, lathato }
}
