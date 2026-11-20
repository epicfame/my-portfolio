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
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Vercel', 'Supabase'],
  },
] as const satisfies readonly SkillGroup[]
