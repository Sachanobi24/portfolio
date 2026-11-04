import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

export default function ProjetProPage() {
  const { projetPro } = config

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">02 / Objectifs</p>
          <h1>Mon Projet<br />Professionnel</h1>
          <p>Ma vision, mes ambitions et la trajectoire que je souhaite prendre dans le domaine des SI.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="projet-pro-content">
            {/* Colonne gauche */}
            <div>
              <h2 className="section-title">Ma vision</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
                {projetPro.vision}
              </p>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Objectifs à court terme
              </h3>
              <div className="objectif-list">
                {projetPro.objectifsCourt.map((o, i) => (
                  <FadeIn key={i} delay={i * 80}>
                    <div className="objectif-item">{o}</div>
                  </FadeIn>
                ))}
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '2rem 0 1rem' }}>
                Objectifs à long terme
              </h3>
              <div className="objectif-list">
                {projetPro.objectifsLong.map((o, i) => (
                  <FadeIn key={i} delay={i * 80}>
                    <div className="objectif-item">{o}</div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Colonne droite */}
            <div>
              <h2 className="section-title">Secteurs visés</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {projetPro.secteurs.map((s, i) => (
                  <FadeIn key={i} delay={i * 80}>
                    <div className="card" style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>{s.emoji}</span>
                        <div>
                          <h3 style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>{s.nom}</h3>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}

                <FadeIn delay={projetPro.secteurs.length * 80}>
                  <div className="card" style={{ padding: '1.25rem', borderColor: 'rgba(127,255,0,0.3)' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                      POURSUITE D'ÉTUDES
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {projetPro.poursuiteEtudes}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Bachelor AIS */}
          <div style={{ marginTop: '4rem' }}>
            <h2 className="section-title">{projetPro.ais.titre}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '800px' }}>
              {projetPro.ais.intro}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {projetPro.ais.axes.map((a, i) => (
                <FadeIn key={a.titre} delay={i * 80}>
                  <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
                    <span style={{ fontSize: '1.6rem' }}>{a.emoji}</span>
                    <h3 style={{ fontSize: '1rem', margin: '0.5rem 0' }}>{a.titre}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{a.texte}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {a.liens.map((l) =>
                        l.href.startsWith('/') ? (
                          <Link key={l.titre} href={l.href} className="btn btn-outline" style={{ fontSize: '0.6rem', padding: '0.35rem 0.7rem' }}>
                            {l.titre} →
                          </Link>
                        ) : (
                          <a key={l.titre} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.6rem', padding: '0.35rem 0.7rem' }}>
                            {l.titre} ↗
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '2.5rem 0 1rem' }}>
              Ce que je veux approfondir
            </h3>
            <div className="objectif-list">
              {projetPro.ais.aApprofondir.map((o, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="objectif-item">{o}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
