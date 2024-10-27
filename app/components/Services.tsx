import SectionHeader from './global/SectionHeader';
import React from 'react';

export default function services() {
	return (
		<section id='services' className='services wrapper'>
			<div className='flex items-center justify-center flex-col'>
				<SectionHeader symbol={`{#}`} aos='fade-left' heading={'<services>'} />
				<p className='text-yellow text-center desktop:text-left text-xl desktop:text-[23px]'>
					Crafting Code Excellence: Multilingual Programming Services Tailored
					to Your Needs
				</p>
			</div>
			<div className='pt-14 text-center'>
				<p className='text-blue text-3xl desktop:text-9xl transition-all ease-in hover:bg-yellow border-y-[1px] border-border-color'>
					<span>{'{"'}</span>_mobile development<span>{'"}'}</span>
				</p>
				<p className='text-yellow text-3xl desktop:text-9xl transition-all ease-in hover:bg-blue mt-12 border-y-[1px] border-border-color'>
					<span>{'{"'}</span>_front end development<span>{'"}'}</span>
				</p>
			</div>
			<div className="bg-[url('/working-pc.jpg')] bg-contain bg-center desktop:bg-[center_bottom_1rem] mt-10 desktop:mt-[100px] bg-no-repeat desktop:bg-cover w-full h-[50vh] desktop:bg-fixed opacity-60 blur-[3px]" />
		</section>
	);
}
