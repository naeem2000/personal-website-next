'use client';

import { AnimatePresence, motion } from 'motion/react';
import { UseShowNav } from '../utils/functions';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { navlinks } from './data';
import Link from 'next/link';
import { Button } from '@/stories/Button';
import { IoSunnySharp, IoMoon } from 'react-icons/io5';
import Toggle from 'react-toggle';

export default function Nav() {
	const [isDark, setIsDark] = useState<boolean>(false);
	const { setOpen, open, showButton } = UseShowNav();

	useEffect(() => {
		const isMadeDark = localStorage.getItem('dark');
		if (typeof window !== 'undefined') {
			if (isMadeDark === 'true') {
				document.documentElement.classList.add('dark');
				setIsDark(true);
			} else {
				document.documentElement.classList.remove('dark');
				setIsDark(false);
			}
		}
	}, []);

	const handleDarkMode = (bool: boolean) => {
		setIsDark(bool);
		document.documentElement.classList.toggle('dark');
		localStorage.setItem('dark', JSON.stringify(bool));
	};

	const path = usePathname();

	return (
		<header className='wrapper'>
			<nav className='flex items-center justify-between min-h-[90px] h-full z-[1] max-w-full relative overflow-hidden'>
				<div>
					{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
					<h1
						className='text-white text-[25px] leading-[0.9em] dark:text-black'
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
										className={`text-[23px] text-yellow dark:text-black ${
											index !== 4 && 'mr-5'
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
				{/* <Button
					variant='toggle'
					checked={isDark}
					handleDarkMode={(bool) => handleDarkMode(bool)}
					className='!hidden desktop:!block'
				/> */}
				<Toggle
					checked={isDark}
					defaultChecked={false}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						handleDarkMode!(e.target.checked)
					}
					icons={{
						checked: (
							<IoSunnySharp size={25} className='-mt-0' color='var(--black)' />
						),
						unchecked: (
							<IoMoon size={25} className='-mt-0' color='var(--white)' />
						),
					}}
				/>
			</nav>
			<AnimatePresence>
				{showButton && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						className='fixed z-[8] right-[20px] top-[20px] flex items-center justify-center'
					>
						{/* <Button
							variant='toggle'
							checked={isDark}
							handleDarkMode={(bool) => handleDarkMode(bool)}
						/> */}
						<Toggle
							checked={isDark}
							defaultChecked={false}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleDarkMode!(e.target.checked)
							}
							icons={{
								checked: (
									<IoSunnySharp
										size={25}
										className='-mt-0'
										color='var(--black)'
									/>
								),
								unchecked: (
									<IoMoon size={25} className='-mt-0' color='var(--white)' />
								),
							}}
						/>
						<Button toggled={open} toggle={setOpen} variant='nav-button' />
					</motion.div>
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
