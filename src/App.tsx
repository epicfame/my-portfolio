import { Backdrop } from '@/components/layout/Backdrop'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SkipLink } from '@/components/layout/SkipLink'
import { Section } from '@/components/ui/Section'

type SectionNavigationItem = {
  id: string
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
          {SECTION_ORDER.map((section, index) => (
            <Section
              headingLevel={index === 0 ? 1 : 2}
              headingId={index === 0 ? 'main-content' : undefined}
              id={section.id}
              key={section.id}
              title={section.label}
            />
          ))}
        </main>
        <Footer />
      </div>
    </>
  )
}
