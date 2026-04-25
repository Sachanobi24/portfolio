'use client'
import { useEffect, useState, useCallback } from 'react'
import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

interface RSSItem {
  titre: string
  lien: string
  date: string
  description: string
  source: string
  categorie: string
}

const KEYWORDS: Record<string, string[]> = {
  'Conteneurisation':   ['docker', 'kubernetes', 'container', 'conteneur', 'helm', 'k8s', 'podman'],
  'Zero Trust Architecture': ['zero trust', 'ztna', 'zero-trust'],
  'Edge Computing':     ['edge computing', 'edge', 'iot', 'fog computing'],
  'Wi-Fi 7 (802.11be)': ['wi-fi 7', 'wifi 7', '802.11be', 'wifi'],
  'IA et cyberdéfense': ['ia', 'intelligence artificielle', 'siem', 'ai', 'machine learning'],
  'IPv6 adoption':      ['ipv6', 'ipv4', 'protocole réseau'],
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return ''
  const diff = Math.floor((Date.now() - d.getTime()) / 1000)
  if (diff < 3600)   return `il y a ${Math.floor(diff / 60)} min`
  if (diff < 86400)  return `il y a ${Math.floor(diff / 3600)} h`
  if (diff < 604800) return `il y a ${Math.floor(diff / 86400)} j`
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
}

function matchesKeywords(item: RSSItem, keywords: string[]): boolean {
  const text = `${item.titre} ${item.description} ${item.categorie}`.toLowerCase()
  return keywords.some((kw) => text.includes(kw.toLowerCase()))
}

export default function VeillePage() {
  const { veille } = config
  const [allItems, setAllItems]       = useState<RSSItem[]>([])
  const [loading, setLoading]         = useState(false)
  const [activeCard, setActiveCard]   = useState<string | null>(null)
  const [rssFiltered, setRssFiltered] = useState<RSSItem[]>([])

  useEffect(() => {
    setLoading(true)
    fetch('/api/rss')
      .then((r) => r.json())
      .then((data) => { setAllItems(data.items ?? []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleCardClick = useCallback((titre: string) => {
    if (activeCard === titre) {
      setActiveCard(null); setRssFiltered([]); return
    }
    setActiveCard(titre)
    const keywords =
      KEYWORDS[titre] ??
      titre.toLowerCase().split(/\s+/).filter((w) => w.length > 3)
    setRssFiltered(allItems.filter((item) => matchesKeywords(item, keywords)))
    setTimeout(() => {
      document.getElementById('rss-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }, [activeCard, allItems])

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">07 / Actualités tech</p>
          <h1>Veille<br />Technologique</h1>
          <p>Clique sur un sujet pour voir les derniers articles RSS associés.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          <div className="veille-grid">
            {veille.map((article, i) => {
              const isActive = activeCard === article.titre
              return (
                <FadeIn key={i} delay={i * 70}>
                  <article
                    className="veille-card"
                    onClick={() => handleCardClick(article.titre)}
                    style={{
                      cursor: 'pointer',
                      borderColor: isActive ? 'var(--primary)' : undefined,
                      background: isActive ? 'rgba(0,212,255,0.08)' : undefined,
                      boxShadow: isActive ? 'var(--glow)' : undefined,
                      transition: 'var(--transition)',
                      userSelect: 'none',
                    }}
                    role="button"
                    aria-expanded={isActive}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleCardClick(article.titre)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <p className="veille-category">{article.categorie}</p>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.7rem',
                        color: isActive ? 'var(--primary)' : 'var(--text-dim)',
                        transition: 'transform 0.3s ease',
                        transform: isActive ? 'rotate(90deg)' : 'none',
                        display: 'inline-block',
                      }}>→</span>
                    </div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{article.titre}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                      {article.contenu}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                        {article.date}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.62rem',
                        color: isActive ? 'var(--primary)' : 'var(--text-dim)',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--primary)' : 'var(--border)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '2px',
                        transition: 'var(--transition)',
                      }}>
                        {loading ? '…' : isActive ? 'Fermer' : 'Voir flux RSS'}
                      </span>
                    </div>
                  </article>
                </FadeIn>
              )
            })}
          </div>

          {activeCard && (
            <div id="rss-results" style={{ marginTop: '3rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)',
              }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: '0.25rem' }}>
                    Flux RSS — <span style={{ color: 'var(--primary)' }}>{activeCard}</span>
                  </h2>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                    {rssFiltered.length} article{rssFiltered.length !== 1 ? 's' : ''} trouvé{rssFiltered.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <button onClick={() => { setActiveCard(null); setRssFiltered([]) }} style={{
                  background: 'none', border: '1px solid var(--border)', color: 'var(--text-muted)',
                  fontFamily: 'var(--font-display)', fontSize: '0.7rem', padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius)', cursor: 'pointer',
                }}>
                  ✕ Fermer
                </button>
              </div>

              {loading && (
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Chargement des flux…
                </p>
              )}

              {!loading && rssFiltered.length === 0 && (
                <div style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'center',
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Aucun article trouvé pour <strong style={{ color: 'var(--text-main)' }}>{activeCard}</strong> dans les flux actuels.
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
                    Les flux sont mis à jour toutes les 30 min.
                  </p>
                </div>
              )}

              {!loading && rssFiltered.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
                  {rssFiltered.map((item, i) => (
                    <FadeIn key={i} delay={i * 50}>
                      <a href={item.lien} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                        <article style={{
                          background: 'var(--bg-card)', border: '1px solid var(--border)',
                          borderRadius: 'var(--radius)', padding: '1.25rem', transition: 'var(--transition)', cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = 'rgba(0,212,255,0.4)'; el.style.transform = 'translateY(-3px)' }}
                        onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)' }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', color: 'var(--primary)' }}>{item.source}</span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', color: 'var(--text-dim)' }}>{timeAgo(item.date)}</span>
                          </div>
                          <h3 style={{ fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: 1.4, marginBottom: '0.5rem' }}>{item.titre}</h3>
                          {item.description && (
                            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                              {item.description.slice(0, 120)}…
                            </p>
                          )}
                          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', color: 'var(--primary)', marginTop: '0.75rem' }}>
                            Lire l&apos;article →
                          </p>
                        </article>
                      </a>
                    </FadeIn>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </>
  )
}
