'use client';

import dynamic from 'next/dynamic';

export const Routes = () => {
	const Line = dynamic(() => import('./numberLine'), {
		ssr: true,
	});

	const Nav = dynamic(() => import('../Nav/page'), {
		ssr: true,
	});

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

	return { Line, Nav, Hero, About, Portfolio, Services, Contact };
};
