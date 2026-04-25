import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

export default function VeillePage() {
  const { veille } = config

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">07 / Actualités tech</p>
          <h1>Veille<br />Technologique</h1>
          <p>Ma veille sur les évolutions technologiques en réseaux, systèmes et cybersécurité.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="veille-grid">
            {veille.map((article, i) => (
              <FadeIn key={i} delay={i * 70}>
                <article className="veille-card">
                  <p className="veille-category">{article.categorie}</p>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{article.titre}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    {article.contenu}
                  </p>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                    {article.date}
                  </span>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
