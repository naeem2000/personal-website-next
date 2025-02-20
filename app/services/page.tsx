import React from 'react';
import Services from './Services';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Naeem Car | Services',
};

export default function page() {
	return <Services />;
}
