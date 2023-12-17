'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface ContactDetails {
	name: string;
	email: string;
	message: string;
}

interface Errors {
	nameError: boolean;
	emailError: boolean;
	messageError: boolean;
}

export default function Contact() {
	const [messenger, setMessenger] = useState<ContactDetails>({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState<Errors>({
		nameError: false,
		emailError: false,
		messageError: false,
	});

	const submitForm = (e: any) => {
		e.preventDefault();
		let hasError = false;

		if (messenger.name === '') {
			setErrors({ ...errors, nameError: true });
			toast.error('Can I get your name please? 🤔');
			hasError = true;
		} else {
			setErrors({ ...errors, nameError: false });
		}
		if (messenger.email === '') {
			setErrors({ ...errors, emailError: true });
			toast.error('I need your email to get back to you. 😉');
			hasError = true;
		} else {
			setErrors({ ...errors, emailError: false });
		}
		if (messenger.message === '') {
			setErrors({ ...errors, messageError: true });
			toast.error('Maybe want to say hello? 😁');
			hasError = true;
		} else {
			setErrors({ ...errors, messageError: false });
		}

		if (!hasError) {
			console.log(messenger);
		} else {
			console.error('Form failed to post!');
		}
	};

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
