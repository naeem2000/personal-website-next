'use client';

import { TypeWriterConfig } from './TS/constants';
import Typewriter from 'typewriter-effect';
import React from 'react';

export default function Hero() {
	return (
		<section className='hero' id='hero'>
			<h1 data-aos='fade-left'>// Hi, I'm NAEEM, A...</h1>
			<h2 data-aos='fade-right'>
				{`{"`}
				<span>
					<Typewriter options={TypeWriterConfig} />
				</span>
				{`"}`}
			</h2>
			<div className='header-bg'></div>
		</section>
	);
}
