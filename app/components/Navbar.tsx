"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const tableauSyntheseUrl = `${basePath}/synthese`;

const links = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "bts", label: "BTS SIO" },
  { id: "skills", label: "Compétences" },
  { id: "tools", label: "Outils" },
  { id: "projects", label: "Projets" },
  { id: "veille", label: "Veille" },
  { id: "parcours", label: "Parcours Pro" },
  { id: "scolaire", label: "Scolaire" },
  { id: "contact", label: "Contact" },
];

function PdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  // On garde la dernière valeur connue dans une ref pour éviter les setState inutiles
  // (qui re-rendent toute la navbar à chaque scroll, même sans changement).
  const activeRef = useRef("home");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number | null = null;
    // Cache des éléments du DOM : on évite document.getElementById() à chaque scroll.
    let cached: { id: string; el: HTMLElement }[] = [];

    const refreshCache = () => {
      cached = links
        .map((l) => ({ id: l.id, el: document.getElementById(l.id) }))
        .filter((x): x is { id: string; el: HTMLElement } => x.el !== null);
    };

    const update = () => {
      rafId = null;
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const { id, el } of cached) {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos <= bottom) {
          if (activeRef.current !== id) {
            activeRef.current = id;
            setActive(id);
          }
          break; // une seule section active à la fois
        }
      }
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    refreshCache();
    // Si la page est rendue dans /projets ou autre, on recale au montage ; sinon les ids
    // de section ne sont pas encore dans le DOM et le cache reste vide jusqu'au scroll.
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", refreshCache, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", refreshCache);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
        >
          M. GIOANETTI
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                active === link.id
                  ? "text-[var(--accent)] bg-[var(--accent)]/10 font-semibold"
                  : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Bouton tableau de synthèse (desktop) */}
          <a
            href={tableauSyntheseUrl}
            aria-label="Ouvrir le tableau de synthèse"
            className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg
                       border border-[var(--accent)] text-[var(--accent)]
                       hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-colors"
          >
            <PdfIcon />
            <span>Tableau de synthèse</span>
          </a>

          <ThemeToggleButton />

          {/* Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — animation CSS pure plutôt que Framer AnimatePresence */}
      {menuOpen && (
        <nav className="lg:hidden overflow-hidden glass mobile-menu-open">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className={`px-4 py-3 rounded-lg text-sm transition-colors ${
                  active === link.id
                    ? "text-[var(--accent)] bg-[var(--accent)]/10 font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={tableauSyntheseUrl}
              onClick={handleLinkClick}
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold border border-[var(--accent)]
                         text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)]
                         transition-colors flex items-center gap-2"
            >
              <PdfIcon />
              <span>Tableau de synthèse</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
