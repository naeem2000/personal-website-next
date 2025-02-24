import Contact from '../components/Contact';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Naeem Carr | Contact',
};

export default function page() {
	return <Contact />;
}
