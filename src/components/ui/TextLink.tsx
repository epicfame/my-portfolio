import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type TextLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'rel' | 'target'
> & {
  external?: boolean
  href: string
}

export function TextLink({
  children,
  className,
  external = false,
  href,
  ...props
}: TextLinkProps) {
  return (
    <a
      className={cn(
        'font-medium text-fg underline decoration-primary underline-offset-4 motion-safe:transition-colors hover:decoration-secondary active:decoration-primary',
        className,
      )}
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}
