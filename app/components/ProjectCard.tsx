"use client";

export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl hover:bg-cyan-400 hover:text-black transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
