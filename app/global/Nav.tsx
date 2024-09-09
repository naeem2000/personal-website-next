'use client';

import { UseShowNav } from '../components/TS/functions';
import { Sling as Hamburger } from 'hamburger-react';
import { navlinks } from './data';
import React from 'react';

export default function Nav() {
	const { setOpen, open } = UseShowNav();

	return (
		<header>
			<nav className='nav'>
				<div className='nav-left'>
					{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
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
