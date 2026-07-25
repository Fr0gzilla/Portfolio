import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider, { themeInitScript } from "./components/ThemeProvider";
import BackgroundGradient from "./components/BackgroundGradient";
import ScrollToTop from "./components/ScrollToTop";
import FadeInProvider from "./components/FadeInProvider";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Portfolio – Marceau GIOANETTI",
  description:
    "Portfolio de Marceau GIOANETTI – Développeur en alternance chez Capgemini. Projets, compétences, parcours et CV.",
  keywords: [
    "Marceau GIOANETTI",
    "portfolio",
    "développeur",
    "BTS SIO",
    "SLAM",
    "Capgemini",
    "alternance",
  ],
  authors: [{ name: "Marceau GIOANETTI" }],
  openGraph: {
    title: "Portfolio – Marceau GIOANETTI",
    description:
      "Développeur en alternance chez Capgemini – Projets, compétences et parcours.",
    url: "https://fr0gzilla.github.io/portfolio/",
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
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Pose la classe de thème AVANT le rendu pour éviter le flash et le blocage du tree. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:glass"
        >
          Aller au contenu
        </a>
        <ThemeProvider>
          <FadeInProvider>
            <BackgroundGradient />
            <Navbar />
            <main id="main-content" className="pt-20">{children}</main>
            <Footer />
            <ScrollToTop />
          </FadeInProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
