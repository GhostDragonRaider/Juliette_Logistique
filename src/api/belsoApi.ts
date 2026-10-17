const apiBase = '/api'

export type BelsoProfil = {
  firstName: string
  lastName: string
  phone: string
  birthDate: string | null
  country: string
  postalCode: string
  city: string
  streetAddress: string
  updatedAt?: string
}

export type BelsoFelhasznalo = {
  email: string
  role: string
  profile: BelsoProfil
}

let csrfTokenCache: string | null = null

async function csrfFrissites(): Promise<string> {
  const response = await fetch(`${apiBase}/auth/csrf`, {
    credentials: 'include',
  })
  if (!response.ok) {
    throw new Error('A biztonsági token nem érhető el.')
  }
  const adat = (await response.json()) as { csrfToken: string }
  csrfTokenCache = adat.csrfToken
  return adat.csrfToken
}

async function belsoFetch(
  utvonal: string,
  init: RequestInit & { csrf?: boolean } = {},
) {
  const headers = new Headers(init.headers)
  if (init.csrf) {
    const token = csrfTokenCache ?? (await csrfFrissites())
    headers.set('X-CSRF-Token', token)
  }
  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }
  const response = await fetch(`${apiBase}${utvonal}`, {
    ...init,
    headers,
    credentials: 'include',
  })
  return response
}

export async function belsoAuthMe(): Promise<BelsoFelhasznalo | null> {
  const response = await belsoFetch('/auth/me')
  if (response.status === 401) {
    return null
  }
  if (!response.ok) {
    throw new Error('A munkamenet ellenőrzése sikertelen.')
  }
  return (await response.json()) as BelsoFelhasznalo
}

export async function belsoBejelentkezes(
  email: string,
  password: string,
): Promise<BelsoFelhasznalo> {
  await csrfFrissites()
  const response = await belsoFetch('/auth/login', {
    method: 'POST',
    csrf: true,
    body: JSON.stringify({ email, password }),
  })
  const adat = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(
      typeof adat.hiba === 'string'
        ? adat.hiba
        : 'Bejelentkezés sikertelen.',
    )
  }
  await csrfFrissites()
  return adat as BelsoFelhasznalo
}

export async function belsoKijelentkezes(): Promise<void> {
  try {
    await csrfFrissites()
    await belsoFetch('/auth/logout', { method: 'POST', csrf: true })
  } finally {
    csrfTokenCache = null
  }
}

export async function belsoProfilMentese(
  patch: Partial<{
    firstName: string
    lastName: string
    phone: string
    birthDate: string | null
    country: string
    postalCode: string
    city: string
    streetAddress: string
  }>,
): Promise<BelsoFelhasznalo> {
  await csrfFrissites()
  const response = await belsoFetch('/profile/me', {
    method: 'PATCH',
    csrf: true,
    body: JSON.stringify(patch),
  })
  const adat = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(
      typeof adat.hiba === 'string' ? adat.hiba : 'Mentés sikertelen.',
    )
  }
  return adat as BelsoFelhasznalo
}

export function belsoAuthTorles(): void {
  csrfTokenCache = null
}
