'use client';

import { AnimatePresence, motion } from 'motion/react';
import { Sling as Hamburger } from 'hamburger-react';
import { UseShowNav } from '../utils/functions';
import { usePathname } from 'next/navigation';
import { navlinks } from './data';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	const { setOpen, open, showButton } = UseShowNav();

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
				<div className='hidden desktop:flex items-end'>
					{navlinks.links.map((item, index) => {
						return (
							<ul className='flex ml-1' key={index}>
								<li data-aos='slide-left'>
									<Link
										className={`text-[23px] text-yellow ${
											index !== 5 && 'mr-5'
										} ${
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
			<AnimatePresence>
				{showButton && (
					<motion.button
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						className='fixed z-[8] right-[20px] top-[20px]'
					>
						<Hamburger
							size={20}
							color='#2fcbef'
							toggled={open}
							toggle={setOpen}
						/>
					</motion.button>
				)}
			</AnimatePresence>

			<AnimatePresence initial={false}>
				{open ? (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						className='bg-main-bg-trans fixed flex items-center justify-center flex-col w-full h-full z-[7] right-0 top-0'
					>
						<ul className='w-6/12 text-center'>
							{navlinks.links.map((item, index) => {
								return (
									<li onClick={() => setOpen(false)} key={index}>
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
					</motion.div>
				) : null}
			</AnimatePresence>
		</header>
	);
}
