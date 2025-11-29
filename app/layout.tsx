import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Portfolio – GIOANETTI Marceau",
  description: "Portfolio professionnel de GIOANETTI Marceau.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="pl-64 bg-black text-white">
        <Navbar />
        <main className="min-h-screen py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
