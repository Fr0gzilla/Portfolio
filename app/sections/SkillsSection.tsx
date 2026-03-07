"use client";

import { motion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const skills = [
  { name: "HTML", img: `${basePath}/logos/html-light.png` },
  { name: "CSS", img: `${basePath}/logos/css-light.png` },
  { name: "JavaScript", img: `${basePath}/logos/javascript-light.png` },
  { name: "Java", img: `${basePath}/logos/java.png` },
  { name: "TailwindCSS", img: `${basePath}/logos/tailwind.png` },
  { name: "Python", img: `${basePath}/logos/python.png` },
  { name: "Linux (Ubuntu)", img: `${basePath}/logos/ubuntu-linux.png` },
  { name: "MySQL", img: `${basePath}/logos/mysql.png` },
  { name: "TypeScript", img: `${basePath}/logos/typescript.svg` },
  { name: "PHP", img: `${basePath}/logos/php.svg` },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Mes compétences développement 🧑‍💻
      </h2>

      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl mb-14">
        Toutes ces connaissances ont été acquises via mes études et mes projets.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
        {skills.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07, y: -4 }}
            className="glass-strong rounded-xl flex flex-col items-center justify-center
                       w-full aspect-[5/6] hover:border-[var(--accent)]/50
                       hover:shadow-[0_0_20px_var(--accent-glow)]
                       transition duration-300"
          >
            <img src={tech.img} alt={tech.name} className="h-16 w-16 md:h-20 md:w-20 object-contain mb-3" />
            <p className="font-semibold text-center text-sm md:text-base text-[var(--text-primary)]">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
