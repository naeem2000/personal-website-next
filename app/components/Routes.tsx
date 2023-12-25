'use client';

import dynamic from 'next/dynamic';

export const Routes = () => {
	const Hero = dynamic(() => import('../hero/page'), {
		ssr: true,
	});

	const About = dynamic(() => import('../about/page'), {
		ssr: true,
	});

	const Portfolio = dynamic(() => import('../portfolio/page'), {
		ssr: true,
	});

	const Services = dynamic(() => import('../services/page'), {
		ssr: true,
	});

	const Contact = dynamic(() => import('../contact/page'), {
		ssr: true,
	});

	return { Hero, About, Portfolio, Services, Contact };
};
