import React from 'react';

type Props = {
	heading: string;
	aos: string;
	symbol: string;
};

export default function SectionHeader({ heading, aos, symbol }: Props) {
	return (
		<div className='text-center'>
			<span
				className='text-3xl leading-[1em] text-purple mb-2.5'
				data-aos={aos}
			>
				{symbol}
			</span>
			<h1 className='text-[45px] leading-[1em] text-white mb-5' data-aos={aos}>
				{heading}
			</h1>
		</div>
	);
}
