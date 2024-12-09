import { Metadata } from 'next';
import About from './About';

export const metadata: Metadata = {
	title: 'Naeem Carr | About',
};

export default function page() {
	return <About />;
}
