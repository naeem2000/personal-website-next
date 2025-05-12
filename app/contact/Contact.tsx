'use client';

import ContactForm from '../components/ContactForm';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';
import {
	mapsLocation,
	fadeInMotionStyles,
} from '../components/utils/constants';

export default function Contact() {
	return (
		<motion.section {...fadeInMotionStyles} className='wrapper'>
			<ContactForm />
			<motion.div
				{...fadeInMotionStyles}
				className='grid grid-cols-1 laptop:grid-cols-2 border-t border-t-border-color'
			>
				<div className='laptop:border-r border-r-border-color border-b border-b-border-color laptop:border-b-0 pt-10 pl-0 laptop:pl-10 pb-10'>
					<p className='text-purple text-xl'>
						{'{'}EMAIL{'}'}
					</p>
					<Link
						href='mailto:mogamatnaeemcarr@gmail.com'
						target='_blank'
						className='hover:underline text-yellow text-2xl dark:text-black'
					>
						mogamatnaeemcarr@gmail.com
					</Link>
				</div>
				<div className='pt-10 pl-0 laptop:pl-10 pb-10'>
					<p className='text-purple text-xl'>
						{'{'}LOCATION{'}'}
					</p>
					<Link
						href='https://maps.app.goo.gl/fexn2woZnbfkfDt56'
						target='_blank'
						className='hover:underline text-yellow text-2xl dark:text-black'
					>
						Cape Town
					</Link>
				</div>
			</motion.div>
			<motion.div {...fadeInMotionStyles}>
				<iframe
					src={mapsLocation}
					width='100%'
					height='450'
					loading='lazy'
					className='border-0 m-0'
				/>
			</motion.div>
		</motion.section>
	);
}
