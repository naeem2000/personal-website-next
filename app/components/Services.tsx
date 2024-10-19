import SectionHeader from './global/SectionHeader';
import React from 'react';

export default function services() {
	return (
		<section id='services' className='services'>
			<div className='services-head'>
				<span>{`{#}`}</span>
				<SectionHeader aos='fade-left' heading={'<services>'} />
				<p>
					Crafting Code Excellence: Multilingual Programming Services Tailored
					to Your Needs
				</p>
			</div>
			<div className='services-body'>
				<p>
					<span>{'{"'}</span>_mobile development<span>{'"}'}</span>
				</p>
				<p>
					<span>{'{"'}</span>_front end development<span>{'"}'}</span>
				</p>
			</div>
			<div className='services-bottom'></div>
		</section>
	);
}
