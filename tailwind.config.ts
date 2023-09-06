import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'realt-blue-50': '#f0f5ff',
        'realt-blue-100': '#e1ebff',
        'realt-blue-150': '#d1e0ff',
        'realt-blue-200': '#c2d6ff',
        'realt-blue-250': '#b3ccff',
        'realt-blue-300': '#a4c2ff',
        'realt-blue-350': '#95b8ff',
        'realt-blue-400': '#85adff',
        'realt-blue-450': '#76a3ff',
        'realt-blue-500': '#6799ff',
        'realt-blue-550': '#5d8ae6',
        'realt-blue-600': '#527acc',
        'realt-blue-650': '#486bb3',
        'realt-blue-700': '#3e5c99',
        'realt-blue-750': '#294378',
        'realt-blue-800': '#293d66',
        'realt-blue-850': '#1f2e4d',
        'realt-blue-900': '#151f33',
        'realt-blue-950': '#0a0f19',
        'realt-marine-blue': '#72A8DA',
        'realt-gold': '#F2A91E',
      },
    },
  },
  plugins: [],
}
export default config
