"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marceau-gioanetti-b36085305",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193V7.216h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Fr0gzilla",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    window.location.href = `mailto:[adresse retirée]?subject=Contact Portfolio&body=${encodeURIComponent(message)}%0A%0ADe: ${encodeURIComponent(email)}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Contact
      </h2>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* COLONNE GAUCHE - Accroche + infos + socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Envie de collaborer ?
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              N&apos;hesitez pas a me contacter pour discuter d&apos;un projet, d&apos;une opportunite ou simplement pour echanger. Je suis toujours ouvert aux nouvelles rencontres et collaborations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">Localisation</p>
                  <p className="text-[var(--text-primary)] font-medium">Bruz, France</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">Email</p>
                  <p className="text-[var(--text-primary)] font-medium">[adresse retirée]</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">Telephone</p>
                  <p className="text-[var(--text-primary)] font-medium">[numéro retiré]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="flex gap-4 justify-center">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, y: -4 }}
                className="w-12 h-12 rounded-xl glass flex items-center justify-center
                           text-[var(--text-secondary)] hover:text-[var(--accent)]
                           hover:border-[var(--accent)]/50 hover:shadow-[0_0_15px_var(--accent-glow)]
                           transition-all duration-300"
              >
                {social.svg}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* COLONNE DROITE - Formulaire */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
            Envoyer un message
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[var(--text-muted)]" htmlFor="email">
                Votre email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="exemple@email.com"
                className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] text-[var(--text-primary)]
                  border border-[var(--input-border)] focus:outline-none focus:border-[var(--input-focus)]
                  placeholder:text-[var(--text-muted)]/50 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-[var(--text-muted)]" htmlFor="message">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Bonjour, je souhaite..."
                className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] text-[var(--text-primary)]
                  border border-[var(--input-border)] focus:outline-none focus:border-[var(--input-focus)]
                  placeholder:text-[var(--text-muted)]/50 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)]
                         text-[var(--bg-primary)] font-semibold rounded-lg transition-all duration-300
                         active:scale-95 self-start"
            >
              {sent ? "Message envoye !" : "Envoyer"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
