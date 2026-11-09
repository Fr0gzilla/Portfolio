import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider, { themeInitScript } from "./components/ThemeProvider";
import BackgroundGradient from "./components/BackgroundGradient";
import ScrollToTop from "./components/ScrollToTop";
import FadeInProvider from "./components/FadeInProvider";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Police téléchargée à la construction et servie avec le site (aucun appel à Google chez le visiteur).
const police = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-principale",
});

export const metadata = {
  title: "Portfolio – Marceau GIOANETTI",
  description:
    "Portfolio de Marceau GIOANETTI – Étudiant en Bachelor Développement Informatique, deux ans d'alternance développeur chez Capgemini. Projets, compétences, parcours et CV.",
  keywords: [
    "Marceau GIOANETTI",
    "portfolio",
    "développeur",
    "Bachelor",
    "Sup de Vinci",
    "BTS SIO",
    "SLAM",
    "Capgemini",
    "alternance",
  ],
  authors: [{ name: "Marceau GIOANETTI" }],
  openGraph: {
    title: "Portfolio – Marceau GIOANETTI",
    description:
      "Étudiant en Bachelor Développement Informatique – Projets, compétences et parcours.",
    url: "https://fr0gzilla.github.io/Portfolio/",
    siteName: "Portfolio Marceau GIOANETTI",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={police.variable} suppressHydrationWarning>
      <head>
        {/* Pose la classe de thème AVANT le rendu pour éviter le flash et le blocage du tree. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <FadeInProvider>
            <BackgroundGradient />
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
            <ScrollToTop />
          </FadeInProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
