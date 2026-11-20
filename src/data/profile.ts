import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/lib/constants'
import type { ProfileData } from '@/types/profile'

export const profileData = {
  name: 'Giovanni Jose Ricardo',
  role: 'Software Engineer · Application Developer',
  tagline: 'Full-Stack: from database and REST APIs to responsive web interfaces',
  summary:
    'Software Engineer with 3+ years of experience building and maintaining business applications, including enterprise ERP systems, RESTful APIs, and relational databases.',
  metrics: [
    { value: '3+', label: 'Years of experience' },
    { value: '20+', label: 'REST APIs built & integrated' },
    { value: '50%', label: 'Faster processing' },
    { value: '10+', label: 'Projects with requirements gathered' },
  ],
  email: CONTACT_EMAIL,
  phone: {
    label: '+62 859 3529 0965',
    href: 'tel:+6285935290965',
  },
  links: [
    { label: 'Email', href: SOCIAL_LINKS.email },
    { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, external: true },
    { label: 'GitHub', href: SOCIAL_LINKS.github, external: true },
  ],
} as const satisfies ProfileData
