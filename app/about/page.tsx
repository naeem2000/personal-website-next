import { Metadata } from 'next';
import About from './About';
import Loader from '../components/global/Loader';

export const metadata: Metadata = {
	title: 'Naeem Carr | About',
};

export default function page() {
	if (typeof window !== 'undefined') {
		const loader = document.getElementById('loader');
		if (loader) {
			loader.classList.add('slide');

			loader.style.display = 'none';
		}
	}
	return (
		<>
			<Loader />
			<About />
		</>
	);
}
