'use client'

import { FC } from 'react'
import { FooterProps } from './models'
import { Container } from '@/components/atoms/Container'
import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'
import { GithubLogo, SlackLogo, TwitterLogo } from 'phosphor-react'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Linear Method', href: '#' },
      { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'GitHub', href: '#' },
    ],
  },
]

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="text-white border-t border-white-a08 py-[3.5rem] mt-12 text-sm">
      <Container className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex flex-row lg:flex-col h-full justify-between">
            <div className="flex text-grey items-center">
              <Logo className="w-4 h-4 mr-4" /> Linear - Designed worldwide
            </div>
            <div className="text-grey mt-auto flex space-x-4">
              <TwitterLogo size={20} />
              <GithubLogo size={20} />
              <SlackLogo size={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="lg:min-w-[11.25rem] mt-10 lg:mt-0 min-w-[50%]"
            >
              <h3 key={column.title} className="font-medium mb-3">
                {column.title}
              </h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href} className="[&_a]:last:mb-0">
                    <Link href={link.href} className="text-grey mb-3 block ">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  )
}
