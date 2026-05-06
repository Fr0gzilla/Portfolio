"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Projet } from "./data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const filtres: { id: "all" | Projet["type"]; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "perso", label: "Personnels" },
  { id: "pro", label: "Professionnels" },
  { id: "scolaire", label: "Scolaires" },
];

export default function ProjetsListeClient({ projets }: { projets: Projet[] }) {
  const [filtre, setFiltre] = useState<"all" | Projet["type"]>("all");

  const projetsAffiches = useMemo(() => {
    if (filtre === "all") return projets;
    return projets.filter((p) => p.type === filtre);
  }, [filtre, projets]);

  return (
    <section className="page-fade max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-6"
      >
        <span aria-hidden="true">←</span> Retour à l&apos;accueil
      </Link>

      <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-3">
        Tous mes projets <span aria-hidden="true">📂</span>
      </h1>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-8" />

      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrer les projets par type">
        {filtres.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFiltre(f.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              filtre === f.id
                ? "bg-[var(--accent)] text-[var(--bg-primary)]"
                : "glass text-[var(--text-secondary)] hover:text-[var(--accent)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projetsAffiches.map((projet) => (
          <div
            key={projet.slug}
            className="glass-strong rounded-2xl p-6 flex flex-col transition-colors duration-200 hover:border-[var(--accent)]/50"
          >
            <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">
              {projet.titre} <span aria-hidden="true">{projet.emoji}</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-3 uppercase tracking-wide">
              {projet.periode}
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{projet.resume}</p>
            <Link
              href={`${basePath}/projets/${projet.slug}`}
              className="mt-auto px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold rounded-lg transition-colors duration-200 self-start"
            >
              Voir la fiche complète
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
