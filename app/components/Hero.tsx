'use client';

import { TypeWriterConfig } from './TS/constants';
import Typewriter from 'typewriter-effect';
import React from 'react';

export default function Hero() {
	return (
		<section
			className='wrapper flex items-center justify-center flex-col'
			id='hero'
		>
			<h1
				className='text-white text-2xl tablet:text-3xl text-center mt-28'
				data-aos='fade-left'
				// eslint-disable-next-line react/jsx-no-comment-textnodes
			>
				// Hi, I&apos;m NAEEM, A...
			</h1>
			<h2
				className='flex items-center justify-center text-4xl tablet:text-6xl desktop:text-8xl mt-3 text-white leading-snug'
				data-aos='fade-right'
			>
				{`{"`}
				<span className='text-yellow'>
					<Typewriter options={TypeWriterConfig} />
				</span>
				{`"}`}
			</h2>
			<div className="bg-[url('/pc-setup.gif')] bg-contain bg-center desktop:bg-[center_bottom_-25rem] bg-no-repeat desktop:bg-cover w-full h-[50vh] desktop:bg-fixed opacity-60 blur-[3px] mt-[100px]" />
		</section>
	);
}
