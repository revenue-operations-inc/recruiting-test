import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontWeight: {
        semibold: "500",
      },
      fontFamily: {
        signifier: ["var(--font-signifier)"],
        "retni-sans": ["var(--font-retni-sans)"],
      },
      colors: {
        background: "#f6f5f4",
      },
    },
  },
  plugins: [],
};

export default config;
