import { VariantProps } from 'class-variance-authority'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { getHeadingVarints } from './variants'

export interface HeadingProps
  extends ComponentProps<'h1'>,
    VariantProps<typeof getHeadingVarints> {
  as?: ElementType
  children: ReactNode
}
