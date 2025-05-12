import { BiMailSend } from 'react-icons/bi';
import React from 'react';

export default function ThankYou() {
	return (
		<section className='wrapper h-[70vh]'>
			<div className='flex flex-col items-center justify-center text-center h-full'>
				<BiMailSend size={80} color='var(--purple)' />
				<h1 className='text-[50px] text-yellow dark:text-black'>
					Thanks for reaching out! <br /> I&apos;ll get back to you soon.
				</h1>
			</div>
		</section>
	);
}
