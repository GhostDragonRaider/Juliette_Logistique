import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Paperclip } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Field, TextArea, TextInput } from '@/components/form/Field'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { submitApplication } from '@/features/careers/api'
import {
  ACCEPTED_CV_TYPES,
  applicationSchema,
  type ApplicationInput,
  type ApplicationValues,
} from '@/features/careers/schema'
import { translateError } from '@/lib/formErrors'

export function ApplicationForm() {
  const { t } = useTranslation()
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationInput, unknown, ApplicationValues>({
    resolver: zodResolver(applicationSchema),
  })

  const cvFile = watch('cv') as File | undefined

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null)
    try {
      await submitApplication(values)
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : String(error))
    }
  })

  if (submitted) {
    return (
      <Card className="mx-auto max-w-xl text-center">
        <CheckCircle2 className="text-gold-400 mx-auto size-8" strokeWidth={1.5} aria-hidden />
        <h2 className="font-heading text-gold-200 mt-4 text-lg tracking-[0.15em] uppercase">
          {t('application.success.title')}
        </h2>
        <p className="mt-2 text-sm text-neutral-400">{t('application.success.text')}</p>
      </Card>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto max-w-3xl">
      <p className="mb-8 text-center text-xs text-neutral-500">{t('application.lead')}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t('application.fields.lastName')}
          required
          htmlFor="lastName"
          error={errors.lastName?.message}
        >
          <TextInput id="lastName" autoComplete="family-name" {...register('lastName')} />
        </Field>

        <Field
          label={t('application.fields.firstName')}
          required
          htmlFor="firstName"
          error={errors.firstName?.message}
        >
          <TextInput id="firstName" autoComplete="given-name" {...register('firstName')} />
        </Field>

        <Field
          label={t('application.fields.email')}
          required
          htmlFor="email"
          error={errors.email?.message}
        >
          <TextInput id="email" type="email" autoComplete="email" {...register('email')} />
        </Field>

        <Field
          label={t('application.fields.phone')}
          required
          htmlFor="phone"
          error={errors.phone?.message}
        >
          <TextInput id="phone" type="tel" autoComplete="tel" {...register('phone')} />
        </Field>

        <Field
          label={t('application.fields.country')}
          required
          htmlFor="country"
          error={errors.country?.message}
        >
          <TextInput id="country" autoComplete="country-name" {...register('country')} />
        </Field>

        <Field
          label={t('application.fields.city')}
          required
          htmlFor="city"
          error={errors.city?.message}
        >
          <TextInput id="city" autoComplete="address-level2" {...register('city')} />
        </Field>

        <Field
          label={t('application.fields.birthDate')}
          required
          htmlFor="birthDate"
          error={errors.birthDate?.message}
        >
          <TextInput id="birthDate" type="date" {...register('birthDate')} />
        </Field>

        <Field
          label={t('application.fields.licenseSince')}
          required
          htmlFor="licenseSince"
          error={errors.licenseSince?.message}
        >
          <TextInput id="licenseSince" type="number" min={1960} {...register('licenseSince')} />
        </Field>

        <Field
          label={t('application.fields.licenseCategories')}
          required
          htmlFor="licenseCategories"
          error={errors.licenseCategories?.message}
        >
          <TextInput
            id="licenseCategories"
            placeholder="B, BE, C1"
            {...register('licenseCategories')}
          />
        </Field>

        <Field
          label={t('application.fields.languages')}
          required
          htmlFor="languages"
          error={errors.languages?.message}
        >
          <TextInput id="languages" placeholder="DE, EN, FR" {...register('languages')} />
        </Field>

        <Field
          label={t('application.fields.experienceYears')}
          required
          htmlFor="experienceYears"
          error={errors.experienceYears?.message}
        >
          <TextInput id="experienceYears" type="number" min={0} {...register('experienceYears')} />
        </Field>

        <Field
          label={t('application.fields.availability')}
          required
          htmlFor="availability"
          error={errors.availability?.message}
        >
          <TextInput id="availability" type="date" {...register('availability')} />
        </Field>

        <Field
          label={t('application.fields.message')}
          htmlFor="message"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <TextArea id="message" {...register('message')} />
        </Field>

        <Field
          label={t('application.fields.cv')}
          required
          htmlFor="cv"
          error={errors.cv?.message}
          className="sm:col-span-2"
        >
          <label
            htmlFor="cv"
            className="border-gold-hairline bg-ink-800/70 hover:border-gold-400/60 flex cursor-pointer items-center gap-3 border-dashed px-4 py-5 text-sm text-neutral-400 transition-colors"
          >
            <Paperclip className="text-gold-400 size-4" strokeWidth={1.5} aria-hidden />
            {cvFile ? cvFile.name : t('application.fields.cv')}
          </label>
          <input
            id="cv"
            type="file"
            className="sr-only"
            accept={ACCEPTED_CV_TYPES.join(',')}
            onChange={(event) => {
              const file = event.target.files?.[0]
              setValue('cv', file as File, { shouldValidate: true })
            }}
          />
        </Field>
      </div>

      <div className="mt-8 flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="accent-gold-400 mt-0.5 size-4"
          {...register('consent')}
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-neutral-400">
          {t('application.fields.consent')}
          <span className="text-gold-400 ml-1">*</span>
        </label>
      </div>
      {errors.consent ? (
        <p className="mt-2 text-xs text-red-400">{translateError(t, errors.consent.message)}</p>
      ) : null}

      {submitError ? (
        <p className="border-gold-hairline mt-6 border-red-500/40 bg-red-500/10 p-4 text-xs text-red-300">
          {submitError}
        </p>
      ) : null}

      <div className="mt-8 flex justify-center">
        <Button type="submit" disabled={isSubmitting}>
          {t('cta.submit')}
        </Button>
      </div>
    </form>
  )
}
