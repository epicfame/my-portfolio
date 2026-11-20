import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type GlassCardProps = HTMLAttributes<HTMLDivElement>

export function GlassCard({ className, ...props }: GlassCardProps) {
  return <div className={cn('glass-panel', className)} {...props} />
}
