export interface NavItem {
  id: string
  label: string
  href: string
  hidden: boolean
  order: number
}

export interface NavConfig {
  site_name: string
  logo_text: string
  items: NavItem[]
}

export interface HeroConfig {
  title_line1: string
  title_line2: string
  title_line3: string
  subtitle: string
  cta_primary: { text: string; href: string }
  cta_secondary: { text: string; href: string }
  model_url: string | null
}

export interface StatItem {
  id: string
  value: string
  label: string
}

export interface SocialConfig {
  youtube: string
  instagram: string
  tiktok: string
}

export interface FooterConfig {
  tagline: string
  description: string
}

export interface CtaConfig {
  title: string
  subtitle: string
}

export interface SiteConfig {
  nav: NavConfig | null
  hero: HeroConfig | null
  stats: StatItem[] | null
  social: SocialConfig | null
  footer: FooterConfig | null
  cta_section: CtaConfig | null
}

export const defaultNav: NavConfig = {
  site_name: 'RIDELOG',
  logo_text: 'R',
  items: [
    { id: '1', label: '首頁',   href: '/',       hidden: false, order: 1 },
    { id: '2', label: '文章',   href: '/blog',   hidden: false, order: 2 },
    { id: '3', label: '影片',   href: '/videos', hidden: false, order: 3 },
    { id: '4', label: '配件',   href: '/gear',   hidden: false, order: 4 },
    { id: '5', label: '關於',   href: '/about',  hidden: false, order: 5 },
  ],
}

export const defaultHero: HeroConfig = {
  title_line1: 'Ride.',
  title_line2: 'Record.',
  title_line3: 'Review.',
  subtitle: '分享我的摩托車旅程、影片與配件心得',
  cta_primary:   { text: '觀看影片', href: '/videos' },
  cta_secondary: { text: '查看配件', href: '/gear'   },
  model_url: null,
}
