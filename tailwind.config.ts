import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'icon-light': {
          extend: 'light', // <- inherit default values from dark theme
          colors: {
            background: '#ffffff',
            foreground: '#000000',
            primary: {
              50: '#e8f2ff',
              100: '#d5e6ff',
              200: '#b3cfff',
              300: '#85adff',
              400: '#567dff',
              500: '#2f4dff',
              600: '#0c18ff',
              700: '#000af7',
              800: '#0611cd',
              900: '#101c9f',
              DEFAULT: '#000af7',
              foreground: '#000000',
            },
            focus: '#2f49ff',
            success: '#e8f2ff'
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
}
export default config
