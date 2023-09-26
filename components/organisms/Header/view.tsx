import { FC } from 'react'
import { HeaderProps } from './models'
import { Container } from '@/components/atoms/Container'
import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)]">
        <Link href="/" className="flex items-center text-md text-white">
          <Logo className="w-[1.125rem] h-[1.115rem] mr-4" /> Linear
        </Link>
        <nav className="text-white h-full">
          <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6 [&_a:hover]:text-grey [&_a]:transitions-colors">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Costumers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Price</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto h-full flex items-center text-white">
          <Link href="#" className="text-sm mr-6">
            Log in
          </Link>
          <Button as={Link} href="#">
            Sign Up
          </Button>
        </div>
      </Container>
    </header>
  )
}
