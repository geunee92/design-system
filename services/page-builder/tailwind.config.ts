import type { Config } from "tailwindcss";
import { vars } from "@design/themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: vars.colors.$static.light,
  },
  plugins: [],
};
export default config;
