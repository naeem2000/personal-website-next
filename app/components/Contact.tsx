'use client';

import SectionHeader from './global/SectionHeader';
import { UseSubmitForm } from './TS/functions';
import { BeatLoader } from 'react-spinners';
import ThankYou from './ThankYou';
import React from 'react';

export default function Contact() {
	const { submitForm, messenger, setMessenger, state } = UseSubmitForm();

	if (state.succeeded) return <ThankYou />;

	return (
		<section className='contact' id='contact'>
			<div className='contact-head'>
				<span>{`(*)`}</span>
				<SectionHeader aos='fade-right' heading={'<contact_me>'} />
				<p>Get in Touch: Let&apos;s Collaborate and Innovate Together</p>
			</div>
			<form onSubmit={submitForm} className='contact-body'>
				<input
					id='name'
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
					<button type='submit'>
						{state.submitting ? (
							<BeatLoader style={{ margin: 0 }} size={10} />
						) : (
							`{submit}`
						)}
					</button>
				</div>
			</form>
		</section>
	);
}
