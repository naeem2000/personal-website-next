'use client';

import ContactForm from './components/ContactForm';
import HomeScreen from './components/HomeScreen';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Loader from '../stories/Loader';
import About from './components/About';
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
			<Loader isStorybook={false} />
			<HomeScreen />
			<About />
			<Portfolio />
			<Services />
			<ContactForm />
		</>
	);
}
