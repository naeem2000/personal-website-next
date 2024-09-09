'use client';
import { UseShowPDF } from './TS/functions';
import PdfViewer from './PdfViewer';
import SectionHeader from '../global/SectionHeader';

export default function About() {
	const { setViewPdf } = UseShowPDF();
	return (
		<>
			<PdfViewer onClose={() => setViewPdf(false)} />
			<section className='about' id='about'>
				<div className='about-head'>
					<span data-aos='fade-left'>{`{/}`}</span>
					<SectionHeader aos='fade-left' heading='<about_me>' />
					<p data-aos='fade-up'>
						My name is Mogamat Naeem Carr. I am a front-end Mobile and Web{' '}
						Developer based in Cape Town, South Africa. I have developed many{' '}
						types of front-ends from well known frameworks to full fledged
						native code. I love coding responsive and brutalist apps. I love
						nature, pizza and exploring.
					</p>
				</div>
				<div className='about-body'>
					<div className='about-left'>
						<p data-aos='fade-left'>
							...I have 3 years of experience in web development, with a strong
							background in both front-end and mobile technologies and always
							eager to learn more ways in solving various problems;
						</p>
					</div>
					<div className='about-right'>
						<p data-aos='fade-right'>
							As a web and mobile developer with 3 years of experience, I am
							well-versed in various programming languages such as HTML, CSS,
							JavaScript, TypeScript, React, React-Native & SCSS. I have a
							proven track record of developing high-quality, responsive, and
							user-friendly websites and mobile applications that meet
							employers' needs and exceed their expectations. My expertise
							includes styling and developing applications that integrate with
							APIs, databases, and third-party services.
						</p>
					</div>
				</div>
				<button onClick={() => setViewPdf(true)}>
					{'{'}view_cv{'}'}
				</button>
			</section>
		</>
	);
}
