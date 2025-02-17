import SectionHeader from './global/SectionHeader';
import React from 'react';
import { fadeInMotionStyles } from './utils/constants';
import { motion } from 'motion/react';

export default function services() {
	return (
		<motion.section {...fadeInMotionStyles} className='services wrapper'>
			<div className='flex items-center justify-center flex-col'>
				<SectionHeader symbol={`{#}`} aos='fade-up' heading={'<services/>'} />
				<p
					data-aos='fade-up'
					className='text-yellow text-center leading-6 desktop:text-left text-xl desktop:text-[23px]'
				>
					Crafting Code Excellence: Multilingual Programming Services Tailored
					to Your Needs
				</p>
			</div>
			<div className='pt-14 text-center'>
				<p
					data-aos='fade-right'
					className='text-blue text-3xl desktop:text-9xl transition-all ease-in hover:bg-yellow border-y-[1px] border-border-color'
				>
					<span>{'{"'}</span>_mobile development<span>{'"}'}</span>
				</p>
				<p
					data-aos='fade-left'
					className='text-yellow text-3xl desktop:text-9xl transition-all ease-in hover:bg-blue mt-12 border-y-[1px] border-border-color'
				>
					<span>{'{"'}</span>_front end development<span>{'"}'}</span>
				</p>
			</div>
			<motion.div
				{...fadeInMotionStyles}
				className="bg-[url('/working-pc.jpg')] bg-contain bg-center desktop:bg-[center_bottom] mt-10 desktop:mt-[100px] bg-no-repeat desktop:bg-cover w-full h-[50vh] desktop:bg-fixed opacity-60 blur-[1px] desktop:blur-[3px]"
			/>
		</motion.section>
	);
}
