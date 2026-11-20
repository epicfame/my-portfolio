import { GlassCard } from '@/components/ui/GlassCard'
import { TextLink } from '@/components/ui/TextLink'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { profileData } from '@/data/profile'
import { Nav } from './Nav'

type HeaderProps = {
  sections: readonly {
    id: string
    label: string
  }[]
}

export function Header({ sections }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 px-4 pt-4">
      <div className="mx-auto w-full max-w-6xl">
        <GlassCard className="relative flex items-center justify-between gap-2 p-3 sm:px-4">
          <TextLink
            aria-label="Go to home"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 no-underline"
            href="#home"
          >
            <span className="grid size-10 place-items-center rounded-md bg-primary font-bold text-neutral">
              G
            </span>
            <span className="hidden text-body-sm font-bold text-fg sm:inline">
              {profileData.name}
            </span>
          </TextLink>
          <div className="flex items-center gap-1 sm:gap-2">
            <Nav sections={sections} />
            <ThemeToggle />
          </div>
        </GlassCard>
      </div>
    </header>
  )
}
