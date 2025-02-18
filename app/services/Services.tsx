'use client';
import { motion } from 'motion/react';
import React from 'react';
import { fadeInMotionStyles } from '../components/utils/constants';
import PageHeader from '../components/global/PageHeader';
import { Routes } from '../Routes';

type Props = {};

export default function Services({}: Props) {
	const { Contact } = Routes();

	return (
		<motion.section {...fadeInMotionStyles} className='wrapper'>
			<div className='flex items-center justify-center flex-col'>
				<PageHeader text='"Services"' symbol='{#}' />
				<p className='text-center text-yellow text-2xl mt-5 max-w-5xl'>
					...My Web & Mobile Development Services | Crafting High-Performance
					Websites, Scalable Mobile Apps, and Custom Digital Solutions to Help
					Businesses Thrive in the Online World. From Frontend to Backend, UI/UX
					to API Integrations, I Provide End-to-End Front-end Development
					Services Tailored to Your Unique Needs.
				</p>
			</div>
			<Contact />
		</motion.section>
	);
}
