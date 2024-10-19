import React from 'react';

type Props = {
	subHeading: string;
	aos: string;
};

export default function Subheader({ subHeading, aos }: Props) {
	return <h3 data-aos={aos}>{subHeading}</h3>;
}
