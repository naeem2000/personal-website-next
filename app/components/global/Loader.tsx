import { PacmanLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function Loader() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');

		if (!hasSeenLoader) {
			sessionStorage.setItem('hasSeenLoader', 'true');
			setIsLoading(true);

			const timeout = setTimeout(() => {
				setIsLoading(false);
			}, 1500);

			return () => clearTimeout(timeout);
		} else {
			setIsLoading(false);
		}
	}, []);

	return (
		<AnimatePresence>
			{isLoading ? (
				<motion.section
					exit={{ opacity: 0 }}
					className='fixed flex items-center justify-center transition-all duration-[0.5s] ease-[ease] bg-main-bg opacity-100 z-10 m-0 p-0 inset-0 overflow-hidden'
				>
					<div className='flex flex-col'>
						<PacmanLoader color='rgb(46, 204, 239)' size={50} />
						<p className='loader text-5xl w-[200px] mt-5 text-blue relative'>
							Loading
						</p>
					</div>
				</motion.section>
			) : null}
		</AnimatePresence>
	);
}
