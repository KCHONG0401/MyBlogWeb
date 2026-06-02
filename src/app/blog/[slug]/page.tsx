import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/data/content'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | RIDELOG`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-white/40 hover:text-red-400 text-sm transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        返回文章列表
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2 py-1 bg-red-600/90 text-white text-xs font-medium rounded">
            {post.category}
          </span>
          <time className="text-white/40 text-sm">{post.date}</time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-white/65 text-lg leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent mb-8" />

      {/* Content placeholder */}
      <div className="glass-card rounded-lg p-8 text-center text-white/40">
        <svg className="w-12 h-12 mx-auto mb-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p>完整文章內容即將上線</p>
      </div>
    </div>
  )
}
