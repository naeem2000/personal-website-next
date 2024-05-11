'use client';

import { Sling as Hamburger } from 'hamburger-react';
import React, { useEffect, useState } from 'react';
import { navlinks } from './data';

export default function Nav() {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		const openNav = document.getElementById('mobile-slide');
		const burgerBtn = document.getElementById('burger-button');

		if (open) {
			document.body.style.overflow = 'hidden';
			openNav?.classList.add('mobile-slider');
		} else {
			document.body.style.overflow = 'scroll';
			openNav?.classList.remove('mobile-slider');
		}

		window.onscroll = function () {
			scrollFunction();
		};

		function scrollFunction() {
			if (window.outerWidth > 1024) {
				if (
					document.body.scrollTop > 200 ||
					document.documentElement.scrollTop > 200
				) {
					burgerBtn!.style.display = 'block';
				} else {
					burgerBtn!.style.display = 'none';
				}
			}
		}
	}, [open]);

	return (
		<header>
			<nav className='nav'>
				<div className='nav-left'>
					<h1 data-aos='slide-left'>// naeem carr</h1>
					<p data-aos='slide-right'>web_dev</p>
				</div>
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
			</nav>
			<button id='burger-button'>
				<Hamburger size={20} color='#2fcbef' toggled={open} toggle={setOpen} />
			</button>
			<div className='mobile-nav' id='mobile-slide'>
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
