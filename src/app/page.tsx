import Hero3D from '@/components/Hero3D'
import BlogCard from '@/components/BlogCard'
import VideoCard from '@/components/VideoCard'
import GearCard from '@/components/GearCard'
import { blogPosts, videos, gear } from '@/data/content'
import Link from 'next/link'

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3)
  const featuredVideos = videos.slice(0, 3)
  const featuredGear = gear.slice(0, 3)

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative flex flex-col lg:flex-row h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center px-10 sm:px-14 lg:px-20 py-16 lg:py-0 lg:w-1/2 z-10 relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="gradient-text">Ride.</span>{' '}
            <span className="text-white">Record.</span>{' '}
            <span className="gradient-text">Review.</span>
          </h1>
          <p className="mt-4 text-white/60 text-base sm:text-lg max-w-sm">
            分享我的摩托車旅程、影片與配件心得
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/videos"
              className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-red-600/30 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              觀看影片
            </Link>
            <Link
              href="/gear"
              className="px-8 py-3 border border-white/20 hover:border-red-500 hover:text-red-400 text-white/80 font-medium rounded-lg transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              查看配件
            </Link>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-10 sm:left-14 lg:left-20 animate-bounce">
            <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Right: 3D Model */}
        <div className="lg:w-1/2 h-full">
          <Hero3D />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="glass-card rounded-none border-x-0 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem value="50K+" label="總觀看次數" />
            <StatItem value="12" label="旅行紀錄" />
            <StatItem value="6" label="評測裝備" />
            <StatItem value="3" label="賽道經驗" />
          </div>
        </div>
      </section>

      {/* ── Latest Articles ── */}
      <Section
        title="最新文章"
        subtitle="騎行筆記與生活紀錄"
        href="/blog"
        viewAllText="查看所有文章"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>

      {/* ── Featured Videos ── */}
      <Section
        title="精選影片"
        subtitle="排氣聲浪與公路之旅"
        href="/videos"
        viewAllText="查看所有影片"
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </Section>

      {/* ── Recommended Gear ── */}
      <Section
        title="推薦裝備"
        subtitle="實際使用後的心得分享"
        href="/gear"
        viewAllText="查看所有裝備"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGear.map((item) => (
            <GearCard key={item.id} {...item} />
          ))}
        </div>
      </Section>

      {/* ── CTA Section ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-red-900/20" />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            準備好一起出發了嗎？
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            追蹤我的頻道，每週更新騎行影片與裝備心得
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#" className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
            <a href="#" className="px-6 py-3 border border-white/20 hover:border-red-500 hover:text-red-400 text-white/80 font-medium rounded-lg transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
            <a href="#" className="px-6 py-3 border border-white/20 hover:border-red-500 hover:text-red-400 text-white/80 font-medium rounded-lg transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Section Wrapper ── */
function Section({
  title,
  subtitle,
  href,
  viewAllText,
  dark,
  children,
}: {
  title: string
  subtitle: string
  href: string
  viewAllText: string
  dark?: boolean
  children: React.ReactNode
}) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-white/[0.02]' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text">{title}</h2>
            <p className="mt-1 text-white/40 text-sm">{subtitle}</p>
          </div>
          <Link
            href={href}
            className="hidden sm:flex items-center gap-1 text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {viewAllText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {children}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href={href}
            className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
          >
            {viewAllText} →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Stat Item ── */
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold gradient-text">{value}</div>
      <div className="mt-1 text-white/40 text-sm">{label}</div>
    </div>
  )
}
