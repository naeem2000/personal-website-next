import Portfolio from './Portfolio';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Naeem Carr | Portfolio',
};

export default function page() {
	return <Portfolio />;
}
