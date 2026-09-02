import logoGold from '@/assets/brand/logo-gold.png'
import logoLight from '@/assets/brand/logo-light.png'
import { cn } from '@/lib/cn'

type LogoProps = {
  variant?: 'gold' | 'light'
  className?: string
}

/**
 * A logóváltozatok a `src/assets/brand` mappában vannak. Ha megkapod a
 * tervezőtől a vektoros (SVG) verziót, csak itt kell kicserélni az importot.
 */
export function Logo({ variant = 'gold', className }: LogoProps) {
  return (
    <img
      src={variant === 'gold' ? logoGold : logoLight}
      alt="Juliette Logistique"
      className={cn('h-12 w-auto select-none', className)}
    />
  )
}
