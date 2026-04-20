'use client';

import React from 'react';
import Button from '../Button/Button';
import NavStyles from './nav.module.css';
import { navMenuAnimation } from '@/utils/constants';
import { AnimatePresence, motion } from 'motion/react';

import Link from 'next/link';

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	const handleToggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<section className='container'>
			<nav className={NavStyles.nav}>
				<div>
					<h1 className={NavStyles.h1}>{'// naeem carr'}</h1>
					<h2 className={NavStyles.h2}>web_dev</h2>
				</div>

				<div className={NavStyles.navButtons}>
					<Button type='toggle' />
					<Button type='nav' toggled={isNavOpen} onClick={handleToggleNav} />
				</div>
				<AnimatePresence>
					{isNavOpen && (
						<motion.div className={NavStyles.navMenu} {...navMenuAnimation}>
							<ul>
								<li>awe</li>
								<li className={NavStyles.navMenuItem}></li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</section>
	);
}
