"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function useTypingEffect(text: string, speed = 60, delay = 800) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export default function HeroSection() {
  const subtitle = "Étudiant en 2e année de BTS SIO option SLAM";
  const { displayed, done } = useTypingEffect(subtitle, 45, 1000);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-10 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1 }}
        className="h-[3px] bg-[var(--accent)] mb-6"
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)]"
      >
        Bienvenue, je suis <br />
        <span className="text-[var(--accent)]">GIOANETTI Marceau</span>
      </motion.h1>

      <p className="mt-4 text-lg sm:text-2xl text-[var(--text-secondary)] min-h-[2em]">
        {displayed}
        {!done && (
          <span className="inline-block w-[2px] h-[1em] bg-[var(--accent)] ml-1 animate-pulse align-middle" />
        )}
      </p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5" />
            <path d="M7 7l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
