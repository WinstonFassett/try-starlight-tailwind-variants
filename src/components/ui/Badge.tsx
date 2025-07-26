import * as React from 'react'
import { badge } from './theme/badge';
import type { BadgeVariants } from './theme/badge';
import { cn } from '@/lib/utils';

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & BadgeVariants;

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badge({ variant }), className)}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"