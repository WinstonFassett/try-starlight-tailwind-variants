import { tv, type VariantProps } from 'tailwind-variants';
 
export const button = tv({
  base: 'font-medium rounded-full hover:opacity-90 active:opacity-80',
  variants: {
    color: {
      default: '',
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'default'
  }
});
export type ButtonVariants = VariantProps<typeof button>;