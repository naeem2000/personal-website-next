import { navlinks, socials } from './data';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
	return (
		<footer>
			<div className='footer-left'>
				<nav>
					<ul>
						{navlinks.links.map((item) => {
							return (
								<li key={item.id}>
									<a href={item.link}>{item.label}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
			<a href='https://react.dev/' target='_blank' rel='noopener noreferrer'>
				<Image src='/react.svg' width={30} height={30} alt='next' />
			</a>
			<div className='footer-mid'>
				{socials.socialLink.map((item) => {
					return (
						<a
							key={item.id}
							href={item.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							{item.icon}
						</a>
					);
				})}
			</div>
			<a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
				<Image src='/next.svg' width={50} height={50} alt='next' />
			</a>
			<div className='footer-right'>
				<p>Copyright © 2023 Naeem Carr Portfolio</p>
			</div>
		</footer>
	);
}
