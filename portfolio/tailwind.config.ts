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
    themes: {
      light: {
        colors: {
          primary: "#FFD34E",
          secondary: "#EE457E",
          background: "#F4E8D1"
        }
      },
      dark: {
        colors: {
          primary: "#FFD34E",
          secondary: "#EE457E",
          background: "#E1CA9E"
        }
      },
    },
  })],
}
export default config
