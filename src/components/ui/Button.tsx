import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/cn'

type Variant = 'primary' | 'outline' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-gold-400 text-ink-900 hover:bg-gold-300 shadow-glow',
  outline: 'border border-gold-400/60 text-gold-200 hover:bg-gold-400/10 hover:text-gold-100',
  ghost: 'text-neutral-300 hover:text-gold-200',
}

type CommonProps = PropsWithChildren<{
  variant?: Variant
  className?: string
}>

export function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  variant = 'primary',
  className,
  children,
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  )
}
