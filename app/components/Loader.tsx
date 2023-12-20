import Image from 'next/image';
import React from 'react';

export default function loader() {
	return (
		<section id='loader' className='loader '>
			<div className='img'></div>
			<p>Loading</p>
		</section>
	);
}
