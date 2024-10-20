import React from 'react';

type Props = {
	subHeading: string;
	aos: string;
	textAlign: string;
};

export default function Subheader({ subHeading, aos, textAlign }: Props) {
	return (
		<h3
			className={`text-[45px] leading-[1em] text-yellow text-left ml-0 mr-[50px] mt-[50px] mb-5 ${textAlign}`}
			data-aos={aos}
		>
			{subHeading}
		</h3>
	);
}
