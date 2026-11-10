'use client'
import { useEffect, useState } from 'react'

// Bouton « retour en haut » : apparaît après un peu de défilement
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const remonter = () => {
    const reduire = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduire ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={remonter}
      aria-label="Revenir en haut de la page"
      title="Revenir en haut"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={{
        position: 'fixed',
        right: '1.5rem',
        bottom: '1.5rem',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        border: '1px solid var(--primary)',
        background: 'var(--bg-card)',
        color: 'var(--primary)',
        fontSize: '1.3rem',
        lineHeight: 1,
        cursor: 'pointer',
        zIndex: 90,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        boxShadow: 'var(--glow)',
      }}
    >
      ↑
    </button>
  )
}
