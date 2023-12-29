'use client';
import React from 'react';

export default function services() {
	return (
		<section id='services' className='services'>
			<div className='services-head'>
				<span data-aos='fade-left'>{`{#}`}</span>
				<h1 data-aos='fade-right'>{'<services>'}</h1>
				<p data-aos='fade-up'>
					Crafting Code Excellence: Multilingual Programming Services Tailored
					to Your Needs
				</p>
			</div>
			<div className='services-body'>
				<p data-aos='fade-left'>
					<span>{'{"'}</span>_mobile development<span>{'"}'}</span>
				</p>
				<p data-aos='fade-right'>
					<span>{'{"'}</span>_front end development<span>{'"}'}</span>
				</p>
			</div>
			<div data-aos='zoom-in' className='services-bottom'></div>
		</section>
	);
}
