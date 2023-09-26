import { cva } from 'class-variance-authority'

export const getButtonVariants = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: 'bg-primary-gradient hover:text-shadow hover:shadow-primary',
      secondary: '',
      tertiary: '',
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 h-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})
