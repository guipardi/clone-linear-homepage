import { FC } from 'react'
import { TextProps } from './models'
import { getTextVariants } from './variants'

export const Text: FC<TextProps> = ({
  children,
  as: Component = 'p',
  size,
  className,
  ...props
}) => {
  return (
    <Component className={`${getTextVariants({ size, className })}`} {...props}>
      {children}
    </Component>
  )
}
