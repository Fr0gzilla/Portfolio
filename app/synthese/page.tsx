import type { Metadata } from "next";
import SyntheseClient from "./SyntheseClient";

export const metadata: Metadata = {
  title: "Tableau de synthèse – Marceau GIOANETTI",
  description:
    "Tableau de synthèse des réalisations professionnelles – BTS SIO option SLAM, session 2026.",
};

export default function SynthesePage() {
  return <SyntheseClient />;
}
