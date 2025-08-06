'use client';

import { fadeInMotionStyles, TypeWriterConfig } from './utils/constants';
import Typewriter from 'typewriter-effect';
import { motion } from 'motion/react';
import React from 'react';

export default function HomeScreen() {
	return (
		<motion.section
			{...fadeInMotionStyles}
			className='wrapper flex items-center justify-center flex-col'
			id='home'
		>
			<motion.div {...fadeInMotionStyles}>
				<h1
					className='text-white text-2xl mobile:text-3xl text-center desktop:mt-28 dark:text-black'
					data-aos='fade-left'
				>
					{"// Hi, I'm NAEEM, A..."}
				</h1>
				<h2
					className='flex items-center justify-center text-4xl mobile:text-6xl desktop:text-9xl mt-3 text-white leading-snug dark:text-black'
					data-aos='fade-right'
				>
					{`{"`}
					<span className='text-yellow dark:text-black'>
						<Typewriter options={TypeWriterConfig} />
					</span>
					{`"}`}
				</h2>
			</motion.div>
			<motion.div
				{...fadeInMotionStyles}
				className="bg-[url('/pc-setup.gif')] bg-contain bg-center desktop:bg-[center_bottom_-25rem] bg-no-repeat desktop:bg-cover w-full h-[40vh] laptop:h-[50vh] desktop:bg-fixed opacity-60 blur-[1px] desktop:blur-[3px] mt-10 desktop:mt-[100px]"
			/>
		</motion.section>
	);
}
