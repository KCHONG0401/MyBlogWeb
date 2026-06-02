import Image from 'next/image'

interface GearCardProps {
  id: string
  name: string
  brand: string
  category: string
  rating: number
  price?: string
  review: string
  image?: string | null
  buyLink?: string
}

export default function GearCard({ name, brand, category, rating, price, review, image, buyLink }: GearCardProps) {
  return (
    <article className="glass-card overflow-hidden group hover:border-aurora-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-aurora-purple/10">
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-space-800 to-space-900 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-center p-6">
            <svg className="w-16 h-16 text-white/20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/10 text-white/70 text-xs font-medium rounded">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-red-500 text-xs font-medium tracking-wider uppercase">{brand}</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-3.5 h-3.5 ${star <= rating ? 'text-yellow-500' : 'text-white/20'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-aurora-pink transition-colors">
          {name}
        </h3>
        <p className="mt-2 text-white/55 text-sm leading-relaxed line-clamp-3">
          {review}
        </p>
        <div className="mt-4 flex items-center justify-between">
          {price && <span className="text-white/80 font-mono text-sm">{price}</span>}
          {buyLink && (
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white text-sm font-medium rounded transition-colors"
            >
              查看
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
