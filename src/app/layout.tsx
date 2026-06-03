import type { Metadata } from 'next'
import './globals.css'
import { SiteConfigProvider } from './providers'
import DynamicNavbar from '@/components/DynamicNavbar'
import DynamicFooter from '@/components/DynamicFooter'

export const metadata: Metadata = {
  title: 'Ride. Record. Review. | Motorcycle Blog',
  description: '分享我的摩托車旅程、影片與配件心得',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen flex flex-col bg-space-950">
        <SiteConfigProvider>
          <DynamicNavbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <DynamicFooter />
        </SiteConfigProvider>
      </body>
    </html>
  )
}
