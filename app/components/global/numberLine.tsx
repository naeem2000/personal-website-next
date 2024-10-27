'use client';

import { UseConstructLine } from '../TS/functions';
import React from 'react';

export default function NumberLine() {
	const { line } = UseConstructLine();

	return (
		<div className='flex flex-col items-end fixed w-auto border-r-border-color z-[5] text-side-bar-color text-lg mobile:text-[22px] leading-[1.2em] pl-0 pr-2 mobile:pr-5 pt-2.5 pb-0 border-r border-solid left-0'>
			{line.map((number) => (
				<p key={number}>{number}</p>
			))}
		</div>
	);
}
