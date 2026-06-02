# 🏍️ RIDELOG - Motorcycle Blog

基於 Next.js 14 App Router 建立的個人摩托車部落格網站。

## 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **3D**: React Three Fiber + Drei

## 專案結構

```
motorcycle-blog/
├── public/
│   └── models/
│       └── motorcycle.glb    ← 放置你的 3D 模型
├── src/
│   ├── app/
│   │   ├── globals.css       ← 全域樣式
│   │   ├── layout.tsx        ← Root layout (含 Navbar + Footer)
│   │   ├── page.tsx          ← 首頁
│   │   ├── blog/page.tsx     ← 文章列表
│   │   ├── videos/page.tsx   ← 影片列表
│   │   ├── gear/page.tsx     ← 裝備評測
│   │   └── about/page.tsx    ← 關於我
│   ├── components/
│   │   ├── Hero3D.tsx        ← 3D 摩托車場景
│   │   ├── BlogCard.tsx      ← 文章卡片
│   │   ├── VideoCard.tsx     ← 影片卡片
│   │   ├── GearCard.tsx      ← 裝備卡片
│   │   └── index.ts          ← Barrel export
│   └── data/
│       └── content.ts        ← 模擬資料
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 快速開始

```bash
# 1. 安裝依賴
cd motorcycle-blog
npm install

# 2. 啟動開發伺服器
npm run dev

# 3. 打開瀏覽器
# http://localhost:3000
```

## 3D 模型

將你的 `motorcycle.glb` 檔案放到 `public/models/` 目錄下。
如果模型不存在，會自動顯示一個用幾何體構建的替代摩托車模型。

## 頁面路由

| 路由 | 說明 |
|------|------|
| `/` | 首頁（含 3D 模型 + 精選內容） |
| `/blog` | 文章列表 |
| `/videos` | 影片列表 |
| `/gear` | 裝備評測 |
| `/about` | 關於我 |

## 自訂

- **顏色**: 修改 `tailwind.config.js` 中的 `metal` 色票
- **內容**: 修改 `src/data/content.ts` 中的模擬資料
- **3D 模型**: 替換 `public/models/motorcycle.glb`
