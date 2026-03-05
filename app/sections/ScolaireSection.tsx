"use client";

import { motion } from "framer-motion";

export default function ScolaireSection() {
  return (
    <motion.section
      id="scolaire"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Mon Parcours Scolaire 🎓
      </h2>

      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <div className="flex flex-col gap-8">
        {/* BTS SIO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="glass-strong rounded-2xl p-6 sm:p-8 transition-all duration-300
                     hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]"
        >
          <h3 className="text-2xl font-bold mb-1 text-[var(--text-primary)]">
            BTS SIO – Option SLAM 💻
          </h3>

          <p className="text-[var(--text-muted)]">📍 ESNA — Bruz</p>

          <p className="text-[var(--accent)] font-semibold mb-4">
            2024 → 2026
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Metiers (SLAM). Formation orientee developpement, conception d&apos;applications, bases de donnees, cybersecurite, et methodologies DevOps.
          </p>
        </motion.div>

        {/* BAC GENERAL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="glass-strong rounded-2xl p-6 sm:p-8 transition-all duration-300
                     hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]"
        >
          <h3 className="text-2xl font-bold mb-1 text-[var(--text-primary)]">
            Baccalaureat General 🎓
          </h3>

          <p className="text-[var(--text-muted)]">
            📍 Lycee Benjamin Franklin — Auray
          </p>

          <p className="text-[var(--accent)] font-semibold mb-4">
            2024
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            Bac General avec specialites Physique-Chimie & NSI (Numerique et Sciences Informatiques), et option Mathematiques. Formation scientifique solide orientee vers l&apos;informatique, la logique et la resolution de problemes.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
