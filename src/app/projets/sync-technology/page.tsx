import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { muted, Sub, Table, Figure, Bullets } from '@/components/ProjetDoc'

const chiffres = [
  { nombre: '17', label: 'services en ligne', detail: 'un sous-domaine par usage' },
  { nombre: '12', label: 'filières', detail: 'du cloud à la cybersécurité' },
  { nombre: '9', label: 'filiales pays', detail: 'prévues dans la cartographie' },
  { nombre: '250+', label: 'éléments cartographiés', detail: 'filières, offres, fonctions' },
]

const groupes = [
  {
    titre: 'Applications',
    services: [
      ['cloud', 'Stockage et synchronisation de fichiers'],
      ['mail', 'Messagerie professionnelle'],
      ['boutique', 'Boutique en ligne'],
      ['esport', 'Plateforme de tournois esport'],
    ],
  },
  {
    titre: 'Compte & accès',
    services: [
      ['espace-client', 'Compte, factures et abonnements'],
      ['agence', 'Annuaire des agences et prise de rendez-vous'],
      ['pro', 'Espace professionnels'],
    ],
  },
  {
    titre: 'Développement',
    services: [
      ['api', 'API et identité Sync ID'],
      ['developers', 'Documentation pour les développeurs'],
      ['analytics', 'Statistiques d’usage'],
      ['cybersecurite', 'Centre de cybersécurité (détaillé plus bas)'],
    ],
  },
  {
    titre: 'Support',
    services: [
      ['status', 'État des services'],
      ['assistance', 'Aide et assistance aux clients'],
      ['support', 'Support technique'],
    ],
  },
  {
    titre: 'Écosystème',
    services: [
      ['maison-connectee', 'Pilotage de l’habitat connecté'],
      ['fondation', 'Fondation Sync Technology'],
      ['jobs', 'Recrutement et candidatures'],
    ],
  },
]

const demonstration = [
  ['Hébergement et services', 'Déployer et maintenir plusieurs services (cloud, messagerie, sites web) sur un même domaine, avec un sous-domaine par usage.'],
  ['Supervision et disponibilité', 'Suivre l’état de chaque service depuis une page de statut dédiée, comme un administrateur d’infrastructure.'],
  ['Cybersécurité et veille', 'Intégrer les flux du CERT-FR et de l’ANSSI, proposer un testeur de liens et orienter vers 17Cyber.'],
  ['Identité et API', 'Concevoir un compte unique, Sync ID, et une API partagée par tous les services du groupe.'],
  ['Support utilisateur', 'Prévoir l’assistance, le support technique, la FAQ et le suivi client, au cœur du métier de technicien.'],
  ['Conduite de projet', 'Définir des priorités, séparer ce qui est livré de ce qui est planifié et documenter l’ensemble dans une cartographie.'],
]

