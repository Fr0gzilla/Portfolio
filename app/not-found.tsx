"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto px-4 sm:px-6 py-32 text-center"
    >
      <h1 className="text-8xl font-bold text-[var(--accent)] mb-4">404</h1>
      <p className="text-xl text-[var(--text-secondary)] mb-8">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-8 py-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold text-lg transition-all duration-300 inline-block"
      >
        Retour à l&apos;accueil
      </Link>
    </motion.div>
  );
}
