import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <--- Notice we removed 'src/'
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F7",
        foreground: "#000000",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #E5E5E5 1px, transparent 1px), linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ['"Inter"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.06em' }],
      },
    },
  },
  plugins: [],
};
export default config;