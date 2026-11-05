import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal: amikor az elem a viewportba ér, „lathato” állapotba kerül.
 * Csak transform/opacity animációkhoz használjuk.
 */
export function useScrollReveal<T extends HTMLElement>(kuszob = 0.18) {
  const referencia = useRef<T | null>(null)
  const [lathato, setLathato] = useState(false)

  useEffect(() => {
    const elem = referencia.current
    if (!elem) {
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
      { threshold: kuszob, rootMargin: '0px 0px -8% 0px' },
    )

    megfigyelo.observe(elem)
    return () => megfigyelo.disconnect()
  }, [kuszob])

  return { referencia, lathato }
}
