import { IoSunnySharp, IoMoon } from 'react-icons/io5';
import Hamburger from 'hamburger-react';
import Toggle from 'react-toggle';
import Link from 'next/link';
import React from 'react';

interface Props {
	type?: 'button' | 'submit' | 'reset';
	label?: string | React.ReactNode;
	toggle?: () => void;
	isDark?: boolean;
	toggled?: boolean;
	variant: 'button' | 'nav-button' | 'link' | 'icon' | 'toggle';
	onClick?: () => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	target?: string;
	href?: string;
	className?: string;
}

export const Button = ({
	type,
	label,
	toggle,
	isDark,
	toggled,
	variant,
	onClick,
	onChange,
	target,
	href,
	className,
}: Props) => {
=======
}: StoryButtonProps) => {
	const baseButtonClass: string =
		'button text-xl desktop:mt-10 bg-blue text-black transition-all duration-[0.5s] ease-[ease] px-[30px] py-3';

	const baseLinkClass: string =
		'text-[23px] text-yellow dark:text-black transition-all duration-[0.2s] ease-linear hover:!text-purple';

	return variant === 'button' ? (
		<button
			className={`${baseButtonClass} ${className}`}
			type={type ? type : 'button'}
			onClick={onClick}
		>
			{label}
		</button>
	) : variant === 'nav-button' ? (
		<Hamburger
			size={25}
			color={'var(--blue)'}
			toggled={toggled}
			toggle={toggle}
		/>
	) : variant === 'link' ? (
		<Link
			className={`${baseLinkClass} ${className}`}
			href={href || ''}
			target={target}
		>
			{label}
		</Link>
	) : variant === 'icon' ? (
		<button>icon</button>
	) : variant === 'toggle' ? (
		<Toggle
			checked={isDark}
			className={className}
			onChange={onChange}
			icons={{
				checked: (
					<IoSunnySharp size={25} className='-mt-0' color='var(--black)' />
				),
				unchecked: <IoMoon size={25} className='-mt-0' color='var(--white)' />,
			}}
		/>
	) : null;
};
