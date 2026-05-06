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
  type: "RSS" | "Newsletter" | "Site" | "Podcast" | "YouTube";
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
  {
    id: "secu-applicative",
    titre: "Sécurité applicative web (OWASP Top 10)",
    emoji: "🔐",
    description:
      "Suivi des vulnérabilités web les plus répandues, des CVE marquantes et des bonnes pratiques de secure coding (OWASP Top 10, ASVS).",
    motivations:
      "Sur Cyber-hoot j'ai mis en œuvre des contre-mesures concrètes (CSP avec nonces, hachage PBKDF2, jetons signés itsdangerous, pare-feu UFW, scan VirusTotal des uploads, en-têtes de sécurité). Cette veille me permet d'avoir des arguments à jour pour justifier ces choix et anticiper les évolutions du référentiel OWASP.",
    sources: [
      { nom: "ANSSI – CERT-FR (avis et alertes)", url: "https://www.cert.ssi.gouv.fr/", type: "RSS" },
      { nom: "OWASP Foundation", url: "https://owasp.org/", type: "Site" },
      { nom: "PortSwigger Web Security Blog", url: "https://portswigger.net/blog", type: "RSS" },
      { nom: "The Hacker News", url: "https://thehackernews.com/", type: "RSS" },
      { nom: "Le Comptoir Sécu (FR)", url: "https://www.comptoirsecu.fr/", type: "Podcast" },
    ],
    frequence: "Hebdomadaire",
    outils: ["Feedly", "Mastodon (listes infosec)"],
    // TODO: ajouter au moins 3 articles synthétisés (titre, source, date, résumé en mes mots).
    articles: [],
  },
  {
    id: "supply-chain",
    titre: "Sécurité de la supply chain logicielle",
    emoji: "📦",
    description:
      "Veille sur les attaques visant la chaîne de production logicielle : packages npm/pip compromis, signatures d'artefacts, SBOM, sécurité des pipelines CI/CD.",
    motivations:
      "CloudInventory et Cyber-hoot dépendent de dizaines de paquets Python (Flask, SQLAlchemy, requests, Werkzeug…) et d'images Docker tierces. Suivre ce thème m'aide à évaluer le risque réel de mes dépendances et à proposer des évolutions concrètes (scan, signature, SBOM) au sein de mon alternance.",
    sources: [
      { nom: "Snyk Vulnerability Blog", url: "https://snyk.io/blog/", type: "RSS" },
      { nom: "GitHub Security Blog", url: "https://github.blog/security/", type: "RSS" },
      { nom: "Sigstore Blog", url: "https://blog.sigstore.dev/", type: "RSS" },
      { nom: "Sonatype – State of the Software Supply Chain", url: "https://www.sonatype.com/resources/", type: "Newsletter" },
      { nom: "Risky Business", url: "https://risky.biz/", type: "Podcast" },
    ],
    frequence: "Hebdomadaire",
    outils: ["Feedly", "Pocket Casts (podcasts)"],
    // TODO: ajouter au moins 3 articles synthétisés (titre, source, date, résumé en mes mots).
    articles: [],
  },
  {
    id: "ia-llm",
    titre: "Sécurité de l'IA générative et des LLM",
    emoji: "🤖",
    description:
      "Suivi des risques propres aux applications intégrant un LLM : prompt injection, RAG poisoning, jailbreaks, OWASP LLM Top 10, MITRE ATLAS, encadrement réglementaire (EU AI Act).",
    motivations:
      "HarmonyMind utilisera des embeddings et viendra se brancher sur Beatshelf. Avant d'industrialiser, je veux comprendre les attaques possibles (prompt injection, fuite de données, empoisonnement de la base vectorielle) et les bonnes pratiques émergentes pour les contrer.",
    sources: [
      { nom: "OWASP GenAI / LLM Top 10", url: "https://genai.owasp.org/", type: "Site" },
      { nom: "Simon Willison's Weblog", url: "https://simonwillison.net/", type: "RSS" },
      { nom: "Lakera Blog (red teaming LLM)", url: "https://www.lakera.ai/blog", type: "RSS" },
      { nom: "Anthropic – Research & Safety", url: "https://www.anthropic.com/research", type: "RSS" },
      { nom: "MITRE ATLAS", url: "https://atlas.mitre.org/", type: "Site" },
    ],
    frequence: "Bimensuelle",
    outils: ["Feedly", "Newsletter (e-mail)"],
    // TODO: ajouter au moins 3 articles synthétisés (titre, source, date, résumé en mes mots).
    articles: [],
  },
];
