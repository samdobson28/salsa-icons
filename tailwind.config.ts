// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salsa: {
          light: '#FF7F50',    // Coral
          DEFAULT: '#FF4500',  // OrangeRed
          dark: '#C71585',     // MediumVioletRed
        },
        accent: {
          light: '#FFD700',    // Gold
          DEFAULT: '#FFA500',  // Orange
          dark: '#FF8C00',     // DarkOrange
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
