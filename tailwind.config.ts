import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        heading: "#8A4341",        // deep reddish brown for headings
        heading2: "#BA271C",       // accent red for emphasis
        paragraph: "#5C3A36",      // darker tone for better contrast
        bg: "#F5F3EF",             // soft warm gray background
        border: "#D7C9C3",         // light muted brown for card borders
        card: "#FCFAF9",           // slightly off-white card background
      }
    },
  },
  plugins: [],
};
export default config;
