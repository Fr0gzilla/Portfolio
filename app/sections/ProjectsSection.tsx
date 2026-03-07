"use client";

import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";

const HOVER_DELAY = 400;

export default function ProjectsSection() {
  const [beatshelfHovered, setBeatshelfHovered] = useState(false);
  const [cloudInventoryHovered, setCloudInventoryHovered] = useState(false);
  const [cyberHootHovered, setCyberHootHovered] = useState(false);
  const beatshelfTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cloudInventoryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cyberHootTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((setter: (v: boolean) => void, timer: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    timer.current = setTimeout(() => setter(true), HOVER_DELAY);
  }, []);

  const handleMouseLeave = useCallback((setter: (v: boolean) => void, timer: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setter(false);
  }, []);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">Projets</h2>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <div className="grid sm:grid-cols-2 gap-6 items-start">
        {/* BEATSHELF */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          onMouseEnter={() => handleMouseEnter(setBeatshelfHovered, beatshelfTimer)}
          onMouseLeave={() => handleMouseLeave(setBeatshelfHovered, beatshelfTimer)}
          className="group relative glass-strong rounded-2xl p-6 flex flex-col transition-all duration-300
                     hover:border-[var(--accent)]/50 hover:shadow-[0_0_25px_5px_var(--accent-glow)]"
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
            Beatshelf 🎧
          </h3>

          <div
            className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              gridTemplateRows: beatshelfHovered ? "1fr" : "0fr",
              opacity: beatshelfHovered ? 1 : 0,
            }}
          >
            <div className="overflow-hidden">
              <div className="rounded-xl overflow-hidden border border-[var(--accent)]/30 mb-4">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/previews/beatshelf.webp`}
                  alt="Aperçu Beatshelf"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Beatshelf est une application de streaming musical centrée sur l&apos;écoute et l&apos;organisation de sa musique. Elle intègre un lecteur audio directement dans l&apos;interface et permet de gérer sa bibliothèque : création de playlists, ajout/suppression de morceaux, gestion des favoris, et suivi de l&apos;historique d&apos;écoute.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
            Le projet prévoit aussi l&apos;intégration de <span className="text-[var(--accent)] font-semibold">HarmonyMind</span> pour ajouter plus tard des recommandations personnalisées.
          </p>

          <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Langages</h4>
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">JavaScript / TypeScript</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">SQL</span>
          </div>
          <p className="text-[var(--text-muted)] text-xs mb-3">Front + lecteur (Zustand, Howler.js) · Base de données (Supabase / PostgreSQL)</p>

          <a
            href="https://github.com/Fr0gzilla/Beatshelf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)]
                       text-[var(--bg-primary)] font-semibold rounded-lg transition-all duration-300 self-start inline-block"
          >
            Voir le projet
          </a>
        </motion.div>

        {/* HARMONYMIND */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="group relative glass-strong rounded-2xl p-6 flex flex-col transition-all duration-300
                     hover:border-[var(--accent)]/50 hover:shadow-[0_0_25px_5px_var(--accent-glow)]
                     self-end"
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
            HarmonyMind 🧠
          </h3>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            HarmonyMind est un module d&apos;intelligence pour Beatshelf qui vise à rendre l&apos;écoute plus personnalisée. Il exploite les données d&apos;usage (historique, favoris, playlists) et des embeddings pour générer des recommandations (titres similaires, découverte progressive, enchaînements cohérents).
          </p>

          <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Langages</h4>
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">Python</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">SQL</span>
          </div>
          <p className="text-[var(--text-muted)] text-xs mb-3">Embeddings + recommandations (pipeline IA) · Données (Supabase / PostgreSQL)</p>

          <span
            className="mt-auto px-6 py-3 bg-[var(--text-muted)]/30 text-[var(--text-muted)]
                       font-semibold rounded-lg self-start inline-block cursor-not-allowed"
          >
            Bientôt disponible
          </span>
        </motion.div>
        {/* CLOUDINVENTORY V2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          onMouseEnter={() => handleMouseEnter(setCloudInventoryHovered, cloudInventoryTimer)}
          onMouseLeave={() => handleMouseLeave(setCloudInventoryHovered, cloudInventoryTimer)}
          className="group relative glass-strong rounded-2xl p-6 sm:col-span-2 transition-all duration-300
                     hover:border-[var(--accent)]/50 hover:shadow-[0_0_25px_5px_var(--accent-glow)]"
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
            CloudInventory v2 ☁️
          </h3>

          <div
            className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              gridTemplateRows: cloudInventoryHovered ? "1fr" : "0fr",
              opacity: cloudInventoryHovered ? 1 : 0,
            }}
          >
            <div className="overflow-hidden">
              <div className="rounded-xl overflow-hidden border border-[var(--accent)]/30 mb-4">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/previews/cloudinventory.webp`}
                  alt="Aperçu CloudInventory v2"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            CloudInventory v2 est un outil API-first d&apos;inventaire et de supervision d&apos;un parc virtualisé. Il centralise les informations issues de plusieurs sources (notamment vCenter/RVTools et EfficientIP) pour construire une vue d&apos;inventaire exploitable (serveurs, VMs, IP/DNS, applications, utilisateurs) et faciliter la recherche/filtrage ainsi que la détection/simulation d&apos;alertes.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
            Dans cette v2, <span className="text-[var(--accent)] font-semibold">EfficientIP</span> est la source de vérité pour l&apos;IP/DNS, tandis que <span className="text-[var(--accent)] font-semibold">vCenter</span> reste la source pour l&apos;état VM / remontées VMware Tools.
          </p>

          <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Langages</h4>
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">Python</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">SQL</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">PHP</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">PowerShell / VBA</span>
          </div>
          <p className="text-[var(--text-muted)] text-xs mb-3">Pipeline d&apos;intégration (ingestion, normalisation) · BDD (MySQL/PostgreSQL) · Interface web · Automatisation ETL</p>

          <a
            href="https://github.com/Fr0gzilla/CloudInventory.v2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)]
                       text-[var(--bg-primary)] font-semibold rounded-lg transition-all duration-300 self-start inline-block"
          >
            Voir le projet
          </a>
        </motion.div>

        {/* CYBER-HOOT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          onMouseEnter={() => handleMouseEnter(setCyberHootHovered, cyberHootTimer)}
          onMouseLeave={() => handleMouseLeave(setCyberHootHovered, cyberHootTimer)}
          className="group relative glass-strong rounded-2xl p-6 sm:col-span-2 flex flex-col transition-all duration-300
                     hover:border-[var(--accent)]/50 hover:shadow-[0_0_25px_5px_var(--accent-glow)]"
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
            Cyber-Hoot 🛡️
          </h3>

          <div
            className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              gridTemplateRows: cyberHootHovered ? "1fr" : "0fr",
              opacity: cyberHootHovered ? 1 : 0,
            }}
          >
            <div className="overflow-hidden">
              <div className="rounded-xl overflow-hidden border border-[var(--accent)]/30 mb-4">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/previews/cyberhoot.webp`}
                  alt="Aperçu Cyber-Hoot"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Cyber-Hoot est une plateforme web de quiz interactifs dédiée à la sensibilisation en cybersécurité, inspirée de Kahoot. Elle propose des quiz de culture générale sur les cyberattaques avec un système de rôles (joueur, créateur, admin) et un suivi des scores.
          </p>

          <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Langages</h4>
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">Python</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">SQL</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">JavaScript</span>
          </div>
          <p className="text-[var(--text-muted)] text-xs mb-3">Backend Flask/SQLAlchemy · Frontend Jinja2/Tailwind CSS · Base de données MySQL · Infrastructure Docker Compose</p>

          <a
            href="https://github.com/lele214/Cyber-hoot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)]
                       text-[var(--bg-primary)] font-semibold rounded-lg transition-all duration-300 self-start inline-block"
          >
            Voir le projet
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
