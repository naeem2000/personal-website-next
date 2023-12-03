import dynamic from 'next/dynamic';

export default function Home() {
	const Hero = dynamic(() => import('./hero/page'), {
		ssr: false,
	});

	const About = dynamic(() => import('./about/page'), {
		ssr: false,
	});

	return (
		<>
			<Hero />
			<About />
		</>
	);
}
