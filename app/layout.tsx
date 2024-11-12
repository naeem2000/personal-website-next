import ScrollToTopButton from './components/global/ScrollToTopButton';
<<<<<<< Updated upstream
import { CursorClickables } from './components/TS/constants';
=======
import { CursorClickables, VT } from './components/TS/constants';
>>>>>>> Stashed changes
import NumberLine from './components/global/numberLine';
import ScrollBar from './components/global/ScrollBar';
import AnimatedCursor from 'react-animated-cursor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< Updated upstream
import Nav from './components/global/Nav';
import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/global/Footer';
=======
import type { Metadata } from 'next';
import './globals.css';
>>>>>>> Stashed changes

export const metadata: Metadata = {
	title: 'Naeem Carr',
	description: 'Developed in Next.Js',
	creator: 'Naeem Carr',
	icons: {
		icon: '/icon.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
<<<<<<< Updated upstream
			<body>
=======
			<body className={VT.className}>
				<ScrollBar />
				<AnimatedCursor
					innerSize={17}
					outerSize={7}
					color='231, 219, 116'
					innerScale={0.7}
					outerScale={5}
					outerStyle={{ background: 'rgb(46, 204, 239, 0.4)' }}
					clickables={CursorClickables}
					innerStyle={{ mixBlendMode: 'difference' }}
				/>
				<ToastContainer limit={3} />
>>>>>>> Stashed changes
				<NumberLine />
				<ScrollBar />
				<Nav />
				<div className='hidden laptop:block'>
					<AnimatedCursor
						innerSize={17}
						outerSize={7}
						color='231, 219, 116'
						innerScale={0.7}
						outerScale={5}
						outerStyle={{ background: 'rgb(46, 204, 239, 0.4)' }}
						clickables={CursorClickables}
						innerStyle={{ mixBlendMode: 'difference' }}
					/>
				</div>
				<ToastContainer limit={3} />
				{children}
				<ScrollToTopButton />
				<Footer />
			</body>
		</html>
	);
}
