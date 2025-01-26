// Layout padrão


import { Header } from '@/components/Layout/header'
//import './globals.css'
import { Saira } from 'next/font/google'
import { DefaultProviders } from '@/utils/DefaultProviders'

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
 })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
// AdicionAR a importação de React e useState
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header/>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
