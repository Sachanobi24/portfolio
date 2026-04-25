import Link from 'next/link'

export default function NotFound() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '5rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.15em', marginBottom: '1rem' }}>
          ERREUR 404
        </p>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 1, marginBottom: '1.5rem' }}>
          Page<br />introuvable
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn btn-primary">Retour à l&apos;accueil</Link>
      </div>
    </section>
  )
}
