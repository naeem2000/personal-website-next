import { fadeInMotionStyles } from './utils/constants';
import { BiMailSend } from 'react-icons/bi';
import React from 'react';
import { motion } from 'motion/react';

export default function ThankYou() {
	return (
		<motion.div {...fadeInMotionStyles}>
			<div className='flex flex-col items-center justify-center text-center h-full mb-10'>
				<BiMailSend size={80} color='var(--purple)' />
				<h1 className='text-4xl desktop:text-[50px] text-yellow dark:text-black'>
					Thanks for reaching out! <br /> I&apos;ll get back to you soon.
				</h1>
			</div>
		</motion.div>
	);
}
