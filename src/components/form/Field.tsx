import type { InputHTMLAttributes, PropsWithChildren, TextareaHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/cn'
import { translateError } from '@/lib/formErrors'

const controlClasses =
  'w-full border border-neutral-700 bg-ink-800/70 px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-gold-400 focus:outline-none'

type FieldProps = PropsWithChildren<{
  label: string
  required?: boolean
  /** A zod séma i18n kulcsa; a feloldás itt történik. */
  error?: string
  htmlFor?: string
  className?: string
}>

export function Field({ label, required, error, htmlFor, className, children }: FieldProps) {
  const { t } = useTranslation()
  const message = translateError(t, error)

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
        {label}
        {required ? <span className="text-gold-400 ml-1">*</span> : null}
      </label>
      {children}
      {message ? <p className="text-xs text-red-400">{message}</p> : null}
    </div>
  )
}

export function TextInput({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(controlClasses, className)} {...rest} />
}

export function TextArea({ className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={5} className={cn(controlClasses, 'resize-y', className)} {...rest} />
}
