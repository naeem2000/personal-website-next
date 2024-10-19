'use client';

import { UseShowNav } from '../TS/functions';
import { Sling as Hamburger } from 'hamburger-react';
import { navlinks } from './data';
import React from 'react';

export default function Nav() {
	const { setOpen, open } = UseShowNav();

	return (
		<header>
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
				<div className='flex items-end justify-between w-2/6'>
					{navlinks.links.map((item) => {
						return (
							<ul className='flex ml-1' key={item.id}>
								<li data-aos='slide-left'>
									<a
										className='text-[23px] text-yellow transition-all duration-[0.2s] ease-linear hover:text-purple'
										href={item.link}
									>
										{item.label}
									</a>
								</li>
							</ul>
						);
					})}
				</div>
			</nav>
			<button
				className='hidden fixed z-[8] right-[70px] top-[50px]'
				id='burger-button'
			>
				<Hamburger size={20} color='#2fcbef' toggled={open} toggle={setOpen} />
			</button>
			<div
				className=' bg-main-bg-trans fixed flex items-center justify-center flex-col w-full h-full z-[7] translate-x-[120%] transition-all duration-[0.7s] ease-[ease] right-0 top-[5px]'
				id='mobile-slide'
			>
				{navlinks.links.map((item) => {
					return (
						<ul className='w-6/12 text-center' key={item.id}>
							<li onClick={() => setOpen(false)} data-aos='fade-right'>
								<a
									className='block text-[25px] text-yellow transition-all duration-[0.2s] ease-linear border-b-border-color pt-[25px] pb-[30px] px-5 border-b border-solid hover:text-purple hover:border-b-purple'
									href={item.link}
								>
									{item.label}
								</a>
							</li>
						</ul>
					);
				})}
			</div>
		</header>
	);
}
