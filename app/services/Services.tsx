'use client';
import { motion } from 'motion/react';
import React from 'react';
import { fadeInMotionStyles } from '../components/utils/constants';
import PageHeader from '../components/global/PageHeader';
import { Routes } from '../Routes';
import { aboutText, services } from '../components/global/data';

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
			<motion.div
				{...fadeInMotionStyles}
				className='flex items-center justify-center mt-10 flex-col'
			>
				<div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
					{services.map((item, index) => {
						return (
							<div
								className='flex items-center p-5 laptop:p-10 min-w-72 laptop:min-w-96 justify-between border border-border-color'
								key={index}
							>
								<span className='text-4xl text-purple'>
									{'{'}
									{item.number}
									{'}'}
								</span>
								<div className='laptop:mx-auto flex flex-col items-center text-center'>
									{item.icon}
									<h3 className='text-3xl text-white'>{item.name}</h3>
								</div>
							</div>
						);
					})}
				</div>
				<p className='text-4xl text-purple mt-10'>And more to come!</p>
			</motion.div>
			<Contact />
		</motion.section>
	);
}
