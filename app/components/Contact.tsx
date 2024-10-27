'use client';

import SectionHeader from './global/SectionHeader';
import { UseSubmitForm } from './TS/functions';
import { BeatLoader } from 'react-spinners';
import ThankYou from './ThankYou';
import React from 'react';
import Button from './global/Button';

export default function Contact() {
	const { submitForm, messenger, setMessenger, state } = UseSubmitForm();

	if (state.succeeded) return <ThankYou />;

	return (
		<section className='contact wrapper h-full' id='contact'>
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
					className='max-w-[1140px] w-full text-purple text-lg desktop:text-[22px] border-b-border-color mt-8 desktop:mt-12 pt-0 pb-2 desktop:pb-3.5 px-2.5 border-b border-r-0 border-l-0 border-t-0 border-solid focus:border-b-purple bg-transparent outline-none placeholder:text-purple'
					id='name'
					name='name'
					type='text'
					placeholder='_name'
					value={messenger.name}
					onChange={(e) => setMessenger({ ...messenger, name: e.target.value })}
				/>
				<input
					className='max-w-[1140px] w-full text-purple text-lg desktop:text-[22px] border-b-border-color mt-8 desktop:mt-12 pt-0 pb-2 desktop:pb-3.5 px-2.5 border-b border-r-0 border-l-0 border-t-0 border-solid focus:border-b-purple bg-transparent outline-none placeholder:text-purple'
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
					className='max-w-[1140px] w-full text-purple text-lg desktop:text-[22px] border-b-border-color mt-8 desktop:mt-12 pt-0 pb-2 desktop:pb-3.5 px-2.5 border-b border-r-0 border-l-0 border-t-0 border-solid focus:border-b-purple bg-transparent outline-none placeholder:text-purple'
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
