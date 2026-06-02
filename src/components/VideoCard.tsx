import Image from 'next/image'

interface VideoCardProps {
  title: string
  description: string
  duration: string
  views: string
  date: string
  thumbnail?: string
  youtubeId?: string
}

export default function VideoCard({ title, description, duration, views, date, thumbnail, youtubeId }: VideoCardProps) {
  const thumbUrl = thumbnail || (youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : null)

  return (
    <article className="glass-card overflow-hidden group hover:border-aurora-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/10">
      {/* Thumbnail */}
      <div className="relative h-48 bg-space-800 overflow-hidden">
        {thumbUrl ? (
          <Image
            src={thumbUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-space-800 to-space-900">
            <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center transform group-hover:scale-100 scale-75 transition-transform">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 text-white text-xs font-mono rounded">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white group-hover:text-aurora-pink transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-white/55 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="mt-3 flex items-center gap-3 text-white/40 text-xs">
          <span>{views} 次觀看</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  )
}
