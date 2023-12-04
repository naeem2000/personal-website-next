'use client';
import { Sling as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';

export default function Nav() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<header>
			<nav className='nav max-width'>
				<div className='nav-left'>
					<h1>// naeem carr</h1>
					<p>web_dev</p>
				</div>
				<div className='nav-right'>
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
				<div className='burger-button'>
					<Hamburger
						size={20}
						color='#2fcbef'
						toggled={open}
						toggle={setOpen}
					/>
				</div>
			</nav>
			{open && (
				<div data-aos='fade-down' className='mobile-nav'>
					<ul>
						<li data-aos='fade-right'>
							<a href=''>_home</a>
						</li>
						<li data-aos='fade-left'>
							<a href=''>_about</a>
						</li>
						<li data-aos='fade-right'>
							<a href=''>_portfolio</a>
						</li>
						<li data-aos='fade-left'>
							<a href=''>_services</a>
						</li>
						<li data-aos='fade-right'>
							<a href=''>_cv</a>
						</li>
						<li data-aos='fade-left'>
							<a href=''>_contact</a>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
