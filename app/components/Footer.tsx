import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-5 text-[var(--text-muted)] text-sm flex flex-col items-center gap-1">
      <p>&copy; {new Date().getFullYear()} - Marceau</p>
      <Link
        href="/synthese"
        className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-xs"
      >
        Tableau de synthèse BTS SIO
      </Link>
    </footer>
  );
}
