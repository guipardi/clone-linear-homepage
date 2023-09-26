import { FC } from 'react'
import { HeadingProps } from './models'
import { getHeadingVarints } from './variants'

export const Heading: FC<HeadingProps> = ({
  as: Component = 'h2',
  size,
  children,
  className,
  ...props
}) => {
  return (
    <Component
      className={`${getHeadingVarints({ size, className })} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
