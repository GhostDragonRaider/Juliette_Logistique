import type { BelsoFelhasznalo } from '../api/belsoApi'

/**
 * Fejléc felirat: a bejelentkezéshez használt azonosító (e-mail vagy dev „teszt”).
 */
export function bejelentkezesiFelirat(felhasznalo: BelsoFelhasznalo | null): string {
  if (!felhasznalo?.email) {
    return ''
  }
  const email = felhasznalo.email.toLowerCase()
  if (email === 'teszt@teszt.local') {
    return 'teszt'
  }
  return felhasznalo.email
}
