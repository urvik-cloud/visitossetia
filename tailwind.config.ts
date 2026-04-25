import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        stoneSky: '#203349',
        alpine: '#5f7890',
        accent: '#b17a44'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(32, 51, 73, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
