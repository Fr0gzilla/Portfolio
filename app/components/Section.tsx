import { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-28">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
