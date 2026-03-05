"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-strong rounded-2xl p-6 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_25px_var(--accent-glow)]"
    >
      <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </motion.div>
  );
}
