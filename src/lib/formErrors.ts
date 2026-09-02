import type { TFunction } from 'i18next'

/**
 * A zod sémák i18n kulcsot tesznek a hibaüzenet helyére, ezt oldjuk itt fel.
 * A `t()` kulcstípusa szigorú, a zod üzenet viszont sima string, ezért itt
 * egy lazább hívási szignatúrára képezzük le.
 */
export function translateError(t: TFunction, message?: string): string | undefined {
  if (!message) {
    return undefined
  }
  const translate = t as unknown as (key: string) => string
  return translate(message)
}
