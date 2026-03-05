import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import BackgroundGradient from "./components/BackgroundGradient";
import ScrollToTop from "./components/ScrollToTop";
import IntroAnimation from "./components/IntroAnimation";

export const metadata = {
  title: "Portfolio – GIOANETTI Marceau",
  description: "Portfolio professionnel de GIOANETTI Marceau.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className="min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <IntroAnimation>
            <BackgroundGradient />
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
            <ScrollToTop />
          </IntroAnimation>
        </ThemeProvider>
      </body>
    </html>
  );
}
