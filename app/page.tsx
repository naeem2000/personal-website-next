import dynamic from 'next/dynamic';
import Image from 'next/image';

export default function Home() {
	const Nav = dynamic(() => import('./Nav/page'), {
		ssr: false,
	});

	const Hero = dynamic(() => import('./hero/page'), {
		ssr: false,
	});

	const About = dynamic(() => import('./about/page'), {
		ssr: false,
	});
	return (
		<>
			<div className='side-image'>
				<Image
					src='/ide-line-numbers.png'
					alt='ide-line-numbers'
					width={40}
					height={1260}
					sizes='(height: 100%)'
				/>
			</div>
			<Nav />
			<Hero />
			<About />
		</>
	);
}
