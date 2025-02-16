'use client';
import { filterButtons, portolioData } from '../components/global/data';
import { filterButtonStyles } from '../components/TS/constants';
import { shuffleArray } from '../components/TS/functions';
import PageHeader from '../components/global/PageHeader';
import React, { useEffect, useState } from 'react';
import { Project } from '../components/TS/types';
import Button from '../components/global/Button';
import Contact from '../components/Contact';
import Image from 'next/image';

export default function Portfolio({}) {
	const [projects, setProjects] = useState<string>('all projects');

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
							<Button
								onClick={() => setProjects(item)}
								key={index}
								className={filterButtonStyles}
							>
								{item}
							</Button>
						);
					})}
				</div>
				<div>
					{projects === 'all projects' ? (
						<div>
							Web
							<div className='grid grid-cols-4 place-items-start gap-2 mt-20'>
								{portolioData.web.map((item, index) => {
									return (
										<div key={index}>
											<Image
												src={item.image}
												alt={item.alt}
												width={600}
												height={600}
												className='max-w-[350px]'
											/>
										</div>
									);
								})}
							</div>
							Mobile
							<div className='grid grid-cols-4 place-items-start gap-2 mt-20'>
								{portolioData.mobile.map((item, index) => {
									return (
										<div key={index}>
											<Image
												src={item.image}
												alt={item.alt}
												width={600}
												height={600}
												className='max-w-[350px]'
											/>
										</div>
									);
								})}
							</div>
						</div>
					) : projects === 'web development' ? (
						<>
							{portolioData.web.map((item, index) => {
								return (
									<>
										{item.title}
										{item.description}
									</>
								);
							})}
						</>
					) : (
						projects === 'mobile development' && (
							<>
								{portolioData.mobile.map((item, index) => {
									return (
										<>
											{item.title}
											{item.description}
										</>
									);
								})}
							</>
						)
					)}
				</div>
			</div>
			<Contact />
		</section>
	);
}
