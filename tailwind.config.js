/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-gray': '#333333',
        'my-yellow': '#EEC643',
        'my-blue': '#35A7FF',
        'my-red': '#EF6F6C',
        'my-green': '#74D3AE',
        'my-purple': '#9055A2',
        'my-orange': '#FE950B',
      },
    },
  },
  plugins: [],
}
