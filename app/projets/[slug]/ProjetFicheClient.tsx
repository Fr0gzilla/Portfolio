"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CompetenceReferentiel, Projet } from "../data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const typeLabels: Record<Projet["type"], string> = {
  perso: "Projet personnel",
  pro: "Projet professionnel",
  scolaire: "Projet scolaire",
};

const confLabels: Record<NonNullable<Projet["confidentialite"]>, string> = {
  public: "Public",
  anonymise: "Client anonymisé",
  interne: "Interne",
};

export default function ProjetFicheClient({
  projet,
  competencesDetail,
  previous,
  next,
}: {
  projet: Projet;
  competencesDetail: CompetenceReferentiel[];
  previous: Projet | null;
  next: Projet | null;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16"
    >
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-6"
        >
          <span aria-hidden="true">←</span> Retour aux projets
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          {projet.titre} <span aria-hidden="true">{projet.emoji}</span>
        </h1>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">
            {typeLabels[projet.type]}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">
            {projet.periode}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">
            {projet.role}
          </span>
          {projet.confidentialite && projet.confidentialite !== "public" && (
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">
              {confLabels[projet.confidentialite]}
            </span>
          )}
        </div>
      </div>

      {/* Aperçu */}
      {projet.preview && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl overflow-hidden mb-10 border border-[var(--accent)]/30"
        >
          <img
            src={projet.preview}
            alt={`Aperçu de l'application ${projet.titre}`}
            className="w-full h-auto"
          />
        </motion.div>
      )}

      <div className="space-y-8">
        {/* Contexte */}
        <Bloc titre="Contexte">
          <p className="text-[var(--text-secondary)] leading-relaxed">{projet.contexte}</p>
        </Bloc>

        {/* Demande */}
        <Bloc titre="Demande / besoin exprimé">
          <p className="text-[var(--text-secondary)] leading-relaxed">{projet.demande}</p>
        </Bloc>

        {/* Démarche */}
        <Bloc titre="Démarche">
          <ol className="space-y-3">
            {projet.demarche.map((etape, i) => (
              <li key={i} className="flex gap-4 text-[var(--text-secondary)] leading-relaxed">
                <span className="flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center text-sm font-bold text-[var(--accent)]">
                  {i + 1}
                </span>
                <span className="pt-1">{etape}</span>
              </li>
            ))}
          </ol>
        </Bloc>

        {/* Technologies & outils */}
        <Bloc titre="Technologies & outils">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {projet.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">
                Outils
              </h4>
              <div className="flex flex-wrap gap-2">
                {projet.outils.map((outil) => (
                  <span
                    key={outil}
                    className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]"
                  >
                    {outil}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Bloc>

        {/* Compétences référentielles mobilisées */}
        <Bloc titre="Compétences référentielles mobilisées">
          <div className="grid sm:grid-cols-2 gap-4">
            {competencesDetail.map((c) => (
              <Link
                key={c.code}
                href={`/#competences-ref`}
                className="glass rounded-xl p-4 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_15px_var(--accent-glow)]"
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[var(--accent)] font-bold text-sm">{c.code}</span>
                  <span className="text-xs text-[var(--text-muted)]">Bloc {c.bloc}</span>
                </div>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{c.libelle}</p>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{c.description}</p>
              </Link>
            ))}
          </div>
        </Bloc>

        {/* Résultats */}
        <Bloc titre="Résultats">
          <p className="text-[var(--text-secondary)] leading-relaxed">{projet.resultats}</p>
        </Bloc>

        {/* Difficultés / Apports */}
        {(projet.difficultes || projet.apports) && (
          <div className="grid md:grid-cols-2 gap-6">
            {projet.difficultes && (
              <Bloc titre="Difficultés rencontrées">
                <p className="text-[var(--text-secondary)] leading-relaxed">{projet.difficultes}</p>
              </Bloc>
            )}
            {projet.apports && (
              <Bloc titre="Apports personnels">
                <p className="text-[var(--text-secondary)] leading-relaxed">{projet.apports}</p>
              </Bloc>
            )}
          </div>
        )}

        {/* Liens */}
        {projet.liens.length > 0 && (
          <Bloc titre="Liens">
            <div className="flex flex-wrap gap-3">
              {projet.liens.map((lien) => (
                <a
                  key={lien.url}
                  href={lien.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold rounded-lg transition-all duration-300"
                >
                  {lien.label}
                </a>
              ))}
            </div>
          </Bloc>
        )}
      </div>

      {/* Pagination précédent / suivant */}
      <nav className="mt-12 grid sm:grid-cols-2 gap-4" aria-label="Navigation entre projets">
        {previous ? (
          <Link
            href={`${basePath}/projets/${previous.slug}`}
            className="glass-strong rounded-2xl p-5 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]"
          >
            <p className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-1">Précédent</p>
            <p className="font-semibold text-[var(--text-primary)]">
              <span aria-hidden="true">← </span>
              {previous.titre} {previous.emoji}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`${basePath}/projets/${next.slug}`}
            className="glass-strong rounded-2xl p-5 text-right transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]"
          >
            <p className="text-xs uppercase tracking-wide text-[var(--text-muted)] mb-1">Suivant</p>
            <p className="font-semibold text-[var(--text-primary)]">
              {next.titre} {next.emoji}
              <span aria-hidden="true"> →</span>
            </p>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </motion.article>
  );
}

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-strong rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-[var(--text-primary)]">{titre}</h2>
      <div className="h-[3px] w-16 bg-[var(--accent)] mb-5" />
      {children}
    </motion.section>
  );
}
