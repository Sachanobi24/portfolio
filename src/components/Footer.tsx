import Link from 'next/link'
import { config } from '@/data/config'

export default function Footer() {
  const { prenom, nom, linkedin, github } = config.identity
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {year} — {prenom} {nom} · BTS SIO SISR
          </p>
          <nav className="footer-links">
            <Link href="/">Accueil</Link>
            <Link href="/projets">Projets</Link>
            <Link href="/contact">Contact</Link>
            {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {github   && <a href={github}   target="_blank" rel="noopener noreferrer">GitHub</a>}
          </nav>
        </div>
      </div>
    </footer>
  )
}
