import { Button } from '@/stories/Button';
import React from 'react';

type Props = {
	heading: string;
	aos: string;
	link?: string;
	symbol?: string;
};

export default function SectionHeader({ heading, aos, symbol, link }: Props) {
	return (
		<div className='text-center'>
			<span
				className='text-4xl leading-[1em] text-purple mb-2.5'
				data-aos={aos}
			>
				{symbol}
			</span>
			<h1 data-aos={aos}>
				<Button
					className='hover:underline text-4xl desktop:text-7xl leading-[1em] text-white my-4 desktop:mb-5 dark:text-black'
					label={heading}
					variant='link'
					href={link}
				/>
			</h1>
		</div>
	);
}
