import { VT323 } from 'next/font/google';
import {
	ProjectMotionStyles,
	FadeInMotionStyles,
	TypeWriterTypes,
} from './types';

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
	'flex item-center justify-center mr-2 text-2xl mt-3 border-[3px] border-yellow px-3 py-[2px] transition-all duration-500 text-yellow hover:border-purple hover:text-purple dark:text-black dark:border-black';

export const mapsLocation: string =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1199104.5231630912!2d18.43627393270634!3d-33.88734597373842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1740339826595!5m2!1sen!2sza';
