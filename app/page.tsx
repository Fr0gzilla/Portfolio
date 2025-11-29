"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="pt-20 px-10 text-white">

      {/* ---------------------- HERO ---------------------- */}
      <section className="min-h-screen flex flex-col justify-center">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1 }}
          className="h-[3px] bg-cyan-400 mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-white"
        >
          Bienvenue, je suis <br />
          <span className="text-cyan-400">GIOANETTI Marceau</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-2xl opacity-90"
        >
          Étudiant en 2ᵉ année de BTS SIO option SLAM
        </motion.p>

      </section>

      {/* ---------------------- SECTION ABOUT ---------------------- */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto py-28"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          À propos de moi
        </h2>

        <div className="space-y-6 opacity-90 text-lg leading-relaxed">

          <p>
            Salut, moi c'est 
            <span className="text-cyan-400 font-semibold"> Marceau Gioanetti</span> 👋
          </p>

          <p>
            Je suis actuellement étudiant à l'ESNA de Bruz 🗺️ en deuxième année de 
            <span className="font-semibold"> BTS SIO</span> 
            dans l'option <span className="font-semibold">SLAM</span> orientée développement 💻
          </p>

          <p>
            Toujours en cours d'étude 🎓, je vous propose sur ce portfolio de découvrir 
            mes études et projets que j'ai pu entreprendre.
          </p>

          <p>
            Vous retrouverez ci-dessous mon 
            <span className="text-cyan-400 font-semibold"> CV</span> 
            ainsi que mes différents 
            <span className="text-cyan-400 font-semibold"> projets</span> 👩‍💻
          </p>

        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/cv.pdf"
            target="_blank"
            className="px-10 py-4 rounded-xl border border-cyan-400 text-cyan-400 text-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            CV
          </a>
        </div>
      </motion.section>

      {/* ---------------------- SECTION BTS SIO ---------------------- */}
      <motion.section
        id="bts"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-28"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">
          Qu'est ce que le BTS SIO 🎓 ?
        </h2>

        <div className="space-y-6 text-lg opacity-90 leading-relaxed max-w-4xl mx-auto">
          <p>
            Avant de commencer à parler de moi, je vous propose de présenter 
            en premier lieu ma filière.
          </p>

          <p>
            Le <span className="font-semibold">BTS SIO</span> forme des 
            administrateurs systèmes/réseaux et développeurs.
          </p>

          <p className="font-semibold text-xl mt-10">
            Le BTS SIO propose deux spécialités :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12">

          {/* OPTION SISR */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-cyan-400">⌨️</span>
              Option <span className="text-cyan-400">SISR</span>
            </h3>

            <p className="opacity-90 leading-relaxed">
              L’option SISR forme des professionnels des réseaux, serveurs et sécurité.
            </p>

            <p className="font-semibold mt-4">Débouchés :</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Admin systèmes & réseaux</li>
              <li>Tech infrastructure</li>
              <li>Tech support</li>
            </ul>
          </div>

          {/* OPTION SLAM */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-cyan-400">💻</span>
                Option <span className="text-cyan-400">SLAM</span>
              </h3>

              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, -4, 0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="text-cyan-400 font-semibold whitespace-nowrap"
              >
                👈 (la filière que j'ai choisie)
              </motion.span>
            </div>

            <p className="opacity-90 leading-relaxed mt-1">
              L’option SLAM forme des développeurs d’applications.
            </p>

            <p className="font-semibold mt-4">Débouchés :</p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Développeur d’applications</li>
              <li>Analyste programmeur</li>
              <li>Technicien d’études</li>
            </ul>
          </div>

        </div>
      </motion.section>

      {/* ---------------------- SECTION SKILLS ---------------------- */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-28 text-white"
      >
        <h2 className="text-4xl font-bold mb-3">
          Mes compétences développement 🧑‍💻
        </h2>

        <div className="h-[3px] w-24 bg-cyan-400 mb-10"></div>

        <p className="text-lg opacity-90 leading-relaxed max-w-4xl mb-14">
          Toutes ces connaissances ont été acquises via mes études et mes projets.
        </p>

        {(() => {
          const skills = [
            { name: "HTML", img: "/logos/html-light.png" },
            { name: "CSS", img: "/logos/css-light.png" },
            { name: "JavaScript", img: "/logos/javascript-light.png" },
            { name: "Java", img: "/logos/java.png" },
            { name: "TailwindCSS", img: "/logos/tailwind.png" },
            { name: "Python", img: "/logos/python.png" },
            { name: "Linux (Ubuntu)", img: "/logos/ubuntu-linux.png" },
            { name: "MySQL", img: "/logos/mysql.png" },
            { name: "PowerQuery", img: "/logos/Powerquery.png" },
            { name: "VBA", img: "/logos/VBA.png" },
          ];

          return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-center">
              {skills.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.07 }}
                  className="bg-white text-black rounded-xl shadow-md border
                             border-neutral-200 hover:border-cyan-400
                             transition duration-300 flex flex-col items-center 
                             justify-center w-40 h-48"
                >
                  <img src={tech.img} alt={tech.name} className="h-20 w-20 object-contain mb-3" />
                  <p className="font-semibold text-center">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          );
        })()}

      </motion.section>

      {/* ---------------------- SECTION OUTILS ---------------------- */}
      <motion.section
        id="tools"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-28 text-white"
      >
        <h2 className="text-4xl font-bold mb-3">Mes outils / logiciels</h2>
        <div className="h-[3px] w-24 bg-cyan-400 mb-10"></div>

        <p className="text-lg opacity-90 leading-relaxed max-w-4xl mb-14">
          Toutes ces connaissances ont été acquises…
        </p>

        {(() => {
          const tools = [
            { name: "VSCode", img: "/logos/vscode.png" },
            { name: "GitHub", img: "/logos/github-light.png" },
            { name: "GitLab", img: "/logos/gitlab.png" },
            { name: "Kali Linux", img: "/logos/kali-linux.png" },
            { name: "Palo Alto", img: "/logos/palo-alto.png" },
            { name: "Microsoft Excel", img: "/logos/microsoft-excel.png" },
          ];

          return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-center">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.07 }}
                  className="bg-white text-black rounded-xl shadow-md border
                             border-neutral-200 hover:border-cyan-400 transition 
                             duration-300 flex flex-col items-center justify-center 
                             w-40 h-48"
                >
                  <img src={tool.img} alt={tool.name} className="h-20 w-20 object-contain mb-3" />
                  <p className="font-semibold text-center">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          );
        })()}

      </motion.section>

      {/* ---------------------- SECTION PROJECTS ---------------------- */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-28 text-white"
      >
        <h2 className="text-4xl font-bold mb-3">Projets</h2>
        <div className="h-[3px] w-24 bg-cyan-400 mb-10"></div>

        <div className="grid sm:grid-cols-2 gap-6">

          {/* BEATSHELF */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-neutral-900 text-white rounded-xl border 
                       border-neutral-700 p-6 transition-all duration-300 hover:border-cyan-400 
                       hover:shadow-[0_0_25px_5px_rgba(0,255,255,0.4)]"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                            bg-cyan-400 blur-xl transition-all duration-300"></div>

            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Beatshelf 🎧
            </h3>

            <p className="text-neutral-300 leading-relaxed relative z-10">
              Beatshelf est une application de gestion musicale permettant d’ajouter, organiser et consulter des albums via une interface moderne inspirée des plateformes de streaming. Développé en Java et MySQL, le projet intègre un CRUD complet, une architecture MVC et un système de recherche.
            </p>

            <button
              className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 
                         text-black font-semibold rounded-lg transition-all duration-300 
                         relative z-20"
            >
              Voir le projet
            </button>
          </motion.div>

          {/* PROJET 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 p-6 rounded-xl transition shadow-lg 
                       hover:shadow-cyan-400/20"
          >
            <h3 className="text-xl font-semibold mb-2">Projet 2</h3>
            <p>Un autre projet stylé que tu as réalisé.</p>
          </motion.div>

        </div>
      </motion.section>

      {/* ---------------------- SECTION PARCOURS PROFESSIONNEL ---------------------- */}
      <motion.section
        id="parcours"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-24"
      >
        <h2 className="text-4xl font-bold mb-3">
          Mon Parcours Professionnel 👔
        </h2>
        <div className="h-[3px] w-24 bg-cyan-400 mb-10"></div>

        <div className="flex flex-col gap-10">

          {/* CARTE VOILE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-neutral-900 text-white rounded-xl border 
                       border-neutral-700 p-8 transition-all duration-300 hover:border-cyan-400 
                       hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.3)] cursor-default"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                            bg-cyan-400 blur-xl transition-all duration-300"></div>

            <h3 className="text-2xl font-bold mb-1 relative z-10">
              Moniteur de Voile ⛵
            </h3>

            <p className="text-cyan-300 font-semibold relative z-10">Juillet 2024</p>
            <p className="text-neutral-400 mb-4 relative z-10">📍 Carnac (Morbihan)</p>

            <p className="text-neutral-300 leading-relaxed relative z-10">
              Expérience dans un centre nautique breton : encadrement de séances, gestion du matériel, mise en sécurité du public et initiation à la pratique de la voile. Cette expérience m’a appris la pédagogie, la responsabilité et la gestion de groupe.
            </p>
          </motion.div>

          {/* CARTE CAPGEMINI */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-neutral-900 text-white rounded-xl border 
                       border-neutral-700 p-8 transition-all duration-300 hover:border-cyan-400 
                       hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.3)] cursor-default"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                            bg-cyan-400 blur-xl transition-all duration-300"></div>

            <h3 className="text-2xl font-bold mb-1 relative z-10">
              Stage BTS SIO – Capgemini Engineering 💼
            </h3>

            <p className="text-neutral-400 mb-4 relative z-10">📍 Rennes</p>

            <p className="text-cyan-300 font-semibold mb-2 relative z-10">
              15 septembre 2024 → 20 janvier 2025
            </p>

            <p className="text-neutral-300 leading-relaxed mb-6 relative z-10">
              Formation DevOps interne chez Capgemini : utilisation d’Ansible pour l’automatisation, apprentissage de Terraform pour l’infrastructure, découverte des pipelines CI/CD et bonnes pratiques Cloud/DevOps.
            </p>

            <p className="text-cyan-300 font-semibold mb-2 relative z-10">
              20 janvier 2025 → Aujourd’hui
            </p>

            <p className="text-neutral-300 leading-relaxed relative z-10">
              Affecté en mission à la DGA : industrialisation logicielle, automatisation, développement, amélioration continue, documentation technique et gestion d’infrastructures. Travail en environnement sécurisé et méthodes agiles.
            </p>

            <div className="mt-6 relative z-10">
              <button
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 
                           text-black font-semibold rounded-lg transition-all duration-300"
              >
                Plus d’infos
              </button>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ---------------------- SECTION PARCOURS SCOLAIRE ---------------------- */}
      <motion.section
        id="scolaire"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-24"
      >
        <h2 className="text-4xl font-bold mb-3">
          Mon Parcours Scolaire 🎓
        </h2>

        <div className="h-[3px] w-24 bg-cyan-400 mb-10"></div>

        <div className="flex flex-col gap-10">

          {/* BTS SIO */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-neutral-900 text-white rounded-xl border 
                       border-neutral-700 p-8 transition-all duration-300 hover:border-cyan-400 
                       hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.3)] cursor-default"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                            bg-cyan-400 blur-xl transition-all duration-300"></div>

            <h3 className="text-2xl font-bold mb-1 relative z-10">
              BTS SIO – Option SLAM 💻
            </h3>

            <p className="text-neutral-400 relative z-10">📍 ESNA — Bruz</p>

            <p className="text-cyan-300 font-semibold mb-4 relative z-10">
              2024 → 2026
            </p>

            <p className="text-neutral-300 leading-relaxed relative z-10">
              BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers (SLAM). Formation orientée développement, conception d’applications, bases de données, cybersécurité, et méthodologies DevOps.
            </p>
          </motion.div>

          {/* BAC GENERAL */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-neutral-900 text-white rounded-xl border 
                       border-neutral-700 p-8 transition-all duration-300 hover:border-cyan-400 
                       hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.3)] cursor-default"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                            bg-cyan-400 blur-xl transition-all duration-300"></div>

            <h3 className="text-2xl font-bold mb-1 relative z-10">
              Baccalauréat Général 🎓
            </h3>

            <p className="text-neutral-400 relative z-10">
              📍 Lycée Benjamin Franklin — Auray
            </p>

            <p className="text-cyan-300 font-semibold mb-4 relative z-10">
              2024
            </p>

            <p className="text-neutral-300 leading-relaxed relative z-10">
              Bac Général avec spécialités Physique-Chimie & NSI (Numérique et Sciences Informatiques), et option Mathématiques. Formation scientifique solide orientée vers l’informatique, la logique et la résolution de problèmes.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* ------------------------ SECTION CONTACT ------------------------ */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-28 text-white"
      >

        {/* ---- TITLE ---- */}
        <h2 className="text-4xl font-bold mb-6">
          Contact <span className="text-cyan-400">📨</span>
        </h2>

        <div className="h-[3px] w-24 bg-cyan-400 mb-10"></div>

        {/* ---- GRID ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* ------------ COLONNE GAUCHE ------------ */}
          <div className="bg-[#212121] border border-neutral-700 rounded-2xl p-6 flex flex-col gap-8 max-w-md w-full mx-auto h-full">

            {/* Localisation */}
            <div className="flex items-start gap-3">
              <span className="text-pink-300 text-2xl">📍</span>
              <div>
                <h3 className="text-lg font-semibold">Localisation :</h3>
                <p className="text-neutral-300 text-sm">35047 Bruz, France</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <span className="text-pink-300 text-2xl">✉️</span>
              <div>
                <h3 className="text-lg font-semibold">Email :</h3>
                <p className="text-neutral-300 text-sm">[adresse retirée]</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-start gap-3">
              <span className="text-pink-300 text-2xl">📞</span>
              <div>
                <h3 className="text-lg font-semibold">Numéro Téléphone :</h3>
                <p className="text-neutral-300 text-sm">[numéro retiré]</p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="w-full p-8 pb-8">
              <ul className="social-icons flex justify-center gap-8 mt-6">

                {/* LinkedIn */}
                <li className="icon-content">
                  <a href="www.linkedin.com/in/marceau-gioanetti-b36085305" aria-label="LinkedIn" data-social="linkedin" target="_blank">
                    <div className="filled"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="currentColor">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 
                      16 1.146v13.708c0 .633-.526 1.146-1.175 
                      1.146H1.175C.526 16 0 15.487 0 
                      14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 
                      0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 
                      3.226 2.4 3.934c0 .694.521 1.248 
                      1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
                      1.232-.878.869 0 1.216.662 1.216 
                      1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
                      0-1.845.7-2.165 1.193V7.216h-.016l.016-.025V6.169h-2.4c.03.678 
                      0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </li>

                {/* GitHub */}
                <li className="icon-content">
                  <a href="https://github.com/Fr0gzilla" aria-label="GitHub" data-social="github" target="_blank">
                    <div className="filled"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 
                      8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                      1.08.58 1.23.82.72 1.21 1.87.87 
                      2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 
                      .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 
                      2 .27c1.53-1.04 2.2-.82 2.2-.82.44 
                      1.1.16 1.92.08 2.12.51.56.82 1.27.82 
                      2.15 0 3.07-1.87 3.75-3.65 
                      3.95.29.25.54.73.54 1.48 0 
                      1.07-.01 1.93-.01 2.2 0 
                      .21.15.46.55.38A8.01 8.01 0 0 0 16 
                      8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </a>
                  <div className="tooltip">GitHub</div>
                </li>

                {/* Discord */}
                <li className="icon-content">
                  <a href="https://discord.com/users/1008832371904217239" aria-label="Discord" data-social="discord" target="_blank">
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.21.375-.444.86-.607 1.243a18.27 18.27 0 0 0-5.494 0 12.3 12.3 0 0 0-.617-1.243.077.077 0 0 0-.078-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.028C1.205 9.034.533 13.58 1.076 18.062a.082.082 0 0 0 .031.055 19.9 19.9 0 0 0 5.993 3.036.078.078 0 0 0 .084-.028 13.72 13.72 0 0 0 1.186-1.928.076.076 0 0 0-.041-.106 12.3 12.3 0 0 1-1.75-.844.077.077 0 0 1-.008-.13c.118-.09.236-.184.35-.279a.074.074 0 0 1 .077-.01c3.676 1.68 7.647 1.68 11.29 0a.074.074 0 0 1 .078.01c.114.095.232.19.35.279a.076.076 0 0 1-.006.13c-.563.32-1.138.61-1.75.844a.076.076 0 0 0-.042.107 13.5 13.5 0 0 0 1.186 1.927.076.076 0 0 0 .084.029 19.87 19.87 0 0 0 5.993-3.036.076.076 0 0 0 .031-.055c.5-4.311-.713-8.828-3.544-13.665a.06.06 0 0 0-.03-.028ZM8.02 15.33c-1.183 0-2.148-1.085-2.148-2.418 0-1.332.955-2.417 2.148-2.417 1.204 0 2.159 1.095 2.148 2.417 0 1.333-.955 2.418-2.148 2.418Zm7.975 0c-1.183 0-2.148-1.085-2.148-2.418 0-1.332.955-2.417 2.148-2.417 1.204 0 2.159 1.095 2.148 2.417 0 1.333-.944 2.418-2.148 2.418Z"/>
                    </svg>
                  </a>
                  <div className="tooltip">Discord</div>
                </li>

              </ul>
            </div>

          </div>

          {/* ------------ COLONNE DROITE ------------ */}
          <div className="max-w-md w-full mx-auto bg-[#212121] text-white rounded-2xl p-8 border border-neutral-700 h-full">

            <form className="flex flex-col gap-6">

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-400" htmlFor="email">
                  Votre email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-white
                  border border-[#414141] focus:outline-none focus:border-pink-500 transition"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-400" htmlFor="message">
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent text-white
                  border border-[#414141] focus:outline-none focus:border-pink-500 transition resize-none"
                ></textarea>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                className="px-5 py-3 rounded-md w-40 bg-[#313131] border border-[#414141]
                text-gray-400 font-semibold hover:bg-white hover:text-black hover:border-white
                transition active:scale-95 mx-auto"
              >
                Envoyer
              </button>

            </form>

          </div>

        </div>
      </motion.section>

    </main>
  );
}
