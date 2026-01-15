import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0f',
          secondary: '#13131a',
          tertiary: '#1a1a24',
        },
        foreground: {
          DEFAULT: '#e4e4e7',
          secondary: '#a1a1aa',
          tertiary: '#71717a',
        },
        primary: {
          DEFAULT: '#a855f7',
          light: '#c084fc',
          dark: '#9333ea',
        },
        accent: {
          purple: '#8b5cf6',
          violet: '#7c3aed',
          fuchsia: '#d946ef',
        },
        border: {
          DEFAULT: '#27272a',
          light: '#3f3f46',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#e4e4e7',
            '--tw-prose-headings': '#fafafa',
            '--tw-prose-links': '#a855f7',
            '--tw-prose-bold': '#fafafa',
            '--tw-prose-code': '#e4e4e7',
            '--tw-prose-pre-bg': '#13131a',
            '--tw-prose-quotes': '#a1a1aa',
            maxWidth: '72ch',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config

