import { cva } from 'class-variance-authority'

export const getHeadingVarints = cva('text-white', {
  variants: {
    size: {
      '5xl': 'text-5xl',
    },
  },
})
