'use client';
import { Sling as Hamburger } from 'hamburger-react';
import { navlinks } from '../components/data';
import React, { useState } from 'react';

export default function Nav() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<header>
			<nav className='nav max-width'>
				<div className='nav-left'>
					<h1 data-aos='slide-left'>// naeem carr</h1>
					<p data-aos='slide-right'>web_dev</p>
				</div>
				<div className='nav-right'>
					{navlinks.links.map((item, index) => {
						return (
							<ul>
								<li key={index} data-aos='slide-left'>
									<a href={item.link}>{item.label}</a>
								</li>
							</ul>
						);
					})}
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
					{navlinks.links.map((item, index) => {
						return (
							<ul key={index}>
								<li data-aos='fade-right'>
									<a href={item.link}>{item.label}</a>
								</li>
							</ul>
						);
					})}
				</div>
			)}
		</header>
	);
}
