import Button from './components/global/Button';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
	return (
		<section className='h-screen flex items-center flex-col justify-center text-center'>
			<h1 className='text-8xl text-yellow'>404?</h1>
			<h1 className='text-8xl text-purple'>You must be lost</h1>
			<Link href={'/'}>
				<Button className='button px-6 py-4 text-2xl mt-5'>Return home</Button>
			</Link>
		</section>
	);
}
