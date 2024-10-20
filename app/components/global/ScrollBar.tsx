'use client';

import { UseScrollBar } from '../TS/functions';

export default function ScrollBar() {
	const { progressBarStyle } = UseScrollBar();

	return (
		<div className='bg-blue h-1 fixed left-0 z-20 w-full '>
			<div className='h-1 bg-yellow' style={progressBarStyle} />
		</div>
	);
}
