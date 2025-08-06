'use client';

import { PdfViewerProps } from './utils/types';
import { Button } from '@/stories/Button';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

export default function Portfolio({ onClose }: PdfViewerProps) {
	return (
		<motion.section
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			transition={{ ease: 'easeIn', duration: 0.1 }}
			className='fixed bg-main-bg-trans z-[8] -translate-x-full transition-all duration-[0.5s] ease-[ease] m-0 p-10 inset-0'
		>
			<Button
				variant='button'
				className='!absolute top-0 right-[calc(20%_-_40px)] transition-all duration-[0.5s] ease-[ease] z-50 hover:scale-[1.3] !p-2'
				onClick={onClose}
				label={
					<Image
						src={'/close-icon.svg'}
						width={30}
						height={30}
						alt='close button'
					/>
				}
			/>

			<div className='flex items-center justify-center'>
				<iframe
					title='pdf viewer'
					className='h-screen w-3/5 cursor-none m-0 p-0 border-[none]'
					src='/Curriculum Vitae of Mogamat Naeem Carr.pdf'
				/>
			</div>
		</motion.section>
	);
}
