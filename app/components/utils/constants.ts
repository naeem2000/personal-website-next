import {
	CursorClickableTypes,
	ProjectMotionStyles,
	FadeInMotionStyles,
	TypeWriterTypes,
} from './types';
import { VT323 } from 'next/font/google';

export const VT = VT323({
	weight: '400',
	subsets: ['latin'],
	preload: true,
});

export const fadeInMotionStyles: FadeInMotionStyles = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	transition: { duration: 1.3 },
};

export const projectMotionStyles: ProjectMotionStyles = {
	initial: { opacity: 0, scale: 0 },
	animate: { opacity: 1, scale: 1 },
	transition: {
		duration: 0.4,
		scale: { type: 'spring', visualDuration: 0.4, bounce: 0.2 },
	},
};

export const cursorClickables: CursorClickableTypes = {
	innerSize: 10,
	outerSize: 25,
	innerScale: 1,
	outerScale: 1.5,
	outerAlpha: 0,
	clickables: [
		'a',
		'input[type="text"]',
		'input[type="email"]',
		'input[type="number"]',
		'input[type="submit"]',
		'input[type="image"]',
		'label[for]',
		'select',
		'textarea',
		'button',
		'.link',
	],
	innerStyle: {
		backgroundColor: 'var(--purple)',
		mixBlendMode: 'difference',
	},
	outerStyle: {
		border: '2px solid var(--yellow)',
		mixBlendMode: 'difference',
	},
};

export const TypeWriterConfig: TypeWriterTypes = {
	strings: [
		'_Front End Dev',
		'_Mobile Dev',
		'_Problem Solver',
		'_Pizza Lover',
		'_Gamer',
	],
	deleteSpeed: 30,
	autoStart: true,
	loop: true,
};

export const ContactStyles: string =
	'max-w-[1140px] w-full text-purple text-lg desktop:text-[22px] border-b-border-color mt-8 desktop:mt-12 pt-0 pb-2 desktop:pb-3.5 px-2.5 border-b border-r-0 border-l-0 border-t-0 border-solid focus:border-b-purple bg-transparent outline-none placeholder:text-purple';

export const filterButtonStyles: string =
	'flex item-center justify-center mr-2 text-2xl mt-3 border-[3px] border-yellow px-3 py-[2px] transition-all duration-500 text-yellow hover:border-purple hover:text-purple';
