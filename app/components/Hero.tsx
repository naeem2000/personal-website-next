'use client';
import Typewriter from 'typewriter-effect';
import React from 'react';

export default function Hero() {
	return (
		<section className='hero' id='hero'>
			<h1 data-aos='fade-left'>// Hi, I'm NAEEM, A...</h1>
			<h2 data-aos='fade-right'>
				{`{"`}
				<span>
					<Typewriter
						options={{
							strings: [
								'_Front End Developer',
								'_Mobile Developer',
								'_Problem Solver',
							],
							deleteSpeed: 30,
							autoStart: true,
							loop: true,
						}}
					/>
				</span>
				{`"}`}
			</h2>
			<div className='header-bg'></div>
		</section>
	);
}
