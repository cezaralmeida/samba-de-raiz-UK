/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // Add this line so Tailwind sees Flowbite's classes
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Abril Fatface"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'samba-red': '#D00000',
        'samba-orange': '#FF4500',
      },
      backgroundImage: {
        'sunburst': 'repeating-conic-gradient(#D00000 0% 5%, #FF2400 5% 10%)',
      }
    },
  },
  // Add the Flowbite plugin here
  plugins: [
    require('flowbite/plugin')
  ],
}