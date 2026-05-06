"use client";

import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import { projets, type Projet } from "../projets/data";

const HOVER_DELAY = 400;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="fade-section max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">Projets</h2>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <div className="grid sm:grid-cols-2 gap-6 items-start">
        {projets.map((projet, i) => (
          <ProjetCarte key={projet.slug} projet={projet} fullWidth={i >= 2} />
        ))}
      </div>
    </section>
  );
}

function ProjetCarte({ projet, fullWidth }: { projet: Projet; fullWidth: boolean }) {
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    timer.current = setTimeout(() => setHovered(true), HOVER_DELAY);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setHovered(false);
  }, []);

  const externalLink = projet.liens.find((l) => l.url.startsWith("http"));

  return (
    <div
      onMouseEnter={projet.preview ? handleMouseEnter : undefined}
      onMouseLeave={projet.preview ? handleMouseLeave : undefined}
      className={`group relative glass-strong rounded-2xl p-6 flex flex-col transition-colors duration-200
                  hover:border-[var(--accent)]/50
                  ${fullWidth ? "sm:col-span-2" : ""}`}
    >
      <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
        {projet.titre} <span aria-hidden="true">{projet.emoji}</span>
      </h3>

      {projet.preview && (
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ gridTemplateRows: hovered ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="rounded-xl overflow-hidden border border-[var(--accent)]/30 mb-4">
              <img
                src={projet.preview}
                alt={`Aperçu de l'application ${projet.titre}`}
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{projet.resume}</p>

      <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
        Technologies clés
      </h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {projet.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3">
        <Link
          href={`${basePath}/projets/${projet.slug}`}
          className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold rounded-lg transition-colors duration-200"
        >
          Voir la fiche complète
        </Link>
        {externalLink && (
          <a
            href={externalLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 glass text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold rounded-lg transition-colors duration-200"
          >
            {externalLink.label}
          </a>
        )}
      </div>
    </div>
  );
}
