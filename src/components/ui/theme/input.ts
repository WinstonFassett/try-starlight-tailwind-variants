import { tv, type VariantProps } from 'tailwind-variants';

export const input = tv({
  base: [
    'flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm',
    'ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
    'disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950',
    'dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300'
  ],
  variants: {
    variant: {
      default: '',
      destructive: 'border-red-500 focus-visible:ring-red-500',
    },
    size: {
      default: 'h-10 px-3 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

export type InputVariants = VariantProps<typeof input>;