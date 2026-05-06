"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Competence = {
  code: string;
  libelle: string;
  details: string[];
};

const competences: Competence[] = [
  {
    code: "C1.1",
    libelle: "Gérer le patrimoine informatique",
    details: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
      "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
      "Vérifier les conditions de la continuité d'un service informatique",
      "Gérer des sauvegardes",
      "Vérifier le respect des règles d'utilisation des ressources",
    ],
  },
  {
    code: "C1.2",
    libelle: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    details: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes concernant les services réseau et système, applicatifs",
      "Traiter des demandes concernant les applications",
    ],
  },
  {
    code: "C1.3",
    libelle: "Développer la présence en ligne de l'organisation",
    details: [
      "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
      "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
      "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
    ],
  },
  {
    code: "C1.4",
    libelle: "Travailler en mode projet",
    details: [
      "Analyser les objectifs et les modalités d'organisation d'un projet",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
    ],
  },
  {
    code: "C1.5",
    libelle: "Mettre à disposition des utilisateurs un service informatique",
    details: [
      "Réaliser les tests d'intégration et d'acceptation d'un service",
      "Déployer un service",
      "Accompagner les utilisateurs dans la mise en place d'un service",
    ],
  },
  {
    code: "C1.6",
    libelle: "Organiser son développement professionnel",
    details: [
      "Mettre en place son environnement d'apprentissage personnel",
      "Mettre en œuvre des outils et stratégies de veille informationnelle",
      "Gérer son identité professionnelle",
      "Développer son projet professionnel",
    ],
  },
];

type Realisation = {
  titre: string;
  description: string;
  productions: string[];
  liens?: { label: string; url: string }[];
  annexe?: string;
  periode: string;
  competencesValidees: string[];
};

const realisationFormation: Realisation = {
  titre: "Cyber-hoot — Application web de quiz en cybersécurité",
  description:
    "Application Flask + MySQL (3 rôles : joueur, rédacteur, administrateur), déployée sur VPS Debian (Nginx + Gunicorn) avec HTTPS Let's Encrypt et nom de domaine OVH.",
  productions: [
    "Cahier des charges fonctionnel",
    "MCD / MLD / MEA",
    "Diagrammes UML de séquence",
    "Wireframe et maquette Canva",
    "Suite de 61 tests pytest",
    "README + guide d'installation Docker Compose",
  ],
  liens: [
    { label: "Dépôt GitHub", url: "https://github.com/lele214/Cyber-hoot" },
    { label: "Déploiement", url: "https://cyber-hoot.site" },
  ],
  annexe: "Annexe VII-1-B fournie pour cette réalisation.",
  periode: "20/11/2025 au 08/04/2026",
  competencesValidees: ["C1.1", "C1.2", "C1.3", "C1.4", "C1.5", "C1.6"],
};

const realisationSecondeAnnee: Realisation = {
  titre:
    "CloudInventory — Application web d'inventaire et de consolidation du parc virtualisé DGA-MI",
  description:
    "Application Flask + ORM SQLAlchemy agrégeant deux sources de vérité (hyperviseur vCenter / Proxmox VE et IPAM EfficientIP / NetBox) pour produire un inventaire consolidé, détecter automatiquement les anomalies (NO_MATCH, STATUS_MISMATCH, DUPLICATE_DNS/IP), et notifier par courriel/webhook. Versionnage temporel par run, scheduler APScheduler quotidien, API REST documentée Swagger protégée par JWT.",
  productions: [
    "Cahier des charges fonctionnel",
    "Dossier technique",
    "MCD / MLD",
    "Diagrammes UML de séquence",
    "Suite de 81 tests pytest",
    "README",
    "Déploiement Docker + render.yaml",
  ],
  annexe: "Annexe VII-1-B fournie pour cette réalisation.",
  periode: "03/12/2025 au 20/04/2026",
  competencesValidees: ["C1.1", "C1.2", "C1.4", "C1.5", "C1.6"],
};

