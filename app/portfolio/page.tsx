import React from 'react';
import Portfolio from './Portfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Naeem Carr | Portfolio',
};

export default function page() {
	return <Portfolio />;
}
