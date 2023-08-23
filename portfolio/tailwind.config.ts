import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#FFD34E",
          secondary: "#EE457E",
          background: "#F5F5FA",
          foreground: '#171717'
        }
      },
      dark: {
        colors: {
          primary: "#FFD34E",
          secondary: "#EE457E",
          background: "#282828",
          foreground: '#ededed'
        }
      },
    },
  })],
}
export default config
