import { CarouselTypes, CursorClickableTypes, TypeWriterTypes } from './types';
import { VT323 } from 'next/font/google';

export const VT = VT323({
	weight: '400',
	subsets: ['latin'],
	preload: true,
});

export const CursorClickables: CursorClickableTypes = {
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

export const CarouselSettings: CarouselTypes = {
	infinite: true,
	centerMode: true,
	slidesToShow: 3,
	speed: 500,
	className: 'slider',
	adaptiveHeight: false,
	responsive: [
		{
			breakpoint: 1778,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 500,
			settings: {
				centerMode: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 344,
			settings: {
				centerMode: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

export const ContactStyles: string =
	'max-w-[1140px] w-full text-purple text-lg desktop:text-[22px] border-b-border-color mt-8 desktop:mt-12 pt-0 pb-2 desktop:pb-3.5 px-2.5 border-b border-r-0 border-l-0 border-t-0 border-solid focus:border-b-purple bg-transparent outline-none placeholder:text-purple';

export const filterButtonStyles: string =
	'flex item-center justify-center mr-2 text-xl mt-3 border-[3px] border-yellow px-3 py-[2px] transition-all duration-500 text-yellow hover:border-purple hover:text-purple';
