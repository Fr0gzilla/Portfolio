"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: "dark", toggleTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

// Lit le thème déjà appliqué par le script inline du layout (cf. ThemeInitScript).
// Aucun return null : on rend le tree dès le premier render — la classe est déjà sur <html>.
export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) setTheme("light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
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
// Il s'exécute synchroneme nt avant l'hydratation React et applique la classe sur <html>,
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
