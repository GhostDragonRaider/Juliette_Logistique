import { z } from 'zod'

export const MAX_CV_BYTES = 5 * 1024 * 1024

export const ACCEPTED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
] as const

const currentYear = new Date().getFullYear()

/*
 * A hibaüzenetek helyett i18n kulcsokat adunk vissza, így a validáció is
 * követi a nyelvváltást. A feloldás a `translateError()` helperben történik.
 */
const requiredText = (min: number) =>
  z.string().trim().min(1, 'validation.required').min(min, 'validation.tooShort')

const requiredDate = z.string().min(1, 'validation.required')

const requiredInteger = (min: number, max: number) =>
  z
    .string()
    .trim()
    .min(1, 'validation.required')
    .transform((value) => Number(value))
    .pipe(
      z
        .number('validation.number')
        .int('validation.number')
        .min(min, 'validation.range')
        .max(max, 'validation.range'),
    )

export const applicationSchema = z.object({
  lastName: requiredText(2),
  firstName: requiredText(2),
  email: z.string().trim().min(1, 'validation.required').pipe(z.email('validation.email')),
  phone: requiredText(6),
  country: requiredText(2),
  city: requiredText(2),
  birthDate: requiredDate,
  licenseSince: requiredInteger(1960, currentYear),
  licenseCategories: requiredText(1),
  languages: requiredText(2),
  experienceYears: requiredInteger(0, 60),
  availability: requiredDate,
  message: z.string().trim().max(2000, 'validation.tooLong').optional(),
  cv: z
    .instanceof(File, { error: 'validation.cvRequired' })
    .refine((file) => file.size > 0, 'validation.cvRequired')
    .refine((file) => file.size <= MAX_CV_BYTES, 'validation.cvTooLarge')
    .refine(
      (file) => (ACCEPTED_CV_TYPES as readonly string[]).includes(file.type),
      'validation.cvType',
    ),
  consent: z.literal(true, { error: 'validation.consent' }),
})

export type ApplicationInput = z.input<typeof applicationSchema>
export type ApplicationValues = z.output<typeof applicationSchema>
