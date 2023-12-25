'use client';

import { Sling as Hamburger } from 'hamburger-react';
import { navlinks } from '../components/data';
import React, { useState } from 'react';

export default function Nav() {
	const [open, setOpen] = useState<boolean>(false);
	const openNav = document.getElementById('mobile-slide');

	if (open) {
		document.body.style.overflow = 'hidden';
		openNav?.classList.add('mobile-slider');
	} else {
		document.body.style.overflow = 'scroll';
		openNav?.classList.remove('mobile-slider');
	}

	const NavHead = () => {
		return (
			<nav className='nav'>
				<div className='nav-left'>
					<h1 data-aos='slide-left'>// naeem carr</h1>
					<p data-aos='slide-right'>web_dev</p>
				</div>
			</nav>
		);
	};

	return (
		<header>
			<nav className='nav'>
				<NavHead />
				<div className='nav-right'>
					{navlinks.links.map((item) => {
						return (
							<ul key={item.id}>
								<li data-aos='slide-left'>
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
			<div className='mobile-nav' id='mobile-slide'>
				<NavHead />
				{navlinks.links.map((item) => {
					return (
						<ul key={item.id}>
							<li onClick={() => setOpen(false)} data-aos='fade-right'>
								<a href={item.link}>{item.label}</a>
							</li>
						</ul>
					);
				})}
			</div>
		</header>
	);
}
