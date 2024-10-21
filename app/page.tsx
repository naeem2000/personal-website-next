'use client';

import Loader from './components/global/Loader';
import Footer from './components/global/Footer';
import { Routes } from './Routes';
import { useEffect } from 'react';
import Nav from './components/global/Nav';
import 'aos/dist/aos.css';
import React from 'react';
import AOS from 'aos';

export default function Home() {
	const { Hero, About, Portfolio, Services, Contact } = Routes();

	useEffect(() => {
		AOS.init();
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('loader');
			if (loader) {
				setTimeout(() => {
					loader.classList.add('slide');
					setTimeout(() => {
						loader.style.display = 'none';
					}, 300);
				}, 1500);
			}
		}
	}, []);

	return (
		<>
			<Loader />
			<Nav />
			<Hero />
			<About />
			<Portfolio />
			<Services />
			<Contact />
			<Footer />
		</>
	);
}
