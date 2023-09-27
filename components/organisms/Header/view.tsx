'use client'

import { FC, useState } from 'react'
import { HeaderProps } from './models'
import { Container } from '@/components/atoms/Container'
import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import { List } from 'phosphor-react'
import classNames from 'classnames'

export const Header: FC<HeaderProps> = () => {
  const [hamburguerMenuIsOpen, setHamburguerMenuIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link href="/" className="flex items-center text-md text-white">
          <Logo className="w-[1.125rem] h-[1.115rem] mr-4" /> Linear
        </Link>
        <nav
          className={classNames(
            'text-white h-[calc(100vh_-_var(--navigation-height))] md:block md:relative md:h-auto md:w-auto fixed md:top-0 top-navigation-height left-0 w-full overflow-auto bg-background md:bg-transparent',
            hamburguerMenuIsOpen ? '' : 'hidden',
          )}
        >
          <ul
            className={classNames(
              'flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none',
              '[&_a]:h-navigation-height [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:text-md md:[&_a]:text-sm [&_a:hover]:text-grey [&_a]:transitions-colors',
            )}
          >
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Costumers</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Changelog</Link>
            </li>
            <li className="md:hidden lg:block">
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

        <button
          className="text-white ml-6 md:hidden"
          onClick={() => setHamburguerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toogle Menu</span>
          <List />
        </button>
      </Container>
    </header>
  )
}
