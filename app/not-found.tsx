import Button from './components/global/Button';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
	return (
		<section className='h-[67vh] flex items-center flex-col justify-center text-center'>
			<h1 className='text-5xl laptop:text-8xl text-yellow dark:text-black'>
				404?
			</h1>
			<h1 className='text-3xl laptop:text-8xl text-purple'>You must be lost</h1>
			<Link href={'/'}>
				<Button className='button px-3 py-2 laptop:px-6 laptop:py-4 text-2xl mt-5'>
					Return home
				</Button>
			</Link>
		</section>
	);
}
