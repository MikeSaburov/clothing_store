import type { Metadata } from 'next'
// import 'bootstrap/dist/css/bootstrap.css'
import './globalStyles/normalize.css'
import './globalStyles/globals.css'
import { Layout } from '@/components/layouts/Layout'

export const metadata: Metadata = {
  title: 'Rostelecom',
  description: 'Clothing store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
