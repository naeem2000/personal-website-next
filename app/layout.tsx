import ScrollToTopButton from './components/global/ScrollToTopButton';
import NumberLine from './components/global/numberLine';
import ScrollBar from './components/global/ScrollBar';
import AnimatedCursor from 'react-animated-cursor';
import { cursorClickables, VT } from './components/utils/constants';
import { ToastContainer } from 'react-toastify';
import Footer from './components/global/Footer';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/global/Nav';
import type { Metadata } from 'next';
import './globals.css';
import { CursorClickableTypes } from './components/utils/types';

export const metadata: Metadata = {
	title: 'Naeem Carr',
	description: 'Developed in Next.Js',
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
		<html lang='en'>
			<body className={VT.className}>
				<ScrollBar />
				<NumberLine />
				<Nav />
				<div className='hidden xl:block'>
					<AnimatedCursor {...(cursorClickables as any)} />
				</div>
				<ToastContainer limit={3} />
				{children}
				<ScrollToTopButton />
				<Footer />
			</body>
		</html>
	);
}
