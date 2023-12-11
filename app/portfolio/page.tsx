'use client';
import React from 'react';
import Image from 'next/image';
import { pageData } from '../components/data';

export default function Portfolio() {
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
				<div className='portfolio-left'>
					{pageData.block1.map((item, index) => {
						return (
							<>
								<div key={index} data-aos='flip-down'>
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
							</>
						);
					})}
				</div>
				<div className='portfolio-right'>
					{pageData.block2.map((item, index) => {
						return (
							<>
								<div key={index} data-aos='flip-down'>
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
							</>
						);
					})}
				</div>
			</div>
			<div className='portfolio-body-bottom'>
				<div className='portfolio-left'>
					{pageData.block3.map((item, index) => {
						return (
							<>
								<div key={index} data-aos='flip-down'>
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
							</>
						);
					})}
				</div>
				<div className='portfolio-right'>
					{pageData.block4.map((item, index) => {
						return (
							<>
								<div key={index} data-aos='flip-down'>
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
							</>
						);
					})}
				</div>
			</div>
		</section>
	);
}
