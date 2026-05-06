"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const next = window.scrollY > 400;
      setVisible((prev) => (prev !== next ? next : prev));
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-strong
                  flex items-center justify-center
                  hover:bg-[var(--accent)] hover:text-[var(--bg-primary)]
                  text-[var(--text-secondary)] transition-all duration-200
                  ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
