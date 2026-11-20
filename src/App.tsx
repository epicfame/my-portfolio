import { Backdrop } from '@/components/layout/Backdrop'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Education } from '@/sections/Education'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

const SECTION_COMPONENTS = {
  home: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  education: Education,
  contact: Contact,
}

type SectionNavigationItem = {
  id: keyof typeof SECTION_COMPONENTS
  label: string
}

const SECTION_ORDER = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const satisfies readonly SectionNavigationItem[]

export function App() {
  return (
    <>
      <SkipLink />
      <div className="app-shell">
        <Backdrop />
        <Header sections={SECTION_ORDER} />
        <main>
          {SECTION_ORDER.map((section) => {
            const SectionComponent = SECTION_COMPONENTS[section.id]

            return <SectionComponent key={section.id} />
          })}
        </main>
        <Footer />
      </div>
    </>
  )
}
