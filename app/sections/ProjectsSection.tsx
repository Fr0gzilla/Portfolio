import Link from "next/link";
import { projets, projetsEnPreparation, type Projet } from "../projets/data";

const typeLabels: Record<Projet["type"], string> = {
  perso: "Projet perso",
  pro: "Alternance",
  scolaire: "Projet d'études",
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="fade-section max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">Projets</h2>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <div className="grid md:grid-cols-2 gap-6">
        {projets.map((projet) => (
          <ProjetCarte key={projet.slug} projet={projet} />
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-16 mb-2 text-[var(--text-primary)]">En préparation</h3>
      <p className="text-[var(--text-secondary)] mb-6">
        Des projets que je viens de lancer. Pas encore de code à montrer, mais ça arrive !
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {projetsEnPreparation.map((p) => (
          <div key={p.titre} className="glass rounded-xl p-5">
            <p className="font-semibold text-[var(--text-primary)] mb-1">{p.titre}</p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{p.resume}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjetCarte({ projet }: { projet: Projet }) {
  const externalLink = projet.liens.find((l) => l.url.startsWith("http"));

  return (
    <article
      className="glass-strong rounded-2xl overflow-hidden flex flex-col transition-colors duration-200
                 hover:border-[var(--accent)]/50"
    >
      <Visuel projet={projet} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3 className="text-2xl font-bold text-[var(--text-primary)]">{projet.titre}</h3>
          <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full glass text-[var(--text-secondary)]">
            {typeLabels[projet.type]}
          </span>
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{projet.resume}</p>

        <div className="flex flex-wrap gap-2 mb-6">
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
            href={`/projets/${projet.slug}`}
            className="px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--bg-primary)] font-semibold rounded-lg transition-colors duration-200"
          >
            Voir le projet
          </Link>
          {externalLink && (
            <a
              href={externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 glass text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold rounded-lg transition-colors duration-200"
            >
              {externalLink.url.includes("github.com") ? "GitHub" : externalLink.label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// Capture de l'appli, si le projet en a une.
function Visuel({ projet }: { projet: Projet }) {
  if (projet.preview) {
    return (
      <img
        src={projet.preview}
        alt={`Aperçu de ${projet.titre}`}
        loading="lazy"
        decoding="async"
        className="w-full aspect-[2/1] object-cover object-top border-b border-[var(--card-border)]"
      />
    );
  }
  return null;
}
