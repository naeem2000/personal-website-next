'use client';

import { ProgressBar } from '@nadfri/react-scroll-progress-bar';
import AnimatedCursor from 'react-animated-cursor';
import NumberLine from './components/numberLine';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from 'react-scroll-to-top';
import { Routes } from './components/Routes';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Nav from './Nav/page';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
	const { Hero, About, Portfolio, Services, Contact } = Routes();

	const [size, setSize] = useState<boolean>(false);

	useEffect(() => {
		AOS.init();
		setTimeout(() => {
			document.getElementById('loader')?.classList.add('slide');
		}, 2000);

		if (window.outerWidth > 1024) {
			setSize(true);
		} else {
			setSize(false);
		}
	});

	const Cursor = () => {
		return (
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
				]}
			/>
		);
	};

	return (
		<>
			{size && <Cursor />}
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
