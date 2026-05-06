export type ArticleVeille = {
  id: string;
  titre: string;
  source: string;
  url: string;
  date: string;
  resume: string;
  themes: string[];
};

export type SourceVeille = {
  nom: string;
  url: string;
  type: "RSS" | "Newsletter" | "Site" | "Podcast" | "YouTube" | "Officiel";
};

export type SujetVeille = {
  id: string;
  titre: string;
  emoji: string;
  description: string;
  motivations: string;
  sources: SourceVeille[];
  frequence: string;
  outils: string[];
  articles: ArticleVeille[];
};

export const sujetsVeille: SujetVeille[] = [
  // ─────────────────────────────────────────────────────────────────────
  // SUJET 1 : SUPPLY CHAIN SECURITY
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "supply-chain-security",
    emoji: "📦",
    titre: "Sécurité de la chaîne d'approvisionnement logicielle",
    description:
      "Suivi des attaques visant les écosystèmes de paquets open source (npm, PyPI, Docker Hub, Maven), des techniques d'exploitation (typosquatting, dépendance compromise, vol de credentials de mainteneurs) et des contre-mesures côté éditeurs et développeurs (SBOM, signatures Sigstore, dependency cooldown, Trusted Publishing).",
    motivations:
      "Mes projets reposent sur des centaines de dépendances transitives (Next.js, Tailwind, Framer Motion côté front, Flask et SQLAlchemy côté back). Une seule compromise peut exfiltrer mes secrets ou mon code en quelques minutes. Je veux être capable d'identifier les indicateurs d'une attaque, de réagir rapidement et de mettre en place une chaîne de build défensive.",
    sources: [
      { nom: "GitGuardian Blog", url: "https://blog.gitguardian.com/", type: "Site" },
      { nom: "Socket.dev", url: "https://socket.dev/blog", type: "Site" },
      { nom: "StepSecurity Blog", url: "https://www.stepsecurity.io/blog", type: "Site" },
      { nom: "The Hacker News", url: "https://thehackernews.com/", type: "RSS" },
      { nom: "CERT-FR (avis et alertes)", url: "https://www.cert.ssi.gouv.fr/avis/", type: "Officiel" },
      { nom: "OpenSSF", url: "https://openssf.org/blog/", type: "Site" },
    ],
    frequence: "Hebdomadaire (revue du lundi)",
    outils: ["Feedly (agrégateur RSS)", "GitHub Dependabot", "npm audit", "pip-audit"],
    articles: [
      {
        id: "shai-hulud-mini-2026",
        titre: "Mini Shai-Hulud frappe PyTorch Lightning et intercom-client",
        source: "Socket.dev / Security Boulevard",
        url: "https://securityboulevard.com/2026/05/1800-developers-hit-in-mini-shai-hulud-supply-chain-attack-across-pypi-npm-and-php/",
        date: "2026-05-03",
        resume:
          "Troisième vague de la campagne Shai-Hulud. Les attaquants ont publié des versions malveillantes de Lightning (2.6.2 et 2.6.3) sur PyPI et d'intercom-client sur npm, exécutées dès l'import. Particularité : le payload détourne les fichiers de configuration de Claude Code et VSCode pour assurer sa persistance — premier cas connu d'attaque ciblant les agents IA de codage. 1800 dépôts compromis en quelques jours.",
        themes: ["PyPI", "npm", "Worm", "Credential theft", "Agents IA"],
      },
      {
        id: "anssi-recyf-2026",
        titre: "L'ANSSI publie le Référentiel Cyber France (ReCyF)",
        source: "ANSSI",
        url: "https://cyber.gouv.fr/actualites/nis-2-lanssi-poursuit-et-renforce-sa-dynamique-daccompagnement/",
        date: "2026-03-17",
        resume:
          "L'ANSSI a dévoilé le ReCyF en version document de travail, un référentiel listant les mesures recommandées pour atteindre les objectifs de sécurité de NIS 2. Inclut explicitement des exigences sur la sécurité de la chaîne d'approvisionnement TIC. Indispensable à connaître pour toute mission impliquant un grand compte assujetti.",
        themes: ["ANSSI", "NIS2", "Référentiel", "Conformité"],
      },
      // TODO: ajouter 1-2 articles supplémentaires (objectif : 4 minimum sur l'année)
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // SUJET 2 : RÉGLEMENTATION CYBERSÉCURITÉ EUROPÉENNE
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "reglementation-cyber-ue",
    emoji: "⚖️",
    titre: "Réglementation européenne cybersécurité (NIS2, DORA, CRA)",
    description:
      "Suivi de la transposition française des directives européennes encadrant la cybersécurité : NIS2 (résilience des systèmes essentiels), DORA (résilience opérationnelle du secteur financier), Cyber Resilience Act (sécurité by design des produits numériques). Évolution du projet de loi Résilience français, publication des décrets, position de l'ANSSI.",
    motivations:
      "En tant qu'apprenti développeur intervenant pour un grand compte du secteur public, j'évolue dans un environnement où la conformité NIS 2 va structurer les choix techniques (gestion des incidents, gouvernance, sécurité de la supply chain). Comprendre ces obligations, c'est anticiper l'impact qu'elles ont sur les projets auxquels je contribue.",
    sources: [
      { nom: "Cyber.gouv.fr (ANSSI)", url: "https://cyber.gouv.fr/actualites", type: "Officiel" },
      { nom: "EUR-Lex", url: "https://eur-lex.europa.eu/", type: "Officiel" },
      { nom: "CNIL — Actualités", url: "https://www.cnil.fr/fr/actualites", type: "Officiel" },
      { nom: "Numeum", url: "https://numeum.fr/cybersecurite", type: "Site" },
      { nom: "LeMagIT", url: "https://www.lemagit.fr/rss", type: "RSS" },
    ],
    frequence: "Bi-mensuelle",
    outils: ["Feedly", "Newsletter cyber.gouv.fr"],
    articles: [
      {
        id: "transposition-nis2-fr-2026",
        titre: "Transposition NIS2 en France : vote attendu en juillet 2026",
        source: "ameleo.fr / Solutions Numériques",
        url: "https://ameleo.fr/nis2-directive-cybersecurite-transposition-france-2026/",
        date: "2026-04-15",
        resume:
          "La France accuse un retard significatif sur la transposition de NIS2 (date butoir UE : 17 octobre 2024). Le projet de loi Résilience est attendu en session extraordinaire de juillet 2026. Environ 15 000 entités françaises seront assujetties, avec des sanctions pouvant atteindre 10 M€ ou 2 % du chiffre d'affaires mondial pour les entités essentielles.",
        themes: ["NIS2", "France", "Transposition", "Sanctions"],
      },
      {
        id: "eu-supply-chain-toolbox-2026",
        titre: "Boîte à outils européenne pour la sécurité de la supply chain TIC",
        source: "Commission européenne / Groupe NIS",
        url: "https://www.donneespersonnelles.fr/actualite-nis2-2026",
        date: "2026-02-13",
        resume:
          "Le groupe de coopération NIS a adopté un cadre commun pour évaluer et atténuer les risques cyber liés aux chaînes d'approvisionnement TIC. Recommande des stratégies multi-fournisseurs et la réduction des dépendances envers des fournisseurs jugés à haut risque. À mettre en regard des attaques de type Shai-Hulud (cf. sujet 1).",
        themes: ["UE", "Supply chain", "NIS2"],
      },
      // TODO: ajouter d'autres articles au fil de l'année (CRA, DORA, AI Act)
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // SUJET 3 : IA GÉNÉRATIVE ET DÉVELOPPEMENT LOGICIEL
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "ia-generative-dev",
    emoji: "🤖",
    titre: "IA générative dans le développement logiciel",
    description:
      "Évolution des assistants et agents IA de codage (GitHub Copilot, Cursor, Claude Code), impact mesuré sur la productivité et la qualité du code, problématiques émergentes : sécurité (prompt injection, fuite de secrets dans les prompts), propriété intellectuelle du code généré, transformation du métier de développeur.",
    motivations:
      "L'écosystème des outils de développement assistés par IA évolue tous les mois. En tant que jeune développeur, je dois savoir où se situent les bénéfices réels (productivité sur des tâches répétitives) et les pièges (hallucinations, code non sécurisé, dépendance excessive). Cette veille m'aide aussi à nourrir mon projet HarmonyMind, qui exploite des techniques d'IA pour la recommandation.",
    sources: [
      { nom: "Anthropic — News & Engineering", url: "https://www.anthropic.com/news", type: "Site" },
      { nom: "GitHub Blog", url: "https://github.blog/", type: "RSS" },
      { nom: "Stack Overflow Blog", url: "https://stackoverflow.blog/", type: "RSS" },
      { nom: "Le Monde Informatique", url: "https://www.lemondeinformatique.fr/", type: "RSS" },
      { nom: "Simon Willison's Weblog", url: "https://simonwillison.net/", type: "RSS" },
    ],
    frequence: "Hebdomadaire",
    outils: ["Feedly", "Hacker News", "Newsletter Bytes (mardi)"],
    articles: [
      {
        id: "shai-hulud-claude-code-2026",
        titre: "Une attaque supply chain détourne les agents IA comme vecteur de persistance",
        source: "StepSecurity",
        url: "https://www.stepsecurity.io/blog/a-mini-shai-hulud-has-appeared",
        date: "2026-04-30",
        resume:
          "La vague Mini Shai-Hulud injecte des fichiers .claude/settings.json et .vscode/tasks.json malveillants dans les dépôts compromis. Toute personne ouvrant le projet dans Claude Code ou VSCode déclenche silencieusement le malware. C'est l'un des premiers cas où les configurations d'agents IA sont utilisées comme vecteur d'attaque, ce qui change la donne pour la sécurisation des environnements de dev.",
        themes: ["Sécurité IA", "Agents", "Persistance"],
      },
      {
        id: "propriete-code-ia-2026",
        titre: "À qui appartient le code généré par un assistant IA ?",
        source: "Developpez.com",
        url: "https://droit.developpez.com/actu/382670/",
        date: "2026-04-28",
        resume:
          "Le droit d'auteur protège uniquement les œuvres avec une paternité humaine significative, confirmée par la Cour suprême US en mars 2026. Pour un développeur, cela soulève des questions concrètes : un projet personnel construit avec Claude Code sur une licence employeur peut-il devenir propriété de l'employeur ? Donner un prompt et accepter le résultat ne suffit pas à revendiquer une paternité. Pertinent pour mes projets perso (Beatshelf, HarmonyMind).",
        themes: ["PI", "Droit d'auteur", "Pratiques"],
      },
      // TODO: ajouter 1-2 articles supplémentaires (idéalement un sur la productivité chiffrée et un sur la sécurité)
    ],
  },
];
