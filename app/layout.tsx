import type { Metadata } from 'next';
import './globals.css';

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
			<body>{children}</body>
		</html>
	);
}
