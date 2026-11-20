import type { Project } from '@/types/project'

export const projects = [
  {
    name: 'CashierLess',
    role: 'Full-Stack Developer',
    period: 'Sep 2026 – Present',
    description:
      'A QR-based ordering platform for restaurants and cafes. Merchants manage tables and menus, while customers browse and order by scanning a table QR code.',
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase'],
    href: 'https://cashierless.vercel.app',
  },
  {
    name: 'Landezy',
    role: 'Frontend Engineer',
    period: 'Jul 2026 – Present',
    description:
      'A property marketplace built with Next.js, React, and TypeScript.',
    stack: ['Next.js', 'React', 'TypeScript'],
    href: 'https://landezy.com',
    highlights: [
      'Built responsive, reusable property listing components.',
      'Integrated REST APIs, authentication, and frontend state management.',
    ],
  },
  {
    name: 'Kingdom of Glory',
    role: 'Backend Lead, Frontend Contributor',
    period: 'Mar 2025 – Jun 2025',
    description:
      'A live app for church members to manage seat booking, devotionals, and service schedules.',
    stack: ['Next.js', 'React Native', 'REST API'],
    href: 'https://kingdomofglory.church',
    highlights: [
      'Led backend API development and database design.',
      'Shipped fixes and enhancements for Next.js and React Native apps.',
      'Deployed the backend and web app to production.',
    ],
  },
  {
    name: 'GKMI Anugerah',
    role: 'Backend Developer',
    period: 'Jun 2025 – Aug 2025',
    description:
      'A church website platform for managing events, media, and content. Designed the database and built the REST API endpoints.',
    stack: ['REST API', 'Database Design'],
    href: 'https://gkmi-anugerah.org',
  },
] as const satisfies readonly Project[]
