import type { PropsWithChildren } from 'react'

import { cn } from '@/lib/cn'

type CardProps = PropsWithChildren<{ className?: string }>

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'border-gold-hairline bg-ink-800/60 hover:border-gold-400/50 hover:bg-ink-700/60 p-6 transition-colors duration-200',
        className,
      )}
    >
      {children}
    </div>
  )
}
