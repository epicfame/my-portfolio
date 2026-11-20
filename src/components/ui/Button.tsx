import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  variant?: ButtonVariant
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-neutral shadow-sm hover:shadow-md active:shadow-inner',
  secondary:
    'border border-glass-border bg-glass text-fg hover:bg-accent-tint active:bg-accent-tint/80',
  ghost: 'text-fg hover:bg-accent-tint active:bg-accent-tint/80',
}

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-body-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50',
        VARIANT_CLASSES[variant],
        className,
      )}
      disabled={disabled || isLoading}
      type={type}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading && (
        <svg
          aria-hidden="true"
          className="size-4 motion-safe:animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 0 1 8-8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>
      )}
      {children}
    </button>
  )
}
