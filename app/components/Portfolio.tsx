'use client';

import SectionHeader from './global/SectionHeader';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Subheader from './global/Subheader';

export default function Portfolio() {
	return (
		<section className='wrapper' id='portfolio'>
			<div>
				<SectionHeader
					symbol={`(!)`}
					aos='fade-right'
					heading={'<portfolio>'}
				/>
				<p className='text-white text-[23px] text-center' data-aos='fade-up'>
					Elevating Standards, Defining Excellence: My Projects Portfolio
				</p>
			</div>
			<div>
				<Subheader
					textAlign='text-left'
					aos={'fade-left'}
					subHeading={'Web Apps'}
				/>
				Projects Web
				<Subheader
					textAlign='text-right'
					aos={'fade-right'}
					subHeading={'Mobile Apps'}
				/>
				Projects Mobile
			</div>
		</section>
	);
}
