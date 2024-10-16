import { ReactNode } from 'react';

export type CursorClickableTypes = string[];

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

type Project = {
	id: number;
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
