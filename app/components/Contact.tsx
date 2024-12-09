'use client';

import SectionHeader from './global/SectionHeader';
import { UseSubmitForm } from './TS/functions';
import { BeatLoader } from 'react-spinners';
import ThankYou from './ThankYou';
import React from 'react';
import Button from './global/Button';
import { usePathname } from 'next/navigation';
import { ContactStyles } from './TS/constants';

export default function Contact() {
	const { submitForm, messenger, setMessenger, state } = UseSubmitForm();

	const path = usePathname();

	if (state.succeeded) return <ThankYou />;

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
					className={ContactStyles}
					id='name'
					name='name'
					type='text'
					placeholder='_name'
					value={messenger.name}
					onChange={(e) => setMessenger({ ...messenger, name: e.target.value })}
				/>
				<input
					className={ContactStyles}
					id='email'
					name='email'
					type='email'
					placeholder='_email'
					value={messenger.email}
					onChange={(e) =>
						setMessenger({ ...messenger, email: e.target.value })
					}
				/>
				<textarea
					className={ContactStyles}
					id='message'
					name='message'
					cols={10}
					rows={7}
					placeholder='_message'
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
