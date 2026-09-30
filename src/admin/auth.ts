const TOKEN_KULCS = 'juliette-admin-token'

export function adminTokenOlvas(): string {
  return window.localStorage.getItem(TOKEN_KULCS) ?? ''
}

export function adminTokenMent(token: string) {
  window.localStorage.setItem(TOKEN_KULCS, token)
}

export function adminKijelentkezes() {
  window.localStorage.removeItem(TOKEN_KULCS)
}
