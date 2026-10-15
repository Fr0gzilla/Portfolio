const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// wide : logo texte (wordmark), affiché plus large que les logos carrés.
const tools: { name: string; img: string; wide?: boolean }[] = [
  { name: "VSCode", img: `${basePath}/logos/vscode.webp` },
  { name: "GitHub", img: `${basePath}/logos/github-light.webp` },
  { name: "GitLab", img: `${basePath}/logos/gitlab.webp` },
  { name: "Kali Linux", img: `${basePath}/logos/kali-linux.webp` },
  { name: "Palo Alto", img: `${basePath}/logos/palo-alto.webp` },
  { name: "Docker", img: `${basePath}/logos/docker.svg` },
  { name: "Supabase", img: `${basePath}/logos/supabase.svg` },
  { name: "VMware vCenter", img: `${basePath}/logos/vmware.svg`, wide: true },
  { name: "Figma", img: `${basePath}/logos/figma.svg` },
];

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="fade-section max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Mes outils / logiciels
      </h2>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl mb-14">
        Voici les outils et logiciels que j&apos;utilise dans mes projets et que j&apos;ai pratiqués en alternance.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="glass-strong rounded-xl flex flex-col items-center justify-center
                       w-full aspect-[5/6] hover:border-[var(--accent)]/50
                       hover:shadow-[0_0_20px_var(--accent-glow)]
                       transition-colors duration-200"
          >
            <img
              src={tool.img}
              alt={`Logo ${tool.name}`}
              loading="lazy"
              decoding="async"
              className={`${tool.wide ? "w-28 md:w-36" : "w-16 md:w-20"} h-16 md:h-20 object-contain mb-3`}
            />
            <p className="font-semibold text-center text-sm md:text-base text-[var(--text-primary)]">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
