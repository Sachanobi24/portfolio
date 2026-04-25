'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { config } from '@/data/config'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const { prenom, nom } = config.identity

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="site-logo">
            {prenom.charAt(0)}<span>.</span>{nom.charAt(0)} <span style={{ color: 'var(--text-dim)' }}>—</span> <span>Portfolio</span>
          </Link>

          <nav className={`main-nav${menuOpen ? ' open' : ''}`} id="main-nav">
            {config.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
