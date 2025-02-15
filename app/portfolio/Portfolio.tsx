'use client';
import { filterButtonStyles } from '../components/TS/constants';
import { filterButtons } from '../components/global/data';
import PageHeader from '../components/global/PageHeader';
import Button from '../components/global/Button';
import Contact from '../components/Contact';
import React from 'react';

export default function Portfolio({}) {
	return (
		<section className='wrapper'>
			<div>
				<div className='flex items-center justify-center flex-col'>
					<PageHeader text='"Portfolio"' symbol='{!}' />
					<p className='text-center text-yellow text-2xl mt-5 max-w-5xl'>
						…Welcome to My Portfolio: A Deep Dive Into My Creative Journey,
						Professional Expertise, and Passion-Driven Projects. Here, I invite
						you to explore a collection of my best work, where creativity meets
						precision, and innovation drives impactful results.
					</p>
				</div>
			</div>
			<div className='mt-14'>
				<div className='flex items-center justify-center flex-wrap'>
					{filterButtons.map((item, index) => {
						return (
							<Button key={index} className={filterButtonStyles}>
								{item}
							</Button>
						);
					})}
				</div>
				<div>//projects</div>
			</div>
			<Contact />
		</section>
	);
}
