'use client'

import { useState } from 'react'
import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/data/content'

export default function BlogPage() {
  const categories = ['全部', '賽道', '旅行', '保養', '裝備', '生活']
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredPosts = activeCategory === '全部'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text">文章列表</h1>
        <p className="mt-3 text-white/50 max-w-xl mx-auto">
          騎行筆記、旅行紀錄、裝備心得，所有關於摩托車的文字都在這裡
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm rounded-lg transition-all border ${
              cat === activeCategory
                ? 'bg-aurora-purple/30 border-aurora-purple/60 text-white'
                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-white/40">
          <p>該分類暫無文章</p>
        </div>
      )}
    </div>
  )
}
