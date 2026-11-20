import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ChipProps = HTMLAttributes<HTMLSpanElement>

export function Chip({ className, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex max-w-full items-center rounded-sm border border-glass-border bg-accent-tint px-2 py-1 font-mono text-label leading-none text-fg',
        className,
      )}
      {...props}
    />
  )
}
