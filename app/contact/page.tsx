import { Metadata } from 'next';
import Contact from './Contact';
import React from 'react';

export const metadata: Metadata = {
	title: 'Naeem Carr | Contact',
};

export default function page() {
	return <Contact />;
}
