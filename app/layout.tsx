import '../styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Container } from '@/components/atoms/Container'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body className={inter.className}>
        <div>
          <Header />
          <main className="text-white pt-navigation-height">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
