import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../lib/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaaS CX Platform',
  description: 'A powerful customer experience platform for modern businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={undefined}>
          {children}
        </Providers>
      </body>
    </html>
  )
}