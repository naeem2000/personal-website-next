'use client';
import ScrollToTop from 'react-scroll-to-top';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
	useEffect(() => {
		AOS.init();
	});

	const Line = dynamic(() => import('./components/numberLine'), {
		ssr: true,
	});

	const Nav = dynamic(() => import('./Nav/page'), {
		ssr: true,
	});

	const Hero = dynamic(() => import('./hero/page'), {
		ssr: true,
	});

	const About = dynamic(() => import('./about/page'), {
		ssr: true,
	});

	const Portfolio = dynamic(() => import('./portfolio/page'), {
		ssr: true,
	});

	const Services = dynamic(() => import('./services/page'), {
		ssr: true,
	});

	const Contact = dynamic(() => import('./contact/page'), {
		ssr: true,
	});

	return (
		<>
			<Line />
			<Nav />
			<Hero />
			<About />
			<Portfolio />
			<Services />
			<Contact />
			<ScrollToTop className='scroll-to-top-button' smooth />
		</>
	);
}
