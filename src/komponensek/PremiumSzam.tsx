import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { premiumSzamStilus } from '../stilusok/tema'

type PremiumSzamTulajdonsagok = {
  children: ReactNode
  className?: string
}

/** Prémium megjelenésű szám / számszerű kiemelés */
const SzamJeloles = styled.span`
  ${premiumSzamStilus}
`

/**
 * Egy számot vagy számszerű értéket jelenít meg prémium tipográfiával.
 */
export function PremiumSzam({ children, className }: PremiumSzamTulajdonsagok) {
  return <SzamJeloles className={className}>{children}</SzamJeloles>
}
