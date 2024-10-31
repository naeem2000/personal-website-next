'use client';

import SectionHeader from './global/SectionHeader';
import 'slick-carousel/slick/slick-theme.css';
import { pageData } from './global/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Portfolio() {
	return (
		<section className='wrapper' id='portfolio'>
			<div>
				<SectionHeader
					symbol={`(!)`}
					aos='fade-right'
					heading={'<portfolio/>'}
				/>
				<p
					className='text-yellow text-xl desktop:text-[23px] text-center'
					data-aos='fade-up'
				>
					Elevating Standards, Defining Excellence: My Projects Portfolio
				</p>
			</div>
			<div className='mt-10 mb-14 laptop:mb-0'>
				<div className='flex items-center justify-center laptop:justify-between border-t border-t-border-color'>
					<div className='flex items-end w-full laptop:w-1/2 justify-center laptop:justify-end pl-0 laptop:p-7 laptop:border-r border-r-border-color flex-wrap'>
						<Link target='_blank' href={pageData.mobile[0].link}>
							<Image
								alt={pageData.mobile[0].alt}
								src={pageData.mobile[0].image}
								width={250}
								height={250}
								className='p-4 hover:scale-110 transition-all duration-500 max-w-full h-auto'
							/>
						</Link>
						<Link target='_blank' href={pageData.web[1].link}>
							<Image
								alt={pageData.web[0].alt}
								src={pageData.web[0].image}
								width={350}
								height={250}
								className='p-4 hover:scale-110 transition-all duration-500 max-w-full h-auto'
							/>
						</Link>
					</div>
					<div className='hidden laptop:flex items-start w-1/2 justify-start p-7 flex-col'>
						<Link target='_blank' href={pageData.web[0].link}>
							<Image
								alt={pageData.web[1].alt}
								src={pageData.web[1].image}
								width={340}
								height={250}
								className='p-4 hover:scale-110 transition-all duration-500 max-w-full h-auto'
							/>
						</Link>
						<div className='self-end'>
							<Link target='_blank' href={pageData.web[2].link}>
								<Image
									alt={pageData.web[2].alt}
									src={pageData.web[2].image}
									width={450}
									height={250}
									className='p-4 hover:scale-110 transition-all duration-500 max-w-full h-auto'
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-between border-t border-t-border-color border-b border-b-border-color'>
					<div className='hidden laptop:flex items-start w-1/2 p-7 flex-col laptop:border-r border-r-border-color'>
						<div className='self-end'>
							<Link target='_blank' href={pageData.web[4].link}>
								<Image
									alt={pageData.web[4].alt}
									src={pageData.web[4].image}
									width={450}
									height={250}
									className='p-4 hover:scale-110 transition-all duration-500 max-w-full h-auto'
								/>
							</Link>
						</div>
						<Link target='_blank' href={pageData.web[5].link}>
							<Image
								alt={pageData.web[5].alt}
								src={pageData.web[5].image}
								width={450}
								height={250}
								className='p-4 hover:scale-110 transition-all duration-500 max-w-full h-auto'
							/>
						</Link>
					</div>
					<div className='flex items-end w-full laptop:w-1/2 pl-0 laptop:p-7 justify-center laptop:justify-end flex-wrap'>
						<Link target='_blank' href={pageData.web[3].link}>
							<Image
								alt={pageData.web[3].alt}
								src={pageData.web[3].image}
								width={450}
								height={250}
								className='p-4 hover:scale-110 transition-all duration-500 max-w-full h-auto'
							/>
						</Link>
						<Link target='_blank' href={pageData.mobile[2].link}>
							<Image
								alt={pageData.mobile[2].alt}
								src={pageData.mobile[2].image}
								width={250}
								height={250}
								className='p-4 hover:scale-110 transition-all duration-500 max-w-full h-auto'
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
