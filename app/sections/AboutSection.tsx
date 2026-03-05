"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-[var(--text-primary)]">
        À propos de moi
      </h2>

      <div className="glass-strong rounded-2xl p-6 sm:p-8">
        <div className="space-y-6 text-lg leading-relaxed text-[var(--text-secondary)]">
          <p>
            Salut, moi c&apos;est
            <span className="text-[var(--accent)] font-semibold"> Marceau Gioanetti</span> 👋
          </p>

          <p>
            Je suis actuellement étudiant à l&apos;ESNA de Bruz 🗺️ en deuxième année de
            <span className="font-semibold"> BTS SIO</span>
            {" "}dans l&apos;option <span className="font-semibold">SLAM</span> orientée développement 💻
          </p>

          <p>
            Toujours en cours d&apos;étude 🎓, je vous propose sur ce portfolio de découvrir
            mes études et projets que j&apos;ai pu entreprendre.
          </p>

          <p>
            Vous retrouverez ci-dessous mon
            <span className="text-[var(--accent)] font-semibold"> CV</span>
            {" "}ainsi que mes différents
            <span className="text-[var(--accent)] font-semibold"> projets</span> 👩‍💻
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/cv"
            className="px-10 py-4 rounded-xl border border-[var(--accent)] text-[var(--accent)] text-xl font-semibold hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300"
          >
            CV
          </a>
        </div>
      </div>
    </motion.section>
  );
}
