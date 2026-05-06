# Portfolio - Marceau Gioanetti

Portfolio personnel construit avec **Next.js**, **TailwindCSS** et **Framer Motion**.
Pensé pour servir de portefeuille de compétences conforme à l'épreuve **E5 du BTS SIO option SLAM**.

## Stack technique

- **Next.js 16** (App Router, Turbopack, export statique)
- **React 19**
- **TailwindCSS 4**
- **Framer Motion 12** pour les animations
- **TypeScript 5**

## Fonctionnalités

- Design glassmorphism avec thème sombre / clair
- Animation d'intro au premier chargement
- Navbar responsive avec menu mobile
- Page CV intégrée
- Sections de la home : À propos, BTS SIO, Compétences techniques, Outils, Projets, Veille technologique, Parcours Pro, Scolaire, Contact
- Pages dédiées par projet au format fiche E5 (contexte / demande / démarche / techno / résultats / compétences mobilisées)
- Section veille technologique avec sujets dépliables et liste d'articles synthétisés
- Page /synthese embarquant le tableau de synthèse Annexe 6 (PDF)

## Architecture

```text
app/
├── components/      Composants réutilisables (Navbar, Footer, GlassCard, etc.)
├── sections/        Sections de la home (Hero, About, BtsSio, ...)
│   └── veilleData.ts        Source de vérité des sujets et articles de veille
├── projets/         Système de fiches projet
│   ├── data.ts              Source de vérité projets + référentiel BTS SIO SLAM
│   ├── page.tsx             Liste indexée /projets avec filtres par type
│   ├── ProjetsListeClient.tsx
│   └── [slug]/
│       ├── page.tsx                Route dynamique avec generateStaticParams
│       └── ProjetFicheClient.tsx   Layout fiche E5 (contexte, démarche, etc.)
├── cv/page.tsx
├── layout.tsx
├── page.tsx         Compose les sections de la home
└── globals.css      Variables CSS + classes glass / glass-strong / glass-nav
```

Toutes les compétences référentielles (blocs 1, 2 SLAM, 3 cybersécurité)
et la liste des projets sont centralisées dans [`app/projets/data.ts`](app/projets/data.ts).
Les fiches projet s'y connectent automatiquement pour afficher les compétences mobilisées.

## Lancer le projet

```bash
npm install
npm run dev
```

Le serveur démarre sur [http://localhost:3000](http://localhost:3000).

## Build & déploiement

```bash
npm run build
```

L'export statique est produit dans `out/`. En production le `basePath` est défini
sur `/portfolio` pour le déploiement sur GitHub Pages.

Toutes les routes dynamiques (`/projets/[slug]`) sont pré-générées via
`generateStaticParams()` à partir de `app/projets/data.ts`.
