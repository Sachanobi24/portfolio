'use client'
import { config } from '@/data/config'

export default function CVPage() {
  const { identity } = config

  return (
    <>
      <div className="page-hero" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <p className="page-hero-label">CV</p>
          <h1>Mon CV</h1>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href={identity.cvUrl}
              download
              className="btn btn-primary"
            >
              ⬇ Télécharger le CV
            </a>
            <a
              href="/"
              className="btn btn-outline"
            >
              ← Retour
            </a>
          </div>
        </div>
      </div>

      <section style={{ padding: '2rem 0 6rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            background: 'var(--bg-card)',
            boxShadow: 'var(--glow)',
          }}>
            <iframe
              src={identity.cvUrl}
              width="100%"
              height="900px"
              style={{ display: 'block', border: 'none' }}
              title="Curriculum Vitae"
            />
          </div>
        </div>
      </section>
    </>
  )
}
