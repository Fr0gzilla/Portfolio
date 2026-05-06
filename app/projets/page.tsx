import type { Metadata } from "next";
import { projets } from "./data";
import ProjetsListeClient from "./ProjetsListeClient";

export const metadata: Metadata = {
  title: "Tous mes projets – Portfolio Marceau GIOANETTI",
  description:
    "Liste complète de mes projets personnels, professionnels et scolaires en lien avec le BTS SIO option SLAM.",
};

export default function ProjetsListePage() {
  return <ProjetsListeClient projets={projets} />;
}
