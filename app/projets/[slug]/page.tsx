import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { competencesReferentiel, getProjetBySlug, projets } from "../data";
import ProjetFicheClient from "./ProjetFicheClient";

export function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projet = getProjetBySlug(slug);

  if (!projet) {
    return {
      title: "Projet introuvable – Marceau GIOANETTI",
    };
  }

  return {
    title: `${projet.titre} – Portfolio Marceau GIOANETTI`,
    description: projet.resume,
    openGraph: {
      title: `${projet.titre} – Portfolio Marceau GIOANETTI`,
      description: projet.resume,
      type: "article",
    },
  };
}

export default async function ProjetFichePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = getProjetBySlug(slug);

  if (!projet) {
    notFound();
  }

  const index = projets.findIndex((p) => p.slug === slug);
  const previous = index > 0 ? projets[index - 1] : null;
  const next = index < projets.length - 1 ? projets[index + 1] : null;

  const competencesMobiliseesDetail = projet.competencesMobilisees
    .map((code) => competencesReferentiel.find((c) => c.code === code))
    .filter((c): c is (typeof competencesReferentiel)[number] => Boolean(c));

  return (
    <ProjetFicheClient
      projet={projet}
      competencesDetail={competencesMobiliseesDetail}
      previous={previous}
      next={next}
    />
  );
}
