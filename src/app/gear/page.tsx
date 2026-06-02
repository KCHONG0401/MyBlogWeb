import GearCard from '@/components/GearCard'
import { gear } from '@/data/content'

export const metadata = {
  title: '裝備 | RIDELOG',
  description: '實際使用後的心得分享',
}

export default function GearPage() {
  const categories = ['全部', '安全帽', '外套', '手套', '排氣管', '車靴', '行車記錄器']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text">裝備評測</h1>
        <p className="mt-3 text-white/50 max-w-xl mx-auto">
          實際使用後的心得分享，幫你找到最適合的裝備
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 text-sm rounded-lg transition-all ${
              cat === '全部'
                ? 'bg-red-600 text-white'
                : 'bg-space-800 text-white/65 hover:bg-space-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gear Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gear.map((item, i) => (
          <GearCard key={i} {...item} />
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-16 text-center">
        <div className="glass-card rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-white/50 text-sm leading-relaxed">
            以上評測均為個人實際使用心得，不代表任何品牌立場。
            購買前建議親身體驗，選擇最適合自己的裝備。
            <br />
            <span className="text-red-500 font-medium">安全第一，裝備是保命用的。</span>
          </p>
        </div>
      </div>
    </div>
  )
}
