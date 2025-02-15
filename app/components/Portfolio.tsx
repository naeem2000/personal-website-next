'use client';

import SectionHeader from './global/SectionHeader';
import { pageData } from './global/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Portfolio() {
	const imageStyleMobile: string =
		'mb-5 laptop:m-3 hover:scale-110 transition-all duration-500 w-full h-auto';
	const imageStyleWeb: string =
		'mb-5 laptop:m-3 hover:scale-110 transition-all duration-500 w-full h-full max-h-[250px]';

	console.log(pageData.mobile);

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
				<div className='flex items-center justify-center flex-col laptop:flex-row laptop:justify-between border-y border-t-border-color border-b-border-color'>
					<div className='flex items-center w-full laptop:w-1/2 justify-around p-7 border-b laptop:border-b-0 border-b-border-color laptop:border-r border-r-border-color flex-wrap'>
						{pageData.mobile.map((item, index) => {
							return (
								<Link key={index} target='_blank' href={item.link}>
									<Image
										alt={item.alt}
										src={item.image}
										width={250}
										height={250}
										className={imageStyleMobile}
									/>
								</Link>
							);
						})}
					</div>
					<div className='flex items-center w-full laptop:w-1/2 justify-around p-7 flex-wrap'>
						{pageData.web.map((item, index) => {
							return (
								<Link key={index} target='_blank' href={item.link}>
									<Image
										alt={item.alt}
										src={item.image}
										width={450}
										height={250}
										className={imageStyleWeb}
									/>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
