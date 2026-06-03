'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import type { SiteConfig } from '@/lib/site-config'

const SiteConfigContext = createContext<SiteConfig>({
  nav: null, hero: null, stats: null, social: null, footer: null, cta_section: null,
})

export function useSiteConfig() {
  return useContext(SiteConfigContext)
}

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>({
    nav: null, hero: null, stats: null, social: null, footer: null, cta_section: null,
  })

  const fetchConfig = useCallback(async () => {
    const { data } = await supabase.from('site_config').select('key, value')
    if (!data) return
    const cfg: Record<string, unknown> = {}
    data.forEach(({ key, value }: { key: string; value: unknown }) => { cfg[key] = value })
    setConfig(cfg as unknown as SiteConfig)
  }, [])

  useEffect(() => {
    fetchConfig()
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'CMS_REFRESH') fetchConfig()
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [fetchConfig])

  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  )
}
