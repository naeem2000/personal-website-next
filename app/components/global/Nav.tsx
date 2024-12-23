'use client';

import { Sling as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { UseShowNav } from '../TS/functions';
import { navlinks } from './data';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	const { setOpen, open } = UseShowNav();

	const path = usePathname();

	return (
		<header className='wrapper'>
			<nav className='flex items-center justify-between min-h-[90px] h-full z-[1] max-w-full relative overflow-hidden'>
				<div>
					{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
					<h1
						className='text-white text-[25px] leading-[0.9em]'
						data-aos='slide-left'
						// eslint-disable-next-line react/jsx-no-comment-textnodes
					>
						// naeem carr
					</h1>
					<p
						className='text-[25px] text-purple leading-[0.8em] ml-8'
						data-aos='slide-right'
					>
						web_dev
					</p>
				</div>
				<div className='hidden desktop:flex items-end justify-between w-2/6'>
					{navlinks.links.map((item, index) => {
						return (
							<ul className='flex ml-1' key={index}>
								<li data-aos='slide-left'>
									<Link
										className={`text-[23px] text-yellow ${
											item.link === path && '!text-blue'
										} transition-all duration-[0.2s] ease-linear hover:text-purple`}
										href={item.link}
									>
										{item.label}
									</Link>
								</li>
							</ul>
						);
					})}
				</div>
			</nav>
			<button
				className='block desktop:hidden fixed z-[8] right-[20px] top-[20px]'
				id='burger-button'
			>
				<Hamburger size={20} color='#2fcbef' toggled={open} toggle={setOpen} />
			</button>
			<div
				className='bg-main-bg-trans fixed flex items-center justify-center flex-col w-full h-full z-[7] translate-x-[120%] transition-all duration-[0.7s] ease-[ease] right-0 top-0'
				id='mobile-slide'
			>
				<ul className='w-6/12 text-center'>
					{navlinks.links.map((item, index) => {
						return (
							<li
								onClick={() => setOpen(false)}
								data-aos='fade-right'
								key={index}
							>
								<a
									className={`block text-xl laptop:text-2xl text-yellow transition-all duration-[0.2s] ease-linear border-b-border-color mt-10 pb-[5px] px-5 border-b border-solid hover:text-purple hover:border-b-purple ${
										item.link === path && '!text-blue !border-b-blue'
									}`}
									href={item.link}
								>
									{item.label}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</header>
	);
}
