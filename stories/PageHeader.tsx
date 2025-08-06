import React from 'react';

type Props = {
	symbol: string;
	text: string;
};

export default function PageHeader({ symbol, text }: Props) {
	return (
		<div className='flex items-center justify-center flex-col'>
			<span className='text-4xl laptop:text-5xl text-purple'>{symbol}</span>
			<h1 className='text-5xl laptop:text-7xl text-white dark:text-black'>
				{'{'}
				{text}
				{'}'}
			</h1>
		</div>
	);
}
