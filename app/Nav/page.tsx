'use client';
import React, { useState } from 'react';

export default function Nav() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<nav className='nav max-width'>
			<div className='nav-left'>
				<h1>// naeem carr</h1>
				<p>web_dev</p>
			</div>
			<div className={`nav-right ${open ? 'mobile-nav-open' : ''}`}>
				<ul>
					<li>
						<a href=''>_home</a>
					</li>
					<li>
						<a href=''>_about</a>
					</li>
					<li>
						<a href=''>_portfolio</a>
					</li>
					<li>
						<a href=''>_services</a>
					</li>
					<li>
						<a href=''>_cv</a>
					</li>
					<li>
						<a href=''>_contact</a>
					</li>
				</ul>
			</div>
			<button className='nav-open' onClick={() => setOpen(!open)}>
				{open ? 'close' : 'open'}
			</button>
		</nav>
	);
}
