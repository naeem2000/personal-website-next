'use client';

import { PdfViewerProps } from './utils/types';
import Button from './global/Button';
import Image from 'next/image';
import React from 'react';

export default function Portfolio({ onClose }: PdfViewerProps) {
	return (
		<section
			id='pdf'
			className='fixed bg-main-bg-trans z-[8] -translate-x-full transition-all duration-[0.5s] ease-[ease] m-0 p-10 inset-0'
		>
			<Button
				className='absolute top-[calc(50px_-_10px)] right-[calc(20%_-_40px)] transition-all duration-[0.5s] ease-[ease] hover:scale-[1.3]'
				onClick={onClose}
			>
				<Image
					src={'/close-icon.svg'}
					width={30}
					height={30}
					alt='close button'
				/>
			</Button>
			<div className='flex items-center justify-center'>
				<iframe
					className='h-screen w-3/5 cursor-none m-0 p-0 border-[none]'
					src='/Curriculum Vitae of Mogamat Naeem Carr.pdf'
				></iframe>
			</div>
		</section>
	);
}
