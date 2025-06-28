import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { envVariables } from '@/helpers/envVariables'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: envVariables.PRODUCT_NAME,
  description: envVariables.PRODUCT_DESCRIPTION,
  keywords: envVariables.KEYWORDS,
  openGraph: {
    title: envVariables.PRODUCT_NAME,
    description:  envVariables.PRODUCT_DESCRIPTION,
    url: envVariables.SITE_URL,
    type: 'website',
    images: [
      {
        url: envVariables.LOGO_IMAGE,
        width: 800,
        height: 600,
        alt: envVariables.PRODUCT_NAME,
      },  
    ],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
