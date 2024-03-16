import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#052e16",
        secondary: "#059669",
        highlight: "#4ade80",
      },
      screens: {
        xs: "465px",
        xxs: "372px",
      },
      maxWidth: {
        maxWide: "500px",
      },
    },
  },
  plugins: [],
};
export default config;
