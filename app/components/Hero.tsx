'use client';

import { TypeWriterConfig } from './TS/constants';
import Typewriter from 'typewriter-effect';
import React from 'react';

export default function Hero() {
	return (
		<section className='hero' id='hero'>
			{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
			<h1 data-aos='fade-left'>// Hi, I&apos;m NAEEM, A...</h1>
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
