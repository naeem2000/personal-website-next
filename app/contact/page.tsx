import React from 'react';

export default function page() {
	return (
		<section className='contact' id='contact'>
			<div className='contact-head'>
				<span data-aos='fade-left'>{`(*)`}</span>
				<h1 data-aos='fade-right'>{'<contact_me>'}</h1>
				<p data-aos='fade-up'>
					Get in Touch: Let's Collaborate and Innovate Together
				</p>
			</div>
			<form className='contact-body'>
				<input data-aos='fade-left' type='text' placeholder='_name' />
				<input data-aos='fade-right' type='email' placeholder='_email' />
				<textarea
					data-aos='fade-left'
					cols='10'
					rows='7'
					placeholder='_message'
				></textarea>
				<div className='submit-area'>
					<button type='submit'>{'{submit}'}</button>
				</div>
			</form>
		</section>
	);
}
