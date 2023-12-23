'use client';

import { useForm } from '@formspree/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface ContactDetails {
	name: string;
	email: string;
	message: string;
}

export default function Contact() {
	const [state, handleSubmit] = useForm('myyrgdyw');

	const [messenger, setMessenger] = useState<ContactDetails>({
		name: '',
		email: '',
		message: '',
	});

	const submitForm = async (e: any) => {
		e.preventDefault();
		let hasError: boolean = false;
		const name = document.getElementById('name');
		const email = document.getElementById('email');
		const message = document.getElementById('message');

		if (!messenger.name) {
			name?.classList.add('error-border');
			toast.error('Can I get your name please?', {
				position: 'top-center',
				autoClose: 3000,
				closeOnClick: true,
				draggable: true,
				theme: 'colored',
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
		} else {
			console.error('Form failed to post!');
		}
	};

	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}

	return (
		<section className='contact' id='contact'>
			<div className='contact-head'>
				<span data-aos='fade-left'>{`(*)`}</span>
				<h1 data-aos='fade-right'>{'<contact_me>'}</h1>
				<p data-aos='fade-up'>
					Get in Touch: Let's Collaborate and Innovate Together
				</p>
			</div>
			<form onSubmit={submitForm} className='contact-body'>
				<input
					id='name'
					data-aos='fade-left'
					name='name'
					type='text'
					placeholder='_name'
					value={messenger.name}
					onChange={(e: any) =>
						setMessenger({ ...messenger, name: e.target.value })
					}
				/>
				<input
					id='email'
					data-aos='fade-right'
					name='email'
					type='email'
					placeholder='_email'
					value={messenger.email}
					onChange={(e: any) =>
						setMessenger({ ...messenger, email: e.target.value })
					}
				/>
				<textarea
					id='message'
					data-aos='fade-left'
					name='message'
					cols={10}
					rows={7}
					placeholder='_message'
					value={messenger.message}
					onChange={(e: any) =>
						setMessenger({ ...messenger, message: e.target.value })
					}
				></textarea>
				<div className='submit-area'>
					<button type='submit'>{'{submit}'}</button>
				</div>
			</form>
		</section>
	);
}
