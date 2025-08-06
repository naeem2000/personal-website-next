'use client';

import SectionHeader from '../../stories/SectionHeader';
import { fadeInMotionStyles } from './utils/constants';
import { AnimatePresence, motion } from 'motion/react';
import { UseShowPDF } from './utils/functions';
import { Button } from '@/stories/Button';
import PdfViewer from './PdfViewer';

export default function About() {
	const { setViewPdf, viewPdf } = UseShowPDF();
	return (
		<>
			<AnimatePresence>
				{viewPdf && <PdfViewer onClose={() => setViewPdf(false)} />}{' '}
			</AnimatePresence>
			<motion.section
				{...fadeInMotionStyles}
				className='wrapper flex items-center justify-start flex-col text-center'
				id='about'
			>
				<div>
					<SectionHeader
						symbol={`{/}`}
						aos='fade-up'
						link='/about'
						heading='<about_me/>'
					/>
					<p
						className='text-xl pb-[25px] desktop:pb-0 desktop:text-[25px] leading-6 text-yellow desktop:max-w-[800px] dark:text-black'
						data-aos='fade-up'
					>
						My name is Naeem, a front-end Mobile and Web Developer based in Cape
						Town, South Africa. I have developed many types of front-ends from
						well known frameworks to full fledged native code. I love coding
						responsive and brutalist apps. I love nature, pizza and exploring.
					</p>
				</div>
				<div className='flex flex-col desktop:flex-row items-center justify-center border-t-border-color w-full desktop:w-[70%] desktop:mt-[50px] border-t border-solid'>
					<div className='w-full desktop:w-6/12 self-start py-[25px] desktop:pb-0 desktop:px-[30px]'>
						<p
							className='text-2xl desktop:text-[32px] leading-[1em] underline text-left text-white self-start dark:text-black'
							data-aos='fade-left'
						>
							...As a web & mobile developer with hands-on experience, I possess
							a strong background in both front-end and mobile technologies and
							always eager to learn more ways in solving various modern &
							deprecated problems;
						</p>
					</div>
					<div className='border-t-border-color desktop:border-t-0 desktop:border-l-border-color self-start w-full leading-6 desktop:w-6/12 text-yellow py-[25px] desktop:px-[30px] border-t desktop:border-l border-solid dark:text-black'>
						<p className='text-[22px]' data-aos='fade-right'>
							As a web and mobile developer with 4 years of experience, I am
							well-versed in various programming languages such as HTML, CSS,
							JavaScript, TypeScript, Angular, React, React-Native & SCSS. I
							have a proven track record of developing high-quality, responsive,
							and user-friendly websites and mobile applications that meet
							client&apos;s needs and exceed their expectations. My expertise
							includes styling and developing applications that integrate with
							APIs, databases, and third-party services.
						</p>
					</div>
				</div>
				<Button
					label={`{'view_cv'}`}
					variant={'button'}
					className='mt-5 desktop:mt-10 !text-xl'
					onClick={() => setViewPdf(true)}
				/>
			</motion.section>
		</>
	);
}
