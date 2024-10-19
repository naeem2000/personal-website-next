'use client';

import { UseConstructLine } from '../TS/functions';
import React from 'react';

export default function NumberLine() {
	const { line } = UseConstructLine();

	return (
		<div className='line-numbers'>
			{line.map((number) => (
				<p key={number}>{number}</p>
			))}
		</div>
	);
}
