export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export const BUTTON_BASE_CLASSES =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-body-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50'

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-neutral shadow-sm hover:shadow-md active:shadow-inner',
  secondary:
    'border border-glass-border bg-glass text-fg hover:bg-accent-tint active:bg-accent-tint/80',
  ghost: 'text-fg hover:bg-accent-tint active:bg-accent-tint/80',
}
