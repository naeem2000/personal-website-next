'use client';
import { UseShowPDF } from './TS/functions';
import PdfViewer from './PdfViewer';
import SectionHeader from './global/SectionHeader';
import Button from './global/Button';

export default function About() {
	const { setViewPdf } = UseShowPDF();
	return (
		<>
			<PdfViewer onClose={() => setViewPdf(false)} />
			<section
				className='wrapper flex items-center justify-start flex-col text-center mb-14'
				id='about'
			>
				<div className='mt-10 desktop:mt-0'>
					<SectionHeader symbol={`{/}`} aos='fade-left' heading='<about_me/>' />
					<p
						className='text-xl pb-[25px] desktop:pb-0 desktop:text-[25px] leading-6 text-yellow desktop:max-w-[800px]'
						data-aos='fade-up'
					>
						My name is Mogamat Naeem Carr. I am a front-end Mobile and Web{' '}
						Developer based in Cape Town, South Africa. I have developed many{' '}
						types of front-ends from well known frameworks to full fledged
						native code. I love coding responsive and brutalist apps. I love
						nature, pizza and exploring.
					</p>
				</div>
				<div className='flex flex-col desktop:flex-row items-center justify-center border-t-border-color w-full desktop:w-[70%] desktop:mt-[50px] border-t border-solid'>
					<div className='w-full desktop:w-6/12 self-start py-[25px] desktop:pb-0 desktop:px-[30px]'>
						<p
							className='text-2xl desktop:text-[32px] leading-[1em] underline text-left text-white self-start'
							data-aos='fade-left'
						>
							...I have 3 years of experience in web development, with a strong
							background in both front-end and mobile technologies and always
							eager to learn more ways in solving various problems;
						</p>
					</div>
					<div className='border-t-border-color desktop:border-l-border-color self-start w-full leading-6 desktop:w-6/12 text-yellow py-[25px] desktop:px-[30px] border-t desktop:border-l border-solid'>
						<p className='text-[22px]' data-aos='fade-right'>
							As a web and mobile developer with 3 years of experience, I am
							well-versed in various programming languages such as HTML, CSS,
							JavaScript, TypeScript, React, React-Native & SCSS. I have a
							proven track record of developing high-quality, responsive, and
							user-friendly websites and mobile applications that meet
							employers&apos; needs and exceed their expectations. My expertise
							includes styling and developing applications that integrate with
							APIs, databases, and third-party services.
						</p>
					</div>
				</div>
				<Button
					className='button text-xl mt-5 desktop:mt-10 bg-blue text-black transition-all duration-[0.5s] ease-[ease] px-[30px] py-3'
					onClick={() => setViewPdf(true)}
				>
					{'{'}view_cv{'}'}
				</Button>
			</section>
		</>
	);
}
