import type fr from './locales/fr.json'

/**
 * Ezzel a `t()` kulcsai típusellenőrzöttek lesznek: elírt kulcsnál a
 * TypeScript szól, és a `returnObjects: true` is a helyes típust adja vissza.
 * A francia fájl a referencia — minden nyelvnek ugyanez a kulcskészlete.
 */
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: typeof fr
    }
  }
}
