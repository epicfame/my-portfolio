type ExperiencePosition = {
  id: string
  title: string
  period: string
  highlights: readonly string[]
}

export type ExperienceData = {
  company: string
  positions: readonly ExperiencePosition[]
}
