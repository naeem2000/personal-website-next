import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { ContactDetails } from './types';
import { toast } from 'react-toastify';

export const UseConstructLine = () => {
	const [line, setLine] = useState<number[]>([]);

	useEffect(() => {
		const numbersArray = Array.from({ length: 200 }, (_, index) => index + 1);
		setLine(numbersArray);
	}, []);

	return { line };
};

export const UseShowNav = () => {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		const openNav = document.getElementById('mobile-slide');
		const burgerBtn = document.getElementById('burger-button');

		if (open) {
			document.body.style.overflow = 'hidden';
			openNav?.classList.add('mobile-slider');
		} else {
			document.body.style.overflow = 'scroll';
			openNav?.classList.remove('mobile-slider');
		}

		window.onscroll = function () {
			scrollFunction();
		};

		function scrollFunction() {
			if (window.outerWidth > 1024) {
				if (
					document.body.scrollTop > 200 ||
					document.documentElement.scrollTop > 200
				) {
					burgerBtn!.style.display = 'block';
				} else {
					burgerBtn!.style.display = 'none';
				}
			}
		}
	}, [open]);

	return { setOpen, open };
};

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

export const UseSubmitForm = () => {
	const [state, handleSubmit] = useForm('myyrgdyw');

	const [messenger, setMessenger] = useState<ContactDetails>({
		name: '',
		email: '',
		message: '',
	});

	const submitForm = async (e: React.FormEvent) => {
		e.preventDefault();
		let hasError: boolean = false;
		const name = document.getElementById('name');
		const email = document.getElementById('email');
		const message = document.getElementById('message');

		try {
			if (!messenger.name) {
				name?.classList.add('error-border');
				toast.error('Can I get your name please?', {
					position: 'top-center',
					autoClose: 3000,
					closeOnClick: true,
					draggable: true,
					theme: 'colored',
					className: 'toasty toasty1',
				});
				hasError = true;
			} else {
				name?.classList.remove('error-border');
			}
			if (!messenger.email) {
				email?.classList.add('error-border');
				toast.error('I need your email to get back to you.', {
					position: 'top-left',
					autoClose: 3000,
					closeOnClick: true,
					draggable: true,
					theme: 'colored',
					className: 'toasty toasty2',
				});
				hasError = true;
			} else {
				email?.classList.remove('error-border');
			}
			if (!messenger.message) {
				message?.classList.add('error-border');
				toast.error('Maybe want to say hello?', {
					position: 'top-right',
					autoClose: 3000,
					closeOnClick: true,
					draggable: true,
					theme: 'colored',
					className: 'toasty toasty3',
				});
				hasError = true;
			} else {
				message?.classList.remove('error-border');
			}
			if (!hasError) {
				await handleSubmit(e);
				setMessenger({
					name: '',
					email: '',
					message: '',
				});
				toast.success('Bon voyage, message!', {
					position: 'top-center',
					autoClose: 3000,
					closeOnClick: true,
					draggable: true,
					theme: 'colored',
				});
			}
		} catch (e) {
			console.error('Form failed to post!');
		}
	};

	return { submitForm, messenger, setMessenger, state };
};
