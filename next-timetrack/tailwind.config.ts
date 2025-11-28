import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@frostui/tailwindcss/dist/*.js"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '13rem',
      },
    },
    fontFamily: {
      'body': ['var(--font-be-vietnam-pro)', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#f86624',
      },
    },
  },
  plugins: [
    /* eslint-disable @typescript-eslint/no-require-imports */
    require('@frostui/tailwindcss/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    /* eslint-enable @typescript-eslint/no-require-imports */
  ],
};
export default config;
