import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",

    // ⭐ SAFELIST intégrée dans content
    {
      raw: `
        animate-note1
        animate-note2
        animate-note3
      `,
    },
  ],

  theme: {
    extend: {},
  },

  plugins: [],
};

export default config;
