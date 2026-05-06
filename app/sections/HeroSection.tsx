"use client";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-10 max-w-6xl mx-auto relative"
    >
      <div className="hero-accent-bar" />

      <h1 className="hero-title text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)]">
        Bienvenue, je suis <br />
        <span className="text-[var(--accent)]">GIOANETTI Marceau</span>
      </h1>

      <p className="hero-subtitle mt-4 text-lg sm:text-2xl text-[var(--text-secondary)]">
        Étudiant en 2<sup>e</sup> année de BTS SIO option SLAM
      </p>

      {/* Scroll indicator — animation CSS pure, ne tourne que si l'élément est visible */}
      <div
        aria-label="Indicateur de défilement"
        className="hero-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase">Scroll</span>
        <svg
          className="hero-scroll-chevron"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 13l5 5 5-5" />
          <path d="M7 7l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
