import { navlinks, socials } from './data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='border-t-border-color ml-[8%] mobile:ml-[2.5%] mb-4 py-[1%] border-t border-solid flex items-center justify-center'>
			<div className=' flex items-center justify-between !m-0 !p-0 flex-col w-full desktop:flex-row max-w-[1750px]'>
				<div>
					<nav>
						<ul className='hidden desktop:flex'>
							{navlinks.links.map((item) => {
								return (
									<li className='ml-5' key={item.id}>
										<Link
											className='text-xl text-yellow transition-all duration-[0.2s] ease-linear hover:text-purple'
											href={item.link}
										>
											{item.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				<Link
					className='transition-all duration-[0.5s] ease-[ease] hover:scale-125 hidden desktop:block'
					href='https://react.dev/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image src='/react.svg' width={30} height={30} alt='next' />
				</Link>
				<div className='flex my-4 desktop:my-0'>
					{socials.socialLink.map((item) => {
						return (
							<Link
								className='text-purple transition-all duration-[0.5s] ease-[ease] text-xl mr-5 hover:text-yellow hover:scale-125'
								key={item.id}
								href={item.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								{item.icon}
							</Link>
						);
					})}
				</div>
				<Link
					className='transition-all duration-[0.5s] ease-[ease] hover:scale-125 hidden desktop:block'
					href='https://nextjs.org/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image src='/next.svg' width={50} height={50} alt='next' />
				</Link>
				<div className='text-xl text-yellow'>
					<p>Copyright © 2024 Naeem Carr Portfolio</p>
				</div>
			</div>
		</footer>
	);
}
