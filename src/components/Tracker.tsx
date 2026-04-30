'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function Tracker() {
  const pathname = usePathname()
  const tracked = useRef<string | null>(null)

  useEffect(() => {
    if (pathname.startsWith('/admin')) return
    if (tracked.current === pathname) return
    tracked.current = pathname

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pathname }),
    }).catch(() => {})
  }, [pathname])

  return null
}