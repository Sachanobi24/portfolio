// ============================================================
//  FICHIER DE CONFIGURATION DU PORTFOLIO
//  Modifiez ce fichier pour personnaliser tout votre portfolio
// ============================================================

export const config = {

  // ----------------------------------------------------------
  // INFORMATIONS PERSONNELLES
  // ----------------------------------------------------------
  identity: {
    prenom: "Mathys",
    nom: "Yssoufi",
    poste: "Administrateur Systèmes & Réseaux",
    statut: "DISPONIBLE — BTS SIO SISR 2024/2026",
    description:
      "Étudiant en BTS SIO option SISR, passionné par les infrastructures réseau, la cybersécurité et l'administration système Linux/Windows.",
    ville: "France",
    email: "yssoufi.mathyspro@gmail.com",           // ex: "mathys@exemple.fr"
    linkedin: "www.linkedin.com/in/mathys-yssoufi",        // ex: "https://linkedin.com/in/mathys-yssoufi"
    github: "https://github.com/Sachanobi24",          // ex: "https://github.com/mathys-yssoufi"
    cvUrl: "/cv_professionnelle.pdf",           // ex: "/cv-mathys.pdf" (mettez votre CV dans /public)
  },

  // ----------------------------------------------------------
  // SECTION À PROPOS
  // ----------------------------------------------------------
  apropos: {
    paragraphes: [
      "Bonjour ! Je suis <strong>Mathys Yssoufi</strong>, étudiant en BTS SIO (Services Informatiques aux Organisations) option SISR (Solutions d'Infrastructure, Systèmes et Réseaux).",
      "Passionné par l'infrastructure informatique, la cybersécurité et l'administration des systèmes, je me spécialise dans la gestion des réseaux, la virtualisation et les services cloud.",
    ],
    infos: [
      { label: "Formation", valeur: "BTS SIO option SISR" },
      { label: "Spécialité", valeur: "Réseaux & Systèmes" },
      { label: "Disponibilité", valeur: "Stage" },
    ],
    stats: [
      { nombre: "2", label: "ans BTS" },
      { nombre: "4", label: "Projets" },
      { nombre: "SISR", label: "Option" },
    ],
  },

  // ----------------------------------------------------------
  // COMPÉTENCES TECHNIQUES
  // ----------------------------------------------------------
  competences: [
    {
      categorie: "🌐 Réseaux",
      items: [
        { nom: "Routage / Switching", niveau: 60 },
        { nom: "TCP/IP / VLAN", niveau: 60 },
        { nom: "VPN / Firewall", niveau: 60 },
        { nom: "Cisco / Packet Tracer", niveau: 60 },
      ],
    },
    {
      categorie: "🖥️ Systèmes",
      items: [
        { nom: "Linux (Debian)", niveau: 55 },
        { nom: "Windows Server", niveau: 70 },
        { nom: "Active Directory", niveau: 65 },
        { nom: "Virtualisation (Proxmox)", niveau: 80 },
      ],
    },
    {
      categorie: "🔐 Sécurité & Scripting",
      items: [
        { nom: "PowerShell", niveau: 5 },
        { nom: "Cybersécurité", niveau: 15 },
        { nom: "Python", niveau: 25 },
      ],
    },
    {
      categorie: "🖥️ Développement",
      items: [
        { nom: "HTML / CSS", niveau: 75 },
        { nom: "JavaScript / ES6", niveau: 65 },
        { nom: "PHP", niveau: 55 },
        { nom: "C#", niveau: 50 },
      ],
    },
    {
      categorie: "🗄️ Outils & Frameworks",
      items: [
        { nom: "SQL", niveau: 60 },
        { nom: "Next.js / React", niveau: 55 },
        { nom: "Docker", niveau: 65 },
        { nom: "GLPI / Fog", niveau: 60 },
      ],
    },
  ],
  // ----------------------------------------------------------
  // PROJET PROFESSIONNEL
  // ----------------------------------------------------------
  projetPro: {
    vision:
      "Après mon BTS SIO option SISR, je souhaite évoluer dans le domaine de l'administration des systèmes et réseaux, avec une spécialisation en cybersécurité.",
    objectifsCourt: [
      "Décrocher un stage / une alternance dans une DSI ou SSII",
      "Obtenir une certification réseau (Cisco CCNA ou CompTIA Network+)",
      "Approfondir mes compétences en virtualisation (VMware, Proxmox)",
    ],
    objectifsLong: [
      "Évoluer vers un poste d'Ingénieur Systèmes & Réseaux",
      "Me spécialiser en cybersécurité (SOC Analyst, Pen Tester)",
      "Obtenir des certifications avancées (CCNP, CEH, OSCP)",
      "Contribuer à la sécurisation des infrastructures d'entreprises",
    ],
    secteurs: [
      { emoji: "🏢", nom: "ESN / SSII", desc: "Projets variés, montée en compétences rapide" },
      { emoji: "🏥", nom: "Secteur hospitalier", desc: "Criticité des SI, sécurité des données médicales" },
      { emoji: "🏛️", nom: "Secteur public", desc: "Service aux citoyens, projets d'envergure" },
      { emoji: "🔐", nom: "Cybersécurité", desc: "Audit, pentest, protection des infrastructures" },
    ],
    poursuiteEtudes:
      "Licence pro Réseaux & Télécoms ou Cybersécurité envisagés après le BTS.",
  },

  // ----------------------------------------------------------
  // EXPÉRIENCES PROFESSIONNELLES
  // ----------------------------------------------------------
  experiences: [
    {
      date: "2025-2026 — En cours",
      titre: "Technicien Réseaux & Systèmes",
      entreprise: "Stage / Entreprise — Ville",
      description:
        "Administration des serveurs Windows et Linux, configuration réseau, support utilisateurs, mise en place de VPN.",
      tags: ["Linux", "Windows Server", "VPN"],
    },
    {
      date: "2021-2022",
      titre: "Stage Réparateur Informatique",
      entreprise: "SOS informatique — Sartilly",
      description:
        "Démontage et remontage de matériel, identifications de pannes, installation de logiciel",
      tags: [""],
    },
  ],

  competencesAcquises: [
    { tag: "Réseau", titre: "Infrastructure réseau", desc: "Configuration routeurs, switches, mise en place VLAN, gestion DHCP/DNS." },
    { tag: "Système", titre: "Administration serveurs", desc: "Déploiement et maintenance de serveurs Linux/Windows, virtualisation." },
    { tag: "Sécurité", titre: "Cybersécurité", desc: "Pare-feu, VPN." },
    { tag: "Support", titre: "Helpdesk & Support", desc: "Support niveau 1 et 2, ticketing." },
  ],

  // ----------------------------------------------------------
  // FORMATION
  // ----------------------------------------------------------
  formations: [
    {
      date: "2025 — 2027",
      titre: "BTS SIO option SISR",
      etablissement: "Services Informatiques aux Organisations\nSolutions d'Infrastructure, Systèmes et Réseaux",
      description:
        "Formation en 2 ans axée sur l'administration des réseaux, la virtualisation, la cybersécurité et la gestion des systèmes d'exploitation.",
      tags: ["Réseaux", "Linux", "Windows Server", "Virtualisation", "Cybersécurité"],
    },
    {
      date: "2022 — 2025",
      titre: "Baccalauréat",
      etablissement: "Julliot de la Morandière — Granville",
      description:
        "Obtention du Baccalauréat technologique (STI2D). Intérêt marqué pour les matières scientifiques et l'informatique.",
      tags: [],
    },
  ],

  matieresBTS: [
    "Administration des réseaux",
    "Cybersécurité",
    "Virtualisation",
    "Scripting Bash / PowerShell",
    "Windows Server / AD",
    "Services réseau (DNS, DHCP, NTP)",
    "Supervision réseau",
    "Support et assistance",
  ],

  // ----------------------------------------------------------
  // CERTIFICATIONS
  // ----------------------------------------------------------
  certifications: [
    { emoji: "🌐", nom: "Cisco CCNA", organisme: "Cisco Networking Academy", date: "2025-2026", url: "" },
  ],

  // ----------------------------------------------------------
  // PROJETS RÉALISÉS
  // ----------------------------------------------------------
  projets: [
    {
      emoji: "🌐",
      titre: "Infrastructure VLAN",
      type: "Infrastructure réseau",
      description:
        "Conception et déploiement d'une infrastructure réseau avec VLANs, routage inter-VLAN sur routeur Cisco.",
      tags: ["Cisco", "VLAN", "Routage"],
      url: "",   // lien vers le projet ou rapport
    },
    {
      emoji: "🖥️",
      titre: "Serveur Linux",
      type: "Administration système",
      description:
        "Installation et configuration d'un serveur Debian : Apache, Nginx, PHP, MySQL, SSH, certificats SSL.",
      tags: ["Linux", "Apache", "SSH"],
      url: "",
    },
    {
      emoji: "☁️",
      titre: "Infrastructure cloud",
      type: "Cloud & Virtualisation",
      description:
        "Déploiement d'une infrastructure virtualisée sous Proxmox avec haute disponibilité.",
      tags: ["Proxmox", "Cloud"],
      url: "",
    },
  ],

  // ----------------------------------------------------------
  // VEILLE TECHNOLOGIQUE
  // ----------------------------------------------------------
  veille: [
    {
      categorie: "Système",
      titre: "Conteneurisation",
      contenu:
        "Docker et Kubernetes s'imposent comme standards pour le déploiement d'applications en production.",
      date: "2024",
      keywords: ["docker", "kubernetes", "conteneur"],
    },
  ],

  // ----------------------------------------------------------
  // CENTRES D'INTÉRÊT
  // ----------------------------------------------------------
  interets: [
    { emoji: "💻", nom: "Programmation", desc: "Création de petits site web personnels" },
    { emoji: "🎮", nom: "Gaming", desc: "Esport et jeux stratégiques" },
    { emoji: "🎵", nom: "Musique", desc: "Écoute" },
    { emoji: "📚", nom: "Lecture ", desc: "Livres philosophiques et mangas" },
    { emoji: "🏃", nom: "Sport", desc: "Running et activités outdoor" },
  ],

engagement: "",
  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Projet pro", href: "/projet-pro" },
    { label: "Expériences", href: "/experiences" },
    { label: "Formation", href: "/formation" },
    { label: "Certifications", href: "/certifications" },
    { label: "Projets", href: "/projets" },
    { label: "Veille", href: "/veille" },
    { label: "Intérêts", href: "/interets" },
    { label: "Contact", href: "/contact" },
  ],
}
