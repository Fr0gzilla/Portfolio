// Source de vérité unique pour les projets.
// Utilisée par : ProjectsSection (home), /projets/[slug].

export type Projet = {
  slug: string;
  titre: string;
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
  icone?: string;
  periode: string;
  role: string;
  confidentialite?: "public" | "anonymise" | "interne";
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const projets: Projet[] = [
  {
    slug: "maestro",
    titre: "Maestro",
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
    outils: ["opencode", "Ubuntu Server", "systemd", "Docker rootless", "Git / GitHub"],
    resultats:
      "En service, avec 398 tests automatisés et 17 674 vérifications de permissions. Une application web (PHP, MySQL, Docker) a été menée seule de nuit ; refaite après optimisation du système : −50 % de temps, −32 % d'appels aux modèles et −46 % de tokens relus. Le tableau de bord web de Maestro a été construit, audité et recetté par ses propres agents.",
    liens: [{ label: "Revue du projet (GitHub)", url: "https://github.com/Fr0gzilla/Maestro" }],
    preview: `${basePath}/previews/maestro.webp`,
    icone: `${basePath}/previews/maestro-icone.webp`,
    periode: "2026",
    role: "Concepteur et développeur (projet solo)",
    confidentialite: "public",
  },
  {
    slug: "mac-n-play",
    titre: "Mac'n'Play",
    type: "perso",
    resume:
      "Application macOS pour jouer à sa PS4 ou PS5 sur son Mac avec sa manette (Remote Play), publiée en version 1.2 et installable avec Homebrew.",
    contexte:
      "Projet personnel open source, construit à partir du projet libre chiaki-ng, qui fonctionne sur plusieurs systèmes. L'idée : en faire une application pensée pour macOS, simple à installer et à utiliser à la manette.",
    demande:
      "Afficher l'écran de la console sur le Mac et transmettre la manette, avec un accueil utilisable entièrement à la manette, des réglages automatiques adaptés à la connexion, et une installation aussi simple qu'une application du Mac App Store.",
    demarche: [
      "Reprise du code de chiaki-ng (C et C++) et refonte de l'interface en modèle MVC : un contrôleur C++ par responsabilité, des vues en QML.",
      "Accueil à la manette, assistant d'ajout de console en trois étapes, menu en jeu (volume, micro, zoom, qualité d'image).",
      "Qualité d'image qui s'adapte seule à la connexion, y compris pour jouer hors de chez soi par Internet.",
      "Outil « Tester ma connexion » qui vérifie le réseau, Internet, le compte PSN et la console, et explique le problème en clair.",
      "Application traduite en 6 langues. Fabrication automatisée par GitHub Actions : tests, création du .dmg, publication de la version et mise à jour de Homebrew.",
    ],
    technologies: ["C++", "C", "QML", "Qt", "CMake"],
    outils: ["GitHub Actions", "Homebrew", "Git / GitHub"],
    resultats:
      "Sept versions publiées en une semaine (de la 1.0.0 à la 1.2.2), téléchargeables depuis GitHub ou installables avec Homebrew, sur les Mac à puce Apple sous macOS 15 ou plus récent.",
    difficultes:
      "Comprendre un gros code C/C++ existant avant de le restructurer, et suivre les changements côté Sony (par exemple les certificats que OpenSSL 3.5 ne validait plus).",
    apports:
      "Mener un produit jusqu'à sa distribution réelle : versions, notes de version, traductions, documentation pour les utilisateurs et pour les contributeurs.",
    liens: [{ label: "Code source et téléchargement (GitHub)", url: "https://github.com/Fr0gzilla/Mac-n-Play" }],
    preview: `${basePath}/previews/macnplay.webp`,
    icone: `${basePath}/previews/macnplay-icone.webp`,
    periode: "Novembre 2026 → en cours",
    role: "Développeur (projet solo, basé sur chiaki-ng)",
    confidentialite: "public",
  },
  {
    slug: "cyber-hoot",
    titre: "CyberHoot",
    type: "scolaire",
    resume:
      "Plateforme web de quiz de sensibilisation à la cybersécurité, en solo ou en direct avec toute une classe : refonte complète, sécurisée et testée, d'un projet d'étude de BTS SIO.",
    contexte:
      "Cyber-hoot est un projet d'étude de groupe réalisé pendant mon BTS SIO (option SLAM) : il fonctionnait en démonstration, mais n'était pas utilisable en vrai (failles XSS et CSRF, score calculé par le navigateur, base de données désynchronisée). Je l'ai repris seul et entièrement reconstruit, version par version.",
    demande:
      "Une plateforme où l'on joue des quiz avec correction expliquée, progression et badges ; où des créateurs rédigent des quiz validés par un administrateur ; et où un animateur lance une partie en direct que les élèves rejoignent depuis leur téléphone avec un code PIN. Une sécurité exemplaire, puisque le sujet est la cybersécurité.",
    demarche: [
      "Inventaire des 20 défauts de l'ancienne version, chacun corrigé et prouvé par un test qui empêche son retour.",
      "Modélisation complète (règles de gestion, MCD, MLD, diagrammes de classes et de séquence) et migrations Alembic comme seule source du schéma.",
      "Parties en direct : code PIN et QR code, chrono, points selon la rapidité, classement et podium ; transitions atomiques pour que deux clics simultanés ne fassent avancer la partie qu'une fois. Testé avec 200 joueurs.",
      "Sécurité : mots de passe Argon2id, double authentification obligatoire pour les administrateurs, CSP stricte, protection CSRF, limitation de débit, HTTPS avec HSTS, journal d'audit, conteneurs sans privilège.",
      "Qualité : plus de 230 tests exécutés sur MySQL, intégration continue GitHub Actions (analyse du code, des dépendances, de l'image Docker et recherche de secrets), audit d'accessibilité WCAG 2.2 AA.",
    ],
    technologies: ["Python", "Flask", "SQLAlchemy", "MySQL", "Redis", "Jinja2", "Tailwind CSS", "JavaScript"],
    outils: ["Docker Compose", "Nginx", "pytest", "GitHub Actions", "Trivy", "Git / GitHub"],
    resultats:
      "Six versions livrées (de la 1.0 à la 3.0), chacune validée par l'intégration continue : 94 % du code couvert par les tests, aucun défaut d'accessibilité détecté sur 30 pages, une partie en direct qui tient 200 joueurs derrière une seule adresse IP.",
    difficultes:
      "Des tests qui échouaient seulement sur MySQL, un interblocage de la base quand 200 joueurs rejoignent en même temps, et une vérification CSRF qui refusait les formulaires en HTTPS : chaque problème a été reproduit, compris puis corrigé.",
    apports:
      "Reprendre une application existante et la rendre fiable : mesurer avant de corriger, prouver chaque correction par un test, et documenter les choix (sécurité, accessibilité, RGPD).",
    liens: [
      { label: "Code source de la refonte (GitHub)", url: "https://github.com/Fr0gzilla/CyberHoot" },
      { label: "Version d'origine (projet de groupe du BTS)", url: "https://github.com/lele214/Cyber-hoot" },
    ],
    preview: `${basePath}/previews/cyberhoot.webp`,
    icone: `${basePath}/previews/cyberhoot-icone.svg`,
    periode: "Novembre 2026",
    role: "Développeur (refonte en solo d'un projet d'équipe)",
    confidentialite: "public",
  },
  {
    slug: "beatshelf",
    titre: "Beatshelf",
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
      "Prochaine étape, HarmonyMind : un module de recommandations à partir de l'historique d'écoute (approche mixte embeddings et signaux d'usage), dont la spécification et le contrat d'API sont posés.",
    ],
    technologies: ["TypeScript", "JavaScript", "React", "Zustand", "Howler.js", "PostgreSQL", "SQL"],
    outils: ["Supabase", "VSCode", "Git / GitHub", "Figma (maquettes)"],
    resultats:
      "Première version fonctionnelle : authentification, lecture en streaming, gestion d'une bibliothèque personnelle (playlists, favoris) et historique d'écoute. L'historique collecté servira de base aux recommandations d'HarmonyMind.",
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
    slug: "cloudinventory-v2",
    titre: "CloudInventory v2",
    type: "pro",
    resume:
      "Outil API-first d'inventaire et de supervision d'un parc virtualisé, agrégeant vCenter et EfficientIP comme sources de vérité.",
    contexte:
      "Mission réalisée en alternance chez Capgemini Technology Services pour la DGA (Direction générale de l'armement). L'outil v1 était un script PowerShell + classeur Excel difficile à maintenir et peu exploitable au quotidien.",
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
    liens: [
      {
        label: "Version publique refaite à part (GitHub)",
        url: "https://github.com/Fr0gzilla/CloudInventory",
      },
    ],
    preview: `${basePath}/previews/cloudinventory.webp`,
    periode: "Janvier 2025 → Juillet 2026",
    role: "Développeur (équipe Capgemini, mission client)",
    confidentialite: "public",
  },
];

// Projets démarrés mais sans code à montrer pour l'instant : affichés en une ligne, sans lien.
export type ProjetEnPreparation = { titre: string; resume: string };

export const projetsEnPreparation: ProjetEnPreparation[] = [
  {
    titre: "RouilleBoy",
    resume: "Émulateur Game Boy écrit en Rust et compilé en WebAssembly, pour jouer dans le navigateur.",
  },
  {
    titre: "MCP-France",
    resume: "Serveurs MCP qui permettent aux assistants IA de répondre à partir des données publiques françaises.",
  },
  {
    titre: "Antikafka",
    resume: "Traduit un courrier administratif en français simple : ce qu'il dit, quoi faire et avant quand, avec les sources officielles.",
  },
  {
    titre: "Scalpel",
    resume: "Expériences d'interprétabilité sur un modèle de langage franco-anglais, pour comprendre comment il traite le français.",
  },
];

export function getProjetBySlug(slug: string): Projet | undefined {
  return projets.find((p) => p.slug === slug);
}
