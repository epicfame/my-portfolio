import type { EducationData } from '@/types/education'

export const educationData = {
  entries: [
    {
      institution: 'Binus University Alam Sutera',
      program: 'B.Sc. Computer Science',
      period: '2020 – 2024',
      detail: 'GPA 3.85 / 4.00',
    },
    {
      institution: 'KodingUp Bootcamp',
      program: 'Frontend Development',
      period: 'In progress',
      detail: 'Expected December 2026',
    },
  ],
  certifications: [
    {
      name: 'Secure Code Corporate Training',
      issuer: 'Cyber Academy Indonesia',
      year: '2025',
    },
    {
      name: 'Belajar Dasar Pemrograman JavaScript',
      issuer: 'Dicoding',
      year: '2025',
    },
  ],
  languages: [
    { name: 'Indonesian', proficiency: 'Native' },
    { name: 'English', proficiency: 'Intermediate' },
  ],
} as const satisfies EducationData
