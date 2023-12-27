import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { UIThemeProvider } from '@/contexts'
import { FooterSection, HeaderSection } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookmarkly',
  description: 'One favorite at a time. Bookmarkly - where developers thrive and favorites come to life!'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <UIThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderSection />
          <main className="l-container">
            {children}
          </main>
          <FooterSection />
        </UIThemeProvider>
      </body>
    </html>
  )
}
