import type { CSSProperties, ReactNode } from 'react'
import styled from '@emotion/styled'
import { revealAlap, revealListaKeses } from '../stilusok/tema'
import { useScrollReveal } from '../hookok/useScrollReveal'

const Blokk = styled.div<{ $listaKeses?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${revealAlap}
  ${(props) => (props.$listaKeses ? revealListaKeses : '')}
`

type RevealBlokkTulajdonsagok = {
  children: ReactNode
  className?: string
  /** Extra késleltetés ms-ben (lépcsőzetes első viewport elemekhez) */
  kesleltetesMs?: number
  /** Ha true, a közvetlen gyerekek is lépcsőzetesen úsznak fel */
  listaKeses?: boolean
  kuszob?: number
}

/**
 * Görgetésre (vagy viewportba érkezésre) prémium felúszó blokk.
 */
export function RevealBlokk({
  children,
  className,
  kesleltetesMs = 0,
  listaKeses = false,
  kuszob = 0.14,
}: RevealBlokkTulajdonsagok) {
  const { referencia, lathato } = useScrollReveal<HTMLDivElement>(kuszob)

  const stilus = {
    ['--reveal-keses' as string]: `${kesleltetesMs}ms`,
  } as CSSProperties

  return (
    <Blokk
      ref={referencia}
      className={lathato ? `lathato ${className ?? ''}`.trim() : className}
      style={stilus}
      $listaKeses={listaKeses}
    >
      {children}
    </Blokk>
  )
}
