"use client";

import { useEffect } from "react";

// Stratégie révisée :
// 1. Par défaut, les sections sont entièrement visibles (cf. globals.css).
//    Si JS lent / désactivé, l'utilisateur voit immédiatement le contenu.
// 2. Si l'observer monte rapidement (avant que l'utilisateur ait scrollé),
//    on bascule l'état CSS via la classe `js-fade-ready` sur <html> et on
//    cache les sections hors viewport pour pouvoir les animer à l'entrée.
// 3. On utilise un seul IntersectionObserver partagé pour toutes les sections
//    plutôt qu'un par carte (ce que faisait Framer avec ses motion.* — coûteux).
export default function useFadeInOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsObserver = typeof window.IntersectionObserver !== "undefined";

    if (reducedMotion || !supportsObserver) {
      // Pas d'animation : on s'assure que tout reste visible.
      document.documentElement.classList.remove("js-fade-ready");
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-section")
    );
    if (sections.length === 0) return;

    // Activation du mode JS-driven : les sections passent à opacity 0 sauf celles
    // déjà dans le viewport (qui auront immédiatement is-visible).
    document.documentElement.classList.add("js-fade-ready");

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

    sections.forEach((el) => {
      // On flague tout de suite les sections déjà visibles pour éviter le clignotement.
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js-fade-ready");
    };
  }, []);
}
