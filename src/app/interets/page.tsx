import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

export default function InteretsPage() {
  const { interets, engagement } = config

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">08 / Qui suis-je ?</p>
          <h1>Centres<br />d&apos;intérêt</h1>
          <p>Mes passions et activités en dehors du monde professionnel.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="interests-grid" style={{ marginBottom: '4rem' }}>
            {interets.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="interest-card">
                  <div className="interest-icon">{item.emoji}</div>
                  <h3 className="interest-name">{item.nom}</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {engagement && (
            <FadeIn>
              <div className="card" style={{ maxWidth: '600px' }}>
                <span className="card-tag">Engagements</span>
                <h3 style={{ marginBottom: '0.75rem' }}>Activités bénévoles &amp; associatives</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{engagement}</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  )
}
