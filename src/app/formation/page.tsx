import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

export default function FormationPage() {
  const { formations, matieresBTS } = config

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">04 / Parcours académique</p>
          <h1>Formation</h1>
          <p>Mon parcours académique et mes diplômes dans le domaine informatique.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Timeline formations */}
            <div>
              <h2 className="section-title">Diplômes &amp; Formations</h2>
              <div className="timeline" role="list">
                {formations.map((f, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <article className="timeline-item" role="listitem">
                      <p className="timeline-date">{f.date}</p>
                      <h3 className="timeline-title">{f.titre}</h3>
                      <p className="timeline-company">{f.etablissement}</p>
                      <p className="timeline-desc">{f.description}</p>
                      {f.tags.length > 0 && (
                        <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {f.tags.map((tag) => (
                            <span key={tag} className="tech-badge">{tag}</span>
                          ))}
                        </div>
                      )}
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Matières */}
            <div>
              <h2 className="section-title">Matières BTS SISR</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {matieresBTS.map((m, i) => (
                  <FadeIn key={i} delay={i * 60}>
                    <div className="card" style={{ padding: '1rem 1.25rem' }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)', fontSize: '0.7rem' }}>→</span>
                        {m}
                      </p>
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