export default function SyncTechnologyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">Projet personnel · Projet phare</p>
          <h1>Sync Technology</h1>
          <p>
            Un projet personnel, réalisé en dehors du lycée en parallèle de mon BTS SIO SISR : un groupe d’infrastructure numérique avec
            hébergement, cloud, messagerie, API, supervision et cybersécurité réunis sous une seule marque et un seul compte client.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <a href="https://sync-technology.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visiter sync-technology.fr ↗
            </a>
            <a href="#services" className="btn btn-outline">Voir les services en ligne</a>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <Link href="/projets" className="btn btn-outline" style={{ fontSize: '0.65rem', padding: '0.4rem 0.75rem' }}>
            ← Retour aux projets
          </Link>

          {/* Chiffres clés */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', margin: '2rem 0 3rem' }}>
            {chiffres.map((c, i) => (
              <FadeIn key={c.label} delay={i * 80}>
                <div className="card" style={{ padding: '1.25rem', textAlign: 'center', height: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--primary)' }}>{c.nombre}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{c.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{c.detail}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Le projet */}
          <FadeIn>
            <h2 className="section-title">Le projet</h2>
            <p style={muted}>
              Sync Technology est un groupe fictif : une maison mère, des filiales par
              pays, une Fondation (reconditionnement de matériel, inclusion numérique) et des filières allant du cloud à la
              cybersécurité en passant par l’esport et la maison connectée.
            </p>
            <p style={{ ...muted, marginTop: '1rem' }}>
              L’ensemble a d’abord été cartographié dans une carte mentale : filières, segments clients (particuliers, PME et
              associations, entreprises), offres et fonctions de groupe. Les services prioritaires ont ensuite été mis en ligne sous
              le domaine <a href="https://sync-technology.fr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>sync-technology.fr</a>.
            </p>
            <Figure
              src="/projets/sync-carte.svg"
              alt="Vue simplifiée de la carte mentale du groupe : filières, filiales, Fondation, priorités, fonctions, segments, offres"
              caption="Vue simplifiée de la carte mentale : plus de 250 éléments organisés en filières, filiales, offres et fonctions du groupe."
            />
          </FadeIn>

          {/* Services */}
          <FadeIn>
            <h2 id="services" className="section-title" style={{ marginTop: '3rem', scrollMarginTop: '100px' }}>Les services en ligne</h2>
            <p style={muted}>
              Chaque service a son propre sous-domaine, comme dans une vraie infrastructure d’entreprise. Ils sont regroupés ici
              comme sur le portail du site.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
              {groupes.map((g) => (
                <div key={g.titre} className="card" style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    {g.titre}
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {g.services.map(([nom, desc]) => (
                      <li key={nom}>
                        <a href={`https://${nom}.sync-technology.fr`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem' }}>
                          {nom} ↗
                        </a>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{desc}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Zoom cybersécurité */}
          <FadeIn>
            <h2 className="section-title" style={{ marginTop: '3rem' }}>Zoom : le centre de cybersécurité</h2>
            <p style={muted}>
              Le service le plus abouti techniquement, directement lié au métier d’administrateur d’infrastructures sécurisées.
            </p>
            <Table
              head={['Fonction', 'Ce qu’elle fait']}
              rows={[
                ['Testeur de liens anti-phishing', 'Compare l’adresse saisie à une liste blanche d’entreprises de confiance et analyse des indicateurs syntaxiques pour détecter hameçonnage et typosquatting.'],
                ['Veille CERT-FR / ANSSI', 'Affiche les alertes et avis de sécurité à partir du flux RSS officiel du CERT-FR.'],
                ['17Cyber', 'Intègre le diagnostic gratuit de Cybermalveillance.gouv.fr pour les victimes.'],
                ['Se former', 'Onglet dédié à la sensibilisation et à la formation.'],
                ['Historique des analyses', 'Les recherches d’un utilisateur connecté sont conservées dans son historique personnel.'],
              ]}
            />
          </FadeIn>

          {/* Ce que le projet démontre */}
          <FadeIn>
            <h2 className="section-title" style={{ marginTop: '3rem' }}>Ce que ce projet démontre</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
              {demonstration.map(([titre, texte]) => (
                <div key={titre} className="card" style={{ padding: '1.4rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{titre}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{texte}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Feuille de route */}
          <FadeIn>
            <h2 className="section-title" style={{ marginTop: '3rem' }}>Où en est le projet</h2>
            <p style={muted}>
              La cartographie distingue ce qui est livré de ce qui est planifié : ce que vous voyez en ligne correspond à la
              première colonne.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
              {[
                ['En ligne', 'var(--primary)', 'France, Sync ID, hébergement, cloud, cybersécurité, espace client, API et page de statut.'],
                ['À 12-24 mois', 'var(--border)', 'Tournois esport, filiale belge, audio et vidéo, maison connectée étendue.'],
                ['Plus tard', 'var(--border)', 'Électricité et réseaux, laboratoire R&D, Ventures et ouverture à d’autres pays.'],
              ].map(([titre, couleur, texte]) => (
                <div key={titre} style={{ borderLeft: `4px solid ${couleur}`, paddingLeft: '1rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{titre}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{texte}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <p style={{ ...muted, fontSize: '0.8rem', marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            Projet personnel fictif, sans lien avec une entreprise existante.
          </p>
        </div>
      </section>
    </>
  )
}
