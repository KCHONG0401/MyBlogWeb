import Link from 'next/link'

export const metadata = {
  title: '關於我 | RIDELOG',
  description: '關於我與這個部落格的故事',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 mx-auto flex items-center justify-center border-2 border-red-600/50 mb-6">
          <span className="text-5xl font-bold gradient-text">K</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text">關於我</h1>
        <p className="mt-3 text-white/50 text-lg">騎士 · 旅人 · 記錄者</p>
      </div>

      {/* Story */}
      <div className="glass-card p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-600 rounded-full" />
          我的故事
        </h2>
        <div className="text-white/65 leading-relaxed space-y-4">
          <p>
            大家好，我是 KC。一個在馬來西亞生活的摩托車愛好者。
          </p>
          <p>
            機車對我來說不只是交通工具，它代表著一種生活態度——追求自由、享受當下、挑戰自我。
            每一次發動引擎，每一次轉動油門，都讓我想起當初為什麼選擇踏上這條路。
          </p>
          <p>
            這個部落格記錄了我的騎行旅程、影片創作與裝備心得。從吉隆坡市區到雲頂高原，
            從雪邦賽道到 Borneo Highway，每一個轉彎都有自己的故事。
          </p>
          <p>
            「四輪載身體，兩輪載靈魂。」—— 希望我的分享能讓更多人感受到摩托車的魅力。
          </p>
        </div>
      </div>

      {/* Motorcycle */}
      <div className="glass-card p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-600 rounded-full" />
          我的愛車
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SpecItem label="車款" value="Kawasaki Z900" />
          <SpecItem label="年份" value="2025" />
          <SpecItem label="排氣量" value="948cc 直列四缸" />
          <SpecItem label="改裝" value="全段鈦合金排氣 / ECU 排氣閥門" />
          <SpecItem label="里程" value="8,000 km" />
          <SpecItem label="賽道日" value="3 次" />
        </div>
      </div>

      {/* Camera */}
      <div className="glass-card p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-600 rounded-full" />
          拍攝器材
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GearItem name="GoPro HERO13 Black" desc="主視角行車記錄" />
          <GearItem name="DJI Osmo Action 5" desc="備用視角" />
          <GearItem name="Sony A7C II" desc="定點拍攝" />
          <GearItem name="Rode Wireless GO II" desc="收音麥克風" />
        </div>
      </div>

      {/* Goals */}
      <div className="glass-card p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-600 rounded-full" />
          頻道計劃
        </h2>
        <div className="space-y-4">
          <GoalItem
            title="騎行聲浪"
            desc="純排氣聲浪的 A-to-B 路線記錄，無音樂，只有引擎的咆哮"
          />
          <GoalItem
            title="旅行 Vlog"
            desc="馬來西亞與東南亞的摩托車旅行，用鏡頭記錄路上的每一刻"
          />
          <GoalItem
            title="裝備評測"
            desc="實際使用後的心得，幫你找到最適合的裝備"
          />
          <GoalItem
            title="賽道日記"
            desc="雪邦賽道及其他賽道日的練習與挑戰"
          />
        </div>
      </div>

      {/* Contact / CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold gradient-text mb-4">一起上路吧</h2>
        <p className="text-white/50 mb-8">
          有任何問題或合作歡迎聯繫，讓我們一起騎出精彩
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/videos"
            className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-all"
          >
            看看我的影片
          </Link>
          <a
            href="#"
            className="px-6 py-3 border border-white/20 hover:border-red-500 hover:text-red-400 text-white/70 font-medium rounded-lg transition-all"
          >
            聯繫我
          </a>
        </div>
      </div>
    </div>
  )
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/10">
      <span className="text-white/40 text-sm">{label}</span>
      <span className="text-white/80 font-medium">{value}</span>
    </div>
  )
}

function GearItem({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <div className="text-white/80 font-medium text-sm">{name}</div>
        <div className="text-white/40 text-xs">{desc}</div>
      </div>
    </div>
  )
}

function GoalItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-white/50 text-sm mt-1">{desc}</p>
      </div>
    </div>
  )
}
