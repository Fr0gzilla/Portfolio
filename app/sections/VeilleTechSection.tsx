"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sujetsVeille } from "./veilleData";

export default function VeilleTechSection() {
  const [openId, setOpenId] = useState<string | null>(sujetsVeille[0]?.id ?? null);

  return (
    <motion.section
      id="veille"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
        Veille technologique <span aria-hidden="true">📡</span>
      </h2>
      <div className="h-[3px] w-24 bg-[var(--accent)] mb-8" />

      <p className="text-[var(--text-secondary)] leading-relaxed max-w-4xl mb-10">
        Faire de la veille fait partie intégrante du métier de développeur, particulièrement
        en cybersécurité où le paysage évolue chaque semaine. J&apos;ai structuré ma veille autour
        de trois axes complémentaires : <span className="text-[var(--accent)] font-semibold">sécurité
        de la chaîne d&apos;approvisionnement logicielle</span>,{" "}
        <span className="text-[var(--accent)] font-semibold">réglementation européenne cybersécurité</span>{" "}
        (NIS2, DORA, CRA) et <span className="text-[var(--accent)] font-semibold">IA générative dans le
        développement logiciel</span>. Mon objectif est moins de tout lire que de garder une vue
        d&apos;ensemble cohérente pour pouvoir argumenter mes choix techniques.
      </p>

      {/* Outils & méthode */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 sm:p-8 mb-10 transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_var(--accent-glow)]"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--text-primary)]">
          Outils & méthode
        </h3>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
              Agrégation
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="text-[var(--accent)] font-semibold">Feedly</span> pour les flux RSS,
              quelques newsletters par e-mail et une liste Mastodon dédiée à l&apos;infosec.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
              Capitalisation
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Les articles intéressants sont annotés et résumés en mes propres mots, puis classés
              par thématique pour pouvoir les recroiser au moment où une question se pose dans un projet.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
              Cadence
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Une session courte chaque semaine pour balayer les flux, et un point plus posé une
              fois par mois pour synthétiser les tendances.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Sujets de veille (cartes dépliables) */}
      <div className="flex flex-col gap-4">
        {sujetsVeille.map((sujet) => {
          const isOpen = openId === sujet.id;
          const panelId = `veille-panel-${sujet.id}`;
          return (
            <motion.div
              key={sujet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--accent)]/50"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : sujet.id)}
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls={panelId}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-[var(--accent)]/5 transition-colors"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {sujet.titre} <span aria-hidden="true">{sujet.emoji}</span>
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {sujet.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className={`text-2xl text-[var(--accent)] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 border-t border-[var(--card-border)]"
                >
                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
                        Pourquoi ce sujet
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {sujet.motivations}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-1">
                        <span className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]">
                          {sujet.frequence}
                        </span>
                        {sujet.outils.map((outil) => (
                          <span
                            key={outil}
                            className="px-3 py-1 text-xs font-medium rounded-full glass text-[var(--accent)]"
                          >
                            {outil}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
                        Sources principales
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {sujet.sources.map((source) => (
                          <li key={source.url}>
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                            >
                              <span className="px-2 py-0.5 text-[10px] uppercase tracking-wide rounded glass text-[var(--text-muted)]">
                                {source.type}
                              </span>
                              {source.nom}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">
                      Articles synthétisés
                    </h4>
                    {sujet.articles.length === 0 ? (
                      <p className="text-sm italic text-[var(--text-muted)]">
                        Aucun article synthétisé pour le moment — la veille est en cours, des
                        synthèses seront ajoutées progressivement.
                      </p>
                    ) : (
                      <ul className="flex flex-col gap-3">
                        {sujet.articles.map((art) => (
                          <li
                            key={art.id}
                            className="glass rounded-xl p-4 transition-all duration-300 hover:border-[var(--accent)]/50"
                          >
                            <div className="flex items-baseline justify-between gap-2 flex-wrap mb-1">
                              <a
                                href={art.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                              >
                                {art.titre}
                              </a>
                              <span className="text-xs text-[var(--text-muted)]">
                                {art.source} — {art.date}
                              </span>
                            </div>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                              {art.resume}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {art.themes.map((theme) => (
                                <span
                                  key={theme}
                                  className="px-2 py-0.5 text-[11px] font-medium rounded-full glass text-[var(--accent)]"
                                >
                                  {theme}
                                </span>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
