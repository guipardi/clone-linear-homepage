import { VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { getButtonVariants } from './variants'

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof getButtonVariants> {
  href: string
  children: ReactNode
  as: ElementType
}
