import { CONTACT_EMAIL } from '@/lib/constants'

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export type ContactField = keyof ContactFormValues
export type ContactFormErrors = Partial<Record<ContactField, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAIL_SUBJECT_PREFIX = 'Portfolio contact from'

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {}
  const email = values.email.trim()

  if (!values.name.trim()) {
    errors.name = 'Enter your name.'
  }

  if (!email) {
    errors.email = 'Enter your email address.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Enter a message.'
  }

  return errors
}

export function buildContactMailto(values: ContactFormValues): string {
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()
  const subject = `${MAIL_SUBJECT_PREFIX} ${name}`
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
