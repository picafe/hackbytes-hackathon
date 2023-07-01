/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				maroon: '#941414',
				pantherYellow: '#F2C12E',
				pantherOrange: '#F2B035',
				pantherBrown: '#8C2703',
				offWhite: '#F2F2F2',
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}