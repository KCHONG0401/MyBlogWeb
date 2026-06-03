'use client'

import Link from 'next/link'
import { useSiteConfig } from './providers'
import { defaultHero } from '@/lib/site-config'
import { CmsSection } from '@/components/CmsSection'
import Hero3D from '@/components/Hero3D'
import BlogCard from '@/components/BlogCard'
import VideoCard from '@/components/VideoCard'
import GearCard from '@/components/GearCard'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const { hero: rawHero, stats: rawStats, social, cta_section } = useSiteConfig()
  const hero = rawHero ?? defaultHero
  const stats = rawStats ?? [
    { id: '1', value: '50K+', label: '總觀看次數' },
    { id: '2', value: '12',   label: '旅行紀錄'   },
    { id: '3', value: '6',    label: '評測裝備'   },
    { id: '4', value: '3',    label: '賽道經驗'   },
  ]

  const [blogs, setBlogs] = useState<Record<string, unknown>[]>([])
  const [videos, setVideos] = useState<Record<string, unknown>[]>([])
  const [gear, setGear] = useState<Record<string, unknown>[]>([])

  useEffect(() => {
    supabase.from('blog_posts').select('*').eq('status', 'published').order('created_at', { ascending: false }).limit(3)
      .then(({ data }) => setBlogs(data ?? []))
    supabase.from('videos').select('*').eq('status', 'published').order('created_at', { ascending: false }).limit(3)
      .then(({ data }) => setVideos(data ?? []))
    supabase.from('gear').select('*').eq('status', 'published').order('created_at', { ascending: false }).limit(3)
      .then(({ data }) => setGear(data ?? []))
  }, [])

  const ctaTitle    = cta_section?.title    ?? '準備好一起出發了嗎？'
  const ctaSubtitle = cta_section?.subtitle ?? '追蹤我的頻道，每週更新騎行影片與裝備心得'

  return (
    <>
      {/* ── Hero ── */}
      <CmsSection section="hero" label="Hero 區塊" className="relative flex flex-col lg:flex-row h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="flex flex-col justify-center px-10 sm:px-14 lg:px-20 py-16 lg:py-0 lg:w-1/2 z-10 relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="gradient-text">{hero.title_line1}</span>{' '}
            <span className="text-white">{hero.title_line2}</span>{' '}
            <span className="gradient-text">{hero.title_line3}</span>
          </h1>
          <p className="mt-4 text-white/60 text-base sm:text-lg max-w-sm">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={hero.cta_primary.href} className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-red-600/30 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              {hero.cta_primary.text}
            </Link>
            <Link href={hero.cta_secondary.href} className="px-8 py-3 border border-white/20 hover:border-red-500 hover:text-red-400 text-white/80 font-medium rounded-lg transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              {hero.cta_secondary.text}
            </Link>
          </div>
          <div className="absolute bottom-8 left-10 sm:left-14 lg:left-20 animate-bounce">
            <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        <div className="lg:w-1/2 h-full">
          <Hero3D modelUrl={hero.model_url} />
        </div>
      </CmsSection>

      {/* ── Stats ── */}
      <CmsSection section="stats" label="數字欄" className="glass-card rounded-none border-x-0 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.id}>
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-white/40 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </CmsSection>

      {/* ── Latest Articles ── */}
      <Section title="最新文章" subtitle="騎行筆記與生活紀錄" href="/blog" viewAllText="查看所有文章">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => <BlogCard key={String(post.id)} {...(post as never)} />)}
        </div>
      </Section>

      {/* ── Featured Videos ── */}
      <Section title="精選影片" subtitle="排氣聲浪與公路之旅" href="/videos" viewAllText="查看所有影片" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => <VideoCard key={String(v.id)} {...(v as never)} />)}
        </div>
      </Section>

      {/* ── Recommended Gear ── */}
      <Section title="推薦裝備" subtitle="實際使用後的心得分享" href="/gear" viewAllText="查看所有裝備">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gear.map((item) => <GearCard key={String(item.id)} {...(item as never)} />)}
        </div>
      </Section>

      {/* ── CTA ── */}
      <CmsSection section="cta_section" label="CTA 區塊" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-red-900/20" />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">{ctaTitle}</h2>
          <p className="mt-4 text-white/50 text-lg">{ctaSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {social?.youtube   && <a href={social.youtube}   className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-all flex items-center gap-2">▶ YouTube</a>}
            {social?.instagram && <a href={social.instagram} className="px-6 py-3 border border-white/20 hover:border-red-500 hover:text-red-400 text-white/80 font-medium rounded-lg transition-all">📷 Instagram</a>}
            {social?.tiktok    && <a href={social.tiktok}    className="px-6 py-3 border border-white/20 hover:border-red-500 hover:text-red-400 text-white/80 font-medium rounded-lg transition-all">♪ TikTok</a>}
          </div>
        </div>
      </CmsSection>
    </>
  )
}

function Section({ title, subtitle, href, viewAllText, dark, children }: {
  title: string; subtitle: string; href: string; viewAllText: string; dark?: boolean; children: React.ReactNode
}) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-white/[0.02]' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold gradient-text">{title}</h2>
            <p className="mt-1 text-white/40 text-sm">{subtitle}</p>
          </div>
          <Link href={href} className="hidden sm:flex items-center gap-1 text-red-500 hover:text-red-400 text-sm font-medium transition-colors">
            {viewAllText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        {children}
        <div className="mt-8 text-center sm:hidden">
          <Link href={href} className="text-red-500 hover:text-red-400 text-sm font-medium">{viewAllText} →</Link>
        </div>
      </div>
    </section>
  )
}
