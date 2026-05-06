"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  competencesReferentiel,
  getProjetsByCompetence,
  type CompetenceReferentiel,
  type Projet,
} from "../projets/data";

// Seules les réalisations professionnelles validées dans le tableau de synthèse
// (Annexe 6) sont mobilisables pour le mapping référentiel ↔ réalisations.
const SLUGS_BTS = ["cyber-hoot", "cloudinventory-v2"] as const;

function getRealisationsBts(code: string): Projet[] {
  return getProjetsByCompetence(code).filter((p) =>
    SLUGS_BTS.includes(p.slug as (typeof SLUGS_BTS)[number])
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const blocsLabels: Record<CompetenceReferentiel["bloc"], string> = {
  1: "Bloc 1 — Support et mise à disposition de services informatiques",
  2: "Bloc 2 — Conception et développement d'applications (SLAM)",
  3: "Bloc 3 — Cybersécurité",
};

const filtres: { id: "all" | "1" | "2" | "3"; label: string }[] = [
  { id: "all", label: "Tous les blocs" },
  { id: "1", label: "Bloc 1" },
  { id: "2", label: "Bloc 2 (SLAM)" },
  { id: "3", label: "Bloc 3" },
];

export default function CompetencesReferentielSection() {
  const [filtre, setFiltre] = useState<"all" | "1" | "2" | "3">("all");

  const competencesAffichees = useMemo(() => {
    if (filtre === "all") return competencesReferentiel;
    const blocNum = Number(filtre) as 1 | 2 | 3;
    return competencesReferentiel.filter((c) => c.bloc === blocNum);
  }, [filtre]);

  return (
    <motion.section
      id="competences-ref"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Compétences référentielles BTS SIO SLAM <span aria-hidden="true">📋</span>
      </h2>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-8" />

      <p className="text-[var(--text-secondary)] leading-relaxed max-w-4xl mb-8">
        Cette section met en correspondance les compétences du référentiel BTS SIO
        (blocs 1, 2 SLAM et 3 cybersécurité) avec mes deux réalisations professionnelles
        retenues dans le tableau de synthèse&nbsp;:{" "}
        <span className="text-[var(--accent)] font-semibold">Cyber-hoot</span> et{" "}
        <span className="text-[var(--accent)] font-semibold">CloudInventory</span>.
        Chaque badge pointe vers la fiche détaillée du projet dans laquelle la compétence
        a été mobilisée.
      </p>

      <div
        className="flex flex-wrap gap-2 mb-10"
        role="group"
        aria-label="Filtrer les compétences par bloc"
      >
        {filtres.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFiltre(f.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filtre === f.id
                ? "bg-[var(--accent)] text-[var(--bg-primary)]"
                : "glass text-[var(--text-secondary)] hover:text-[var(--accent)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Desktop : tableau */}
      <div className="hidden md:block glass-strong rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="border-b border-[var(--card-border)]">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide w-[18%]">
                Compétence
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide w-[42%]">
                Description
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide w-[40%]">
                Réalisations mobilisées
              </th>
            </tr>
          </thead>
          <tbody>
            {competencesAffichees.map((c) => {
              const projetsLies = getRealisationsBts(c.code);
              return (
                <tr
                  key={c.code}
                  className="border-t border-[var(--card-border)] align-top hover:bg-[var(--accent)]/5 transition-colors"
                >
                  <td className="px-6 py-5">
                    <p className="text-[var(--accent)] font-bold text-base">{c.code}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                      {blocsLabels[c.bloc].replace(/^Bloc \d — /, "Bloc " + c.bloc + " — ")}
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="font-semibold text-sm text-[var(--text-primary)] mb-1">
                      {c.libelle}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {c.description}
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    {projetsLies.length === 0 ? (
                      <span className="text-xs italic text-[var(--text-muted)]">
                        À mobiliser dans une prochaine réalisation
                      </span>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {projetsLies.map((p) => (
                          <Link
                            key={p.slug}
                            href={`${basePath}/projets/${p.slug}`}
                            className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                          >
                            {p.titre} {p.emoji}
                          </Link>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile : cartes empilées */}
      <div className="md:hidden flex flex-col gap-4">
        {competencesAffichees.map((c) => {
          const projetsLies = getProjetsByCompetence(c.code);
          return (
            <div
              key={c.code}
              className="glass-strong rounded-2xl p-5 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_15px_var(--accent-glow)]"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[var(--accent)] font-bold text-base">{c.code}</span>
                <span className="text-xs text-[var(--text-muted)]">Bloc {c.bloc}</span>
              </div>
              <p className="font-semibold text-sm text-[var(--text-primary)] mb-1">{c.libelle}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                {c.description}
              </p>
              {projetsLies.length === 0 ? (
                <p className="text-xs italic text-[var(--text-muted)]">
                  À mobiliser dans une prochaine réalisation
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {projetsLies.map((p) => (
                    <Link
                      key={p.slug}
                      href={`${basePath}/projets/${p.slug}`}
                      className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]"
                    >
                      {p.titre} {p.emoji}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
