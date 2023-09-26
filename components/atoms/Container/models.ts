import { ComponentProps, ReactNode } from 'react'

export interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
}
