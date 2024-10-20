import React from 'react';
import Image from 'next/image';

export default function Loader() {
	return (
		<section
			id='loader'
			className='fixed flex items-center justify-center flex-col transition-all duration-[0.5s] ease-[ease] bg-main-bg opacity-100 z-10 m-0 p-0 inset-0 overflow-hidden'
		>
			<div className='shadow-[0_0_10px_10px] shadow-blue m-10 w-6/12 h-full rounded-[50px] relative overflow-hidden'>
				<Image
					src={'/Streamer.gif'}
					objectFit='cover'
					layout='fill'
					alt='streamer'
					className='w-full h-full'
				/>
			</div>
			<p className='loader text-[45px] w-[170px] text-blue relative'>Loading</p>
		</section>
	);
}
