import type { ExperienceData } from '@/types/experience'

export const experienceData = {
  company: 'PT. Hartono Istana Teknologi (Polytron)',
  positions: [
    {
      id: 'application-developer-current',
      title: 'Application Developer',
      period: 'Sep 2026 – Present',
      highlights: [
        'Develop and maintain ERP modules for Finance, HR, and Payroll.',
        'Integrate REST APIs and resolve defects.',
        'Improve performance and maintainability through code and database optimization.',
        'Train and onboard employees on ERP workflows.',
      ],
    },
    {
      id: 'system-analyst',
      title: 'System Analyst',
      period: 'Mar 2026 – Sep 2026',
      highlights: [
        'Gathered and translated requirements for 10+ projects.',
        'Proposed solutions that reduced manual workflows by up to 30%.',
        'Wrote technical specifications, system flows, and documentation.',
        'Coordinated stakeholders and developers to deliver on time.',
      ],
    },
    {
      id: 'application-developer',
      title: 'Application Developer',
      period: 'Jun 2024 – Mar 2026',
      highlights: [
        'Built and maintained ERP modules for Finance, HR, and Payroll.',
        'Developed and integrated 20+ RESTful APIs.',
        'Cut processing time by 50% via query optimization, legacy refactoring, and asynchronous multithreading.',
        'Implemented queue-based background jobs for reporting, notifications, and automation.',
      ],
    },
    {
      id: 'application-developer-intern',
      title: 'Application Developer Intern',
      period: 'Mar 2023 – Mar 2024',
      highlights: [
        'Developed RESTful APIs and CRUD modules for ERP enhancements.',
        'Built and maintained a Fixed Asset Management System.',
        'Supported feature development, bug fixing, and production issue investigation.',
      ],
    },
  ],
} as const satisfies ExperienceData
