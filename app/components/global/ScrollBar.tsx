'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollBar() {
	const [scrolled, setScrolled] = useState<string>();

	const scrollProgress = () => {
		const scrollPx = document.documentElement.scrollTop;
		const winHeightPx =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolledPercentage = `${(scrollPx / winHeightPx) * 100}%`;
		setScrolled(scrolledPercentage);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollProgress);
		return () => {
			window.removeEventListener('scroll', scrollProgress);
		};
	}, []);

	const progressBarStyle = {
		width: scrolled,
	};

	return (
		<div className='bg-blue h-1 fixed left-0 z-20 w-full '>
			<div className='h-1 bg-yellow' style={progressBarStyle} />
		</div>
	);
}