export default function SyntheseClient() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-6"
      >
        <span aria-hidden="true">←</span> Retour à l&apos;accueil
      </Link>

      <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2">
        BTS Services Informatiques aux Organisations · Session 2026
      </p>
      <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-3">
        Tableau de synthèse des réalisations professionnelles{" "}
        <span aria-hidden="true">📋</span>
      </h1>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      {/* Identité du candidat */}
      <section
        aria-labelledby="identite-title"
        className="glass-strong rounded-2xl p-6 sm:p-8 mb-10 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]"
      >
        <h2
          id="identite-title"
          className="text-xl md:text-2xl font-bold mb-5 text-[var(--text-primary)]"
        >
          Identité du candidat
        </h2>
        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          <Row label="Nom et prénom" value="GIOANETTI Marceau" />
          <Row label="N° candidat" value="…" />
          <Row label="Centre de formation" value="ESNA de Bretagne — Rennes" />
          <Row label="Option" value="SLAM" highlight />
          <Row
            label="Adresse URL du portfolio"
            value={
              <a
                href="https://fr0gzilla.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors break-all"
              >
                https://fr0gzilla.github.io/portfolio/
              </a>
            }
          />
        </dl>
      </section>

      {/* Légende compétences */}
      <section
        aria-labelledby="competences-title"
        className="glass-strong rounded-2xl p-6 sm:p-8 mb-10 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]"
      >
        <h2
          id="competences-title"
          className="text-xl md:text-2xl font-bold mb-5 text-[var(--text-primary)]"
        >
          Compétences mises en œuvre
        </h2>
        <p className="text-sm text-[var(--text-muted)] mb-6">
          Bloc 1 — Support et mise à disposition de services informatiques.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competences.map((c) => (
            <div
              key={c.code}
              className="glass rounded-xl p-4 transition-all duration-300 hover:border-[var(--accent)]/50"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[var(--accent)] font-bold text-base">{c.code}</span>
              </div>
              <p className="font-semibold text-sm text-[var(--text-primary)] mb-3">{c.libelle}</p>
              <ul className="text-xs text-[var(--text-secondary)] leading-relaxed space-y-1">
                {c.details.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--accent)]" aria-hidden="true">
                      ▸
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tableau récapitulatif */}
      <section
        aria-labelledby="recap-title"
        className="glass-strong rounded-2xl p-6 sm:p-8 mb-10"
      >
        <h2
          id="recap-title"
          className="text-xl md:text-2xl font-bold mb-2 text-[var(--text-primary)]"
        >
          Récapitulatif des réalisations
        </h2>
        <p className="text-sm text-[var(--text-muted)] mb-6">
          Une croix indique que la compétence est mise en œuvre dans la réalisation.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b-2 border-[var(--accent)]/40">
                <th className="px-3 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide w-[40%]">
                  Réalisation professionnelle
                </th>
                <th className="px-3 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                  Période
                </th>
                {competences.map((c) => (
                  <th
                    key={c.code}
                    className="px-2 py-3 text-center text-xs font-bold text-[var(--accent)]"
                  >
                    {c.code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <CategorieRow label="Réalisation en cours de formation" />
              <RealisationRow realisation={realisationFormation} />

              <CategorieRow label="Réalisations en milieu professionnel — première année" />
              <EmptyRow />

              <CategorieRow label="Réalisations en milieu professionnel — seconde année" />
              <RealisationRow realisation={realisationSecondeAnnee} />
            </tbody>
          </table>
        </div>
      </section>

      {/* Détails des réalisations */}
      <section aria-labelledby="details-title" className="space-y-6">
        <h2
          id="details-title"
          className="text-xl md:text-2xl font-bold text-[var(--text-primary)]"
        >
          Détail des réalisations
        </h2>

        <RealisationDetail realisation={realisationFormation} categorie="En cours de formation" />
        <RealisationDetail
          realisation={realisationSecondeAnnee}
          categorie="Milieu professionnel — seconde année"
        />
      </section>
    </motion.article>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-1">{label}</dt>
      <dd
        className={`text-sm ${
          highlight ? "text-[var(--accent)] font-semibold" : "text-[var(--text-primary)]"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function CategorieRow({ label }: { label: string }) {
  return (
    <tr>
      <td
        colSpan={2 + competences.length}
        className="px-3 py-3 text-xs font-bold uppercase tracking-wide text-[var(--accent)] bg-[var(--accent)]/5 border-t border-b border-[var(--accent)]/20"
      >
        {label}
      </td>
    </tr>
  );
}

function RealisationRow({ realisation }: { realisation: Realisation }) {
  return (
    <tr className="border-t border-[var(--card-border)] align-top hover:bg-[var(--accent)]/5 transition-colors">
      <td className="px-3 py-4">
        <p className="font-semibold text-sm text-[var(--text-primary)] mb-1">{realisation.titre}</p>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{realisation.description}</p>
      </td>
      <td className="px-3 py-4 text-xs text-[var(--text-secondary)] whitespace-nowrap">
        {realisation.periode}
      </td>
      {competences.map((c) => {
        const valide = realisation.competencesValidees.includes(c.code);
        return (
          <td
            key={c.code}
            className="px-2 py-4 text-center text-base font-bold text-[var(--accent)]"
          >
            {valide ? <span aria-label="Compétence mise en œuvre">X</span> : (
              <span aria-hidden="true" className="text-[var(--text-muted)]/30">—</span>
            )}
          </td>
        );
      })}
    </tr>
  );
}

function EmptyRow() {
  return (
    <tr className="border-t border-[var(--card-border)]">
      <td
        colSpan={2 + competences.length}
        className="px-3 py-3 text-xs italic text-[var(--text-muted)]"
      >
        Aucune réalisation renseignée.
      </td>
    </tr>
  );
}

function RealisationDetail({
  realisation,
  categorie,
}: {
  realisation: Realisation;
  categorie: string;
}) {
  return (
    <div className="glass-strong rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]">
      <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2">
        {categorie} · {realisation.periode}
      </p>
      <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)] mb-3">
        {realisation.titre}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
        {realisation.description}
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
            Productions associées
          </h4>
          <ul className="text-sm text-[var(--text-secondary)] leading-relaxed space-y-1">
            {realisation.productions.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--accent)]" aria-hidden="true">
                  ▸
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {realisation.annexe && (
            <p className="text-xs italic text-[var(--text-muted)] mt-3">{realisation.annexe}</p>
          )}
        </div>

        <div>
          <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
            Compétences mises en œuvre
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {realisation.competencesValidees.map((code) => (
              <span
                key={code}
                className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]"
              >
                {code}
              </span>
            ))}
          </div>

          {realisation.liens && realisation.liens.length > 0 && (
            <>
              <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
                Liens
              </h4>
              <div className="flex flex-wrap gap-2">
                {realisation.liens.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
