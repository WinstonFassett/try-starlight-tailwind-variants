import * as React from 'react'
import { input } from './theme/input';
import type { InputVariants } from './theme/input';
import { cn } from '@/lib/utils';

type InputHTMLAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export type InputProps = InputHTMLAttributes & InputVariants;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(input({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"