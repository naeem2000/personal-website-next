'use client';

import { filterButtons, portfolioData } from '../components/global/data';
import PageHeader from '../components/global/PageHeader';
import { AnimatePresence, motion } from 'motion/react';
import Button from '../components/global/Button';
import React, { useState } from 'react';
import { Routes } from '../Routes';
import Image from 'next/image';
import Link from 'next/link';
import {
	fadeInMotionStyles,
	filterButtonStyles,
	projectMotionStyles,
} from '../components/utils/constants';

export default function Portfolio({}) {
	const { Contact } = Routes();
	const [projects, setProjects] = useState<string>('all projects');

	return (
		<>
			<motion.section {...fadeInMotionStyles} className='wrapper'>
				<motion.div
					{...fadeInMotionStyles}
					className='flex items-center justify-center flex-col'
				>
					<PageHeader text='"Portfolio"' symbol='{!}' />
					<p className='text-center text-yellow text-2xl mt-5 max-w-5xl dark:text-black'>
						…Welcome to My Portfolio: A Deep Dive Into My Creative Journey,
						Professional Expertise, and Passion-Driven Projects. Here, I invite
						you to explore a collection of my best work, where creativity meets
						precision, and innovation drives impactful results.
					</p>
				</motion.div>
				<motion.div
					{...fadeInMotionStyles}
					className="bg-[url('/tenor.gif')] bg-contain bg-center bg-no-repeat desktop:bg-cover w-full h-[40vh] laptop:h-[50vh] desktop:bg-fixed opacity-60 blur-[1px] desktop:blur-[3px] desktop:mt-[100px]"
				/>
				<div className='md:mt-10'>
					<div className='flex items-center justify-center flex-wrap'>
						{filterButtons.map((item, index) => {
							return (
								<Button
									onClick={() => setProjects(item)}
									key={index}
									className={`${filterButtonStyles} ${
										item === projects && '!border-purple !text-purple '
									}`}
								>
									{item}
								</Button>
							);
						})}
					</div>
					<AnimatePresence mode='wait'>
						{projects === 'all projects' && (
							<motion.div
								key='all-projects'
								{...projectMotionStyles}
								className='mt-10'
							>
								<p className='text-yellow text-3xl mb-5 dark:text-black'>
									{'// Web development'}
								</p>
								<div className='grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-4 w-full'>
									{portfolioData.web.map((item, index) => (
										<Link
											key={index}
											className='hover:scale-[1.03] transition-all duration-150'
											href={item.link}
											target='_blank'
										>
											<div className='image-container'>
												<Image
													src={item.image}
													alt={item.alt}
													width={600}
													height={600}
													className='w-full'
												/>
												<div className='overlay'>
													<p className='text-yellow text-xl md:text-3xl font-medium'>
														{item.title}
													</p>
													<p className='text-white text-sm md:text-xl max-w-96'>
														{item.description}
													</p>
												</div>
											</div>
										</Link>
									))}
								</div>
								<div className='mt-20'>
									<p className='text-yellow text-3xl mb-5 dark:text-black'>
										{'// Mobile development'}
									</p>
									<div className='grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-5 gap-4 w-full'>
										{portfolioData.mobile.map((item, index) => (
											<Link
												key={index}
												className='hover:scale-[1.03] transition-all duration-150'
												href={item.link}
												target='_blank'
											>
												<div className='image-container'>
													<Image
														src={item.image}
														alt={item.alt}
														width={600}
														height={600}
														className='w-full'
													/>
													<div className='overlay'>
														<p className='text-yellow text-xl md:text-3xl font-medium'>
															{item.title}
														</p>
														<p className='text-white text-sm md:text-xl max-w-96'>
															{item.description}
														</p>
													</div>
												</div>
											</Link>
										))}
									</div>
								</div>
							</motion.div>
						)}

						{projects === 'web development' && (
							<motion.div
								key='web-development'
								{...projectMotionStyles}
								className='grid grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full mt-10'
							>
								{portfolioData.web.map((item, index) => (
									<Link
										key={index}
										className='hover:scale-[1.03] transition-all duration-150'
										href={item.link}
										target='_blank'
									>
										<div className='image-container'>
											<Image
												src={item.image}
												alt={item.alt}
												width={600}
												height={600}
												className='w-full'
											/>
											<div className='overlay'>
												<p className='text-yellow text-xl md:text-3xl font-medium'>
													{item.title}
												</p>
												<p className='text-white text-sm md:text-xl max-w-96'>
													{item.description}
												</p>
											</div>
										</div>
									</Link>
								))}
							</motion.div>
						)}

						{projects === 'mobile development' && (
							<motion.div
								key='mobile-development'
								{...projectMotionStyles}
								className='grid grid-cols-2 md:grid-cols-3 desktop:grid-cols-5 gap-4 w-full mt-10'
							>
								{portfolioData.mobile.map((item, index) => (
									<Link
										key={index}
										className='hover:scale-[1.03] transition-all duration-150'
										href={item.link}
										target='_blank'
									>
										<div className='image-container'>
											<Image
												src={item.image}
												alt={item.alt}
												width={600}
												height={600}
												className='w-full'
											/>
											<div className='overlay'>
												<p className='text-yellow text-xl md:text-3xl font-medium'>
													{item.title}
												</p>
												<p className='text-white text-sm md:text-xl max-w-96'>
													{item.description}
												</p>
											</div>
										</div>
									</Link>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.section>
			<Contact />
		</>
	);
}
