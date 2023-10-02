/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			margin: {
				'1/3': '33.333333%',
				'1/4': '25%',
			}
		},
	},
	plugins: [],
};
