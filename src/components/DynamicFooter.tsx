'use client'

import Link from 'next/link'
import { useSiteConfig } from '@/app/providers'
import { defaultNav } from '@/lib/site-config'
import { CmsSection } from './CmsSection'

export default function DynamicFooter() {
  const { nav: rawNav, footer, social } = useSiteConfig()
  const nav = rawNav ?? defaultNav
  const visibleItems = [...nav.items]
    .filter((i) => !i.hidden)
    .sort((a, b) => a.order - b.order)

  const tagline = footer?.tagline ?? 'Ride. Record. Review.'
  const description = footer?.description ?? '分享每一次騎行的感動，記錄路上的每一刻。'

  return (
    <CmsSection section="footer" label="頁腳">
      <footer className="bg-space-950/80 border-t border-white/10 mt-auto backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-sm">
                  {nav.logo_text}
                </div>
                <span className="font-bold text-lg tracking-wider gradient-text">{nav.site_name}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {description}<br />{tagline}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white/70 mb-4 text-sm tracking-wider">快速連結</h4>
              <div className="flex flex-col gap-2">
                {visibleItems.map((item) => (
                  <Link key={item.id} href={item.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white/70 mb-4 text-sm tracking-wider">追蹤我</h4>
              <div className="flex flex-col gap-2">
                {social?.youtube  && <a href={social.youtube}  className="text-white/50 hover:text-white text-sm transition-colors">YouTube</a>}
                {social?.instagram && <a href={social.instagram} className="text-white/50 hover:text-white text-sm transition-colors">Instagram</a>}
                {social?.tiktok   && <a href={social.tiktok}   className="text-white/50 hover:text-white text-sm transition-colors">TikTok</a>}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} {nav.site_name}. All rights reserved.
          </div>
        </div>
      </footer>
    </CmsSection>
  )
}
