"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
        <Link
          href="/"
          className="px-4 py-2 rounded-lg glass text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300"
        >
          Retour
        </Link>
      </div>

      <div className="glass-strong rounded-2xl overflow-hidden" style={{ height: "85vh" }}>
        <iframe
          src="/cv.pdf"
          className="w-full h-full border-none"
          title="CV - Marceau Gioanetti"
        />
      </div>
    </motion.div>
  );
}
