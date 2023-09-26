import { VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { getTextVariants } from './variants'

export interface TextProps
  extends ComponentProps<'p'>,
    VariantProps<typeof getTextVariants> {
  children: ReactNode
  as: ElementType
}
