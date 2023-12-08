'use client';
import React from 'react';
import Image from 'next/image';
import { pageData } from '../components/data';

export default function Portfolio() {
	return (
		<section className='portfolio'>
			<div className='portfolio-head'>
				<span data-aos='fade-left'>{`(!)`}</span>
				<h1 data-aos='fade-right'>{'<portfolio>'}</h1>
				<p data-aos='fade-up'>
					Elevating Standards, Defining Excellence: My Projects Portfolio
				</p>
			</div>
			<div className='portfolio-body'>
				<div className='portfolio-left'>
					{pageData.data.map((item, index) => {
						return (
							<>
								<div key={index} data-aos='flip-down'>
									<Image
										className='img'
										src={item.image}
										width={350}
										height={350}
										alt={item.alt}
									/>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</>
						);
					})}
				</div>
				<div className='portfolio-right'>right</div>
			</div>
		</section>
	);
}
