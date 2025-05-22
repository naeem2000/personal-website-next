'use client';

import { ContactStyles, fadeInMotionStyles } from './utils/constants';
import React, { useEffect, useState } from 'react';
import SectionHeader from './global/SectionHeader';
import { UseSubmitForm } from './utils/functions';
import { usePathname } from 'next/navigation';
import PageHeader from './global/PageHeader';
import { BeatLoader } from 'react-spinners';
import { motion } from 'motion/react';
import ThankYou from './ThankYou';
import { Button } from '@/stories/Button';

export default function ContactForm() {
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

	return (
		<motion.section
			{...fadeInMotionStyles}
			className={path !== '/contact' ? 'wrapper' : ''}
		>
			{state.succeeded || sentEmail ? (
				<ThankYou />
			) : (
				<motion.section {...fadeInMotionStyles}>
					<div className='text-center'>
						{path === '/contact' ? (
							<PageHeader text='Contact' symbol='{*}' />
						) : (
							<SectionHeader
								symbol={`(*)`}
								aos=''
								link='/contact'
								heading={'<contact_me/>'}
							/>
						)}
						<p className='text-yellow text-xl desktop:text-[23px] leading-6 mt-5 dark:text-black'>
							Get in Touch: Let&apos;s Collaborate and Innovate Together
						</p>
					</div>
					<form
						onSubmit={submitForm}
						className='flex items-center justify-center flex-col'
					>
						<input
							className={`${ContactStyles} ${
								isErrors.name && 'border-b-red-600'
							}`}
							name='name'
							type='text'
							placeholder={`${
								isErrors.name ? 'Can I get your name?' : '_name'
							}`}
							value={messenger.name}
							onChange={(e) =>
								setMessenger({ ...messenger, name: e.target.value })
							}
						/>
						<input
							className={`${ContactStyles} ${
								isErrors.email && 'border-b-red-600'
							}`}
							name='email'
							type='email'
							placeholder={`${
								isErrors.email == true
									? 'I would like say hello back :)'
									: '_email'
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
						<div className='mb-10'>
							<Button
								type='submit'
								label={
									state.submitting ? (
										<BeatLoader style={{ margin: 0 }} size={10} />
									) : (
										`{submit}`
									)
								}
								variant='button'
								className='mt-10 px-5 py-2 desktop:px-[30px] desktop:py-3'
							>
								{state.submitting ? (
									<BeatLoader style={{ margin: 0 }} size={10} />
								) : (
									`{submit}`
								)}
							</Button>
						</div>
					</form>
				</motion.section>
			)}
		</motion.section>
	);
}
