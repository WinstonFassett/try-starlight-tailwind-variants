import { tv, type VariantProps } from 'tailwind-variants';

export const label = tv({
  base: [
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
  ],
  variants: {
    variant: {
      default: 'text-gray-900 dark:text-gray-50',
      destructive: 'text-red-500 dark:text-red-400',
      muted: 'text-gray-500 dark:text-gray-400'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type LabelVariants = VariantProps<typeof label>;