'use client';

import React, { useEffect, useState } from 'react';
import SectionHeader from './global/SectionHeader';
import { UseSubmitForm } from './utils/functions';
import { usePathname } from 'next/navigation';
import PageHeader from './global/PageHeader';
import { BeatLoader } from 'react-spinners';
import { motion } from 'motion/react';
import Button from './global/Button';
import ThankYou from './ThankYou';
import Link from 'next/link';
import {
	mapsLocation,
	ContactStyles,
	fadeInMotionStyles,
} from './utils/constants';

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
		<div className='wrapper'>
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
					<p className='text-yellow text-xl desktop:text-[23px] leading-6 mt-5'>
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
						placeholder={`${isErrors.name ? 'Can I get your name?' : '_name'}`}
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
			</motion.section>
			{path === '/contact' && (
				<motion.section {...fadeInMotionStyles}>
					<motion.div
						{...fadeInMotionStyles}
						className='grid grid-cols-1 laptop:grid-cols-2 border-t border-t-border-color'
					>
						<div className='laptop:border-r border-r-border-color border-b border-b-border-color laptop:border-b-0 pt-10 pl-0 laptop:pl-10 pb-10'>
							<p className='text-purple text-xl'>
								{'{'}EMAIL{'}'}
							</p>
							<Link
								href='mailto:mogamatnaeemcarr@gmail.com'
								target='_blank'
								className='hover:underline text-yellow text-2xl'
							>
								mogamatnaeemcarr@gmail.com
							</Link>
						</div>
						<div className='pt-10 pl-0 laptop:pl-10 pb-10'>
							<p className='text-purple text-xl'>
								{'{'}LOCATION{'}'}
							</p>
							<Link
								href='https://maps.app.goo.gl/fexn2woZnbfkfDt56'
								target='_blank'
								className='hover:underline text-yellow text-2xl'
							>
								Cape Town
							</Link>
						</div>
					</motion.div>
					<motion.div {...fadeInMotionStyles}>
						<iframe
							src={mapsLocation}
							width='100%'
							height='450'
							loading='lazy'
							className='border-0 m-0'
						/>
					</motion.div>
				</motion.section>
			)}
		</div>
	);
}
