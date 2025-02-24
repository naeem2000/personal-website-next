import Services from './Services';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Naeem Car | Services',
};

export default function page() {
	return <Services />;
}
