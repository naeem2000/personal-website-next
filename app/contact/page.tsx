import React from 'react';
import Contact from '../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Naeem Carr | Contact',
};

export default function page() {
	return <Contact />;
}
