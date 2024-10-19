import './globals.css';
import type { Metadata } from 'next';
import ScrollBar from './components/global/ScrollBar';

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
				{children}
			</body>
		</html>
	);
}
