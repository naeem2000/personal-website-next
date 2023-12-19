'use client';

import React, { useEffect, useState } from 'react';

export default function numberLine() {
	const [line, setLine] = useState<number[]>([]);

	useEffect(() => {
		const numbersArray = Array.from({ length: 200 }, (_, index) => index + 1);
		setLine(numbersArray);
	}, []);
	return (
		<div className='line-numbers'>
			{line.map((number) => (
				<p key={number}>{number}</p>
			))}
		</div>
	);
}
