import * as React from 'react'
import { button } from './theme/button';
import type { ButtonVariants } from './theme/button';
import { cn } from '@/lib/utils';
import { Slot } from "@radix-ui/react-slot"

type ButtonHTMLAttributes = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>;

export type ButtonProps = ButtonHTMLAttributes & ButtonVariants & {
  asChild?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(button({ size, color }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

