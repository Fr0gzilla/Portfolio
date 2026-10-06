"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: "dark", toggleTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

// Source de vérité : la classe posée sur <html> (script inline avant hydratation,
// cf. themeInitScript, puis toggleTheme). On s'y abonne plutôt que de dupliquer
// l'info dans un state React, ce qui demandait un setState dans un useEffect
// (interdit par react-hooks/set-state-in-effect) et laissait l'icône désynchronisée.
function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

// Lit le thème déjà appliqué par le script inline du layout (cf. ThemeInitScript).
// Aucun return null : on rend le tree dès le premier render — la classe est déjà sur <html>.
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const next: Theme = document.documentElement.classList.contains("light")
      ? "dark"
      : "light";
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage indisponible (mode privé Safari, etc.) — on continue sans persister.
    }
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.classList.toggle("light", next === "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Script inline injecté dans <head> via dangerouslySetInnerHTML.
// Il s'exécute synchronement avant l'hydratation React et applique la classe sur <html>,
// ce qui évite le flash + le bloquage de rendu (return null) du précédent ThemeProvider.
export const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    var root = document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;
