import './globals.css'
import { ReactNode } from "react"
import { Roboto } from '@next/font/google'
import { GlobalContextProvider } from '../context/store'
import Header from "../components/Header"

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Rodrigo.',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GlobalContextProvider>
          <Header/>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
