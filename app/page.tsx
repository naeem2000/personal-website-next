'use client';
import ScrollToTop from 'react-scroll-to-top';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
	useEffect(() => {
		AOS.init();
	});

	const Line = dynamic(() => import('./components/numberLine'), {
		ssr: false,
	});

	const Nav = dynamic(() => import('./Nav/page'), {
		ssr: false,
	});

	const Hero = dynamic(() => import('./hero/page'), {
		ssr: false,
	});

	const About = dynamic(() => import('./about/page'), {
		ssr: false,
	});

	const Portfolio = dynamic(() => import('./portfolio/page'), {
		ssr: false,
	});

	return (
		<>
			<Line />
			<Nav />
			<Hero />
			<About />
			<Portfolio />
			<ScrollToTop className='scroll-to-top-button' smooth />
		</>
	);
}
