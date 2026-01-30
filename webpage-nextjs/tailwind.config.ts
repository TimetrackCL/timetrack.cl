import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
    "./node_modules/@frostui/tailwindcss/dist/*.js"
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
    extend: {
      fontFamily: {
        'body': ['Be Vietnam Pro', 'sans-serif'],
        'sans': ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        'primary': '#f86624',
      },
    },
  },
  plugins: [
    require('@frostui/tailwindcss/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
