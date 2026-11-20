export type EducationEntry = {
  institution: string
  program: string
  period: string
  detail?: string
}

export type Certification = {
  name: string
  issuer: string
  year: string
}

export type Language = {
  name: string
  proficiency: string
}

export type EducationData = {
  entries: readonly EducationEntry[]
  certifications: readonly Certification[]
  languages: readonly Language[]
}
