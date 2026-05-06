"use client";

import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SynthesePage() {
  return (
    <div className="page-fade max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          Tableau de synthèse
        </h1>
        <div className="flex items-center gap-3">
          <a
            href={`${basePath}/tableau-synthese.pdf`}
            download="Tableau_synthese_GIOANETTI_Marceau.pdf"
            className="px-4 py-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold transition-colors duration-200"
          >
            Télécharger
          </a>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg glass text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200"
          >
            Retour
          </Link>
        </div>
      </div>

      {/* Desktop: iframe */}
      <div className="hidden md:block glass-strong rounded-2xl overflow-hidden pdf-viewer">
        <iframe
          src={`${basePath}/tableau-synthese.pdf`}
          className="w-full h-full border-none"
          title="Tableau de synthèse - Marceau GIOANETTI"
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden glass-strong rounded-2xl p-8 text-center">
        <p className="text-[var(--text-secondary)] mb-6">
          L&apos;aperçu du tableau de synthèse n&apos;est pas disponible sur mobile. Vous pouvez le télécharger directement.
        </p>
        <a
          href={`${basePath}/tableau-synthese.pdf`}
          download="Tableau_synthese_GIOANETTI_Marceau.pdf"
          className="px-8 py-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold text-lg transition-colors duration-200 inline-block"
        >
          Télécharger le tableau
        </a>
      </div>
    </div>
  );
}
