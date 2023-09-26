import { FC } from 'react'
import { HeroProps } from './models'

export const Hero: FC<HeroProps> = ({ children, className, ...props }) => {
  return (
    <div className={`text-center ${className}`} {...props}>
      {children}
    </div>
  )
}
