import type { UrlapAllapot } from '../komponensek/urlapTipusok'
import type { FeltoltesKulcs } from '../komponensek/urlapTipusok'

const apiBase = '/api'

function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
}

export type JelentkezesListaElem = {
  id: string
  erkezett: string
  nev?: string
  telefon?: string
  statusz: string
}

export type JelentkezesFajl = {
  mezo: string
  nev: string
  utvonal: string
}

export type JelentkezesReszlet = {
  id: string
  erkezett: string
  statusz: string
  nev?: string
  telefon?: string
  email?: string
  adat?: Record<string, unknown>
  mezok?: Record<string, unknown>
  fajlok?: JelentkezesFajl[]
}

export type SzerkeszthetoTartalom = {
  cegnev: string
  telefonszam: string
  email: string
  cim: string
  terulet: string
  elerhetoseg: string
}

export async function adminBejelentkezes(
  username: string,
  password: string,
): Promise<{ token: string }> {
  const response = await fetch(`${apiBase}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'Bejelentkezés sikertelen.')
  }
  return body
}

export async function jelentkezesekListazasa(token: string): Promise<JelentkezesListaElem[]> {
  const response = await fetch(`${apiBase}/admin/jelentkezesek`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'A lista betöltése sikertelen.')
  }
  return Array.isArray(body) ? body : body.jelentkezesek ?? []
}

export async function jelentkezesReszletei(
  token: string,
  id: string,
): Promise<JelentkezesReszlet> {
  const response = await fetch(`${apiBase}/admin/jelentkezesek/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'A részletek betöltése sikertelen.')
  }
  return body
}

export async function jelentkezesStatusz(
  token: string,
  id: string,
  statusz: string,
): Promise<JelentkezesReszlet> {
  const response = await fetch(`${apiBase}/admin/jelentkezesek/${id}`, {
    method: 'PATCH',
    headers: authHeaders(token),
    body: JSON.stringify({ statusz }),
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'Státusz mentése sikertelen.')
  }
  return body
}

export async function adminFajlLetoltese(token: string, utvonal: string): Promise<Blob> {
  const response = await fetch(
    `${apiBase}/admin/fajl?path=${encodeURIComponent(utvonal)}`,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  if (!response.ok) {
    let message = 'A fájl nem érhető el.'
    try {
      const body = await response.json()
      if (body.hiba) message = body.hiba
    } catch {
      /* blob válasz */
    }
    throw new Error(message)
  }
  return response.blob()
}

export async function bekuldesJelentkezes(
  adat: Omit<UrlapAllapot, 'feltoltesek'>,
  feltoltesek: Record<FeltoltesKulcs, File | null>,
): Promise<{ ok: boolean; id: string }> {
  const formData = new FormData()
  formData.append('adat', JSON.stringify(adat))

  for (const [kulcs, fajl] of Object.entries(feltoltesek)) {
    if (fajl) {
      formData.append(kulcs, fajl, fajl.name)
    }
  }

  const response = await fetch(`${apiBase}/jelentkezesek`, {
    method: 'POST',
    body: formData,
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'Küldés sikertelen.')
  }
  return body
}

/** Nyilvános weboldal tartalom (telefon, e-mail, cím…) — nincs auth. */
export async function nyilvanosTartalomBetoltese(): Promise<SzerkeszthetoTartalom> {
  const response = await fetch(`${apiBase}/content`)
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'A tartalom betöltése sikertelen.')
  }
  return body
}

export async function tartalomBetoltese(token: string): Promise<SzerkeszthetoTartalom> {
  const response = await fetch(`${apiBase}/admin/content`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'A tartalom betöltése sikertelen.')
  }
  return body
}

export type NaploBejegyzes = {
  id: string
  idopont: string
  kategoria: string
  esemeny: string
  uzenet: string
  adat: Record<string, unknown>
  felhasznalo: string | null
  ip: string
}

export type NaploValasz = {
  osszesen: number
  limit: number
  offset: number
  naplo: NaploBejegyzes[]
}

export async function naploLekeres(
  token: string,
  params: { limit?: number; offset?: number; kategoria?: string; esemeny?: string } = {},
): Promise<NaploValasz> {
  const query = new URLSearchParams()
  if (params.limit != null) query.set('limit', String(params.limit))
  if (params.offset != null) query.set('offset', String(params.offset))
  if (params.kategoria) query.set('kategoria', params.kategoria)
  if (params.esemeny) query.set('esemeny', params.esemeny)

  const response = await fetch(`${apiBase}/admin/naplo?${query.toString()}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'A napló betöltése sikertelen.')
  }
  return body
}

export async function tartalomMentese(
  token: string,
  tartalom: SzerkeszthetoTartalom,
): Promise<SzerkeszthetoTartalom> {
  const response = await fetch(`${apiBase}/admin/content`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(tartalom),
  })
  const body = await response.json()
  if (!response.ok) {
    throw new Error(body.hiba || 'Mentés sikertelen.')
  }
  return body
}
