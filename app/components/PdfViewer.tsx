'use client';

import { PdfViewerProps } from './TS/types';
import Image from 'next/image';
import React from 'react';

export default function Portfolio({ onClose }: PdfViewerProps) {
	return (
		<section id='pdf' className='pdf-view'>
			<button onClick={onClose}>
				<Image
					src={'/close-icon.svg'}
					width={30}
					height={30}
					alt='close button'
				/>
			</button>
			<div className='pdf-body'>
				<iframe src='/Curriculum Vitae of Mogamat Naeem Carr.pdf'></iframe>
			</div>
		</section>
	);
}
