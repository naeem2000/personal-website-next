import ScrollToTopButton from './components/global/ScrollToTopButton';
import ScrollBar from './components/global/ScrollBar';
import AnimatedCursor from 'react-animated-cursor';
import { VT } from './components/utils/constants';
import NumberLine from '@/stories/NumberLine';
import NextTopLoader from 'nextjs-toploader';
import Footer from '@/stories/Footer';
import type { Metadata } from 'next';
import Nav from '@/stories/Nav';
import './globals.css';

export const metadata: Metadata = {
	title: 'Naeem Carr',
	description: 'Front-end web/mobile developer',
	creator: 'Naeem Carr',
	icons: {
		icon: '/icon.png',
	},
	robots: 'index, follow',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='main-site'>
			<body className={`${VT.className} dark:bg-white`}>
				<NextTopLoader color='var(--purple)' height={4} />
				<ScrollBar />
				<NumberLine />
				<Nav />
				<div className='hidden xl:block'>
					<AnimatedCursor
						innerSize={10}
						outerSize={25}
						innerScale={1}
						outerScale={1.5}
						outerAlpha={0}
						clickables={[
							'input[type="text"]',
							'input[type="email"]',
							'input[type="number"]',
							'input[type="submit"]',
							'input[type="image"]',
							'.hamburger-react',
							'.react-toggle',
							'label[for]',
							'textarea',
							'button',
							'select',
							'.link',
							'a',
						]}
						innerStyle={{
							backgroundColor: 'var(--purple)',
							mixBlendMode: 'difference',
						}}
						outerStyle={{
							border: '2px solid var(--yellow)',
							mixBlendMode: 'difference',
						}}
					/>
				</div>
				{children}
				<ScrollToTopButton />
				<Footer />
			</body>
		</html>
	);
}
