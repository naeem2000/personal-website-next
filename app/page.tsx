'use client';

import Loader from './components/global/Loader';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Hero from './components/Hero';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import React from 'react';
import AOS from 'aos';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Loader />
			<Hero />
			<About />
			<Portfolio />
			<Services />
			<ContactForm />
		</>
	);
}
