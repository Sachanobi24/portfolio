// ============================================================
//  FICHIER DE CONFIGURATION DU PORTFOLIO
//  Modifiez ce fichier pour personnaliser tout votre portfolio
// ============================================================

export const config = {

  formspreeUrl: "https://formspree.io/f/mzdozpqj",
  // ----------------------------------------------------------
  // INFORMATIONS PERSONNELLES
  // ----------------------------------------------------------
  identity: {
    prenom: "Mathys",
    nom: "Yssoufi",
    poste: "Étudiant BTS SIO — Systèmes & Réseaux",
    statut: "RECHERCHE DE STAGE — 18 JANV. → 20 FÉV.",
    description:
      "Étudiant en BTS SIO option SISR, passionné par les infrastructures réseau, la cybersécurité et l'administration système Linux/Windows.",
    ville: "Avranches (Manche)",
    email: "yssoufi.mathyspro@gmail.com",           // ex: "mathys@exemple.fr"
    linkedin: "https://www.linkedin.com/in/mathys-yssoufi",        // ex: "https://linkedin.com/in/mathys-yssoufi"
    github: "https://github.com/Sachanobi24",          // ex: "https://github.com/mathys-yssoufi"
    cvUrl: "/CV_Mathys.pdf",           // ex: "/cv-mathys.pdf" (mettez votre CV dans /public)
  },

  // ----------------------------------------------------------
  // SECTION À PROPOS
  // ----------------------------------------------------------
  apropos: {
    paragraphes: [
      "Bonjour ! Je suis <strong>Mathys Yssoufi</strong>, étudiant en BTS SIO (Services Informatiques aux Organisations) option SISR (Solutions d'Infrastructure, Systèmes et Réseaux).",
      "Passionné par l'infrastructure informatique, la cybersécurité et l'administration des systèmes, je me spécialise dans la gestion des réseaux, la virtualisation et les services cloud.",
      "Mes projets vont de la virtualisation en haute disponibilité (Proxmox, Ceph) à la sécurisation réseau (pfSense, VLAN, Active Directory) et à l'automatisation d'un parc de postes, jusqu'à Sync Technology, mon projet personnel d'hébergement et de cybersécurité.",
    ],
    infos: [
      { label: "Formation", valeur: "BTS SIO option SISR" },
      { label: "Spécialité", valeur: "Réseaux & Systèmes" },
      { label: "Disponibilité", valeur: "Stage du 18 janvier au 20 février" },
    ],
    stats: [
      { nombre: "2", label: "ans BTS" },
      { nombre: "9", label: "Projets" },
      { nombre: "SISR", label: "Option" },
    ],
  },

  // ----------------------------------------------------------
  // COMPÉTENCES TECHNIQUES
  // ----------------------------------------------------------
  // ----------------------------------------------------------
  // STAGE RECHERCHÉ (bloc de la page d'accueil)
  // ----------------------------------------------------------
  stage: {
    titre: "Le stage que je recherche",
    intro: "Je cherche un stage de technicien système, réseau et support, du 18 janvier au 20 février.",
    missions: "Ce qui m'intéresse le plus : la supervision et le déploiement de postes.",
    aDejaFait: [
      "Supervision : j'ai déployé des agents Zabbix sur un parc de postes avec un script, et créé les machines dans Zabbix grâce à son API.",
      "Déploiement : j'ai configuré des postes Debian à distance en SSH (clés, sudo, proxy apt) et capturé puis déployé des images système avec FOG.",
      "Gestion de parc : j'ai installé GLPI avec Docker pour faire l'inventaire du matériel.",
    ],
    suite: "Après le BTS, je vise le Bachelor Administrateur d'Infrastructures Sécurisées (AIS).",
    liens: [
      { titre: "Supervision", href: "/competences#supervision" },
      { titre: "Gestion de parc", href: "/competences#gestion-parc" },
      { titre: "Mon script de déploiement", href: "https://github.com/Sachanobi24/automatisation-parc-debian-ad" },
    ],
  },

  competences: [
    {
      categorie: "🌐 Réseaux",
      items: [
        { nom: "Routage / Switching", niveau: 60, detail: "reseau" },
        { nom: "TCP/IP / VLAN", niveau: 60, detail: "reseau" },
        { nom: "VPN / Pare-feu (pfSense, IPFire)", niveau: 60, detail: "firewall" },
        { nom: "Cisco / Packet Tracer", niveau: 60, detail: "reseau" },
      ],
    },
    {
      categorie: "🖥️ Systèmes & Virtualisation",
      items: [
        { nom: "Linux (Debian)", niveau: 55, detail: "systemes" },
        { nom: "Windows Server", niveau: 70, detail: "systemes" },
        { nom: "Active Directory", niveau: 65, detail: "systemes" },
        { nom: "Virtualisation (Proxmox)", niveau: 80, detail: "virtualisation" },
        { nom: "Stockage & sauvegarde (Ceph, PBS)", niveau: 50, detail: "virtualisation" },
      ],
    },
    {
      categorie: "🔐 Sécurité & Scripting",
      items: [
        { nom: "Cybersécurité", niveau: 15, detail: "cybersecurite" },
        { nom: "Bash", niveau: 50, detail: "scripting" },
        { nom: "Python", niveau: 25, detail: "scripting" },
        { nom: "PowerShell", niveau: 5, detail: "scripting" },
      ],
    },
    {
      categorie: "🖥️ Développement",
      items: [
        { nom: "HTML / CSS", niveau: 85, detail: "web" },
        { nom: "JavaScript", niveau: 65, detail: "web" },
        { nom: "PHP", niveau: 55, detail: "web" },
        { nom: "C#", niveau: 40, detail: "web" },
      ],
    },
    {
      categorie: "🗄️ Outils & Frameworks",
      items: [
        { nom: "Supervision (Zabbix)", niveau: 55, detail: "supervision" },
        { nom: "Docker", niveau: 50, detail: "conteneurs" },
        { nom: "SQL", niveau: 40, detail: "web" },
        { nom: "Next.js / React", niveau: 55, detail: "web" },
        { nom: "GLPI / Fog", niveau: 85, detail: "gestion-parc" },
        { nom: "Hébergement & services web", niveau: 50, detail: "hebergement" },
        { nom: "Documentation & gestion de projet", niveau: 60, detail: "gestion-projet" },
      ],
    },
  ],

  // ----------------------------------------------------------
  // COMPÉTENCES — PAGE DE DÉTAIL (/competences)
  // "id" correspond au champ "detail" des compétences ci-dessus.
  // "outils" : liste libre (nom + ce que vous en faites).
  // "projets" : liens vers vos projets (href interne ou externe).
  // ----------------------------------------------------------
  competencesDetail: [
    {
      id: "firewall",
      emoji: "🛡️",
      titre: "Pare-feu & sécurité réseau",
      resume:
        "Mise en place de pare-feu open source pour segmenter un réseau en VLAN, filtrer les flux et assurer la continuité de service.",
      outils: [
        {
          nom: "pfSense",
          usage:
            "Solution principale : deux instances en haute disponibilité (CARP + pfsync) hébergées sur Proxmox, une interface par VLAN, filtrage et routage entre VLAN.",
        },
        {
          nom: "IPFire",
          usage:
            "Autre pare-feu open source, basé sur Linux, que j'ai également mis en œuvre.",
        },
        {
          nom: "Règles de filtrage par VLAN",
          usage:
            "Création et diagnostic des règles pfSense (WAN et VLAN) : un réseau sans règle ne laisse rien passer, et des règles trop larges ou un NAT inutile bloquent l'administration.",
        },
        {
          nom: "Squid",
          usage: "Proxy web hébergé sur Debian, avec des règles simples à ajouter.",
        },
      ],
      projets: [
        { titre: "Logis Vert — pare-feu en haute disponibilité", href: "/projets/logis-vert" },
        { titre: "Infrastructure de services sécurisée", href: "/projets/infra-services" },
      ],
    },
    {
      id: "reseau",
      emoji: "🌐",
      titre: "Réseaux, VLAN & commutation",
      resume:
        "Conception et configuration de réseaux segmentés : VLAN, liens agrégés, routage entre VLAN.",
      outils: [
        { nom: "VLAN (802.1Q)", usage: "Segmentation en VLAN services, serveurs, clients, administration et synchronisation." },
        { nom: "Switch HP 2530", usage: "Ports en untagged, trunks et uplinks fibre agrégés en LACP." },
        { nom: "Bonding Linux", usage: "Agrégation de deux cartes réseau (bond0) pour le réseau de management des hyperviseurs." },
        { nom: "Cisco / Packet Tracer", usage: "Routage inter-VLAN sur routeur Cisco et simulation de réseaux." },
      ],
      projets: [
        { titre: "Infrastructure VLAN", href: "/Cisco_Packet_Tracer.png" },
        { titre: "Logis Vert", href: "/projets/logis-vert" },
      ],
    },
    {
      id: "virtualisation",
      emoji: "☁️",
      titre: "Virtualisation, stockage & sauvegarde",
      resume:
        "Déploiement d'un cluster de virtualisation tolérant aux pannes, avec stockage distribué et sauvegardes planifiées.",
      outils: [
        { nom: "Proxmox VE", usage: "Cluster de 3 nœuds : gestion centralisée, migration de VM, haute disponibilité." },
        { nom: "ProxCenter", usage: "Serveur de management dédié : interface de gestion et de supervision centralisée de l'infrastructure, rattaché au VLAN de management." },
        { nom: "Ceph (RBD, CephFS)", usage: "Stockage distribué et répliqué sur les 3 nœuds, avec un réseau dédié." },
        { nom: "Proxmox Backup Server", usage: "Sauvegardes quotidiennes par snapshot, politique de rétention, restaurations complète ou fichier par fichier." },
      ],
      projets: [{ titre: "Logis Vert", href: "/projets/logis-vert" }],
    },
    {
      id: "systemes",
      emoji: "🖥️",
      titre: "Systèmes Linux & Windows, annuaire",
      resume:
        "Administration de postes Debian et de serveurs Windows, avec intégration des postes Linux à un domaine Active Directory.",
      outils: [
        { nom: "Debian / KDE", usage: "Administration à distance par SSH (clés, sudo), proxy apt, Wake-on-LAN, extinction programmée." },
        { nom: "Windows Server (2022)", usage: "Contrôleurs de domaine : AD DS, DNS, GPO et partages réseau." },
        { nom: "Active Directory", usage: "Authentification des postes Debian (SSSD, Samba), partages montés selon le groupe, droits sudo par groupe, changement de mot de passe à la première connexion. Authentification LDAP de GLPI et de Nextcloud." },
      ],
      projets: [
        { titre: "Automatisation d'un parc Debian intégré à Active Directory", href: "https://github.com/Sachanobi24/automatisation-parc-debian-ad" },
        { titre: "Infrastructure de services sécurisée", href: "/projets/infra-services" },
      ],
    },
    {
      id: "cybersecurite",
      emoji: "🔐",
      titre: "Cybersécurité & veille",
      resume:
        "Sensibilisation, veille sur les alertes officielles et outils simples de protection, développés dans mon projet personnel Sync Technology.",
      outils: [
        { nom: "Veille CERT-FR / ANSSI", usage: "Intégration du flux RSS officiel du CERT-FR pour afficher les alertes et avis de sécurité." },
        { nom: "Testeur de liens anti-phishing", usage: "Comparaison avec une liste blanche et analyse de la syntaxe pour détecter hameçonnage et typosquatting." },
        { nom: "17Cyber (Cybermalveillance.gouv.fr)", usage: "Orientation des victimes vers le diagnostic officiel." },
        { nom: "Segmentation et accès", usage: "VLAN, filtrage pfSense, sudo par groupe et authentification centralisée dans mes projets d'infrastructure." },
      ],
      projets: [
        { titre: "Sync Technology", href: "/projets/sync-technology" },
        { titre: "Infrastructure de services sécurisée", href: "/projets/infra-services" },
      ],
    },
    {
      id: "supervision",
      emoji: "📈",
      titre: "Supervision",
      resume:
        "Surveillance de l'état des serveurs et des services, avec des tableaux de bord pour centraliser les accès.",
      outils: [
        { nom: "Zabbix", usage: "Déploiement des agents sur le parc et création automatique des hôtes via l'API." },
        { nom: "Homepage", usage: "Tableau de bord de services configuré par fichiers YAML, protégé par Caddy." },
        { nom: "Logisvert", usage: "Tableau de bord développé sur mesure : voyants d'état, éditeur intégré, authentification." },
      ],
      projets: [
        { titre: "Logis Vert", href: "/projets/logis-vert" },
        { titre: "Automatisation du parc", href: "https://github.com/Sachanobi24/automatisation-parc-debian-ad" },
        { titre: "Sync Technology (page de statut)", href: "/projets/sync-technology" },
      ],
    },
    {
      id: "scripting",
      emoji: "⌨️",
      titre: "Scripting & automatisation",
      resume:
        "Automatisation des tâches répétitives sur un parc de machines.",
      outils: [
        { nom: "Bash", usage: "Déploiement par SSH sur une liste de postes : clés, sudo, proxy apt, agents de supervision, Wake-on-LAN." },
        { nom: "Python", usage: "Interface graphique de changement de mot de passe Active Directory à la première connexion." },
        { nom: "PowerShell", usage: "Premiers pas en administration Windows." },
      ],
      projets: [
        { titre: "Automatisation du parc", href: "https://github.com/Sachanobi24/automatisation-parc-debian-ad" },
      ],
    },
    {
      id: "conteneurs",
      emoji: "🐳",
      titre: "Conteneurs & services web",
      resume:
        "Déploiement d'applications avec Docker et publication sécurisée derrière un reverse proxy.",
      outils: [
        { nom: "Docker / Docker Compose", usage: "Déploiement des tableaux de bord de supervision, de GLPI et de Nextcloud." },
        { nom: "Portainer", usage: "Interface de gestion des conteneurs." },
        { nom: "Traefik", usage: "Reverse proxy utilisé pour exposer Nextcloud." },
        { nom: "nginx", usage: "Service des pages et contrôle d'accès par session." },
        { nom: "Caddy", usage: "Reverse proxy avec authentification." },
      ],
      projets: [
        { titre: "Logis Vert", href: "/projets/logis-vert" },
        { titre: "Infrastructure de services sécurisée", href: "/projets/infra-services" },
      ],
    },
    {
      id: "web",
      emoji: "💻",
      titre: "Développement web & bases de données",
      resume:
        "Création de sites web, de la page statique à l'application React.",
      outils: [
        { nom: "HTML / CSS / JavaScript", usage: "Sites vitrines et pages interactives." },
        { nom: "PHP / SQL", usage: "Pages dynamiques et bases de données, par exemple l'espace client et la prise de rendez-vous de Sync Technology." },
        { nom: "Next.js / React", usage: "Ce portfolio." },
        { nom: "C#", usage: "Programmation orientée objet." },
      ],
      projets: [
        { titre: "Evorox", href: "https://evorox.netlify.app" },
        { titre: "Ce portfolio", href: "/projets" },
      ],
    },
    {
      id: "hebergement",
      emoji: "🌍",
      titre: "Hébergement & services web",
      resume:
        "Mise en ligne et exploitation de plusieurs services sous un même domaine, avec un compte unique pour les utilisateurs.",
      outils: [
        { nom: "Sous-domaines par usage", usage: "Un sous-domaine par service (cloud, messagerie, API, support, supervision, cybersécurité…) : 17 services publiés sous le domaine de Sync Technology." },
        { nom: "Sync ID et API", usage: "Compte utilisateur unique et API partagée par tous les services du groupe." },
        { nom: "Page de statut", usage: "État des services consultable en ligne." },
        { nom: "Espace client et prise de rendez-vous", usage: "Pages dynamiques avec authentification, facturation et réservation de créneaux." },
      ],
      projets: [{ titre: "Sync Technology", href: "/projets/sync-technology" }],
    },
    {
      id: "gestion-projet",
      emoji: "🗺️",
      titre: "Documentation & gestion de projet",
      resume:
        "Structurer un projet, fixer des priorités et documenter chaque réalisation pour qu'elle soit reproductible.",
      outils: [
        { nom: "Cartographie (MindMeister)", usage: "Carte mentale de plus de 250 éléments : filières, filiales, offres, fonctions de groupe et priorités." },
        { nom: "Feuille de route", usage: "Séparation de ce qui est en ligne, prévu à 12-24 mois et reporté." },
        { nom: "Documentation technique", usage: "Rédaction de documentations d'infrastructure : architecture, procédures de sauvegarde et de restauration, tableau des problèmes rencontrés et de leurs solutions." },
      ],
      projets: [
        { titre: "Sync Technology", href: "/projets/sync-technology" },
        { titre: "Logis Vert", href: "/projets/logis-vert" },
        { titre: "Infrastructure de services sécurisée", href: "/projets/infra-services" },
      ],
    },
    {
      id: "gestion-parc",
      emoji: "🗂️",
      titre: "Gestion de parc & déploiement",
      resume:
        "Outils de gestion de parc informatique et de déploiement de postes.",
      outils: [
        { nom: "GLPI", usage: "Inventaire du matériel et gestion des tickets, déployé avec Docker Compose et authentifié par l'annuaire Active Directory (LDAP)." },
        { nom: "FOG", usage: "Serveur de capture et de déploiement d'images système par PXE ; dépannage des adresses IP et des certificats." },
      ],
      projets: [
        { titre: "Atelier FOG", href: "/projets/atelier-fog" },
        { titre: "Infrastructure de services sécurisée", href: "/projets/infra-services" },
      ],
    },
  ],

  // ----------------------------------------------------------
  // PROJET PROFESSIONNEL
  // ----------------------------------------------------------
  projetPro: {
    vision:
      "Après mon BTS SIO option SISR, je vise le Bachelor Administrateur d'Infrastructures Sécurisées (AIS) pour devenir expert de l'administration, de la conception et de la sécurisation des systèmes et réseaux d'entreprise.",
    objectifsCourt: [
      "Intégrer le Bachelor Administrateur d'Infrastructures Sécurisées (AIS)",
      "Décrocher un stage / une alternance dans une DSI ou SSII",
      "Obtenir une certification réseau (CompTIA Network+), ANSSI",
      "Approfondir mes compétences en virtualisation (Proxmox)",
    ],
    objectifsLong: [
      "Devenir Administrateur d'infrastructures sécurisées, puis évoluer vers un poste d'Ingénieur Systèmes & Réseaux",
      "Me spécialiser en cybersécurité",
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
      "Bachelor Administrateur d'Infrastructures Sécurisées (AIS) visé après le BTS SIO.",
    ais: {
      titre: "Pourquoi le Bachelor AIS ?",
      intro:
        "C'est la suite logique de mon BTS SIO option SISR : approfondir l'administration, la conception et la sécurisation d'infrastructures, que je pratique déjà dans mes projets.",
      axes: [
        {
          emoji: "🖥️",
          titre: "Administrer",
          texte:
            "Administration de postes Debian et de serveurs Windows, annuaire Active Directory, automatisation par scripts Bash et Python sur un parc de postes.",
          liens: [
            { titre: "Compétences systèmes", href: "/competences#systemes" },
            { titre: "Automatisation du parc", href: "https://github.com/Sachanobi24/automatisation-parc-debian-ad" },
          ],
        },
        {
          emoji: "☁️",
          titre: "Concevoir",
          texte:
            "Conception d'une infrastructure de virtualisation tolérante aux pannes : cluster Proxmox, stockage Ceph, sauvegardes PBS, pare-feu en haute disponibilité.",
          liens: [{ titre: "Projet Logis Vert", href: "/projets/logis-vert" }],
        },
        {
          emoji: "🛡️",
          titre: "Sécuriser",
          texte:
            "Segmentation en VLAN, filtrage avec pfSense, droits sudo par groupe, authentification centralisée par LDAP et mots de passe changés à la première connexion.",
          liens: [
            { titre: "Services sécurisés", href: "/projets/infra-services" },
            { titre: "Compétences pare-feu", href: "/competences#firewall" },
            { titre: "Sync Technology", href: "/projets/sync-technology" },
          ],
        },
        {
          emoji: "📈",
          titre: "Superviser",
          texte:
            "Supervision avec Zabbix, serveur de management ProxCenter et tableaux de bord pour suivre l'état des serveurs et des services.",
          liens: [{ titre: "Compétences supervision", href: "/competences#supervision" }],
        },
      ],
      aApprofondir: [
        "La cybersécurité, mon point de départ le plus faible aujourd'hui",
        "Le scripting (PowerShell, Python) pour automatiser davantage",
        "Les certifications réseau et sécurité",
      ],
    },
  },

  // ----------------------------------------------------------
  // EXPÉRIENCES PROFESSIONNELLES
  // ----------------------------------------------------------
  experiences: [
    {
      date: "Avril 2023 — 1 jour",
      titre: "Mini-stage de découverte",
      entreprise: "Lycée Julliot de la Morandière — Granville",
      description: "Découverte pratique de la filière technologique STI2D.",
      tags: ["STI2D"],
    },
    {
      date: "Juin 2021 — 7 jours",
      titre: "Stagiaire en maintenance informatique",
      entreprise: "SOS Informatique — Sartilly",
      description:
        "Démontage, nettoyage et remontage de matériel informatique ; diagnostic de premier niveau et identification de pannes ; installation et configuration de logiciels.",
      tags: ["Maintenance", "Diagnostic", "Logiciels"],
    },
  ],

  competencesAcquises: [
    { tag: "Réseau", titre: "Infrastructure réseau", desc: "Segmentation en VLAN, routage inter-VLAN, liens agrégés (LACP), pare-feu pfSense en haute disponibilité, simulation sous Cisco Packet Tracer." },
    { tag: "Système", titre: "Administration serveurs", desc: "Cluster Proxmox VE avec stockage Ceph, sauvegardes PBS, serveurs Debian et Windows Server, Active Directory et authentification LDAP." },
    { tag: "Sécurité", titre: "Cybersécurité", desc: "Filtrage par pare-feu (pfSense, IPFire), VPN, droits sudo par groupe, veille CERT-FR/ANSSI et testeur de liens anti-phishing." },
    { tag: "Support", titre: "Gestion de parc & support", desc: "Inventaire et tickets avec GLPI, déploiement d'images avec FOG, supervision Zabbix, maintenance matérielle." },
    { tag: "Automatisation", titre: "Scripting", desc: "Scripts Bash et Python pour déployer, configurer et superviser un parc de postes à distance." },
  ],

  // ----------------------------------------------------------
  // FORMATION
  // ----------------------------------------------------------
  formations: [
    {
      date: "2025 — 2027",
      titre: "BTS SIO option SISR",
      etablissement: "Lycée Notre-Dame de la Providence — Avranches",
      description:
        "Services Informatiques aux Organisations, option Solutions d'Infrastructure, Systèmes et Réseaux. Formation en 2 ans axée sur l'administration des réseaux, la virtualisation, la cybersécurité et la gestion des systèmes d'exploitation.",
      tags: ["Réseaux", "Linux", "Windows Server", "Virtualisation", "Cybersécurité"],
    },
    {
      date: "2023 — 2025",
      titre: "Baccalauréat technologique STI2D",
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
    { emoji: "🌐", nom: "Premiers pas avec Cisco Packet Tracer", organisme: "Cisco Networking Academy", date: "Mai 2026", url: "/Cisco_Packet_Tracer_certificate.pdf" },
  ],

  // ----------------------------------------------------------
  // PROJETS RÉALISÉS
  // ----------------------------------------------------------
  projets: [
    {
      emoji: "🔄",
      titre: "Sync Technology — groupe d'infrastructure numérique",
      type: "Projet personnel · Projet phare",
      description:
        "Un groupe fictif, projet personnel hors lycée : 17 services (cloud, messagerie, API, supervision, cybersécurité) sous un même domaine et un compte client unique, cartographié en plus de 250 éléments.",
      tags: ["Hébergement", "Cloud", "API", "Cybersécurité", "Supervision"],
      url: "https://sync-technology.fr/",
      page: "/projets/sync-technology",
      phare: true,
      image: "/projets/sync-carte.svg",
    },
    {
      emoji: "⚙️",
      titre: "Automatisation d'un parc Debian intégré à Active Directory",
      type: "Administration système & automatisation",
      description:
        "Scripts Bash/Python pour déployer, superviser (Zabbix) et piloter à distance un parc de postes Debian/KDE : accès SSH, sudo par groupe AD, montage des partages Samba, Wake-on-LAN et changement de mot de passe forcé à la première connexion.",
      tags: ["Bash", "Python", "Active Directory", "Zabbix", "SSH"],
      url: "https://github.com/Sachanobi24/automatisation-parc-debian-ad",
      image: "",
    },
    {
      emoji: "🌐",
      titre: "Infrastructure VLAN",
      type: "Infrastructure réseau",
      description:
        "Conception et déploiement d'une infrastructure réseau avec VLANs, routage inter-VLAN sur routeur Cisco.",
      tags: ["Cisco", "VLAN", "Routage"],
      url: "/Cisco_Packet_Tracer.png",   // lien vers le projet ou rapport
      image: "",
    },
    {
      emoji: "🖥️",
      titre: "Serveur Linux",
      type: "Administration système",
      description:
        "Installation et configuration d'un serveur Debian : Apache, PHP, MySQL, SSH.",
      tags: ["Linux", "Apache", "SSH"],
      url: "",
      image: "",
    },
    {
      emoji: "☁️",
      titre: "Logis Vert — Infrastructure virtualisée haute disponibilité",
      type: "Cloud & Virtualisation",
      description:
        "Cluster Proxmox VE à 3 nœuds avec stockage distribué Ceph, sauvegardes Proxmox Backup Server, pare-feu pfSense redondants (CARP) segmentés en VLAN, et tableaux de bord de supervision développés sur mesure.",
      tags: ["Proxmox", "Ceph", "pfSense", "PBS", "VLAN", "Docker"],
      url: "",
      page: "/projets/logis-vert",
      image: "/logis-vert/architecture.svg",
    },
    {
      emoji: "🛡️",
      titre: "Infrastructure de services sécurisée (pfSense, AD, GLPI, Nextcloud)",
      type: "Réseaux & Sécurité",
      description:
        "Réseau segmenté en 3 VLAN derrière pfSense sur Proxmox VE : Active Directory, GLPI et Nextcloud authentifiés en LDAP, proxy Squid, avec documentation des problèmes rencontrés et de leurs solutions.",
      tags: ["pfSense", "VLAN", "Active Directory", "GLPI", "Nextcloud", "Docker"],
      url: "",
      page: "/projets/infra-services",
      image: "/projets/services-vlan.svg",
    },
    {
      emoji: "💿",
      titre: "Atelier FOG — déploiement d'images système",
      type: "Déploiement & Gestion de parc",
      description:
        "Serveur FOG sous Debian 13 pour capturer l'image d'un poste maître et la déployer par le réseau (PXE), avec la résolution des problèmes de capture.",
      tags: ["FOG", "Debian", "PXE", "DHCP"],
      url: "",
      page: "/projets/atelier-fog",
      image: "/projets/fog-atelier.svg",
    },
    {
      emoji: "🚗",
      titre: "Evorox — L'évolution de la voiture",
      type: "Développement web",
      description: "Site web présentant l'évolution de l'automobile de 1886 à aujourd'hui : chronologie, innovations clés et galerie photos.",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "https://evorox.netlify.app",
      image: "/evorox-preview.png",
    },
    {
      emoji: "♻️",
      titre: "DISFA — Site e-commerce",
      type: "Développement web",
      description: "Création d'un site vitrine e-commerce pour une association vendant des articles faits main à partir de matériaux recyclés.",
      tags: ["HTML", "CSS", "JavaScript"],
      url: "",  // si tu le mets en ligne un jour, mets le lien ici
      image: "",
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
        "J'utilise Docker dans mes projets et je veux le comparer avec Podman. Clique pour voir les derniers articles.",
      date: "2026",
      keywords: ["docker", "podman", "kubernetes", "conteneur"],
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
    { emoji: "🖥️", nom: "Assemblage PC", desc: "Montage de PC et veille technologique" },
    { emoji: "🍳", nom: "Cuisine", desc: "Apprentissage culinaire en autodidacte" },
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
