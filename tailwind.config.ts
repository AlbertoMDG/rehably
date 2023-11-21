import type { Config } from 'tailwindcss'

const config: Config = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      width: {
        '20R': '20.83rem',
        '40R': '40rem',
        '77R': '77.313rem'
      },
      height: {
        '57': '57rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg': "url('/hero.svg')",
      },
      colors: {
        blue:{
          10: "#7E99C7",
          11: "#2270E6",
          13: "#2270E6",
          14: "#0052A0"
        },
        gray: {
          'custom': '#98959569'
        },
      },
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
export default config
