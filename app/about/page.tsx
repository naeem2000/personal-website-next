import React from 'react';

export default function About() {
	return (
		<section className='about' id='about'>
			<div>
				<span data-aos='fade-left'>{`{/}`}</span>
				<h1 data-aos='fade-right'>{'<about_me>'}</h1>
				<p data-aos='fade-up'>
					My name is Mogamat Naeem Carr. I am a front-end Mobile and Web
					Developer based in Cape Town, South Africa. I have developed many
					types of front-ends from well known frameworks to full fledged native
					code. I love coding responsive and brutalist apps. I love nature,
					pizza and exploring.
				</p>
			</div>
			<div className='about-body'>
				<div className='about-left'>
					<p data-aos='fade-left'>
						...I have 3 years of experience in web development, with a strong
						background in both <span>front-end and mobile technologies </span>
						and always eager to learn more ways in solving various problems;
					</p>
				</div>
				<div className='about-right'>
					<p data-aos='fade-right'>
						As a web and mobile developer with 3 years of experience, I am
						well-versed in various programming languages such as{' '}
						<span>
							HTML, CSS, JavaScript, TypeScript, React, React-Native & SCSS.
						</span>{' '}
						I have a proven track record of developing high-quality, responsive,
						and user-friendly websites and mobile applications that meet
						employers' needs and exceed their expectations. My expertise
						includes styling and developing applications that integrate with
						APIs, databases, and third-party services.
					</p>
				</div>
			</div>
			<button>
				{'{'}download_cv{'}'}
			</button>
		</section>
	);
}
