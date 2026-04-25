import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

export default function ProjetsPage() {
  const { projets } = config

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">06 / Portfolio</p>
          <h1>Projets<br />Réalisés</h1>
          <p>Mes projets techniques en systèmes, réseaux et infrastructure.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projets.map((projet, i) => (
              <FadeIn key={i} delay={i * 80}>
                <article className="project-card">
                  <div className="project-header">
                    <div className="project-icon">{projet.emoji}</div>
                    <div>
                      <h3 style={{ fontSize: '1rem' }}>{projet.titre}</h3>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)' }}>
                        {projet.type}
                      </p>
                    </div>
                  </div>
                  <div className="project-body">
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{projet.description}</p>
                    <div className="project-tags">
                      {projet.tags.map((tag) => (
                        <span key={tag} className="tech-badge">{tag}</span>
                      ))}
                    </div>
                    {projet.url && (
                      <div style={{ marginTop: '1.25rem' }}>
                        <a
                          href={projet.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                          style={{ fontSize: '0.65rem', padding: '0.4rem 0.75rem' }}
                        >
                          Voir le projet
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
