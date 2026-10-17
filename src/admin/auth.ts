const TOKEN_KULCS = 'juliette-admin-token'

export function adminTokenOlvas(): string {
  return window.localStorage.getItem(TOKEN_KULCS)?.trim() ?? ''
}

export function adminTokenMent(token: string) {
  window.localStorage.setItem(TOKEN_KULCS, token.trim())
}

export function adminKijelentkezes() {
  window.localStorage.removeItem(TOKEN_KULCS)
}

/** A token payloadjában lévő lejárat (a szerver továbbra is ellenőrzi az aláírást). */
function tokenLejaratMs(token: string): number | null {
  const resz = token.split('.')
  if (resz.length !== 2 || !resz[0]) {
    return null
  }
  try {
    const base64 = resz[0].replace(/-/g, '+').replace(/_/g, '/')
    const json = atob(base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '='))
    const adat = JSON.parse(json) as { exp?: number }
    return typeof adat.exp === 'number' ? adat.exp : null
  } catch {
    return null
  }
}

/** Van-e érvényes (nem lejárt) session token — üres / hibás / lejárt esetén false. */
export function adminBejelentkezve(): boolean {
  const token = adminTokenOlvas()
  if (!token) {
    return false
  }
  const lejarat = tokenLejaratMs(token)
  if (lejarat == null || lejarat <= Date.now()) {
    return false
  }
  return true
}

/** Érvénytelen token törlése és belépő oldal (teljes újratöltés, hogy ne maradjon admin UI). */
export function adminAtiranyitasBelepesre() {
  adminKijelentkezes()
  const cel = '/admin/belepes'
  if (window.location.pathname !== cel) {
    window.location.replace(cel)
  }
}
