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

export type PortfolioMotionStyles = {
	initial: { opacity: number; y: number };
	animate: { opacity: number; y: number };
	exit: { opacity: number; y: number };
	transition: { duration: number };
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
