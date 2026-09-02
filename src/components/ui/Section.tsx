import type { PropsWithChildren } from 'react'

import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

type SectionProps = PropsWithChildren<{
  id?: string
  title?: string
  className?: string
}>

export function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-24', className)}>
      <Container>
        {title ? <SectionTitle>{title}</SectionTitle> : null}
        {children}
      </Container>
    </section>
  )
}

export function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="font-heading text-gold-gradient mb-10 text-center text-2xl tracking-[0.2em] uppercase sm:text-3xl">
      {children}
    </h2>
  )
}
