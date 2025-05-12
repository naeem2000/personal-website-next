'use client';

import { fadeInMotionStyles } from './utils/constants';
import SectionHeader from './global/SectionHeader';
import { pageData } from './global/data';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Portfolio() {
	return (
		<motion.section {...fadeInMotionStyles} className='wrapper' id='portfolio'>
			<div>
				<SectionHeader
					symbol={`(!)`}
					aos='fade-up'
					link='/portfolio'
					heading={'<portfolio/>'}
				/>
				<p
					className='text-yellow text-xl desktop:text-[23px] text-center dark:text-black'
					data-aos='fade-up'
				>
					Elevating Standards, Defining Excellence: My Projects Portfolio
				</p>
			</div>
			<div className='mt-10 mb-14 laptop:mb-0'>
				<div className='flex items-center justify-center flex-col laptop:flex-row laptop:justify-between border-y border-t-border-color border-b-border-color'>
					<div
						data-aos='fade-right'
						className='flex items-center w-full laptop:w-1/2 justify-around p-7 border-b laptop:border-b-0 border-b-border-color laptop:border-r border-r-border-color flex-col md:flex-row'
					>
						{pageData.mobile.map((item, index) => {
							return (
								<Link
									key={index}
									href={item.link}
									className='image-container m-3 hover:scale-[1.03] transition-all duration-150'
									target='_blank'
								>
									<Image
										src={item.image}
										alt={item.alt}
										width={300}
										height={300}
									/>
									<div className='overlay'>
										<p className='text-yellow text-xl md:text-3xl font-medium'>
											{item.title}
										</p>
										<p className='text-white text-sm md:text-xl max-w-96'>
											{item.description}
										</p>
									</div>
								</Link>
							);
						})}
					</div>
					<div
						data-aos='fade-left'
						className='flex items-center w-full laptop:w-1/2 justify-around p-7 flex-wrap'
					>
						{pageData.web.map((item, index) => {
							return (
								<Link
									key={index}
									target='_blank'
									href={item.link}
									className='image-container mb-5 hover:scale-[1.03] transition-all duration-150'
								>
									<Image
										src={item.image}
										alt={item.alt}
										width={550}
										height={550}
									/>
									<div className='overlay'>
										<p className='text-yellow text-xl md:text-3xl font-medium'>
											{item.title}
										</p>
										<p className='text-white text-sm md:text-xl max-w-96'>
											{item.description}
										</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</motion.section>
	);
}
