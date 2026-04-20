import { useState, useCallback, useEffect } from 'react';

export const useScrollBar = () => {
	const [scrolled, setScrolled] = useState<string>();

	const scrollProgress = useCallback(() => {
		const scrollPx = document.documentElement.scrollTop;
		const winHeightPx =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolledPercentage = `${(scrollPx / winHeightPx) * 100}%`;
		setScrolled(scrolledPercentage);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', scrollProgress);
		return () => {
			window.removeEventListener('scroll', scrollProgress);
		};
	}, [scrollProgress]);

	const progressBarStyle = {
		width: scrolled,
	};

	return { progressBarStyle };
};
