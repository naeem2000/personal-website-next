import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Hero() {
	return (
		<section className='hero'>
			<h1>// Hi, I'm NAEEM, A...</h1>
			<h2>
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
