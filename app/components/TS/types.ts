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

type ResponsiveSettingsTypes = {
	centerMode?: boolean;
	slidesToShow: number;
	slidesToScroll: number;
};

type ResponsiveTypes = {
	breakpoint: number;
	settings: ResponsiveSettingsTypes;
}[];

export type CarouselTypes = {
	infinite: boolean;
	centerMode: boolean;
	slidesToShow: number;
	speed: number;
	className: string;
	adaptiveHeight: boolean;
	responsive: ResponsiveTypes;
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
	id: number;
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
	id: number;
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
