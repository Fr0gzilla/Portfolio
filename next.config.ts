import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Le chemin du site sur GitHub Pages est le nom du dépôt (sensible à la casse) : fourni par le déploiement
// (PAGES_BASE_PATH), sinon /Portfolio.
const basePath = isProd ? (process.env.PAGES_BASE_PATH ?? "/Portfolio") : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
