'use client';

import { fadeInMotionStyles } from '../components/utils/constants';
import PageHeader from '../components/global/PageHeader';
import { services } from '../components/global/data';
import { motion } from 'motion/react';
import { Routes } from '../Routes';
import React from 'react';
import { Button } from '@/stories/Button';

export default function Services() {
	const { Contact } = Routes();

	return (
		<>
			<motion.section {...fadeInMotionStyles} className='wrapper'>
				<motion.div
					{...fadeInMotionStyles}
					className='flex items-center justify-center flex-col'
				>
					<PageHeader text='"Services"' symbol='{#}' />
					<p className='text-center text-yellow text-2xl mt-5 max-w-5xl dark:text-black'>
						...My Web & Mobile Development Services | Crafting High-Performance
						Websites, Scalable Mobile Apps, and Custom Digital Solutions to Help
						Businesses Thrive in the Online World. From Frontend to Backend,
						UI/UX to API Integrations, I Provide End-to-End Front-end
						Development Services Tailored to Your Unique Needs.
					</p>
				</motion.div>
				<motion.div
					{...fadeInMotionStyles}
					className="bg-[url('/languages.gif')]  bg-contain bg-center bg-no-repeat desktop:bg-cover w-full h-[40vh] laptop:h-[50vh] desktop:bg-fixed opacity-60 blur-[1px] desktop:blur-[3px] desktop:mt-[100px]"
				/>
				<motion.div
					{...fadeInMotionStyles}
					className='flex items-center justify-center desktop:mt-10 flex-col'
				>
					<div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
						{services.map((item, index) => {
							return (
								<Button
									variant='link'
									href={item.link}
									target='_blank'
									className='flex items-center p-5 laptop:p-10 min-w-72 laptop:min-w-96 justify-between border border-border-color hover:bg-blue transition-all duration-200 hover:scale-[1.03]'
									key={index}
									label={
										<>
											{' '}
											<span className='text-4xl text-purple mix-blend-difference dark:text-black dark:mix-blend-normal'>
												{'{'}
												{item.number}
												{'}'}
											</span>
											<div className='laptop:mx-auto flex flex-col items-center text-center'>
												<div>{item.icon}</div>
												<h3 className='text-3xl text-white mix-blend-difference dark:text-black dark:mix-blend-normal'>
													{item.name}
												</h3>
											</div>
										</>
									}
								/>
							);
						})}
					</div>
					<p className='text-4xl text-purple mt-10'>And more to come!</p>
				</motion.div>
			</motion.section>
			<Contact />
		</>
	);
}
