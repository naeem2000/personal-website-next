'use client';

import { CursorClickables } from './components/TS/constants';
import AnimatedCursor from 'react-animated-cursor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from 'react-scroll-to-top';
import NumberLine from './global/numberLine';
import Loader from './global/Loader';
import Footer from './global/Footer';
import { Routes } from './Routes';
import { useEffect } from 'react';
import Nav from './global/Nav';
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
				}, 2000);
			}
		}
	}, []);

	return (
		<>
			<div className='cursor'>
				<AnimatedCursor
					innerSize={17}
					outerSize={7}
					color='231, 219, 116'
					innerScale={0.7}
					outerScale={5}
					outerStyle={{ background: 'rgb(46, 204, 239, 0.4)' }}
					clickables={CursorClickables}
				/>
			</div>
			<ToastContainer limit={3} />
			<Loader />
			<NumberLine />
			<Nav />
			<Hero />
			<About />
			<Portfolio />
			<Services />
			<Contact />
			<Footer />
			<ScrollToTop className='scroll-to-top-button' smooth />
		</>
	);
}
