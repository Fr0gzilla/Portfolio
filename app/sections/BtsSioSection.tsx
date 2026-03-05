"use client";

import { motion } from "framer-motion";

export default function BtsSioSection() {
  return (
    <motion.section
      id="bts"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--text-primary)]">
        Qu&apos;est ce que le BTS SIO 🎓 ?
      </h2>

      <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto">
        <p>
          Avant de commencer a parler de moi, je vous propose de presenter
          en premier lieu ma filiere.
        </p>

        <p>
          Le <span className="font-semibold">BTS SIO</span> forme des
          administrateurs systemes/reseaux et developpeurs.
        </p>

        <p className="font-semibold text-xl mt-10 text-[var(--text-primary)]">
          Le BTS SIO propose deux specialites :
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* OPTION SISR */}
        <div className="glass-strong rounded-2xl p-6">
          <h3 className="text-2xl font-bold flex items-center gap-2 text-[var(--text-primary)]">
            <span className="text-[var(--accent)]">⌨️</span>
            Option <span className="text-[var(--accent)]">SISR</span>
          </h3>

          <p className="text-[var(--text-secondary)] leading-relaxed mt-3">
            L&apos;option SISR forme des professionnels des reseaux, serveurs et securite.
          </p>

          <p className="font-semibold mt-4 text-[var(--text-primary)]">Debouches :</p>

          <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] mt-2">
            <li>Admin systemes & reseaux</li>
            <li>Tech infrastructure</li>
            <li>Tech support</li>
          </ul>
        </div>

        {/* OPTION SLAM */}
        <div className="glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-2xl font-bold flex items-center gap-2 text-[var(--text-primary)]">
              <span className="text-[var(--accent)]">💻</span>
              Option <span className="text-[var(--accent)]">SLAM</span>
            </h3>

            <motion.span
              initial={{ x: 0 }}
              animate={{ x: [0, -4, 0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="text-[var(--accent)] font-semibold whitespace-nowrap text-sm"
            >
              👈 (la filiere que j&apos;ai choisie)
            </motion.span>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed mt-3">
            L&apos;option SLAM forme des developpeurs d&apos;applications.
          </p>

          <p className="font-semibold mt-4 text-[var(--text-primary)]">Debouches :</p>

          <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] mt-2">
            <li>Developpeur d&apos;applications</li>
            <li>Analyste programmeur</li>
            <li>Technicien d&apos;etudes</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
