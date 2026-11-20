type EducationEntry = {
  institution: string
  program: string
  period: string
  detail?: string
}

type Certification = {
  name: string
  issuer: string
  year: string
}

type Language = {
  name: string
  proficiency: string
}

export type EducationData = {
  entries: readonly EducationEntry[]
  certifications: readonly Certification[]
  languages: readonly Language[]
}
