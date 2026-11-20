export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools'

export type SkillGroup = {
  category: SkillCategory
  skills: readonly string[]
}
