'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
	useEffect(() => {
		AOS.init();
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
	return (
		<>
			<div className='side-image'>
				<Image
					src='/ide-line-numbers.png'
					alt='ide-line-numbers'
					width={40}
					height={1260}
					sizes='(height: 100%)'
				/>
			</div>
			<Nav />
			<Hero />
			<About />
		</>
	);
}
