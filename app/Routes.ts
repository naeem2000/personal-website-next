import dynamic from 'next/dynamic';

export const Routes = () => {
	const Hero = dynamic(() => import('./components/Hero'), {
		ssr: true,
	});

	const About = dynamic(() => import('./components/About'), {
		ssr: true,
	});

	const Portfolio = dynamic(() => import('./components/Portfolio'), {
		ssr: true,
	});

	const Services = dynamic(() => import('./components/Services'), {
		ssr: true,
	});

	const Contact = dynamic(() => import('./components/Contact'), {
		ssr: true,
	});

	return { Hero, About, Portfolio, Services, Contact };
};

export const ROUTE_HOME = '/';
export const ROUTE_ABOUT = '/about';
export const ROUTE_PORTFOLIO = '/portfolio';
