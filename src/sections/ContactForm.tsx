import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { GlassCard } from '@/components/ui/GlassCard'
import {
  buildContactMailto,
  type ContactField,
  type ContactFormErrors,
  type ContactFormValues,
  validateContactForm,
} from '@/lib/contact'
import { cn } from '@/lib/cn'

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})

  const handleFieldChange = (field: ContactField, value: string) => {
    const nextValues = { ...values, [field]: value }
    setValues(nextValues)
    setErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors
      }

      const fieldError = validateContactForm(nextValues)[field]
      if (fieldError) {
        return { ...currentErrors, [field]: fieldError }
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[field]
      return nextErrors
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    window.location.assign(buildContactMailto(values))
  }

  return (
    <GlassCard className="p-6 sm:p-8">
      <form className="space-y-5" noValidate onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block font-medium text-fg" htmlFor="contact-name">
            Name
          </label>
          <input
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            className={cn(
              'w-full rounded-md border border-fg/50 bg-bg px-3 py-2 text-fg transition-colors placeholder:text-muted-fg hover:border-primary focus-visible:border-primary',
              errors.name && 'border-danger',
            )}
            id="contact-name"
            name="name"
            onChange={(event) =>
              handleFieldChange('name', event.currentTarget.value)
            }
            required
            type="text"
            value={values.name}
          />
          {errors.name && (
            <p
              className="text-body-sm text-fg"
              id="contact-name-error"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-fg" htmlFor="contact-email">
            Email
          </label>
          <input
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className={cn(
              'w-full rounded-md border border-fg/50 bg-bg px-3 py-2 text-fg transition-colors placeholder:text-muted-fg hover:border-primary focus-visible:border-primary',
              errors.email && 'border-danger',
            )}
            id="contact-email"
            name="email"
            onChange={(event) =>
              handleFieldChange('email', event.currentTarget.value)
            }
            required
            type="email"
            value={values.email}
          />
          {errors.email && (
            <p
              className="text-body-sm text-fg"
              id="contact-email-error"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-fg" htmlFor="contact-message">
            Message
          </label>
          <textarea
            aria-describedby={
              errors.message ? 'contact-message-error' : undefined
            }
            aria-invalid={Boolean(errors.message)}
            className={cn(
              'min-h-32 w-full resize-y rounded-md border border-fg/50 bg-bg px-3 py-2 text-fg transition-colors placeholder:text-muted-fg hover:border-primary focus-visible:border-primary',
              errors.message && 'border-danger',
            )}
            id="contact-message"
            name="message"
            onChange={(event) =>
              handleFieldChange('message', event.currentTarget.value)
            }
            required
            value={values.message}
          />
          {errors.message && (
            <p
              className="text-body-sm text-fg"
              id="contact-message-error"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>
        <Button type="submit">Open email app</Button>
      </form>
    </GlassCard>
  )
}
