'use client';

import { TypeWriterConfig } from './TS/constants';
import Typewriter from 'typewriter-effect';
import React from 'react';

export default function Hero() {
	return (
		<section className='flex items-center justify-center flex-col' id='hero'>
			{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
			<h1 className='text-white text-3xl text-center;' data-aos='fade-left'>
				// Hi, I&apos;m NAEEM, A...
			</h1>
			<h2
				className='flex items-center justify-center text-[8vw] text-white mt-[30px]'
				data-aos='fade-right'
			>
				{`{"`}
				<span className='text-9xl leading-[1em] text-yellow mb-2.5'>
					<Typewriter options={TypeWriterConfig} />
				</span>
				{`"}`}
			</h2>
			<div className="bg-[url('/pc-setup.gif')] bg-no-repeat bg-cover w-full h-[50vh] bg-fixed opacity-60 blur-[3px] mt-[100px]"></div>
		</section>
	);
}
