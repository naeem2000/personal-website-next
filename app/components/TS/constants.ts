import { VT323 } from 'next/font/google';
import { CarouselTypes, CursorClickableTypes, TypeWriterTypes } from './types';

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
