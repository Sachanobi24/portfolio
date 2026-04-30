# Analytics — Guide d'installation

## 1. Installer la dépendance
```bash
npm install @upstash/redis
```

## 2. Créer une base Upstash Redis gratuite
1. Va sur https://upstash.com → créer un compte
2. Crée une nouvelle base Redis
3. Dans l'onglet "REST API", copie les deux clés

## 3. Variables d'environnement
Dans ton fichier `.env.local` à la racine du projet :
```
UPSTASH_REDIS_REST_URL=https://xxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxxxxxxxxx
ADMIN_PASSWORD=ton_mot_de_passe
ADMIN_SECRET=une_chaine_aleatoire_longue
```
➜ Ajoute ces mêmes variables sur Vercel dans Settings → Environment Variables

## 4. Copier les fichiers
Copie tout le dossier `src/` de ce ZIP dans ton projet (remplace layout.tsx)

## 5. Accéder au dashboard
- Login  : https://ton-portfolio.vercel.app/admin/login
- Dashboard : https://ton-portfolio.vercel.app/admin
