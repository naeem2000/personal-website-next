import { RiNextjsFill, RiReactjsFill } from 'react-icons/ri';
import { navlinks, socials } from './data';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='border-t-border-color py-4 border-t border-solid flex items-center justify-between'>
			<div className='wrapper '>
				<div className='flex items-center justify-between !m-0 !p-0 flex-col w-full desktop:flex-row'>
					<div>
						<nav>
							<ul className='hidden desktop:flex'>
								{navlinks.links.map((item, index) => {
									return (
										<li className={`${index !== 0 ? 'ml-5' : ''}`} key={index}>
											<Link
												className='text-xl text-yellow transition-all duration-[0.2s] ease-linear hover:text-purple dark:!text-black'
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
						<RiReactjsFill size={40} color='#58C4DC' />
					</Link>
					<div className='flex my-4 desktop:my-0 mr-0 desktop:mr-12'>
						{socials.socialLink.map((item, index) => {
							return (
								<Link
									className='text-purple transition-all duration-[0.5s] ease-[ease] text-xl mr-5 hover:text-yellow hover:scale-125 dark:hover:text-black'
									key={index}
									href={item.link}
									target='_blank'
									aria-label={item.name}
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
						<RiNextjsFill size={40} />
					</Link>
					<div className='text-xl text-yellow mb-4 laptop:mb-0 dark:text-black'>
						<p>Copyright © 2024 Naeem Carr Portfolio</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
