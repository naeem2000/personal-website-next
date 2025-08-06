'use client';
import { fadeInMotionStyles } from '../components/utils/constants';
import SectionHeader from '../../stories/SectionHeader';
import PageHeader from '../../stories/PageHeader';
import { aboutText } from '../../public/data';
import { motion } from 'motion/react';
import { Routes } from '../Routes';
import React from 'react';

export default function About() {
	const { Contact } = Routes();

	return (
		<>
			<motion.section {...fadeInMotionStyles} className='wrapper'>
				<div className='flex items-center justify-center flex-col'>
					<PageHeader text='"About"' symbol='{/}' />
					<p className='text-center mt-5 text-2xl laptop:text-4xl max-w-[1150px] text-yellow dark:text-black'>
						...I have three years of experience in web development, focusing
						primarily on front-end technologies. My background includes a solid
						understanding of HTML, CSS, and JavaScript, along with hands-on
						experience with modern frameworks like React, Next.JS and Angular.
					</p>
					<p className='max-w-[1150px] text-center mt-5 text-white text-xl laptop:text-2xl dark:text-black'>
						I am committed to continuously improving my skills and staying
						updated with industry trends. I am actively extending my knowledge
						in both front-end and back-end development. With the goal of
						becoming a full-stack developer, I am currently exploring back-end
						languages like Node.js and Python. I aim to integrate this knowledge
						with my front-end expertise to contribute to projects holistically
						and enhance my problem-solving abilities for creating more efficient
						applications.
					</p>
				</div>
				<motion.div
					{...fadeInMotionStyles}
					className="bg-[url('/about.gif')] bg-contain bg-center desktop:bg-[center_bottom_-25rem] bg-no-repeat desktop:bg-cover w-full h-[40vh] laptop:h-[50vh] desktop:bg-fixed opacity-60 blur-[1px] desktop:blur-[3px] mt-10 desktop:mt-[100px]"
				/>
				<motion.div {...fadeInMotionStyles}>
					<div className='mt-20'>
						<SectionHeader aos='fade-up' heading='<What_drives_my_work/>' />
					</div>
					<div className='flex items-center justify-center'>
						<div className='grid grid-cols-1 laptop:grid-cols-2 place-items-center max-w-[1280px] border-t border-border-color'>
							{aboutText.map((item, index) => {
								return (
									<div
										className={`${
											index !== 1 &&
											index !== 3 &&
											'border-b laptop:border-r border-r-border-color'
										} ${
											index !== 2 &&
											index !== 3 &&
											'border-b laptop:border-b border-border-color'
										} ${index === 2 && 'border-b-0'} ${
											index === 3 &&
											'border-t laptop:border-t-0 border-t-border-color'
										} p-5 laptop:p-10 h-full`}
										key={index}
									>
										<span className='text-4xl text-purple'>{item.symb}</span>
										<h3 className='text-5xl mt-7 text-white leading-3 dark:text-black'>
											{item.heading}
										</h3>
										<p className='text-2xl mt-7 text-yellow dark:text-black'>
											{item.text}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</motion.div>
			</motion.section>
			<Contact />
		</>
	);
}
