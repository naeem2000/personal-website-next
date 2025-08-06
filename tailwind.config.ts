import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				vt: ['var(--font-vt)'],
			},
			colors: {
				'main-bg': 'var(--main-bg)',
				'main-bg-trans': 'var(--main-bg-trans)',
				white: 'var(--white)',
				'border-color': 'var(--border-color)',
				purple: 'var(--purple)',
				yellow: 'var(--yellow)',
				blue: 'var(--blue)',
				'nav-border-color': 'var(--nav-border-color)',
				'side-bar-color': 'var(--side-bar-color)',
				'error-red': 'var(--error-red)',
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
