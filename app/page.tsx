'use client';

import { ProgressBar } from '@nadfri/react-scroll-progress-bar';
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
import AOS from 'aos';

export default function Home() {
	const { Hero, About, Portfolio, Services, Contact } = Routes();

	useEffect(() => {
		AOS.init();
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('loader');
			if (loader)
				setTimeout(() => {
					loader.classList.add('slide');
					setTimeout(() => {
						loader.style.display = 'none';
					}, 300);
				}, 2000); //remove the loader when the loader exists with the dom.
		}
	});

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
					clickables={[
						'a',
						'input[type="text"]',
						'input[type="email"]',
						'input[type="number"]',
						'input[type="submit"]',
						'input[type="image"]',
						'label[for]',
						'select',
						'textarea',
						'button',
						'.link',
						'.project',
						'.swiper-button-next',
						'.swiper-button-prev',
					]}
				/>
			</div>
			<div className='progress-bar'>
				<ProgressBar position='fixed' color1='#2fcbef' color2='#E6DB74' />
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
