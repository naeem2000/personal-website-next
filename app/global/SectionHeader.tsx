import React from 'react';

type Props = {
	heading: string;
	aos: string;
};

export default function SectionHeader({ heading, aos }: Props) {
	return <h1 data-aos={aos}>{heading}</h1>;
}
