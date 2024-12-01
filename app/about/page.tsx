import PageHeader from '../components/global/PageHeader';
import Contact from '../components/Contact';
import React from 'react';

export default function page() {
	return (
		<section className='wrapper'>
			<div className='flex items-center justify-center flex-col'>
				<PageHeader text='"About"' symbol='{/}' />
				<p className='text-center mt-5 text-2xl laptop:text-4xl max-w-[1150px] text-yellow'>
					...I have three years of experience in web development, focusing
					primarily on front-end technologies. My background includes a solid
					understanding of HTML, CSS, and JavaScript, along with hands-on
					experience with modern frameworks like React, Next.JS and Angular.
				</p>
				<p className='max-w-[1150px] text-center mt-5 text-white text-xl laptop:text-2xl'>
					I am committed to continuously improving my skills and staying updated
					with industry trends. I am actively extending my knowledge in both
					front-end and back-end development. With the goal of becoming a
					full-stack developer, I am currently exploring back-end languages like
					Node.js and Python. I aim to integrate this knowledge with my
					front-end expertise to contribute to projects holistically and enhance
					my problem-solving abilities for creating more efficient applications.
				</p>
			</div>
			<div className="bg-[url('/about.gif')] bg-contain bg-center desktop:bg-[center_bottom_-25rem] bg-no-repeat desktop:bg-cover w-full h-[40vh] laptop:h-[50vh] desktop:bg-fixed opacity-60 blur-[1px] desktop:blur-[3px] mt-10 desktop:mt-[100px]" />
			<div className='mt-10'>
				<h2 className='text-center text-5xl laptop:text-7xl text-white'>
					{'<What drives my work/>'}
				</h2>
			</div>
			<Contact />
		</section>
	);
}
