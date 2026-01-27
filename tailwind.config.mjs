/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // "Abril Fatface" looks similar to the serif font in your image
        serif: ['"Abril Fatface"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'samba-red': '#D00000',
        'samba-orange': '#FF4500',
      },
      backgroundImage: {
        // This creates the sunburst effect without needing an image file
        'sunburst': 'repeating-conic-gradient(#D00000 0% 5%, #FF2400 5% 10%)',
      }
    },
  },
  plugins: [],
}