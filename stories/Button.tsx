import React from 'react';

import './button.css';
import Hamburger from 'hamburger-react';
import { UseShowNav } from '@/app/components/utils/functions';

export interface ButtonProps {
	primary?: boolean;
	label: string;
	variant: 'button' | 'nav-button' | 'link' | 'icon' | 'toggle';
	className?: string;
	color?: string;
	onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
	variant,
	label,
	className,
	color,
	onClick,
}: ButtonProps) => {
	const { setOpen, open } = UseShowNav();

	return variant === 'button' ? (
		<button className={className} type='button'>
			{label}
		</button>
	) : variant === 'nav-button' ? (
		<Hamburger size={25} color={color} toggled={open} toggle={setOpen} />
	) : variant === 'link' ? (
		<p>link</p>
	) : variant === 'icon' ? (
		<p>icon button</p>
	) : variant === 'toggle' ? (
		<p>toggle</p>
	) : null;
};
