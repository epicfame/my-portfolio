import type { ButtonHTMLAttributes, Ref } from 'react'
import { cn } from '@/lib/cn'
import {
  BUTTON_BASE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  type ButtonVariant,
} from '@/lib/button-variants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  ref?: Ref<HTMLButtonElement>
  variant?: ButtonVariant
}

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  ref,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        BUTTON_BASE_CLASSES,
        BUTTON_VARIANT_CLASSES[variant],
        className,
      )}
      disabled={disabled || isLoading}
      ref={ref}
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
