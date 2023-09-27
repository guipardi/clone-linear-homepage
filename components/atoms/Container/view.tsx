import { FC } from 'react'
import { ContainerProps } from './models'

export const Container: FC<ContainerProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`max-w-[120rem] mx-auto px-8 ${className}`} {...props}>
      {children}
    </div>
  )
}
