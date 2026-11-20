import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'
import { cn } from '@/lib/cn'

type NavSection = {
  id: string
  label: string
}

type NavProps = {
  sections: readonly NavSection[]
}

export function Nav({ sections }: NavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  function closeMenu() {
    setIsOpen(false)
    menuButtonRef.current?.focus()
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Escape') {
      return
    }

    closeMenu()
  }

  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-2">
      <ul className="hidden items-center gap-1 lg:flex">
        {sections.map((section) => (
          <li key={section.id}>
            <TextLink
              className="inline-flex min-h-11 items-center rounded-md px-3 py-2 text-body-sm no-underline hover:bg-accent-tint"
              href={`#${section.id}`}
            >
              {section.label}
            </TextLink>
          </li>
        ))}
      </ul>

      <Button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="size-11 px-0 focus-visible:outline-2 focus-visible:outline-fg focus-visible:outline-offset-2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleMenuKeyDown}
        ref={menuButtonRef}
        variant="ghost"
      >
        {isOpen ? (
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
          </svg>
        )}
      </Button>

      <ul
        className={cn(
          'absolute left-4 right-4 top-full z-30 mt-3 flex flex-col gap-1 rounded-md border border-glass-border bg-glass-fallback p-3 shadow-lg lg:hidden',
          !isOpen && 'hidden',
        )}
        id="mobile-navigation"
        onKeyDown={handleMenuKeyDown}
      >
        {sections.map((section) => (
          <li key={section.id}>
            <TextLink
              className="inline-flex min-h-11 w-full items-center rounded-md px-3 py-2 text-body-sm no-underline hover:bg-accent-tint"
              href={`#${section.id}`}
              onClick={() => {
                if (isOpen) {
                  document.getElementById(section.id)?.focus({
                    preventScroll: true,
                  })
                }

                setIsOpen(false)
              }}
            >
              {section.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
