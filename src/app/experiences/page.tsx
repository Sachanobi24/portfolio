import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

export default function ExperiencesPage() {
  const { experiences, competencesAcquises } = config

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">03 / Parcours</p>
          <h1>Expérience<br />Professionnelle</h1>
          <p>Mon parcours en entreprise et en alternance dans le domaine des systèmes et réseaux.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Timeline */}
            <div>
              <h2 className="section-title">Stages &amp; Alternance</h2>
              <div className="timeline" role="list">
                {experiences.map((exp, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <article className="timeline-item" role="listitem">
                      <p className="timeline-date">{exp.date}</p>
                      <h3 className="timeline-title">{exp.titre}</h3>
                      <p className="timeline-company">{exp.entreprise}</p>
                      <p className="timeline-desc">{exp.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '0.75rem' }}>
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tech-badge">{tag}</span>
                        ))}
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Compétences */}
            <div>
              <h2 className="section-title">Compétences acquises</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {competencesAcquises.map((c, i) => (
                  <FadeIn key={i} delay={i * 80}>
                    <div className="card">
                      <span className="card-tag">{c.tag}</span>
                      <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>{c.titre}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{c.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
