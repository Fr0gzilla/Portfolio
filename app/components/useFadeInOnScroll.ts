"use client";

import { useEffect } from "react";

// Un seul IntersectionObserver partagé entre tous les éléments .fade-section.
// Beaucoup plus léger que d'instancier un Observer par carte / par section comme le faisait
// chaque <motion.section> de Framer Motion.
export default function useFadeInOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (
      typeof window.IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Pas de support ou utilisateur en reduced-motion : on rend tout visible immédiatement.
      document.querySelectorAll<HTMLElement>(".fade-section").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    document.querySelectorAll<HTMLElement>(".fade-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
