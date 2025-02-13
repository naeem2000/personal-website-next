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
						<Link target='_blank' href={pageData.mobile[0].link}>
							<Image
								alt={pageData.mobile[0].alt}
								src={pageData.mobile[0].image}
								width={250}
								height={250}
								className={imageStyleMobile}
							/>
						</Link>
						<Link target='_blank' href={pageData.mobile[2].link}>
							<Image
								alt={pageData.mobile[2].alt}
								src={pageData.mobile[2].image}
								width={250}
								height={250}
								className={`${imageStyleMobile} mb-0`}
							/>
						</Link>
					</div>
					<div className='flex items-center w-full laptop:w-1/2 justify-around p-7 flex-wrap'>
						<Link target='_blank' href={pageData.web[0].link}>
							<Image
								alt={pageData.web[0].alt}
								src={pageData.web[0].image}
								width={450}
								height={250}
								className={imageStyleWeb}
							/>
						</Link>
						<Link target='_blank' href={pageData.web[1].link}>
							<Image
								alt={pageData.web[1].alt}
								src={pageData.web[1].image}
								width={650}
								height={250}
								className={`${imageStyleWeb} mb-0`}
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
