import { ContactDetails, ContactErrors } from './types';
import { useState, useEffect, useCallback } from 'react';
import { useForm } from '@formspree/react';

//Scroll bar component
export const UseScrollBar = () => {
	const [scrolled, setScrolled] = useState<string>();

	const scrollProgress = useCallback(() => {
		const scrollPx = document.documentElement.scrollTop;
		const winHeightPx =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolledPercentage = `${(scrollPx / winHeightPx) * 100}%`;
		setScrolled(scrolledPercentage);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', scrollProgress);
		return () => {
			window.removeEventListener('scroll', scrollProgress);
		};
	}, [scrollProgress]);

	const progressBarStyle = {
		width: scrolled,
	};

	return { progressBarStyle };
};

//Side line function
export const UseConstructLine = () => {
	const [line, setLine] = useState<number[]>([]);

	useEffect(() => {
		const numbersArray = Array.from({ length: 200 }, (_, index) => index + 1);
		setLine(numbersArray);
	}, []);

	return { line };
};

//Show burger nav button on scroll function
export const UseShowNav = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [showButton, setShowButton] = useState<boolean>(false);

	const handleScroll = useCallback(() => {
		if (window.innerWidth >= 1280) {
			if (window.scrollY > 50) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		}
	}, []);

	const handleResize = useCallback(() => {
		if (window.innerWidth < 1280) {
			setShowButton(true);
		} else {
			handleScroll();
			setShowButton(false);
		}
	}, [handleScroll]);

	useEffect(() => {
		handleScroll();
		handleResize();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [open, handleScroll, handleResize]);

	return { setOpen, open, showButton };
};

//Show PDF function
export const UseShowPDF = () => {
	const [viewPdf, setViewPdf] = useState<boolean>(false);

	useEffect(() => {
		const openPdf = document.getElementById('pdf');
		if (viewPdf) {
			openPdf?.classList.add('pdf-slide');
			document.body.style.overflow = 'hidden';
		} else {
			openPdf?.classList.remove('pdf-slide');
			document.body.style.overflow = 'scroll';
		}
	});

	return { setViewPdf, viewPdf };
};

//Submit contact form function
export const UseSubmitForm = () => {
	const [state, handleSubmit] = useForm('myyrgdyw');

	const [messenger, setMessenger] = useState<ContactDetails>({
		name: '',
		email: '',
		message: '',
	});

	const [isErrors, setIsErrors] = useState<ContactErrors>({
		name: false,
		email: false,
		message: false,
	});

	const submitForm = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			let hasError = false;

			try {
				// Validate name
				if (!messenger.name) {
					hasError = true;
					setIsErrors((prev) => ({ ...prev, name: true }));
				} else {
					setIsErrors((prev) => ({ ...prev, name: false }));
				}

				// Validate email
				if (!messenger.email) {
					hasError = true;
					setIsErrors((prev) => ({ ...prev, email: true }));
				} else {
					setIsErrors((prev) => ({ ...prev, email: false }));
				}

				// Validate message
				if (!messenger.message) {
					hasError = true;
					setIsErrors((prev) => ({ ...prev, message: true }));
				} else {
					setIsErrors((prev) => ({ ...prev, message: false }));
				}

				// If no errors, submit the form
				if (!hasError) {
					await handleSubmit(e);
					setMessenger({
						name: '',
						email: '',
						message: '',
					});
					setIsErrors({
						name: false,
						email: false,
						message: false,
					});
				}
			} catch (e) {
				console.error('Form failed to post!', e);
			}
		},
		[handleSubmit, messenger]
	);

	return { submitForm, messenger, setMessenger, state, isErrors };
};
