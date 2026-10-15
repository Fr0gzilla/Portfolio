"use client";

import { useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// mono : logo noir, inversé en thème sombre (cf. .logo-mono dans globals.css).
type Skill = { name: string; img: string; mono?: boolean };

type Categorie = { titre: string; skills: Skill[] };

const categories: Categorie[] = [
  {
    titre: "Front-end",
    skills: [
      { name: "HTML", img: `${basePath}/logos/html-light.webp` },
      { name: "CSS", img: `${basePath}/logos/css-light.webp` },
      { name: "JavaScript", img: `${basePath}/logos/javascript-light.webp` },
      { name: "TypeScript", img: `${basePath}/logos/typescript.svg` },
      { name: "React", img: `${basePath}/logos/react.svg` },
      { name: "Next.js", img: `${basePath}/logos/nextjs.svg`, mono: true },
      { name: "TailwindCSS", img: `${basePath}/logos/tailwind.webp` },
    ],
  },
  {
    titre: "Back-end",
    skills: [
      { name: "Python", img: `${basePath}/logos/python.webp` },
      { name: "Flask", img: `${basePath}/logos/flask.svg` },
      { name: "SQLAlchemy", img: `${basePath}/logos/sqlalchemy.svg` },
      { name: "Node.js", img: `${basePath}/logos/nodejs.svg` },
      { name: "Java", img: `${basePath}/logos/java.webp` },
    ],
  },
  {
    titre: "Bases de données",
    skills: [
      { name: "MySQL", img: `${basePath}/logos/mysql.webp` },
      { name: "PostgreSQL", img: `${basePath}/logos/postgresql.svg` },
    ],
  },
  {
    titre: "Infra & DevOps",
    skills: [
      { name: "Linux (Ubuntu)", img: `${basePath}/logos/ubuntu-linux.webp` },
      { name: "Bash", img: `${basePath}/logos/bash.svg` },
      { name: "PowerShell", img: `${basePath}/logos/powershell.svg` },
      { name: "Terraform", img: `${basePath}/logos/terraform.svg` },
      { name: "Ansible", img: `${basePath}/logos/ansible.svg` },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="fade-section max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Mes compétences développement 🧑‍💻
      </h2>

      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl mb-14">
        Toutes ces connaissances ont été acquises via mes études, mon alternance et mes projets.
      </p>

      <OngletsCompetences />
    </section>
  );
}

// Une catégorie affichée à la fois, choisie via les onglets (flèches gauche/droite au clavier).
function OngletsCompetences() {
  const [actif, setActif] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = categories.length;
    const next = (actif + (e.key === "ArrowRight" ? 1 : n - 1)) % n;
    setActif(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Catégories de compétences"
        onKeyDown={onKeyDown}
        className="grid grid-cols-2 sm:inline-flex gap-1.5 p-1.5 rounded-2xl glass mb-8"
      >
        {categories.map((c, i) => {
          const selected = i === actif;
          return (
            <button
              key={c.titre}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${i}`}
              aria-selected={selected}
              aria-controls={`skills-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActif(i)}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                selected
                  ? "bg-[var(--accent)] text-[var(--bg-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10"
              }`}
            >
              {c.titre}
              <span
                className={`text-xs font-medium px-1.5 rounded-full ${
                  selected ? "bg-[var(--bg-primary)]/20" : "text-[var(--text-muted)]"
                }`}
              >
                {c.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tous les panneaux sont empilés dans la même cellule : la hauteur reste celle du plus
          grand, donc la page ne saute pas quand on change d'onglet. */}
      <div className="grid">
        {categories.map((c, i) => (
          <div
            key={c.titre}
            id={`skills-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`tab-${i}`}
            className={`[grid-area:1/1] self-start grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-10
                        transition-opacity duration-300 ${i === actif ? "opacity-100" : "opacity-0 invisible"}`}
          >
            {c.skills.map((tech) => (
              <div
                key={tech.name}
                className="glass-strong rounded-xl flex flex-col items-center justify-center
                           w-full aspect-[5/6] hover:border-[var(--accent)]/50
                           hover:shadow-[0_0_20px_var(--accent-glow)]
                           transition-colors duration-200"
              >
                <img
                  src={tech.img}
                  alt={`Logo ${tech.name}`}
                  loading="lazy"
                  decoding="async"
                  className={`h-11 w-11 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain mb-2 sm:mb-3${tech.mono ? " logo-mono" : ""}`}
                />
                <p className="font-semibold text-center text-xs sm:text-sm md:text-base leading-tight px-1 text-[var(--text-primary)]">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
