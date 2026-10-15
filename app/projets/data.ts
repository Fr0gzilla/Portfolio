// Source de vérité unique pour les projets.
// Utilisée par : ProjectsSection (home), /projets/[slug].

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
  resultats: string;
  difficultes?: string;
  apports?: string;
  liens: { label: string; url: string }[];
  preview?: string;
  periode: string;
  role: string;
  confidentialite?: "public" | "anonymise" | "interne";
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const projets: Projet[] = [
  {
    slug: "maestro",
    titre: "Maestro",
    emoji: "🎼",
    type: "perso",
    resume:
      "Orchestrateur d'agents IA qui mène un projet logiciel de bout en bout, du cahier des charges au livrable testé, en autonomie sur un serveur dédié.",
    contexte:
      "Projet personnel : un système qui tourne en permanence sur un PC dédié, se pilote à distance par un réseau privé et travaille seul la nuit. Le code complet est privé ; le dépôt public présente la revue du projet (conception, choix, mesures, incidents et leçons).",
    demande:
      "Recevoir un besoin, le découper en tâches, confier chaque tâche à des agents spécialisés (développement, modélisation, cours, cybersécurité), faire vérifier puis recetter le travail et rendre compte, sans boucle infinie ni surveillance permanente.",
    demarche: [
      "Architecture à trois niveaux : un orchestrateur, quatre chefs d'équipe et trente-deux agents ouvriers ; chaque livrable est jugé par un vérificateur qui n'a pas le droit d'écrire.",
      "Protocole normalisé entre agents (FAIT, CORRECTIONS, BESOIN, BLOQUÉ) et deux tours de correction au plus avant remontée du blocage.",
      "Sécurité dès la conception : agents confinés dans des conteneurs, sorties Internet filtrées par liste blanche, aucun secret en clair, audits indépendants suivis de correctifs.",
      "Exploitation en continu : file de travaux de nuit, maintenance automatique, reprise après coupure, bascule automatique quand un fournisseur de modèles tombe.",
      "Optimisation pilotée par la mesure : bancs d'essai avant/après et comparaison de configurations pour réduire le coût en tokens.",
    ],
    technologies: ["Python", "Bash", "Docker", "Node.js", "PHP"],
    outils: ["Claude Code", "opencode", "Ubuntu Server", "systemd", "Docker rootless", "Git / GitHub"],
    resultats:
      "En service, avec 398 tests automatisés et 17 674 vérifications de permissions. Une application web (PHP, MySQL, Docker) a été menée seule de nuit ; refaite après optimisation du système : −50 % de temps, −32 % d'appels aux modèles et −46 % de tokens relus. Le tableau de bord web de Maestro a été construit, audité et recetté par ses propres agents.",
    liens: [{ label: "Revue du projet (GitHub)", url: "https://github.com/Fr0gzilla/Maestro" }],
    preview: `${basePath}/previews/maestro.webp`,
    periode: "2026",
    role: "Concepteur et développeur (projet solo)",
    confidentialite: "public",
  },
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
    ],
    technologies: ["Python", "SQL"],
    outils: ["Supabase", "Jupyter", "Git / GitHub"],
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
    resultats:
      "Vue d'inventaire centralisée exploitable au quotidien par les équipes, réduction du temps de recherche d'information et possibilité de simuler des alertes avant mise en production.",
    difficultes:
      "Aligner les modèles de données entre plusieurs sources hétérogènes (EfficientIP, vCenter, RVTools) tout en garantissant l'unicité des objets.",
    apports:
      "Travail dans un cadre Scrum réel, expérience d'un projet long avec plusieurs intervenants et confrontation à des contraintes de production.",
    liens: [{ label: "Code source (privé)", url: "https://github.com/Fr0gzilla/CloudInventory.v2" }],
    preview: `${basePath}/previews/cloudinventory.webp`,
    periode: "Janvier 2025 → Juillet 2026",
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
