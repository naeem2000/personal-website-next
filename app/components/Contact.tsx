'use client';

import SectionHeader from './global/SectionHeader';
import { UseSubmitForm } from './TS/functions';
import { BeatLoader } from 'react-spinners';
import ThankYou from './ThankYou';
import React, { useEffect, useState } from 'react';
import Button from './global/Button';
import { usePathname } from 'next/navigation';
import { ContactStyles } from './TS/constants';

export default function Contact() {
	const [sentEmail, setSentEmail] = useState<boolean>(false);
	const { submitForm, messenger, setMessenger, state, isErrors } =
		UseSubmitForm();

	const path = usePathname();

	useEffect(() => {
		if (typeof window !== undefined) {
			setSentEmail(localStorage.getItem('sent') ? true : false);
		}
	}, []);

	if (state.succeeded) localStorage.setItem('sent', 'emailSent');

	if (state.succeeded || sentEmail === true) return <ThankYou />;

	return (
		<section className={`wrapper ${path !== '/' && '!p-0'}`}>
			<div className='text-center'>
				<SectionHeader
					symbol={`(*)`}
					aos='fade-right'
					heading={'<contact_me/>'}
				/>
				<p className='text-yellow text-xl desktop:text-[23px] leading-6'>
					Get in Touch: Let&apos;s Collaborate and Innovate Together
				</p>
			</div>
			<form
				onSubmit={submitForm}
				className='flex items-center justify-center flex-col'
			>
				<input
					className={`${ContactStyles} ${isErrors.name && 'border-b-red-600'}`}
					name='name'
					type='text'
					placeholder={`${isErrors.name ? 'Can I get your name?' : '_name'}`}
					value={messenger.name}
					onChange={(e) => setMessenger({ ...messenger, name: e.target.value })}
				/>
				<input
					className={`${ContactStyles} ${isErrors.email && 'border-b-red-600'}`}
					name='email'
					type='email'
					placeholder={`${
						isErrors.email == true ? 'I would like say hello back :)' : '_email'
					}`}
					value={messenger.email}
					onChange={(e) =>
						setMessenger({ ...messenger, email: e.target.value })
					}
				/>
				<textarea
					className={`${ContactStyles} ${
						isErrors.message && 'border-b-red-600'
					}`}
					name='message'
					cols={10}
					rows={7}
					placeholder={`${
						isErrors.message
							? 'I would like to say thank you for reaching out to me :D'
							: '_message'
					}`}
					value={messenger.message}
					onChange={(e) =>
						setMessenger({ ...messenger, message: e.target.value })
					}
				></textarea>
				<div className='submit-area'>
					<Button
						className='button text-xl mt-10 bg-blue text-black transition-all duration-[0.5s] ease-[ease] px-[30px] py-3'
						type='submit'
					>
						{state.submitting ? (
							<BeatLoader style={{ margin: 0 }} size={10} />
						) : (
							`{submit}`
						)}
					</Button>
				</div>
			</form>
		</section>
	);
}
