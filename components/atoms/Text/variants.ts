import { cva } from 'class-variance-authority'

export const getTextVariants = cva('text-white', {
  variants: {
    size: {
      lg: 'text-lg',
    },
  },
})
