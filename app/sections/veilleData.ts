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
    titre: "Sécurité applicative & OWASP",
    emoji: "🔐",
    description:
      "Suivi des vulnérabilités web les plus répandues, des CVE marquantes et des bonnes pratiques de secure coding (OWASP Top 10, ASVS).",
    motivations:
      "Mes projets touchent à la fois au web (Beatshelf, Cyber-Hoot) et à des outils internes en alternance (CloudInventory v2). Suivre l'actualité de la sécurité applicative me permet d'adopter les bons réflexes dès la conception.",
    sources: [
      { nom: "ANSSI – Avis et alertes CERT-FR", url: "https://www.cert.ssi.gouv.fr/", type: "RSS" },
      { nom: "OWASP Foundation", url: "https://owasp.org/", type: "Site" },
      { nom: "The Hacker News", url: "https://thehackernews.com/", type: "RSS" },
    ],
    frequence: "Hebdomadaire",
    outils: ["Feedly", "Mastodon (listes infosec)"],
    // TODO: ajouter au moins 3 articles synthétisés (titre, source, date, résumé en mes mots).
    articles: [],
  },
  {
    id: "frameworks-js",
    titre: "Évolution des frameworks JS modernes",
    emoji: "⚛️",
    description:
      "Veille sur Next.js, React et l'écosystème front (TypeScript, build tools) afin de garder Beatshelf et le portfolio à jour des bonnes pratiques.",
    motivations:
      "Je travaille quotidiennement avec React et Next.js. Comprendre les évolutions (App Router, Server Components, Turbopack) m'évite de prendre des décisions techniques obsolètes.",
    sources: [
      { nom: "Next.js Blog", url: "https://nextjs.org/blog", type: "Site" },
      { nom: "React Blog", url: "https://react.dev/blog", type: "Site" },
      { nom: "This Week in React (newsletter)", url: "https://thisweekinreact.com/", type: "Newsletter" },
    ],
    frequence: "Hebdomadaire",
    outils: ["Newsletter (e-mail)", "Feedly"],
    // TODO: ajouter au moins 3 articles synthétisés (titre, source, date, résumé en mes mots).
    articles: [],
  },
  {
    id: "devsecops",
    titre: "DevSecOps & supply chain security",
    emoji: "🔁",
    description:
      "Suivi des bonnes pratiques de sécurité en CI/CD : SBOM, scan de dépendances, signature d'artefacts, sécurité des pipelines.",
    motivations:
      "Mon alternance chez Capgemini m'expose à des pipelines GitLab CI et à la mise en production. Mieux comprendre la sécurité du cycle de vie m'aide à proposer des évolutions concrètes.",
    sources: [
      { nom: "Snyk Blog", url: "https://snyk.io/blog/", type: "Site" },
      { nom: "GitLab Security", url: "https://about.gitlab.com/blog/categories/security/", type: "Site" },
      { nom: "DevSecOps Podcast", url: "https://soundcloud.com/devsecops-podcast-series", type: "Podcast" },
    ],
    frequence: "Bimensuelle",
    outils: ["Feedly", "Podcasts (Pocket Casts)"],
    // TODO: ajouter au moins 3 articles synthétisés (titre, source, date, résumé en mes mots).
    articles: [],
  },
];
