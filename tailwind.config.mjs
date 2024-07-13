/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				"40ch": "40ch",
				"48ch": "48ch",
				"64ch": "64ch",
				"80ch": "80ch",
				"96ch": "96ch",
				"128ch": "128ch",
			},
			fontFamily: {
				"mono": ["Roboto Mono", "monospace"],
				"raleway": ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
}
