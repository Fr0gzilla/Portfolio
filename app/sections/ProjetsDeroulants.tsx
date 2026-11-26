"use client";

import { useState, type ReactNode } from "react";

// Affiche les premiers projets, et une flèche pour dérouler les autres.
// Les projets masqués restent dans la page (attribut hidden) : les moteurs de recherche les voient.
export default function ProjetsDeroulants({
  premiers,
  reste,
  nombreReste,
}: {
  premiers: ReactNode;
  reste: ReactNode;
  nombreReste: number;
}) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">{premiers}</div>

      {nombreReste > 0 && (
        <>
          <div
            id="autres-projets"
            hidden={!ouvert}
            className="grid md:grid-cols-2 gap-6 mt-6 fade-in-projets"
          >
            {reste}
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => setOuvert((o) => !o)}
              aria-expanded={ouvert}
              aria-controls="autres-projets"
              className="group flex flex-col items-center gap-1 px-5 py-2 rounded-xl text-[var(--text-secondary)]
                         hover:text-[var(--accent)] transition-colors duration-200"
            >
              <span className="text-sm font-medium">
                {ouvert
                  ? "Masquer"
                  : `Voir ${nombreReste === 1 ? "l'autre projet" : `les ${nombreReste} autres projets`}`}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className={`w-6 h-6 transition-transform duration-300 ${ouvert ? "rotate-180" : "group-hover:translate-y-0.5"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
}
