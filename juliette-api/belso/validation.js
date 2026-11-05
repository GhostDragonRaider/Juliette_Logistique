import { z } from 'zod'

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email({ message: 'Érvénytelen e-mail-cím.' })
  .max(254)

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'A jelszó megadása kötelező.').max(256),
})

/**
 * Bejelentkezési adatok normalizálása (fejlesztői „teszt” alias).
 */
export function loginBodyElokeszites(body) {
  const rawEmail = String(body?.email ?? '').trim().toLowerCase()
  let email = rawEmail
  if (process.env.NODE_ENV !== 'production' && rawEmail === 'teszt') {
    email = 'teszt@teszt.local'
  }
  return {
    email,
    password: String(body?.password ?? ''),
  }
}

export const profilePatchSchema = z.object({
  firstName: z.string().trim().max(120).optional(),
  lastName: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(40).optional(),
  birthDate: z
    .union([z.string().regex(/^\d{4}-\d{2}-\d{2}$/), z.literal(''), z.null()])
    .optional(),
  country: z.string().trim().max(120).optional(),
  postalCode: z.string().trim().max(20).optional(),
  city: z.string().trim().max(120).optional(),
  streetAddress: z.string().trim().max(240).optional(),
})

export function jelszoErvenyes(jelszo) {
  return typeof jelszo === 'string' && jelszo.length >= 12
}
