import type { SkillGroup } from '@/types/skill'

export const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    skills: ['Laravel', 'PHP', 'Node.js', 'NestJS', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Vercel'],
  },
] as const satisfies readonly SkillGroup[]
