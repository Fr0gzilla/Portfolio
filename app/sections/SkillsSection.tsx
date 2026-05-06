const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const skills = [
  { name: "HTML", img: `${basePath}/logos/html-light.webp` },
  { name: "CSS", img: `${basePath}/logos/css-light.webp` },
  { name: "JavaScript", img: `${basePath}/logos/javascript-light.webp` },
  { name: "Java", img: `${basePath}/logos/java.webp` },
  { name: "TailwindCSS", img: `${basePath}/logos/tailwind.webp` },
  { name: "Python", img: `${basePath}/logos/python.webp` },
  { name: "Linux (Ubuntu)", img: `${basePath}/logos/ubuntu-linux.webp` },
  { name: "MySQL", img: `${basePath}/logos/mysql.webp` },
  { name: "TypeScript", img: `${basePath}/logos/typescript.svg` },
  { name: "PHP", img: `${basePath}/logos/php.svg` },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="fade-section max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Mes compétences développement 🧑‍💻
      </h2>

      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl mb-14">
        Toutes ces connaissances ont été acquises via mes études et mes projets.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
        {skills.map((tech) => (
          <div
            key={tech.name}
            className="glass-strong rounded-xl flex flex-col items-center justify-center
                       w-full aspect-[5/6] hover:border-[var(--accent)]/50
                       hover:shadow-[0_0_20px_var(--accent-glow)]
                       transition-colors duration-200"
          >
            <img
              src={tech.img}
              alt={`Logo ${tech.name}`}
              loading="lazy"
              decoding="async"
              className="h-16 w-16 md:h-20 md:w-20 object-contain mb-3"
            />
            <p className="font-semibold text-center text-sm md:text-base text-[var(--text-primary)]">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
