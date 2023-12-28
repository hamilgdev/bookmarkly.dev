import type { Metadata } from 'next'
import './globals.css'

import { poppins, rubik } from '@/fonts'
import { UIThemeProvider } from '@/contexts'
import { FooterSection, HeaderSection } from '@/components'

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
      <body className={`${poppins.variable} ${rubik.variable} flex flex-col min-h-screen`}>
        <UIThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderSection />
          <main className='flex-1'>
            {children}
          </main>
          <FooterSection />
        </UIThemeProvider>
      </body>
    </html>
  )
}
