'use client'

import Link from 'next/link'
import { useSiteConfig } from '@/app/providers'
import { defaultNav } from '@/lib/site-config'
import { CmsSection } from './CmsSection'

export default function DynamicNavbar() {
  const { nav: rawNav } = useSiteConfig()
  const nav = rawNav ?? defaultNav
  const visibleItems = [...nav.items]
    .filter((i) => !i.hidden)
    .sort((a, b) => a.order - b.order)

  return (
    <CmsSection section="nav" label="導航欄">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
                {nav.logo_text}
              </div>
              <span className="font-bold text-lg tracking-wider hidden sm:block gradient-text">
                {nav.site_name}
              </span>
            </Link>

            <div className="flex items-center gap-1 sm:gap-4">
              {visibleItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="px-3 py-2 text-sm text-white/60 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-aurora-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </CmsSection>
  )
}
