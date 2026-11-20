import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

type SectionProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  children?: ReactNode
  eyebrow?: string
  headingLevel?: 1 | 2
  headingId?: string
  id: string
  title: string
}

export function Section({
  children,
  className,
  eyebrow,
  headingLevel = 2,
  headingId: providedHeadingId,
  id,
  title,
  tabIndex = -1,
  ...props
}: SectionProps) {
  const headingId = providedHeadingId ?? `${id}-heading`
  const HeadingTag = headingLevel === 1 ? 'h1' : 'h2'

  return (
    <section
      aria-labelledby={headingId}
      className={cn('scroll-mt-24 py-16 sm:py-20', className)}
      id={id}
      tabIndex={tabIndex}
      {...props}
    >
      <Container>
        <header className="mb-8 space-y-2 sm:mb-10">
          {eyebrow && (
            <p className="font-mono text-label uppercase tracking-wider text-muted-fg">
              {eyebrow}
            </p>
          )}
          <HeadingTag
            className={cn(
              'font-bold text-fg',
              headingLevel === 1 ? 'text-3xl sm:text-h1' : 'text-h2',
            )}
            id={headingId}
            tabIndex={-1}
          >
            {title}
          </HeadingTag>
        </header>
        {children}
      </Container>
    </section>
  )
}
