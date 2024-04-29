'use client';

import { pageData } from '../components/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Image from 'next/image';
import React from 'react';

export default function Portfolio() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		className: 'slider',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
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
				<div className='portfolio-items'>
					<Slider {...settings}>
						{pageData.mobile.map((item) => {
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
				</div>
				<div className='portfolio-items'>
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
				</div>
			</div>
		</section>
	);
}
