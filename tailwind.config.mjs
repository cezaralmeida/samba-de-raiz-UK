/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Your Custom Design Tokens
				'samba-brand': '#228B22', // Forest Green
				'samba-accent': '#FFD700', // Gold
				'samba-dark': '#1a1a1a',   // Dark Grey (for text)
				'samba-light': '#f3f4f6',  // Light Grey (for backgrounds)
			},
			fontFamily: {
				sans: ['Helvetica', 'Arial', 'sans-serif'],
			}
		},
	},
	plugins: [],
}