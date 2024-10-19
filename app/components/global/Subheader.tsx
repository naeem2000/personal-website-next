import React from 'react';

type Props = {
	subHeading: String;
	aos: String;
};

export default function Subheader({ subHeading, aos }: Props) {
	return <h3 data-aos={aos}>{subHeading}</h3>;
}
