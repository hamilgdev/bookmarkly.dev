import type { Metadata } from 'next'
import './globals.css'

import { poppins, rubik } from '@/fonts'
import { UIThemeProvider } from '@/contexts'
import { FooterSection, HeaderSection } from '@/components'

export const metadata: Metadata = {
  title: 'Bookmarkly',
  description: 'One favorite at a time. Bookmarkly - where developers thrive and favorites come to life!',
  keywords: 'bookmarkly, bookmarks, bookmark, favorite, favorites, bookmark manager, bookmark manager app, bookmark manager software, bookmark manager chrome, bookmark manager firefox, bookmark manager mac, bookmark manager windows, bookmark manager ios, bookmark manager android, bookmark manager extension, bookmark manager free, bookmark manager online, bookmark manager open source, bookmark manager app free, bookmark manager app ios, bookmark manager app android, bookmark manager app mac, bookmark manager app windows, bookmark manager app chrome, bookmark manager app firefox, bookmark manager app online, bookmark manager app open source, bookmark manager app free mac, bookmark manager app free windows, bookmark manager app free ios, bookmark manager app free android, bookmark manager app free chrome, bookmark manager app free firefox, bookmark manager app free online, bookmark manager app free open source',
  creator: '@hamilgdev',
  openGraph: {
    type: 'website',
    url: 'https://www.bookmarkly.dev/',
    title: 'Bookmarkly',
    description: 'One favorite at a time. Bookmarkly - where developers thrive and favorites come to life!',
    images: [
      {
        url: 'https://www.bookmarkly.dev/og-bookmarkly.jpg',
        width: 1200,
        height: 630,
        alt: 'Bookmarkly'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta property="og:image:alt" content="Bookmarkly" />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <meta property="twitter:image:alt" content="Bookmarkly" />
      </head>

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
