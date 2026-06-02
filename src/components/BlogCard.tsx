import Image from 'next/image'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image?: string | null
  slug: string
}

export default function BlogCard({ title, excerpt, date, category, image, slug }: BlogCardProps) {
  return (
    <article className="glass-card overflow-hidden group hover:border-aurora-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/10">
      {/* Image */}
      <div className="relative h-48 bg-space-800 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-space-800 to-space-900">
            <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-red-600/90 text-white text-xs font-medium rounded">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <time className="text-white/40 text-xs">{date}</time>
        <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-aurora-pink transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-white/55 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-4">
          <span className="text-aurora-purple text-sm font-medium group-hover:text-aurora-pink transition-colors inline-flex items-center gap-1">
            閱讀更多
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  )
}
