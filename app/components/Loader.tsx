import React from 'react';

export default function loader() {
	return (
		<section id='loader' className='loader '>
			<div data-aos='zoom-in' className='img'></div>
			<p data-aos='slide-up'>Loading</p>
		</section>
	);
}
