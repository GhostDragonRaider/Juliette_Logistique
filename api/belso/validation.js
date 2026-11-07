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
 * Bejelentkezési adatok normalizálása („teszt” / „admin” rövid alias).
 * Az aliasok a belső portál dokumentált belépői; a valódi e-mail a DB-ben van.
 */
export function loginBodyElokeszites(body) {
  const rawEmail = String(body?.email ?? '').trim().toLowerCase()
  let email = rawEmail
  if (rawEmail === 'teszt') {
    email = 'teszt@teszt.local'
  }
  if (rawEmail === 'admin') {
    email = 'admin@juliette.local'
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

const serulesKorSchema = z.object({
  x: z.number(),
  y: z.number(),
  rx: z.number(),
  ry: z.number(),
})

const jeloltSerulesSchema = z.object({
  lepesId: z.string().min(1).max(80),
  kep: z.string().min(1).max(400),
  korok: z.array(serulesKorSchema).max(40),
})

const fotoDokumentumSchema = z.object({
  lepesId: z.string().min(1).max(80),
  kep: z.string().min(1).max(400),
  cim: z.record(z.string(), z.string()).optional(),
  korok: z.array(serulesKorSchema).max(40),
  vanSerules: z.boolean().optional(),
})

const nyelvMapSchema = z.record(z.string(), z.string())

const atadasiPontSchema = z.object({
  allomas: z.string().min(1).max(240),
  cim: z.string().min(1).max(400),
  nyitvatartas: nyelvMapSchema,
  telefon: z.string().max(60),
  idopont: z.string().min(1).max(64),
  utasitas: nyelvMapSchema,
})

export const chatUzenetSchema = z.object({
  szoveg: z.string().trim().min(1).max(4000),
  szobaId: z.string().uuid().nullable().optional(),
})

export const chatSzobaSchema = z.object({
  nev: z.string().trim().min(1).max(80),
  tagUserIds: z.array(z.string().uuid()).max(100).default([]),
})

export const chatSzobaTagokSchema = z.object({
  tagUserIds: z.array(z.string().uuid()).max(100),
})

export const chatPrivatNyitasSchema = z.object({
  cimzettUserId: z.string().uuid(),
})

export const aktualisKikuldesSchema = z.object({
  kliensUserId: z.uuid({ message: 'Érvénytelen kliens.' }),
})

export const aktualisAllapotSchema = z.object({
  allapot: z.enum(['kikuldve', 'felveve', 'utban', 'leadva', 'kiszallitva']),
})

export const elvegzettMunkaSchema = z.object({
  munka: z.object({
    azonosito: z.string().min(1).max(80),
    megbizo: z.string().min(1).max(120),
    jarmu: z.object({
      marka: z.string().max(80).optional(),
      tipus: z.string().max(80).optional(),
      modell: z.string().min(1).max(120),
      rendszam: z.string().min(1).max(40),
      kategoria: nyelvMapSchema,
      szin: nyelvMapSchema,
      gumiTipus: nyelvMapSchema.optional(),
      ismertSerulesek: z
        .record(z.string(), z.array(z.string().max(400)))
        .optional(),
      uzemanyag: nyelvMapSchema,
      valto: nyelvMapSchema,
    }),
    felvetel: atadasiPontSchema,
    leadas: atadasiPontSchema,
    tavolsagKm: z.number().nonnegative(),
    menetidoPerc: z.number().nonnegative(),
    dijEuro: z.number().nonnegative(),
    teendok: z.record(z.string(), z.array(z.string())),
    megjegyzesek: z.record(z.string(), z.array(z.string())),
  }),
  felvetelSerules: z.array(jeloltSerulesSchema).max(30).default([]),
  leadasSerules: z.array(jeloltSerulesSchema).max(30).default([]),
  felvetelKepek: z.array(fotoDokumentumSchema).max(30).optional(),
  leadasKepek: z.array(fotoDokumentumSchema).max(30).optional(),
})
