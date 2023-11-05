import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/nav-bar'
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Witcher's Planeswalker's Library`,
  description: `MTG магазин и "wishlist" Родиона Нараянова`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
