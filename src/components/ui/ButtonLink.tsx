import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import {
  BUTTON_BASE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  type ButtonVariant,
} from '@/lib/button-variants'

type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'rel' | 'target'
> & {
  external?: boolean
  href: string
  variant?: ButtonVariant
}

export function ButtonLink({
  children,
  className,
  external = false,
  href,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        BUTTON_BASE_CLASSES,
        BUTTON_VARIANT_CLASSES[variant],
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
