"use client";

import { useState } from "react";

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

      <div className="flex flex-col gap-4">
        {categories.map((cat) => (
          <CategorieDepliable key={cat.titre} cat={cat} />
        ))}
      </div>
    </section>
  );
}

// Catégorie repliée par défaut : un clic sur le titre déroule les compétences
// (même transition grid-template-rows que l'aperçu des cartes projets).
function CategorieDepliable({ cat }: { cat: Categorie }) {
  const [ouvert, setOuvert] = useState(false);
  const panelId = `skills-${cat.titre.toLowerCase().replace(/[^a-z]+/g, "-")}`;

  return (
    <div className="glass-strong rounded-2xl px-5 sm:px-6">
      <button
        type="button"
        onClick={() => setOuvert((o) => !o)}
        aria-expanded={ouvert}
        aria-controls={panelId}
        className="w-full flex items-center gap-3 py-4 text-left group"
      >
        <h3 className="text-xl font-semibold text-[var(--accent)]">{cat.titre}</h3>
        <span className="text-sm text-[var(--text-muted)]">({cat.skills.length})</span>
        <svg
          className={`ml-auto text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-transform duration-300 ${
            ouvert ? "rotate-180" : ""
          }`}
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
          ouvert ? "opacity-100" : "opacity-0"
        }`}
        style={{ gridTemplateRows: ouvert ? "1fr" : "0fr" }}
        inert={!ouvert}
      >
        {/* marge négative + padding : laisse la place au halo de survol sans être rogné */}
        <div className="overflow-hidden -mx-4 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 pt-3 pb-6">
            {cat.skills.map((tech) => (
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
                  className={`h-16 w-16 md:h-20 md:w-20 object-contain mb-3${tech.mono ? " logo-mono" : ""}`}
                />
                <p className="font-semibold text-center text-sm md:text-base text-[var(--text-primary)]">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
