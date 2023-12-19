import Image from 'next/image';
import React from 'react';

export default function loader() {
	return (
		<section id='loader' className='loader '>
			<Image
				className='img'
				src={'/Streamer.gif'}
				alt='loader'
				width='0'
				height='0'
				sizes='10px'
				style={{ width: '30%', height: '70%' }}
			/>
			<p>Loading</p>
		</section>
	);
}
