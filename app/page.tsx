'use client';

import { ProgressBar } from '@nadfri/react-scroll-progress-bar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from 'react-scroll-to-top';
import { Routes } from './components/routes';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
	const { Nav, Line, Hero, About, Portfolio, Services, Contact } = Routes();

	useEffect(() => {
		AOS.init();
		setTimeout(() => {
			document.getElementById('loader')?.classList.add('slide');
		}, 1000);
	});

	return (
		<>
			<div className='progress-bar'>
				<ProgressBar position='fixed' color1='#2fcbef' color2='#E6DB74' />
			</div>
			<ToastContainer />
			<Loader />
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
