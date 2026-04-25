import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

export default function CertificationsPage() {
  const { certifications } = config

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">05 / Certifications</p>
          <h1>Certifications</h1>
          <p>Mes certifications professionnelles et validations de compétences.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Certifications obtenues</h2>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="cert-card">
                  <div className="cert-logo">{cert.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <h3 className="cert-name">{cert.nom}</h3>
                    <p className="cert-issuer">{cert.organisme}</p>
                    <p className="cert-date">{cert.date}</p>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ fontSize: '0.65rem', padding: '0.4rem 0.75rem', whiteSpace: 'nowrap' }}
                    >
                      Voir
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
