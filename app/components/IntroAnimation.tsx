"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("introPlayed") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (done) {
      sessionStorage.setItem("introPlayed", "true");
    }
  }, [done]);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg-primary)]"
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Ligne accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[3px] bg-[var(--accent)] mb-6"
            />

            {/* Nom */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-3xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight"
            >
              GIOANETTI <span className="text-[var(--accent)]">Marceau</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-3 text-sm sm:text-base text-[var(--text-muted)] tracking-widest uppercase"
            >
              Portfolio
            </motion.p>

            {/* Ligne qui s'étend puis trigger la fin */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 1.3 }}
              onAnimationComplete={() => setTimeout(() => setDone(true), 300)}
              className="h-[1px] bg-[var(--accent)]/40 mt-6"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={done ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
