import React from 'react';

type Props = {
	heading: string;
	aos: string;
};

export default function SectionHeader({ heading, aos }: Props) {
	return (
		<h1 className='text-[45px] leading-[1em] text-white mb-5' data-aos={aos}>
			{heading}
		</h1>
	);
}
