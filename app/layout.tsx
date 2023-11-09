import type { Metadata } from 'next'
import './globals.css'
import { orbitron } from './ui'
// import Header from './ui/header/header-main'
import { Providers } from './providers'



export const metadata: Metadata = {
  title: 'Icon 0 Clash',
  description: 'Moving away from time',
  icons: {
    icon: '/logos/logo-icon-o-clash-350x350-black-bg.webp',
  },
  // openGraph: {
  //   title: 'Icon 0 Clash',
  //   images: ['/home-images/icon-o-clash-songs-Dummie-pic.webp'],
  //   url: 'https://icon-o-clash.com',
  //   siteName: 'Icon-0-Clash',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`h-screen icon-light text-foreground bg-background ${orbitron.className}` }>
        <Providers>
          {/* <Header /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
