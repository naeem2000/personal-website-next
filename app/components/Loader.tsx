import Image from 'next/image';
import React from 'react';

export default function loader() {
	return (
		<section id='loader' className='loader '>
			<Image
				className='img'
				src={'/Streamer.gif'}
				width={350}
				height={350}
				alt='loader'
			/>
			<p>Loading</p>
		</section>
	);
}
