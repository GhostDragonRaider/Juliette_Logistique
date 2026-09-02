import type { ApplicationValues } from '@/features/careers/schema'

const apiBaseUrl = import.meta.env.VITE_API_URL as string | undefined

/**
 * A jelentkezés multipart/form-data-ként megy fel, hogy az önéletrajz
 * ugyanabban a kérésben érkezzen. A backend a fájlt objektumtárolóba
 * (vagy lemezre) teszi, és csak az elérési utat írja az adatbázisba.
 *
 * A végpont még nem létezik — a `VITE_API_URL` beállításáig a hívás
 * szándékosan beszédes hibával elszáll.
 */
export async function submitApplication(values: ApplicationValues): Promise<void> {
  if (!apiBaseUrl) {
    throw new Error(
      'A VITE_API_URL nincs beállítva: a backend végpont még nincs bekötve (lásd .env.example).',
    )
  }

  const formData = new FormData()
  for (const [key, value] of Object.entries(values)) {
    if (value instanceof File) {
      formData.append(key, value, value.name)
    } else if (value !== undefined && value !== null) {
      formData.append(key, String(value))
    }
  }

  const response = await fetch(`${apiBaseUrl}/applications`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`A beküldés nem sikerült (HTTP ${response.status}).`)
  }
}
