import { StoryButtonProps } from '@/app/components/utils/types';
import { UseShowNav } from '@/app/components/utils/functions';
import Hamburger from 'hamburger-react';
import React from 'react';
import './button.css';
import Toggle from 'react-toggle';
import { IoSunnySharp, IoMoon } from 'react-icons/io5';

export const Button = ({
	type,
	label,
	toggle,
	isDark,
	toggled,
	variant,
	onClick,
	onChange,
	className,
}: StoryButtonProps) => {
	const baseButtonClass: string =
		'button text-xl desktop:mt-10 bg-blue text-black transition-all duration-[0.5s] ease-[ease] px-[30px] py-3';

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
		<p>link</p>
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
