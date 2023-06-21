import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from '../context/store'
import Header from '../components/Header'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Rodrigo.',
  description: 'My Portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Header />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
