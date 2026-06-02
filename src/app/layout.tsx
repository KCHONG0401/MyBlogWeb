import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ride. Record. Review. | Motorcycle Blog',
  description: '分享我的摩托車旅程、影片與配件心得',
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
              R
            </div>
            <span className="font-bold text-lg tracking-wider hidden sm:block gradient-text">
              RIDELOG
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1 sm:gap-4">
            <NavLink href="/">首頁</NavLink>
            <NavLink href="/blog">文章</NavLink>
            <NavLink href="/videos">影片</NavLink>
            <NavLink href="/gear">配件</NavLink>
            <NavLink href="/about">關於</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm text-white/60 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-aurora-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  )
}

function Footer() {
  return (
    <footer className="bg-space-950/80 border-t border-white/10 mt-auto backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-sm">
                R
              </div>
              <span className="font-bold text-lg tracking-wider gradient-text">RIDELOG</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              分享每一次騎行的感動，記錄路上的每一刻。<br />
              Ride. Record. Review.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white/70 mb-4 text-sm tracking-wider">快速連結</h4>
            <div className="flex flex-col gap-2">
              <FooterLink href="/blog">文章列表</FooterLink>
              <FooterLink href="/videos">影片頻道</FooterLink>
              <FooterLink href="/gear">裝備心得</FooterLink>
              <FooterLink href="/about">關於我</FooterLink>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white/70 mb-4 text-sm tracking-wider">追蹤我</h4>
            <div className="flex flex-col gap-2">
              <SocialLink href="#">YouTube</SocialLink>
              <SocialLink href="#">Instagram</SocialLink>
              <SocialLink href="#">TikTok</SocialLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} RIDELOG. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/50 hover:text-white text-sm transition-colors">
      {children}
    </Link>
  )
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-white/50 hover:text-white text-sm transition-colors">
      {children}
    </a>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen flex flex-col bg-space-950">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
