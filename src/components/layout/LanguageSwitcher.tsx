import { useTranslation } from 'react-i18next'

import { SUPPORTED_LANGUAGES } from '@/i18n'
import { cn } from '@/lib/cn'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation()
  const active = i18n.resolvedLanguage

  return (
    <div className={cn('flex items-center gap-1 text-[11px] tracking-widest', className)}>
      {SUPPORTED_LANGUAGES.map((lang, index) => (
        <span key={lang} className="flex items-center gap-1">
          {index > 0 ? <span className="text-neutral-600">|</span> : null}
          <button
            type="button"
            onClick={() => void i18n.changeLanguage(lang)}
            aria-current={active === lang ? 'true' : undefined}
            className={cn(
              'px-1 uppercase transition-colors',
              active === lang ? 'text-gold-300' : 'text-neutral-500 hover:text-neutral-300',
            )}
          >
            {lang}
          </button>
        </span>
      ))}
    </div>
  )
}
