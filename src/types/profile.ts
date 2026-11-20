type ProfileMetric = {
  value: string
  label: string
}

type ProfileLink = {
  label: string
  href: string
  external?: boolean
}

export type ProfileData = {
  name: string
  role: string
  tagline: string
  summary: string
  metrics: readonly ProfileMetric[]
  email: string
  phone: {
    label: string
    href: string
  }
  links: readonly ProfileLink[]
}
