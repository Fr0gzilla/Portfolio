"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CvPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16"
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          Mon CV
        </h1>
        <div className="flex items-center gap-3">
          <a
            href={`${basePath}/cv.pdf`}
            download="CV_GIOANETTI_Marceau.pdf"
            className="px-4 py-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold transition-all duration-300"
          >
            Télécharger
          </a>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg glass text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300"
          >
            Retour
          </Link>
        </div>
      </div>

      {/* Desktop: iframe */}
      <div className="hidden md:block glass-strong rounded-2xl overflow-hidden" style={{ height: "85vh" }}>
        <iframe
          src={`${basePath}/cv.pdf`}
          className="w-full h-full border-none"
          title="CV - Marceau GIOANETTI"
        />
      </div>

      {/* Mobile: message + bouton */}
      <div className="md:hidden glass-strong rounded-2xl p-8 text-center">
        <p className="text-[var(--text-secondary)] mb-6">
          L&apos;aperçu du CV n&apos;est pas disponible sur mobile. Vous pouvez le télécharger directement.
        </p>
        <a
          href={`${basePath}/cv.pdf`}
          download="CV_GIOANETTI_Marceau.pdf"
          className="px-8 py-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold text-lg transition-all duration-300 inline-block"
        >
          Télécharger le CV
        </a>
      </div>
    </motion.div>
  );
}
