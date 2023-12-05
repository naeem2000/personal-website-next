import React from 'react';

export default function About() {
	return (
		<section className='about'>
			<span>{`{/}`}</span>
			<h1>{'<about_me>'}</h1>
			<p>
				My name is Mogamat Naeem Carr. I am a front-end Mobile and Web Developer
				based in Cape Town, South Africa. I have developed many types of
				front-ends from well known frameworks to full fledged native code. I
				love coding responsive and brutalist apps. I love nature, pizza and
				exploring.
			</p>
			<div className='about-body'>
				<div className='about-left'>
					<p>
						...I have over 12 years of experience in web development, with a
						strong background in both front-end and back-end technologies;
					</p>
				</div>
				<div className='about-right'>right</div>
			</div>
		</section>
	);
}
