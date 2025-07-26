import * as React from 'react'
import { label } from './theme/label';
import type { LabelVariants } from './theme/label';
import { cn } from '@/lib/utils';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & LabelVariants;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(label({ variant }), className)}
        {...props}
      />
    )
  }
)
Label.displayName = "Label"