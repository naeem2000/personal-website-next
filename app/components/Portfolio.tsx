'use client';

import SectionHeader from './global/SectionHeader';
import 'slick-carousel/slick/slick-theme.css';
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
					className='text-white text-xl desktop:text-[23px] text-center'
					data-aos='fade-up'
				>
					Elevating Standards, Defining Excellence: My Projects Portfolio
				</p>
			</div>
			<div>Projects Mobile</div>
		</section>
	);
}
