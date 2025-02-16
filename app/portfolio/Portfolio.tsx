'use client';
import { filterButtons, portolioData } from '../components/global/data';
import { filterButtonStyles } from '../components/TS/constants';
import PageHeader from '../components/global/PageHeader';
import Button from '../components/global/Button';
import Contact from '../components/Contact';
import React, { useState } from 'react';
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
								className={`${filterButtonStyles} ${
									item === projects && 'border-purple !text-purple'
								}`}
							>
								{item}
							</Button>
						);
					})}
				</div>
				<div>
					{projects === 'all projects' ? (
						<div className='mt-20'>
							<p className='text-yellow text-3xl mb-5'>// Web development</p>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
								{portolioData.web.map((item, index) => {
									return (
										<div key={index} className='image-container'>
											<Image
												src={item.image}
												alt={item.alt}
												width={600}
												height={600}
												className='w-full'
											/>
											<div className='overlay'>
												<p className='text-yellow text-3xl font-medium'>
													{item.title}
												</p>
												<p className='text-white text-xl max-w-96'>
													{item.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
							<p className='text-yellow text-3xl mb-5 mt-20'>
								// Mobile development
							</p>
							<div className='grid grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full'>
								{portolioData.mobile.map((item, index) => {
									return (
										<div key={index} className='image-container'>
											<Image
												src={item.image}
												alt={item.alt}
												width={600}
												height={600}
												className='w-full'
											/>
											<div className='overlay'>
												<p className='text-yellow text-3xl font-medium'>
													{item.title}
												</p>
												<p className='text-white text-xl max-w-96'>
													{item.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					) : projects === 'web development' ? (
						<div className='grid grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full mt-20'>
							{portolioData.web.map((item, index) => {
								return (
									<div key={index} className='image-container'>
										<Image
											src={item.image}
											alt={item.alt}
											width={600}
											height={600}
											className='w-full'
										/>
										<div className='overlay'>
											<p className='text-yellow text-3xl font-medium'>
												{item.title}
											</p>
											<p className='text-white text-xl max-w-96'>
												{item.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					) : (
						projects === 'mobile development' && (
							<div className='grid grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full mt-20'>
								{portolioData.mobile.map((item, index) => {
									return (
										<div key={index} className='image-container'>
											<Image
												src={item.image}
												alt={item.alt}
												width={600}
												height={600}
												className='w-full'
											/>
											<div className='overlay'>
												<p className='text-yellow text-3xl font-medium'>
													{item.title}
												</p>
												<p className='text-white text-xl max-w-96'>
													{item.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						)
					)}
				</div>
			</div>
			<Contact />
		</section>
	);
}
