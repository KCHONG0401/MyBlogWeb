import VideoCard from '@/components/VideoCard'
import { videos } from '@/data/content'

export const metadata = {
  title: '影片 | RIDELOG',
  description: '排氣聲浪與公路之旅',
}

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text">影片頻道</h1>
        <p className="mt-3 text-white/50 max-w-xl mx-auto">
          排氣聲浪、公路旅行、賽道體驗，用影片記錄每一次騎行
        </p>
      </div>

      {/* Featured Video (first one large) */}
      <div className="mb-10">
        <div className="glass-card rounded-lg overflow-hidden">
          <div className="relative h-64 sm:h-80 lg:h-96 bg-space-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-red-600/90 flex items-center justify-center mx-auto cursor-pointer hover:bg-red-500 transition-colors hover:scale-110 transform">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 text-white/65 text-sm">{videos[0].title}</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 text-white text-sm font-mono rounded">
              {videos[0].duration}
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white">{videos[0].title}</h2>
            <p className="mt-2 text-white/50">{videos[0].description}</p>
            <div className="mt-3 text-white/40 text-sm">
              {videos[0].views} 次觀看 • {videos[0].date}
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <h2 className="text-xl font-bold text-white/80 mb-6">所有影片</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.slice(1).map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
    </div>
  )
}
