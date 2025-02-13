import { PacmanLoader } from 'react-spinners';
import React from 'react';

export default function Loader() {
	return (
		<section
			id='loader'
			className='fixed flex items-center justify-center transition-all duration-[0.5s] ease-[ease] bg-main-bg opacity-100 z-10 m-0 p-0 inset-0 overflow-hidden'
		>
			<div className='flex flex-col'>
				<PacmanLoader color='rgb(46, 204, 239)' size={50} />
				<p className='loader text-5xl w-[200px] mt-5 text-blue relative'>
					Loading
				</p>
			</div>
		</section>
	);
}
