import { FC } from 'react'
import { ButtonProps } from './models'
import { getButtonVariants } from './variants'

export const Button: FC<ButtonProps> = ({
  as: Component = 'a',
  children,
  href,
  size,
  variant,
  className,
  ...props
}) => {
  return (
    <Component
      href={href}
      className={`${getButtonVariants({ size, variant })} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
