import './globals.css';
import type { Metadata } from 'next';
import ScrollBar from './components/global/ScrollBar';
import AnimatedCursor from 'react-animated-cursor';
import { CursorClickables } from './components/TS/constants';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ScrollToTopButton from './components/global/ScrollToTopButton';
import NumberLine from './components/global/numberLine';

export const metadata: Metadata = {
	title: 'Naeem Carr',
	description: 'Developed in Next.Js',
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
			<body>
				<ScrollBar />
				<div className='cursor'>
					<AnimatedCursor
						innerSize={17}
						outerSize={7}
						color='231, 219, 116'
						innerScale={0.7}
						outerScale={5}
						outerStyle={{ background: 'rgb(46, 204, 239, 0.4)' }}
						clickables={CursorClickables}
					/>
				</div>
				<ToastContainer limit={3} />
				<NumberLine />
				{children}
				<ScrollToTopButton />
			</body>
		</html>
	);
}
