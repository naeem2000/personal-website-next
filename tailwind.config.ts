import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'main-bg': 'rgb(33, 33, 33)',
				'main-bg-trans': 'rgba(33, 33, 33, 0.9)',
				white: 'rgb(222, 222, 222)',
				'border-color': 'rgb(61, 61, 61)',
				purple: 'rgb(124, 124, 197)',
				yellow: 'rgb(231, 219, 116)',
				blue: 'rgb(46, 204, 239)',
				'nav-border-color': 'rgba(255, 255, 255, 0.12)',
				'side-bar-color': 'rgb(110, 110, 110)',
				'error-red': 'rgb(255, 0, 0)',
			},
			screens: {
				mobile: '640px',
				laptop: '1024px',
				desktop: '1280px',
			},
		},
	},
	plugins: [],
};

export default config;
