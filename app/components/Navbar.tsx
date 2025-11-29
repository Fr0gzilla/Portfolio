"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  // Détection automatique de la section active lors du scroll
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "bts",
      "skills",
      "tools",
      "projects",
      "parcours",
      "scolaire",
      "contact",
    ];

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const sec of sections) {
        const element = document.getElementById(sec);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + element.offsetHeight;

          if (scrollPos >= top && scrollPos <= bottom) {
            setActive(sec);
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-black border-r border-white/10 p-6 flex flex-col items-center justify-between z-50">

      {/* Haut */}
      <div className="flex flex-col items-center w-full">

        {/* Photo */}
        <div className="w-32 h-32 rounded-full overflow-hidden border border-cyan-400 shadow-[0_0_20px_#00eaff55] transition hover:shadow-[0_0_40px_#00eaff] hover:scale-105">
          <img 
            src="/profile.jpg"
            alt="photo de profil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nom */}
        <h1 className="text-lg font-bold mt-4 text-white dark:text-black text-center">
          GIOANETTI Marceau
        </h1>

        <div className="w-16 h-[2px] bg-cyan-400 my-4"></div>

        {/* Menu */}
        <nav className="flex flex-col gap-4 text-sm w-full">
          {[
            { id: "home",     label: "Accueil" },
            { id: "about",    label: "À propos" },
            { id: "bts",      label: "BTS SIO" },
            { id: "skills",   label: "Compétences" },
            { id: "tools",    label: "Outils / logiciels" },
            { id: "projects", label: "Projets" },
            { id: "parcours", label: "Parcours Professionnel" },
            { id: "scolaire", label: "Parcours Scolaire" },
            { id: "contact",  label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                relative block py-1 px-4 text-center transition
                hover:text-cyan-400
                ${active === item.id 
                  ? "text-cyan-400 font-semibold" 
                  : "text-gray-300 dark:text-gray-600"}`}
            >
              {active === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-cyan-400 rounded-r"></span>
              )}
              {item.label}
            </a>
          ))}
        </nav>
      </div>

    </aside>
  );
}
