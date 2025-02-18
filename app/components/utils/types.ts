import { ReactNode } from 'react';

export type CursorClickableTypes = {
	innerSize: number;
	outerSize: number;
	innerScale: number;
	outerScale: number;
	outerAlpha: number;
	clickables: string[];
	innerStyle: {
		backgroundColor: string;
		mixBlendMode: string;
	};
	outerStyle: {
		border: string;
		mixBlendMode: string;
	};
};

export type TypeWriterTypes = {
	strings: string[];
	deleteSpeed: number;
	autoStart: boolean;
	loop: boolean;
};

export type FadeInMotionStyles = {
	initial: { opacity: number };
	whileInView: { opacity: number };
	transition: { duration: number };
};

export type ProjectMotionStyles = {
	initial: { opacity: number; scale: number };
	animate: { opacity: number; scale: number };
	transition: {
		duration: number;
		scale: { type: string; visualDuration: number; bounce: number };
	};
};

export interface ContactDetails {
	name: string;
	email: string;
	message: string;
}

export type PdfViewerProps = {
	onClose: () => void;
};

type NavLink = {
	label: string;
	link: string;
};

export type NavLinks = {
	links: NavLink[];
};

export type Services = {
	number: string;
	icon: ReactNode;
	name: string;
}[];

export type Project = {
	image: string;
	alt: string;
	title: string;
	description: string;
	link: string;
};

export type PageData = {
	mobile: Project[];
	web: Project[];
};

type SocialLink = {
	name: string;
	icon: ReactNode;
	link: string;
};

export type Socials = {
	socialLink: SocialLink[];
};

export type ContactErrors = {
	name: boolean;
	email: boolean;
	message: boolean;
};
