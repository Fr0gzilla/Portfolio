# Portfolio - Marceau Gioanetti

Portfolio personnel construit avec **Next.js**, **React** et **Tailwind CSS** : site en développement local,
**export statique** (`out/`) déployé sur GitHub Pages.
Pensé pour servir de portefeuille de compétences conforme à l'épreuve **E5 du BTS SIO option SLAM**.

## Stack technique

- **Next.js 16** (App Router, Turbopack par défaut en dev, `output: "export"`)
- **React 19**
- **Tailwind CSS 4** (`@import "tailwindcss"`)
- **TypeScript 5** (strict, alias `@/*`)
- **ESLint 9** (flat config `next/core-web-vitals` + TypeScript)

## Fonctionnalités

- Design glassmorphism avec thème sombre / clair (bascule dans la navbar)
- Navbar responsive avec menu mobile
- Page CV intégrée (`/cv`, PDF)
- Sections de la home : Hero, À propos, BTS SIO, Compétences techniques, Outils, Projets, Veille technologique, Parcours, Scolaire, Contact
- Pages dédiées par projet au format fiche E5 (contexte / demande / démarche / techno / résultats / compétences mobilisées)
- Section veille technologique : sujets dépliables et liste d'articles synthétisés
- Page `/synthese` : tableau de synthèse (PDF)

## Architecture

```text
app/
├── components/      Navbar (+ ThemeToggleButton), ThemeProvider, FadeInProvider,
│                    useFadeInOnScroll, Footer, ScrollToTop, BackgroundGradient
├── sections/        Sections de la home (Hero, About, BtsSio, Skills, ...)
│   └── veilleData.ts        Source de vérité des sujets et articles de veille
├── projets/
│   ├── data.ts              Source de vérité projets + référentiel BTS SIO SLAM
│   ├── page.tsx             Liste indexée /projets avec filtres par type
│   ├── ProjetsListeClient.tsx
│   └── [slug]/
│       ├── page.tsx                Route dynamique avec generateStaticParams
│       └── ProjetFicheClient.tsx   Layout fiche E5 (contexte, démarche, etc.)
├── cv/page.tsx              Lecture du CV (PDF)
├── synthese/page.tsx        Tableau de synthèse (PDF)
├── layout.tsx / not-found.tsx
├── page.tsx                 Compose les sections de la home
└── globals.css              Variables CSS + classes glass / glass-strong / glass-nav
```

Toutes les compétences référentielles (blocs 1, 2 SLAM, 3 cybersécurité)
et la liste des projets sont centralisés dans [`app/projets/data.ts`](app/projets/data.ts).
Les fiches projet s'y connectent automatiquement pour afficher les compétences mobilisées.

## Commandes

Prérequis : Node.js 20 (version utilisée en CI) et npm.

```bash
npm install        # ou npm ci en CI
npm run dev        # serveur de développement
npm run lint       # ESLint
npm run build      # export statique
```

- Vérification complète : `npx tsc --noEmit && npm run lint && npm run build`
- Aucun test automatisé (aucun runner de test installé).

Le serveur de développement démarre sur [http://localhost:3000](http://localhost:3000).

## Développement et export statique

- **Développement** : `npm run dev`, `basePath` vide, accès à la racine (localhost:3000).
- **Production** : `npm run build` produit `out/` ; en production le `basePath` vaut `/portfolio`
  (`NEXT_PUBLIC_BASE_PATH`, définie dans `next.config.ts`), cible GitHub Pages.
- **CI** : `.github/workflows/deploy.yml` — sur push `main` : `npm ci` + `npm run build` (Node 20),
  puis déploiement de `out/` via GitHub Pages.
- Les routes dynamiques (`/projets/[slug]`) sont pré-générées via `generateStaticParams()` à partir
  de `app/projets/data.ts` ; aucun serveur Next en production (export statique incompatible avec
  les features serveur).
