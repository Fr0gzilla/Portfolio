export default function AboutSection() {
  return (
    <section
      id="about"
      className="fade-section max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-[var(--text-primary)]">
        À propos
      </h2>

      <div className="glass-strong rounded-2xl p-6 sm:p-8">
        <div className="space-y-6 text-lg leading-relaxed text-[var(--text-secondary)]">
          <p>
            Salut, moi c&apos;est{" "}
            <span className="text-[var(--accent)] font-semibold">Marceau</span> ! Je suis en 3
            <sup>e</sup> année de Bachelor Développement Informatique à Sup de Vinci, après un BTS SIO
            option SLAM à l&apos;ESNA de Bruz.
          </p>

          <p>
            Ici, vous trouverez les projets que j&apos;ai faits en cours, et ceux que je développe
            pour le plaisir.
          </p>

          <p>
            Je cherche une{" "}
            <span className="text-[var(--accent)] font-semibold">alternance en développement</span>.
            Mon CV est juste en dessous, n&apos;hésitez pas à y jeter un œil !
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv`}
            className="px-10 py-4 rounded-xl border border-[var(--accent)] text-[var(--accent)] text-xl font-semibold hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-colors duration-200"
          >
            Voir mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
