/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors: {
				'maxtec': '#325082',
				'maxtec-light': '#325082',
				'maxtec-dark': '#325082',
				'maxtec-darker': '#325082',
				'maxtec-darkest': '#325082',
				'maxtec-lighter': '#325082',
				'maxtec-lightest': '#325082',
			}
		},
	},
	plugins: [

		require('tailwindcss-animated'),


	],
}
