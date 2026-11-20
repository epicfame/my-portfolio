import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

type SectionProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  children: ReactNode
  eyebrow?: string
  id: string
  title: string
}

export function Section({
  children,
  className,
  eyebrow,
  id,
  title,
  ...props
}: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      aria-labelledby={headingId}
      className={cn('scroll-mt-24 py-16 sm:py-20', className)}
      id={id}
      {...props}
    >
      <Container>
        <header className="mb-8 space-y-2 sm:mb-10">
          {eyebrow && (
            <p className="font-mono text-label uppercase tracking-wider text-muted-fg">
              {eyebrow}
            </p>
          )}
          <h2 className="text-h2 font-bold text-fg" id={headingId}>
            {title}
          </h2>
        </header>
        {children}
      </Container>
    </section>
  )
}
