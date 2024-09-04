'use client';

import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import { pageData } from '../global/data';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import Image from 'next/image';

export default function Portfolio() {
	const settings = {
		infinite: true,
		centerMode: true,
		slidesToShow: 3,
		speed: 500,
		className: 'slider',
		adaptiveHeight: false,
		responsive: [
			{
				breakpoint: 1778,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 344,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className='portfolio' id='portfolio'>
			<div className='portfolio-head'>
				<span data-aos='fade-left'>{`(!)`}</span>
				<h1 data-aos='fade-right'>{'<portfolio>'}</h1>
				<p data-aos='fade-up'>
					Elevating Standards, Defining Excellence: My Projects Portfolio
				</p>
			</div>
			<div className='portfolio-body'>
				<h3>Web Apps</h3>
				<Slider {...settings}>
					{pageData.web.map((item) => {
						return (
							<div className='project' key={item.id}>
								<a href={item.link} target='_blank' rel='noopener noreferrer'>
									<Image
										className='img'
										src={item.image}
										width={350}
										height={350}
										alt={item.alt}
									/>
								</a>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						);
					})}
				</Slider>
				<h3>Mobile Apps</h3>
				<Slider {...settings}>
					{pageData.mobile.map((item) => {
						return (
							<div className='project' key={item.id}>
								<a href={item.link} target='_blank' rel='noopener noreferrer'>
									<Image
										className='img'
										src={item.image}
										width={300}
										height={200}
										alt={item.alt}
									/>
								</a>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
}
