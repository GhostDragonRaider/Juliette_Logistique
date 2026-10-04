import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { revealAlap } from '../stilusok/tema'

const RevealKeret = styled.div`
  ${revealAlap}

  &:not(:last-child) {
    margin-bottom: 0.35rem;
  }
`

type GorgetesRevealTulajdonsagok = {
  children: ReactNode
  className?: string
  /** IntersectionObserver küszöb (0–1) */
  kuszob?: number
}

/**
 * Görgetéskor felúszó tartalomblokk (opacity + translate), a karrier oldal mintájára.
 */
export function GorgetesReveal({
  children,
  className,
  kuszob = 0.15,
}: GorgetesRevealTulajdonsagok) {
  const { referencia, lathato } = useScrollReveal<HTMLDivElement>(kuszob)

  const osztalyok = [className, lathato ? 'lathato' : undefined]
    .filter(Boolean)
    .join(' ')

  return (
    <RevealKeret ref={referencia} className={osztalyok || undefined}>
      {children}
    </RevealKeret>
  )
}
