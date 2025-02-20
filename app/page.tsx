'use client';

import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Hero from './components/Hero';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import AOS from 'aos';

export default function Home() {
	useEffect(() => {
		AOS.init();
		// if (typeof window !== 'undefined') {
		// 	const loader = document.getElementById('loader');
		// 	if (loader) {
		// 		loader.classList.add('slide');

		// 		loader.style.display = 'none';
		// 	}
		// }
	}, []);

	return (
		<>
			{/* <Loader /> */}
			<Hero />
			<About />
			<Portfolio />
			<Services />
			<Contact />
		</>
	);
}
