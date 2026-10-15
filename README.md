# Portfolio - Marceau Gioanetti

Portfolio personnel construit avec **Next.js**, **React** et **Tailwind CSS** : site en développement local,
**export statique** (`out/`) déployé sur GitHub Pages.

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
- Sections de la home : Hero, À propos, Compétences techniques (catégories dépliables), Outils, Projets, Parcours, Scolaire, Contact
- Pages dédiées par projet (contexte / demande / démarche / techno / résultats)

## Architecture

```text
app/
├── components/      Navbar (+ ThemeToggleButton), ThemeProvider, FadeInProvider,
│                    useFadeInOnScroll, Footer, ScrollToTop, BackgroundGradient
├── sections/        Sections de la home (Hero, About, Skills, ...)
├── projets/
│   ├── data.ts              Source de vérité des projets
│   ├── page.tsx             Liste indexée /projets avec filtres par type
│   ├── ProjetsListeClient.tsx
│   └── [slug]/
│       ├── page.tsx                Route dynamique avec generateStaticParams
│       └── ProjetFicheClient.tsx   Layout fiche projet (contexte, démarche, etc.)
├── cv/page.tsx              Lecture du CV (PDF)
├── layout.tsx / not-found.tsx
├── page.tsx                 Compose les sections de la home
└── globals.css              Variables CSS + classes glass / glass-strong / glass-nav
```

La liste des projets est centralisée dans [`app/projets/data.ts`](app/projets/data.ts).

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
