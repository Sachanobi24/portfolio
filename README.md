# 🖥️ Portfolio — Mathys Yssoufi | BTS SIO SISR

Portfolio Next.js converti depuis le thème WordPress, prêt à déployer sur **Vercel**.

---

## 🚀 Déploiement sur Vercel (5 minutes)

### Option A — Via GitHub (recommandé)

1. Crée un compte sur [github.com](https://github.com) et [vercel.com](https://vercel.com)
2. Crée un **nouveau dépôt** sur GitHub (ex: `portfolio`)
3. Dépose tous les fichiers de ce dossier dans le dépôt
4. Sur Vercel → **Add New Project** → importe ton dépôt GitHub
5. Laisse tous les réglages par défaut → **Deploy**
6. ✅ Ton portfolio est en ligne !

### Option B — Via Vercel CLI

```bash
npm install -g vercel
cd portfolio
npm install
vercel
```

---

## ✏️ Personnalisation

**Un seul fichier à modifier :** `src/data/config.ts`

Ce fichier contient **tout le contenu** du portfolio :

| Section | Ce que tu peux changer |
|---|---|
| `identity` | Ton nom, poste, email, LinkedIn, GitHub, CV |
| `apropos` | Texte de présentation, stats, infos |
| `competences` | Barres de compétences et pourcentages |
| `projetPro` | Vision, objectifs, secteurs visés |
| `experiences` | Stages, alternances avec tags |
| `formations` | Diplômes et matières |
| `certifications` | Certifications obtenues |
| `projets` | Projets réalisés avec liens |
| `veille` | Articles de veille technologique |
| `interets` | Centres d'intérêt |
| `nav` | Liens de navigation |

### Exemple — Changer ton nom :
```ts
identity: {
  prenom: "Prénom",
  nom: "NomDeFamille",
  email: "monemail@exemple.fr",
  linkedin: "https://linkedin.com/in/mon-profil",
  github: "https://github.com/mon-compte",
  ...
}
```

### Ajouter un projet :
```ts
projets: [
  {
    emoji: "🔐",
    titre: "Mon nouveau projet",
    type: "Cybersécurité",
    description: "Description du projet...",
    tags: ["Kali Linux", "Nmap"],
    url: "https://github.com/mon-projet",  // optionnel
  },
  ...
]
```

### Ajouter ton CV :
1. Place ton fichier CV dans le dossier `public/` (ex: `public/cv-mathys.pdf`)
2. Dans `config.ts` : `cvUrl: "/cv-mathys.pdf"`

---

## 🛠️ Développement local

```bash
npm install
npm run dev
# Ouvre http://localhost:3000
```

---

## 🎨 Design

| Élément | Valeur |
|---|---|
| Couleur principale | `#00d4ff` (cyan) |
| Couleur accent | `#7fff00` (vert) |
| Fond | `#030d1a` (bleu nuit) |
| Police titres | Share Tech Mono |
| Police corps | Exo 2 |

Pour changer les couleurs, modifie les variables CSS dans `src/app/globals.css` → section `:root`.

---

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx          # Layout global
│   ├── page.tsx            # Accueil + À propos
│   ├── projet-pro/         # Projet professionnel
│   ├── experiences/        # Expériences
│   ├── formation/          # Formation
│   ├── certifications/     # Certifications
│   ├── projets/            # Projets réalisés
│   ├── veille/             # Veille techno
│   ├── interets/           # Centres d'intérêt
│   ├── contact/            # Contact
│   └── globals.css         # Styles globaux
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Pied de page
│   ├── FadeIn.tsx          # Animation scroll
│   └── SkillBar.tsx        # Barres de compétences
└── data/
    └── config.ts           # ⭐ FICHIER PRINCIPAL À MODIFIER
```
