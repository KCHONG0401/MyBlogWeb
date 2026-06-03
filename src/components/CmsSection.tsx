'use client'

import { useEffect, useState, useRef } from 'react'

export function CmsSection({
  section,
  label,
  children,
  className,
}: {
  section: string
  label: string
  children: React.ReactNode
  className?: string
}) {
  const [editMode, setEditMode] = useState(false)
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const inIframe = window.self !== window.top
    const hasParam = new URLSearchParams(window.location.search).has('cms_edit')
    setEditMode(inIframe && hasParam)
  }, [])

  if (!editMode) return <div className={className}>{children}</div>

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.parent.postMessage({ type: 'CMS_OPEN_EDITOR', section }, '*')
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        outline: hovered ? '2px dashed rgba(239,68,68,0.6)' : '2px dashed transparent',
        outlineOffset: '-2px',
        transition: 'outline 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <button
          onClick={handleEdit}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 9999,
            background: '#dc2626',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '4px 12px',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          ✏️ 編輯 {label}
        </button>
      )}
      {children}
    </div>
  )
}
