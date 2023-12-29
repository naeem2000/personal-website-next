import { navlinks, socials } from './data';
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
			<div className='footer-right'>
				<p>Copyright © 2023 Naeem Carr Portfolio</p>
			</div>
		</footer>
	);
}
