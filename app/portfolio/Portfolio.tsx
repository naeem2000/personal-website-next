import PageHeader from '../components/global/PageHeader';
import Contact from '../components/Contact';
import React from 'react';

export default function Portfolio({}) {
	const buttonStyles = 'flex item-center justify-center mr-2 text-2xl';
	return (
		<section>
			<div className='wrapper'>
				<div className='flex items-center justify-center flex-col'>
					<PageHeader text='"Portfolio"' symbol='{!}' />
					<p className='text-center text-yellow text-2xl mt-5 max-w-5xl'>
						…Welcome to My Portfolio: A Deep Dive Into My Creative Journey,
						Professional Expertise, and Passion-Driven Projects. Here, I invite
						you to explore a collection of my best work, where creativity meets
						precision, and innovation drives impactful results.
					</p>
				</div>
			</div>
			<div className='mt-14'>
				<div className='flex items-center justify-center'>
					<button className={buttonStyles}>awe</button>
					<button className={buttonStyles}>awe</button>
					<button className={buttonStyles}>awe</button>
					<button className={buttonStyles}>awe</button>
				</div>
			</div>
			<Contact />
		</section>
	);
}
