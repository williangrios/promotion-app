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
  title: envVariables.APP_NAME,
  description: envVariables.APP_DESCRIPTION,
  keywords: [
    'educação infantil',
    'app educacional',
    'inteligência artificial',
    'bloqueio inteligente',
    'pais e filhos',
    'estudos',
    envVariables.APP_NAME,
  ],
  openGraph: {
    title: envVariables.APP_NAME,
    description:
      'Ensine seus filhos antes de liberar o celular. Baixe agora o APK gratuitamente.',
    url: envVariables.SITE_URL,
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: envVariables.APP_NAME,
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
