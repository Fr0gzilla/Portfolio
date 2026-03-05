"use client";

import { motion } from "framer-motion";

export default function ParcoursSection() {
  return (
    <motion.section
      id="parcours"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Mon Parcours Professionnel 👔
      </h2>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <div className="flex flex-col gap-8">
        {/* CARTE VOILE */}
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
            Moniteur de Voile ⛵
          </h3>

          <p className="text-[var(--accent)] font-semibold">Juillet 2024</p>
          <p className="text-[var(--text-muted)] mb-4">📍 Carnac (Morbihan)</p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            Experience dans un centre nautique breton : encadrement de seances, gestion du materiel, mise en securite du public et initiation a la pratique de la voile. Cette experience m&apos;a appris la pedagogie, la responsabilite et la gestion de groupe.
          </p>
        </motion.div>

        {/* CARTE CAPGEMINI */}
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
            Apprenti Developpeur – Capgemini Technology Services 💼
          </h3>

          <p className="text-[var(--text-muted)] mb-4">📍 Rennes</p>

          <p className="text-[var(--accent)] font-semibold mb-2">
            Septembre 2024 → Janvier 2025
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            A mon arrivee chez Capgemini, j&apos;ai suivi un parcours d&apos;integration comprenant plusieurs formations internes. J&apos;ai notamment ete forme sur Terraform pour la gestion d&apos;infrastructure as code, ainsi que sur Ansible pour l&apos;automatisation de configurations. Durant cette periode, j&apos;ai egalement obtenu la certification SAFe, qui m&apos;a permis de me familiariser avec les pratiques agiles a l&apos;echelle.
          </p>

          <h4 className="text-xl font-bold mb-1 text-[var(--text-primary)]">
            Developpeur – Mission DGA MI <span className="text-sm font-normal text-[var(--text-muted)]">(via Capgemini)</span>
          </h4>

          <p className="text-[var(--accent)] font-semibold mb-2">
            Janvier 2025 → Aujourd&apos;hui
          </p>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            En mission a la DGA MI, je participe au developpement et a l&apos;evolution d&apos;outils internes en fonction des besoins metier, que ce soit pour des nouvelles fonctionnalites ou des correctifs. Je suis implique dans l&apos;ensemble du cycle projet, du cadrage a la mise en production, en passant par la conception et les tests. Je redige egalement la documentation technique et utilisateur associee. Le travail s&apos;organise en methode Scrum, avec des sprints et des ceremonies regulieres.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
