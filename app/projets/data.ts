// Source de vérité unique pour les projets et le référentiel BTS SIO SLAM.
// Utilisée par : ProjectsSection (home), /projets, /projets/[slug].

export type Projet = {
  slug: string;
  titre: string;
  emoji: string;
  type: "perso" | "pro" | "scolaire";
  resume: string;
  contexte: string;
  demande: string;
  demarche: string[];
  technologies: string[];
  outils: string[];
  competencesMobilisees: string[];
  resultats: string;
  difficultes?: string;
  apports?: string;
  liens: { label: string; url: string }[];
  preview?: string;
  galerie?: string[];
  periode: string;
  role: string;
  confidentialite?: "public" | "anonymise" | "interne";
};

export type CompetenceReferentiel = {
  code: string;
  libelle: string;
  description: string;
  bloc: 1 | 2 | 3;
};

// Référentiel BTS SIO 2020 rénové — option SLAM. Les libellés sont issus du référentiel officiel,
// les descriptions sont des reformulations courtes destinées au portfolio.
export const competencesReferentiel: CompetenceReferentiel[] = [
  // Bloc 1 — Support et mise à disposition de services informatiques (commun)
  {
    code: "C1.1",
    libelle: "Gérer le patrimoine informatique",
    description: "Recenser, suivre et tenir à jour les ressources matérielles, logicielles et de licences.",
    bloc: 1,
  },
  {
    code: "C1.2",
    libelle: "Répondre aux incidents et aux demandes d'assistance",
    description: "Diagnostiquer une panne, qualifier un ticket et accompagner un utilisateur jusqu'à la résolution.",
    bloc: 1,
  },
  {
    code: "C1.3",
    libelle: "Développer la présence en ligne de l'organisation",
    description: "Contribuer à la visibilité numérique : sites, réseaux sociaux, référencement.",
    bloc: 1,
  },
  {
    code: "C1.4",
    libelle: "Travailler en mode projet",
    description: "Participer à un projet structuré (Scrum, jalons, cérémonies, livrables, revues).",
    bloc: 1,
  },
  {
    code: "C1.5",
    libelle: "Mettre à disposition des utilisateurs un service informatique",
    description: "Déployer et accompagner la prise en main d'un service auprès d'un utilisateur final.",
    bloc: 1,
  },
  {
    code: "C1.6",
    libelle: "Organiser son développement professionnel",
    description: "Faire de la veille, formaliser ses compétences, suivre ses certifications.",
    bloc: 1,
  },

  // Bloc 2 — Conception et développement d'applications (option SLAM)
  {
    code: "C2.1.1",
    libelle: "Analyser un besoin exprimé et son contexte juridique",
    description: "Recueillir les besoins métier et identifier les contraintes (RGPD, propriété intellectuelle).",
    bloc: 2,
  },
  {
    code: "C2.1.2",
    libelle: "Participer à la conception de l'architecture d'une solution applicative",
    description: "Choisir une architecture (monolithe, API, microservices) en cohérence avec les besoins.",
    bloc: 2,
  },
  {
    code: "C2.1.3",
    libelle: "Modéliser une solution applicative",
    description: "Produire les modèles UML / MCD / diagrammes de séquence supportant la conception.",
    bloc: 2,
  },
  {
    code: "C2.1.4",
    libelle: "Exploiter les ressources mises à disposition par un environnement de développement",
    description: "Utiliser efficacement IDE, dépôts Git, gestionnaires de paquets et outils de qualité.",
    bloc: 2,
  },
  {
    code: "C2.1.5",
    libelle: "Développer, mettre à disposition et maintenir en condition opérationnelle une solution applicative",
    description: "Coder, tester, livrer et faire vivre une application.",
    bloc: 2,
  },
  {
    code: "C2.1.6",
    libelle: "Contribuer à la mise en production dans une démarche DevOps",
    description: "Intégrer des pipelines CI/CD, automatiser le déploiement, suivre la qualité.",
    bloc: 2,
  },
  {
    code: "C2.2.1",
    libelle: "Analyser et corriger un dysfonctionnement, une non-conformité (maintenance corrective)",
    description: "Reproduire un bug, isoler la cause racine, livrer un correctif testé.",
    bloc: 2,
  },
  {
    code: "C2.2.2",
    libelle: "Concevoir, développer et déployer une nouvelle version d'une solution applicative (maintenance évolutive)",
    description: "Faire évoluer une application existante en préservant ses utilisateurs et ses données.",
    bloc: 2,
  },
  {
    code: "C2.3.1",
    libelle: "Exploiter des données à l'aide d'un langage de requêtes",
    description: "Écrire des requêtes SQL pour interroger, filtrer et agréger des données.",
    bloc: 2,
  },
  {
    code: "C2.3.2",
    libelle: "Concevoir une base de données et l'implémenter avec un SGBD",
    description: "Modéliser un schéma relationnel et le mettre en œuvre dans un SGBD.",
    bloc: 2,
  },
  {
    code: "C2.3.3",
    libelle: "Développer des fonctionnalités applicatives au sein d'un SGBD",
    description: "Écrire des procédures stockées, triggers et vues côté base de données.",
    bloc: 2,
  },

  // Bloc 3 — Cybersécurité (commun + option SLAM)
  {
    code: "C3.1",
    libelle: "Protéger les données à caractère personnel",
    description: "Mettre en œuvre les principes RGPD : minimisation, consentement, droit à l'oubli.",
    bloc: 3,
  },
  {
    code: "C3.2",
    libelle: "Préserver l'identité numérique de l'organisation",
    description: "Sécuriser noms de domaine, certificats, présence sur les réseaux et accès administrateurs.",
    bloc: 3,
  },
  {
    code: "C3.3",
    libelle: "Sécuriser les équipements et les usages des utilisateurs",
    description: "Durcir les postes, sensibiliser les utilisateurs, gérer les correctifs.",
    bloc: 3,
  },
  {
    code: "C3.4",
    libelle: "Garantir la disponibilité, l'intégrité et la confidentialité des services et des données",
    description: "Mettre en œuvre la triade DIC : sauvegardes, contrôles d'accès, chiffrement.",
    bloc: 3,
  },
  {
    code: "C3.5",
    libelle: "Assurer la cybersécurité d'une solution applicative et de son développement (option SLAM)",
    description: "Appliquer le secure coding, les revues de sécurité et la gestion des dépendances.",
    bloc: 3,
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const projets: Projet[] = [
  {
    slug: "beatshelf",
    titre: "Beatshelf",
    emoji: "🎧",
    type: "perso",
    resume:
      "Application de streaming musical centrée sur l'écoute et l'organisation de sa bibliothèque (playlists, favoris, historique).",
    contexte:
      "Projet personnel démarré dans une logique de montée en compétences sur la stack JS/TS moderne et l'audio web. L'objectif est de construire une plateforme dans laquelle je pourrai brancher plus tard mon module de recommandations HarmonyMind.",
    demande:
      "Disposer d'un lecteur audio intégré au navigateur, avec une bibliothèque personnelle (playlists, favoris, historique d'écoute) et une expérience proche d'un service grand public, mais entièrement maîtrisée côté code et données.",
    demarche: [
      "Recueil informel des besoins (use cases utilisateur typiques : écouter, organiser, retrouver).",
      "Choix d'une architecture client-lourd avec Supabase comme back-as-a-service (PostgreSQL + Auth).",
      "Modélisation des entités principales (utilisateur, morceau, playlist, favori, écoute).",
      "Implémentation du lecteur audio avec Howler.js et gestion d'état globale via Zustand.",
      "Itérations successives sur l'UI : navigation, gestion des playlists, état du lecteur persistant.",
    ],
    technologies: ["TypeScript", "JavaScript", "React", "Zustand", "Howler.js", "PostgreSQL", "SQL"],
    outils: ["Supabase", "VSCode", "Git / GitHub", "Figma (maquettes)"],
    competencesMobilisees: ["C2.1.1", "C2.1.2", "C2.1.3", "C2.1.5", "C2.2.2", "C2.3.1", "C2.3.2"],
    resultats:
      "Première version fonctionnelle : authentification, lecture en streaming, gestion d'une bibliothèque personnelle (playlists, favoris) et historique d'écoute. Base prête à recevoir le module HarmonyMind.",
    difficultes:
      "Gérer la persistance de l'état du lecteur entre navigations sans casser le flux audio a demandé plusieurs itérations sur l'architecture front.",
    apports:
      "Approche end-to-end d'un produit (modélisation, BDD, UI) et meilleure maîtrise de l'écosystème React + back-as-a-service.",
    liens: [{ label: "Code source GitHub", url: "https://github.com/Fr0gzilla/Beatshelf" }],
    preview: `${basePath}/previews/beatshelf.webp`,
    periode: "Sept 2025 → en cours",
    role: "Développeur principal (projet solo)",
    confidentialite: "public",
  },
  {
    slug: "harmonymind",
    titre: "HarmonyMind",
    emoji: "🧠",
    type: "perso",
    resume:
      "Module d'intelligence pour Beatshelf : recommandations personnalisées basées sur l'historique d'écoute et les embeddings.",
    contexte:
      "Extension naturelle de Beatshelf, HarmonyMind vise à transformer une simple bibliothèque musicale en outil de découverte progressive en exploitant l'usage réel de l'utilisateur.",
    demande:
      "Proposer à l'utilisateur des titres similaires, des enchaînements cohérents et de la découverte progressive, à partir des données collectées sur Beatshelf.",
    demarche: [
      "Étude des approches : filtrage collaboratif, content-based, embeddings audio.",
      "Choix d'un pipeline mixte basé sur des embeddings + signaux d'usage.",
      "Définition du contrat d'API entre HarmonyMind et Beatshelf.",
      "TODO: implémentation effective et benchmarks à dérouler.",
    ],
    technologies: ["Python", "SQL"],
    outils: ["Supabase", "Jupyter", "Git / GitHub"],
    competencesMobilisees: ["C2.1.1", "C2.1.2", "C2.1.3", "C2.3.1"],
    resultats:
      "Spécification fonctionnelle et technique posée. Le module est en cours de conception, l'implémentation suivra l'arrivée d'un volume de données suffisant côté Beatshelf.",
    apports:
      "Réflexion produit sur ce que l'IA apporte vraiment à un usage concret, sans tomber dans la techno pour la techno.",
    liens: [],
    periode: "À venir (post-Beatshelf v1)",
    role: "Concepteur / futur développeur",
    confidentialite: "public",
  },
  {
    slug: "cloudinventory-v2",
    titre: "CloudInventory v2",
    emoji: "☁️",
    type: "pro",
    resume:
      "Outil API-first d'inventaire et de supervision d'un parc virtualisé, agrégeant vCenter et EfficientIP comme sources de vérité.",
    contexte:
      "Mission réalisée en alternance chez Capgemini Technology Services pour un client grand compte du secteur public. L'outil v1 était un script PowerShell + classeur Excel difficile à maintenir et peu exploitable au quotidien.",
    demande:
      "Reconstruire l'outil sur une base API-first afin de centraliser les informations issues de plusieurs sources, fournir une vue d'inventaire fiable (serveurs, VMs, IP/DNS, applications, utilisateurs) et faciliter la recherche, le filtrage et la simulation d'alertes.",
    demarche: [
      "Cadrage du besoin avec les équipes métier et identification des sources de vérité (EfficientIP pour l'IP/DNS, vCenter pour l'état des VMs).",
      "Conception de l'architecture API-first et du modèle de données.",
      "Mise en place d'un pipeline d'ingestion / normalisation des données (RVTools, EfficientIP).",
      "Développement progressif des fonctionnalités : recherche, filtres, alertes, gestion des accès.",
      "Itérations en mode Scrum, avec revues de sprint et démonstrations régulières.",
    ],
    technologies: ["Python", "PHP", "PowerShell", "VBA", "MySQL", "PostgreSQL", "SQL"],
    outils: ["GitLab", "Docker", "VSCode", "vCenter", "EfficientIP", "RVTools"],
    competencesMobilisees: [
      "C1.1",
      "C1.2",
      "C1.4",
      "C1.5",
      "C1.6",
      "C2.1.1",
      "C2.1.2",
      "C2.1.3",
      "C2.1.4",
      "C2.1.5",
      "C2.1.6",
      "C2.2.1",
      "C2.2.2",
      "C2.3.1",
      "C2.3.2",
      "C3.4",
      "C3.5",
    ],
    resultats:
      "Vue d'inventaire centralisée exploitable au quotidien par les équipes, réduction du temps de recherche d'information et possibilité de simuler des alertes avant mise en production.",
    difficultes:
      "Aligner les modèles de données entre plusieurs sources hétérogènes (EfficientIP, vCenter, RVTools) tout en garantissant l'unicité des objets.",
    apports:
      "Travail dans un cadre Scrum réel, expérience d'un projet long avec plusieurs intervenants et confrontation à des contraintes de production.",
    liens: [{ label: "Code source (privé)", url: "https://github.com/Fr0gzilla/CloudInventory.v2" }],
    preview: `${basePath}/previews/cloudinventory.webp`,
    periode: "Janvier 2025 → en cours",
    role: "Développeur (équipe Capgemini, mission client)",
    // TODO: valider mention publique du client avec tuteur Capgemini avant remise en clair.
    confidentialite: "anonymise",
  },
  {
    slug: "cyber-hoot",
    titre: "Cyber-Hoot",
    emoji: "🛡️",
    type: "scolaire",
    resume:
      "Plateforme web de quiz interactifs dédiée à la sensibilisation cybersécurité, inspirée de Kahoot.",
    contexte:
      "Projet de groupe réalisé dans le cadre du BTS SIO. L'objectif pédagogique : produire une application web complète, du modèle de données au déploiement en conteneurs.",
    demande:
      "Proposer une plateforme de quiz interactifs autour de la culture cybersécurité, avec un système de rôles (joueur, créateur, admin) et un suivi des scores des participants.",
    demarche: [
      "Découpage du projet en lots fonctionnels (auth, gestion des quiz, jeu en temps réel, scores).",
      "Modélisation de la base de données (utilisateurs, quiz, questions, parties, réponses).",
      "Développement du backend Flask + SQLAlchemy et de l'interface Jinja2/Tailwind.",
      "Conteneurisation via Docker Compose (app + base MySQL) pour faciliter le déploiement.",
      "Tests fonctionnels manuels et corrections en itérations.",
    ],
    technologies: ["Python", "Flask", "SQLAlchemy", "Jinja2", "JavaScript", "Tailwind CSS", "MySQL", "SQL"],
    outils: ["Docker Compose", "Git / GitHub", "VSCode"],
    competencesMobilisees: [
      "C1.1",
      "C1.2",
      "C1.3",
      "C1.4",
      "C1.5",
      "C1.6",
      "C2.1.1",
      "C2.1.2",
      "C2.1.3",
      "C2.1.4",
      "C2.1.5",
      "C2.1.6",
      "C2.2.2",
      "C2.3.1",
      "C2.3.2",
      "C3.3",
      "C3.4",
      "C3.5",
    ],
    resultats:
      "Application fonctionnelle en local, déployable en une commande via Docker Compose, et exploitable en classe pour des sessions de sensibilisation.",
    difficultes:
      "Coordination du travail à plusieurs sur la même base de code et synchronisation des évolutions du modèle de données.",
    apports:
      "Première vraie expérience de projet de groupe en mode collaboratif Git, et compréhension concrète d'une stack web complète conteneurisée.",
    liens: [{ label: "Code source GitHub", url: "https://github.com/lele214/Cyber-hoot" }],
    preview: `${basePath}/previews/cyberhoot.webp`,
    periode: "2024 — 2025",
    role: "Contributeur (équipe scolaire)",
    confidentialite: "public",
  },
];

export function getProjetBySlug(slug: string): Projet | undefined {
  return projets.find((p) => p.slug === slug);
}

export function getCompetenceByCode(code: string): CompetenceReferentiel | undefined {
  return competencesReferentiel.find((c) => c.code === code);
}

export function getProjetsByCompetence(code: string): Projet[] {
  return projets.filter((p) => p.competencesMobilisees.includes(code));
}
