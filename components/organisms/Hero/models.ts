import { ComponentProps, ReactNode } from 'react'

export interface HeroProps extends ComponentProps<'div'> {
  children: ReactNode
}
