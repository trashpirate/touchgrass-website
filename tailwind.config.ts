import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["mistral-mn", "sans-serif"], // Or ['CustomFont', 'sans-serif'] for local fonts
      },
      backgroundImage: {
        "hero-pattern": "url('/background.jpg')",
      },
      colors: {
        textColor: "#fff",
        primary: "#0133cc",
        secondary: "#21bb03",
        highlight: "#4ade80",
      },
      screens: {
        xs: "465px",
        xxs: "372px",
      },
      maxWidth: {
        maxWide: "750px",
      },
    },
  },
  plugins: [],
};
export default config;
